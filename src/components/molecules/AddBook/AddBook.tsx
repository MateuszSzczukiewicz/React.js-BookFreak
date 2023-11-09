import { useState } from "react";
import { BookInputForm } from "../../organisms/BookInputForm/BookInputForm.tsx";
import { PlusCircle } from "../../../assets/icons/plus-circle.tsx";
import { useDispatch, useSelector } from "react-redux";
import { addBooks } from "../../../features/books/books-slice.ts";
import { RootDispatch, RootState } from "../../../store";
import { BookShelves } from "../../../types/bookShelves.enum.ts";

export const AddBook = () => {
	const dispatch = useDispatch<RootDispatch>();
	const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
	const userId: string | undefined = useSelector((state: RootState) => state.users.user?.id);

	const handleAdd = (): void => {
		setIsFormVisible(true);
	};

	const handleFormSubmit = async (
		newTitle: string,
		newAuthor: string,
		newBookImage: string | ArrayBuffer | null | undefined,
		bookShelf: BookShelves,
	) => {
		if (newBookImage) {
			dispatch(
				addBooks({
					title: newTitle,
					author: newAuthor,
					bookImage: newBookImage,
					userId,
					bookShelf,
				}),
			);
		} else {
			dispatch(
				addBooks({ title: newTitle, author: newAuthor, bookImage: null, userId, bookShelf }),
			);
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
