import { useState } from "react";
import { BookInputForm } from "../../organisms/BookInputForm/BookInputForm.tsx";
import { SingleTool } from "../../molecules/SingleTool/SingleTool.tsx";
import { editBook } from "../../../api/EditBookAPI.ts";

export const EditButton = ({ _id }: { _id: string }) => {
	const [isFormVisible, setIsFormVisible] = useState<boolean>(false);

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
