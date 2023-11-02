import { SingleTool } from "../../molecules/SingleTool/SingleTool.tsx";
import { deleteBooks } from "../../../features/book/books-slice.ts";
import { useDispatch } from "react-redux";
import { RootDispatch } from "../../../store";
import { DeleteAndEditType } from "../../../types/tool.type.ts";

export const DeleteButton = ({ _id, toggleTools }: DeleteAndEditType) => {
	const dispatch = useDispatch<RootDispatch>();

	const handleDelete = async () => {
		dispatch(deleteBooks({ _id }));
		toggleTools();
	};

	return (
		<div onClick={handleDelete}>
			<SingleTool text="Usuń książkę" isRed />
		</div>
	);
};
