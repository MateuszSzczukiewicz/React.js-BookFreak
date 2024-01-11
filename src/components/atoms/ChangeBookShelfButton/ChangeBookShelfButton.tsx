import { useSelector } from "react-redux";
import { SingleTool } from "../../molecules/SingleTool/SingleTool.tsx";
import { RootState } from "../../../store";
import { ChangeBookShelfType } from "../../../types/tool.type.ts";
import { useChangeBookshelf } from "../../../hooks/useChangeBookshelf.ts";

export const ChangeBookShelfButton = ({ _id, toggleTools, text, shelf }: ChangeBookShelfType) => {
	const userId = useSelector((state: RootState) => state.users.user?.id);
	const changeBookShelfMutation = useChangeBookshelf();

	const handleChange = async () => {
		if (userId) {
			await changeBookShelfMutation.mutateAsync({ _id, userId, shelf });
			toggleTools();
		} else {
			console.error("User ID is undefined");
		}
	};

	return (
		<>
			<div onClick={handleChange}>
				<SingleTool text={text} />
			</div>
		</>
	);
};
