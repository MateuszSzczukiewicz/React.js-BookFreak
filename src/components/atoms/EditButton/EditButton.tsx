import { useState } from "react";
import { BookInputForm } from "../../organisms/BookInputForm/BookInputForm.tsx";
import { SingleTool } from "../../molecules/SingleTool/SingleTool.tsx";
import { DeleteAndEditType } from "../../../types/tool.type.ts";
import { BookFormType } from "../../../types/bookInputForm.type.ts";
import { useEditBook } from "../../../hooks/useEditBook.ts";
import { Spinner } from "../Spinner/Spinner.tsx";
import { useUserData } from "../../../hooks/useUserData.ts";

export const EditButton = ({ _id, toggleTools }: DeleteAndEditType) => {
	const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
	const { userId } = useUserData();

	const handleEdit = () => setIsFormVisible(true);

	const editBookMutation = useEditBook();

	const handleFormSubmit = async (data: BookFormType) => {
		try {
			if (userId) {
				const { newTitle, newAuthor, newBookImage, newBookShelf } = data;
				await editBookMutation.mutateAsync({
					_id,
					title: newTitle,
					author: newAuthor,
					bookImage: newBookImage || undefined,
					userId,
					bookShelf: newBookShelf,
				});
				setIsFormVisible(false);
				toggleTools();
			} else {
				console.error("User ID is undefined");
			}
		} catch (error) {
			console.error("Error editing book:", error);
		}
	};

	return (
		<div className="overflow-hidden">
			{isFormVisible && (
				<>
					{editBookMutation.isLoading ? (
						<Spinner />
					) : (
						<BookInputForm onFormSubmit={handleFormSubmit} setIsFormVisible={setIsFormVisible} />
					)}
				</>
			)}
			<div onClick={handleEdit}>
				<SingleTool text="Edytuj książkę" />
			</div>
		</div>
	);
};
