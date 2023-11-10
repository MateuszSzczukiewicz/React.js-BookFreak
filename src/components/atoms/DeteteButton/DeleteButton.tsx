import { SingleTool } from "../../molecules/SingleTool/SingleTool.tsx";
import { deleteBooks } from "../../../features/books/books-slice.ts";
import { useDispatch, useSelector } from "react-redux";
import { RootDispatch, RootState } from "../../../store";
import { DeleteAndEditType } from "../../../types/tool.type.ts";

export const DeleteButton = ({ _id, toggleTools }: DeleteAndEditType) => {
	const dispatch = useDispatch<RootDispatch>();
	const userId = useSelector((state: RootState) => state.users.user?.id);

	const handleDelete = async () => {
		const isConfirmed = window.confirm("Czy na pewno chcesz usunąć tę książkę?");

		if (userId && isConfirmed) {
			dispatch(deleteBooks({ _id, userId }));
			toggleTools();
		}
	};

	return (
		<div onClick={handleDelete}>
			<SingleTool text="Usuń książkę" isRed />
		</div>
	);
};
