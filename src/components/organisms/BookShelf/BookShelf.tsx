import { useEffect, FC } from "react";
import { SingleBook } from "../../molecules/SingleBook/SingleBook.tsx";
import { AddBook } from "../../molecules/AddBook/AddBook.tsx";
import { BookType } from "../../../types/book.type.ts";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../../features/books/books-slice.ts";
import { RootDispatch, RootState } from "../../../store";

export const BookShelf: FC = () => {
	const dispatch = useDispatch<RootDispatch>();
	const books = useSelector((state: RootState) => state.books);

	useEffect(() => {
		dispatch(fetchBooks());
	}, [dispatch]);

	return (
		<main className="mx-auto my-20 grid grid-cols-1 justify-around gap-10 sm:grid-cols-2 md:grid-cols-3 lg:mx-48 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
			{books.map((book: BookType, index: number) => (
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
	);
};
