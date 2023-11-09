import { useDispatch, useSelector } from "react-redux";
import { SingleTool } from "../../molecules/SingleTool/SingleTool.tsx";
import { RootDispatch, RootState } from "../../../store";
import { changeBooksShelf } from "../../../features/books/books-slice.ts";
import { ChangeBookShelfType } from "../../../types/tool.type.ts";

export const ChangeBookShelfButton = ({ _id, toggleTools, text, shelf }: ChangeBookShelfType) => {
	const dispatch = useDispatch<RootDispatch>();
	const userId = useSelector((state: RootState) => state.users.user?.id);
	const bookShelf = shelf;

	const handleChange = () => {
		dispatch(changeBooksShelf({ _id, userId, bookShelf }));
		toggleTools();
	};
	return (
		<>
			<div onClick={handleChange}>
				<SingleTool text={text} />
			</div>
		</>
	);
};
