import { useState } from "react";
import { BookInputForm } from "../../organisms/BookInputForm/BookInputForm.tsx";
import { PlusCircle } from "../../../assets/icons/plus-circle.tsx";
import { BookFormType } from "../../../types/bookInputForm.type";
import { useAddBook } from "../../../hooks/useAddBook.ts";
import { Spinner } from "../../atoms/Spinner/Spinner.tsx";
import useUserData from "../../../hooks/useUserData.ts";

export const AddBook = () => {
	const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
	const { userId } = useUserData();
	const addBookMutation = useAddBook();

	const handleAdd = () => setIsFormVisible(true);

	const handleFormSubmit = async (data: BookFormType) => {
		try {
			const { newTitle, newAuthor, newBookShelf, newBookImage } = data;
			await addBookMutation.mutateAsync({
				title: newTitle,
				author: newAuthor,
				bookImage: newBookImage || undefined,
				userId,
				bookShelf: newBookShelf,
			});
		} catch (err) {
			console.error("Error adding book:", err);
		} finally {
			setIsFormVisible(false);
		}
	};

	return (
		<div className="mx-auto flex h-56 w-44 items-center justify-center rounded-2xl bg-zinc-200 text-center text-2xl shadow-lg">
			{isFormVisible && (
				<>
					{addBookMutation.isLoading ? (
						<Spinner />
					) : (
						<BookInputForm onFormSubmit={handleFormSubmit} setIsFormVisible={setIsFormVisible} />
					)}
				</>
			)}
			<button onClick={handleAdd}>{<PlusCircle />}</button>
		</div>
	);
};
