import axios from "axios";
import { SingleTool } from "../../molecules/SingleTool/SingleTool.tsx";

export const DeleteButton = ({ _id }: { _id?: string }) => {
	const handleDelete = async (): Promise<void> => {
		try {
			await axios.delete(`http://localhost:8000/api/books/${_id}`);
		} catch (e) {
			console.error("Error deleting item:", e);
		}
	};

	return (
		<div onClick={handleDelete}>
			<SingleTool text="Usuń książkę" isRed />
		</div>
	);
};
