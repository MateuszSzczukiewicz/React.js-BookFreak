import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editBooks } from "../../../features/books/books-slice";
import { BookInputForm } from "../../organisms/BookInputForm/BookInputForm.tsx";
import { SingleTool } from "../../molecules/SingleTool/SingleTool.tsx";
import { RootDispatch, RootState } from "../../../store";
import { DeleteAndEditType } from "../../../types/tool.type.ts";
import { BookShelvesEnum } from "../../../types/bookShelves.enum.ts";

export const EditButton = ({ _id, toggleTools }: DeleteAndEditType) => {
	const dispatch = useDispatch<RootDispatch>();
	const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
	const userId = useSelector((state: RootState) => state.users.user?.id);

	const handleEdit = () => {
		setIsFormVisible(true);
	};

	const handleFormSubmit = (
		newTitle: string,
		newAuthor: string,
		newBookImage: string | ArrayBuffer | null | undefined,
		newBookShelf: BookShelvesEnum,
	) => {
		if (userId) {
			if (newBookImage) {
				dispatch(
					editBooks({
						_id,
						title: newTitle,
						author: newAuthor,
						bookImage: newBookImage,
						bookShelf: newBookShelf,
						userId,
					}),
				);
			} else {
				dispatch(
					editBooks({
						_id,
						title: newTitle,
						author: newAuthor,
						bookImage: null,
						bookShelf: newBookShelf,
						userId,
					}),
				);
			}
			setIsFormVisible(false);
			toggleTools();
		} else {
			console.error("User ID is undefined");
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
