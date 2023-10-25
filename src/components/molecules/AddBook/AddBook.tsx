import { useState } from "react";
import { BookInputForm } from "../../organisms/BookInputForm/BookInputForm.tsx";
import { addBook } from "../../../api/AddBookAPI.ts";
import { PlusCircle } from "../../../assets/icons/plus-circle.tsx";

export const AddBook = () => {
	const [isFormVisible, setIsFormVisible] = useState<boolean>(false);

	const handleAdd = (): void => {
		setIsFormVisible(true);
	};

	const handleFormSubmit = async (title: string, author: string): Promise<void> => {
		await addBook(title, author);
		setIsFormVisible(false);
	};

	return (
		<div className="mx-auto flex h-56 w-44 items-center justify-center rounded-2xl bg-zinc-200 text-center text-2xl shadow-lg">
			{isFormVisible ? (
				<BookInputForm onFormSubmit={handleFormSubmit} setIsFormVisible={setIsFormVisible} />
			) : (
				<button onClick={handleAdd}>{PlusCircle()}</button>
			)}
		</div>
	);
};
