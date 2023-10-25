import { useContext, useState } from "react";
import { BookInputForm } from "../../organisms/BookInputForm/BookInputForm.tsx";
import { SingleTool } from "../../molecules/SingleTool/SingleTool.tsx";
import { editBook } from "../../../api/EditBookAPI.ts";
import { BookContext } from "../../organisms/BookShelf/BookShelf.tsx";

export const EditButton = () => {
	const [isFormVisible, setIsFormVisible] = useState<boolean>(false);

	const context = useContext(BookContext);

	if (!context) return null;

	const { _id } = context;

	const handleEdit = () => {
		setIsFormVisible(true);
	};

	const handleFormSubmit = async (title: string, author: string): Promise<void> => {
		await editBook(_id, title, author);
		setIsFormVisible(false);
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
