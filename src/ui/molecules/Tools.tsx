import { EditButton } from "../atoms/EditButton.tsx";
import { DeleteButton } from "../atoms/DeleteButton.tsx";

export const Tools = ({ _id }: { _id: string }) => {
	return (
		<div className="m-2 ml-auto">
			<EditButton _id={_id} />
			<DeleteButton _id={_id} />
		</div>
	);
};
