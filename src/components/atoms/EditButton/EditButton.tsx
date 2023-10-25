import { useState } from "react";
import axios from "axios";
import { BookInputForm } from "../../organisms/BookInputForm/BookInputForm.tsx";
import { SingleTool } from "../../molecules/SingleTool/SingleTool.tsx";

export const EditButton = ({ _id }: { _id: string }) => {
	const [isFormVisible, setIsFormVisible] = useState<boolean>(false);

	const handleEdit = () => {
		setIsFormVisible(true);
	};

	const handleFormSubmit = async (newTitle: string, newAuthor: string): Promise<void> => {
		try {
			await axios.put(`http://localhost:8000/api/books/${_id}`, {
				title: newTitle,
				author: newAuthor,
			});
		} catch (e) {
			console.error("Error edit item:", e);
		}

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
