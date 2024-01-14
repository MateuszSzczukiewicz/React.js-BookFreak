import { SingleTool } from "../../molecules/SingleTool/SingleTool.tsx";
import { DeleteAndEditType } from "../../../types/tool.type.ts";
import { useDeleteBook } from "../../../hooks/useDeleteBook.ts";
import { Spinner } from "../Spinner/Spinner.tsx";
import useUserData from "../../../hooks/useUserData.ts";

export const DeleteButton = ({ _id, toggleTools }: DeleteAndEditType) => {
	const { userId } = useUserData();
	const deleteBookMutation = useDeleteBook();

	const handleDelete = async () => {
		const isConfirmed = window.confirm("Czy na pewno chcesz usunąć tę książkę?");

		if (userId && isConfirmed) {
			await deleteBookMutation.mutateAsync({ userId, _id });
			toggleTools();
		}
	};

	return (
		<div onClick={handleDelete}>
			{deleteBookMutation.isLoading && <Spinner />}
			<SingleTool text="Usuń książkę" isRed />
		</div>
	);
};
