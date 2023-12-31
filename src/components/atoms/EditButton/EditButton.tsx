import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editBooks } from "../../../features/books/books-slice";
import { BookInputForm } from "../../organisms/BookInputForm/BookInputForm.tsx";
import { SingleTool } from "../../molecules/SingleTool/SingleTool.tsx";
import { RootDispatch, RootState } from "../../../store";
import { DeleteAndEditType } from "../../../types/tool.type.ts";
import { BookFormType } from "../../../types/bookInputForm.type.ts";

export const EditButton = ({ _id, toggleTools }: DeleteAndEditType) => {
	const dispatch = useDispatch<RootDispatch>();
	const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
	const userId = useSelector((state: RootState) => state.users.user?.id);

	const handleEdit = () => {
		setIsFormVisible(true);
	};

	const handleFormSubmit = async (data: BookFormType) => {
		try {
			if (userId) {
				const { newTitle, newAuthor, newBookImage, newBookShelf } = data;
				await dispatch(
					editBooks({
						_id,
						title: newTitle,
						author: newAuthor,
						bookImage: newBookImage || null,
						userId,
						bookShelf: newBookShelf,
					}),
				);
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
		<>
			<div onClick={handleEdit}>
				<SingleTool text="Edytuj książkę" />
			</div>
			{isFormVisible && (
				<BookInputForm onFormSubmit={handleFormSubmit} setIsFormVisible={setIsFormVisible} />
			)}
		</>
	);
};
