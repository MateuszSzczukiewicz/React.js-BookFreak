import { createContext, useEffect, useState, FC } from "react";
import { SingleBook } from "../../molecules/SingleBook/SingleBook.tsx";
import { AddBook } from "../../molecules/AddBook/AddBook.tsx";
import { BookType } from "../../../types/book.type.ts";
import { getBooks } from "../../../api/GetBooksAPI.ts";

export const BookContext = createContext<BookType | null>(null);

export const BookShelf: FC = () => {
	const [books, setBooks] = useState<BookType[]>([]);

	useEffect(() => {
		(async () => {
			const data = await getBooks();
			setBooks(data);
		})();
	}, []);

	return (
		<main className="mx-auto my-20 grid grid-cols-1 justify-around gap-10 sm:grid-cols-2 md:grid-cols-3 lg:mx-48 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
			{books.map((book: BookType, index: number) => (
				<BookContext.Provider
					key={index}
					value={{
						_id: book._id,
						title: book.title,
						author: book.author,
					}}
				>
					<SingleBook />
				</BookContext.Provider>
			))}
			<AddBook />
		</main>
	);
};
