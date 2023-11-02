import { useState } from "react";
import { useDispatch } from "react-redux";
import { editBooks } from "../../../features/book/books-slice";
import { BookInputForm } from "../../organisms/BookInputForm/BookInputForm.tsx";
import { SingleTool } from "../../molecules/SingleTool/SingleTool.tsx";
import { RootDispatch } from "../../../store";
import { DeleteAndEditType } from "../../../types/tool.type.ts";

export const EditButton = ({ _id, toggleTools }: DeleteAndEditType) => {
	const dispatch = useDispatch<RootDispatch>();
	const [isFormVisible, setIsFormVisible] = useState<boolean>(false);

	const handleEdit = () => {
		setIsFormVisible(true);
	};

	const handleFormSubmit = (title: string, author: string) => {
		dispatch(editBooks({ _id, title, author }));
		setIsFormVisible(false);
		toggleTools();
	};

	return (
		<>
			<div onClick={handleEdit}>
				<SingleTool text="Edytuj książkę" />
			</div>
			{isFormVisible && (
				<BookInputForm onFormSubmit={handleFormSubmit} setIsFormVisible={setIsFormVisible} />
			)}
		</>
	);
};
