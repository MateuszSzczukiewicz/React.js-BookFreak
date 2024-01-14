import { SingleTool } from "../../molecules/SingleTool/SingleTool.tsx";
import { ChangeBookShelfType } from "../../../types/tool.type.ts";
import { useChangeBookshelf } from "../../../hooks/useChangeBookshelf.ts";
import { Spinner } from "../Spinner/Spinner.tsx";
import useUserData from "../../../hooks/useUserData.ts";

export const ChangeBookShelfButton = ({ _id, toggleTools, text, shelf }: ChangeBookShelfType) => {
	const { userId } = useUserData();
	const changeBookShelfMutation = useChangeBookshelf();
	const bookShelf = shelf;

	const handleChange = async () => {
		if (userId) {
			await changeBookShelfMutation.mutateAsync({ _id, userId, bookShelf });
			toggleTools();
		} else {
			console.error("User ID is undefined");
		}
	};

	return (
		<>
			<div onClick={handleChange}>
				{changeBookShelfMutation.isLoading && <Spinner />}
				<SingleTool text={text} />
			</div>
		</>
	);
};
