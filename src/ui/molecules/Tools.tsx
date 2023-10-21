import { EditButton } from "../atoms/EditButton.tsx";
import { DeleteButton } from "../atoms/DeleteButton.tsx";

export const Tools = () => {
	return (
		<div className="m-2 ml-auto">
			<EditButton />
			<DeleteButton />
		</div>
	);
};
