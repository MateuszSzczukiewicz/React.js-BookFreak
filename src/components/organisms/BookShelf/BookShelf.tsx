import { useEffect, FC, useState } from "react";
import { SingleBook } from "../../molecules/SingleBook/SingleBook.tsx";
import { AddBook } from "../../molecules/AddBook/AddBook.tsx";
import { BookType } from "../../../types/book.type.ts";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../../features/books/books-slice.ts";
import { RootDispatch, RootState } from "../../../store";
import { BookShelves } from "../../../types/bookShelves.enum.ts";
import { BookShelfButton } from "../../atoms/BookShelfButton/BookShelfButton";

export const BookShelf: FC = () => {
	const dispatch = useDispatch<RootDispatch>();
	const books = useSelector((state: RootState) => state.books);
	const userId = useSelector((state: RootState) => state.users.user?.id);
	const [selectedShelf, setSelectedShelf] = useState<BookShelves | null>(null);

	const handleShelfClick = (shelf: BookShelves) => {
		setSelectedShelf(shelf);
		dispatch(fetchBooks({ userId }));
	};

	useEffect(() => {
		setSelectedShelf(BookShelves.READING);
		dispatch(fetchBooks({ userId }));
	}, [dispatch, userId]);

	return (
		<div className="flex flex-col">
			<div className="mt-6 hidden h-14 w-full items-center justify-around sm:flex lg:justify-center lg:gap-40">
				<BookShelfButton
					name="Teraz czytam"
					shelf={BookShelves.READING}
					selectedShelf={selectedShelf}
					onClick={() => handleShelfClick(BookShelves.READING)}
				/>
				<BookShelfButton
					name="Przeczytane"
					shelf={BookShelves.READ}
					selectedShelf={selectedShelf}
					onClick={() => handleShelfClick(BookShelves.READ)}
				/>
				<BookShelfButton
					name="Chcę przeczytać"
					shelf={BookShelves.WANT_TO_READ}
					selectedShelf={selectedShelf}
					onClick={() => handleShelfClick(BookShelves.WANT_TO_READ)}
				/>
			</div>
			<main className="mx-auto my-20 grid grid-cols-1 justify-around gap-10 sm:grid-cols-2 md:grid-cols-3 lg:mx-48 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
				{books
					.filter((book: BookType) => (selectedShelf ? book.bookShelf === selectedShelf : true))
					.map((book: BookType, index: number) => (
						<SingleBook
							key={index}
							_id={book._id}
							title={book.title}
							author={book.author}
							bookImage={book.bookImage}
						/>
					))}
				<AddBook />
			</main>
		</div>
	);
};
