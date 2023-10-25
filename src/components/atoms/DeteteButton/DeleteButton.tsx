import { SingleTool } from "../../molecules/SingleTool/SingleTool.tsx";
import { deleteBook } from "../../../api/DeleteBookAPI.ts";

export const DeleteButton = ({ _id }: { _id: string }) => {
	const handleDelete = async (): Promise<void> => {
		await deleteBook(_id);
	};

	return (
		<div onClick={handleDelete}>
			<SingleTool text="Usuń książkę" isRed />
		</div>
	);
};
