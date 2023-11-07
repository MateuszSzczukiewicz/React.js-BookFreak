import { useState } from "react";
import { BookInputForm } from "../../organisms/BookInputForm/BookInputForm.tsx";
import { PlusCircle } from "../../../assets/icons/plus-circle.tsx";
import { useDispatch } from "react-redux";
import { addBooks } from "../../../features/books/books-slice.ts";
import { RootDispatch } from "../../../store";

export const AddBook = () => {
	const dispatch = useDispatch<RootDispatch>();
	const [isFormVisible, setIsFormVisible] = useState<boolean>(false);

	const handleAdd = (): void => {
		setIsFormVisible(true);
	};

	const handleFormSubmit = async (
		newTitle: string,
		newAuthor: string,
		newBookImage: string | ArrayBuffer | null | undefined,
	) => {
		if (newBookImage) {
			dispatch(addBooks({ title: newTitle, author: newAuthor, bookImage: newBookImage }));
		} else {
			dispatch(addBooks({ title: newTitle, author: newAuthor, bookImage: null }));
		}
		setIsFormVisible(false);
	};

	return (
		<div className="mx-auto flex h-56 w-44 items-center justify-center rounded-2xl bg-zinc-200 text-center text-2xl shadow-lg">
			{isFormVisible ? (
				<BookInputForm onFormSubmit={handleFormSubmit} setIsFormVisible={setIsFormVisible} />
			) : (
				<button onClick={handleAdd}>{<PlusCircle />}</button>
			)}
		</div>
	);
};
