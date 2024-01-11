import { useState } from "react";
import { BookInputForm } from "../../organisms/BookInputForm/BookInputForm.tsx";
import { PlusCircle } from "../../../assets/icons/plus-circle.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { BookFormType } from "../../../types/bookInputForm.type";
import { useAddBook } from "../../../hooks/useAddBook.ts";

export const AddBook = () => {
	const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
	const userId: string | undefined = useSelector((state: RootState) => state.users.user?.id);
	const addBookMutation = useAddBook();

	const handleAdd = (): void => setIsFormVisible(true);

	const handleFormSubmit = async (data: BookFormType) => {
		try {
			if (userId) {
				const { newTitle, newAuthor, newBookShelf, newBookImage } = data;
				await addBookMutation.mutateAsync({
					title: newTitle,
					author: newAuthor,
					bookImage: newBookImage || undefined,
					userId,
					bookShelf: newBookShelf,
				});
				setIsFormVisible(false);
			} else {
				console.error("User ID is undefined");
			}
		} catch (error) {
			console.error("Error adding book:", error);
		}
	};

	return (
		<div className="mx-auto flex h-56 w-44 items-center justify-center rounded-2xl bg-zinc-200 text-center text-2xl shadow-lg">
			{isFormVisible ? (
				<BookInputForm onFormSubmit={handleFormSubmit} setIsFormVisible={setIsFormVisible} />
			) : (
				<button onClick={handleAdd}>{<PlusCircle />}</button>
			)}
		</div>
	);
};
