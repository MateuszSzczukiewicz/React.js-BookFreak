import { SingleTool } from "../../molecules/SingleTool/SingleTool.tsx";
import { deleteBook } from "../../../api/DeleteBookAPI.ts";
import { useContext } from "react";
import { BookContext } from "../../organisms/BookShelf/BookShelf.tsx";

export const DeleteButton = () => {
	const context = useContext(BookContext);

	if (!context) return null;

	const { _id } = context;

	const handleDelete = async (): Promise<void> => {
		await deleteBook(_id);
	};

	return (
		<div onClick={handleDelete}>
			<SingleTool text="Usuń książkę" isRed />
		</div>
	);
};
