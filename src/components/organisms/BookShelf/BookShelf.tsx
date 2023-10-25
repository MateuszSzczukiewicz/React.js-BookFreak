import { useEffect, useState, FC } from "react";
import { SingleBook } from "../../molecules/SingleTool/SingleBook.tsx";
import axios, { AxiosResponse } from "axios";
import { AddBook } from "../../molecules/AddBook/AddBook.tsx";
import { BookType } from "../../../types/book.type.ts";

export const BookShelf: FC = () => {
	const [books, setBooks] = useState<BookType[]>([]);

	useEffect((): void => {
		(async (): Promise<void> => {
			try {
				const response: AxiosResponse<BookType[]> = await axios.get(
					"http://localhost:8000/api/books",
				);
				setBooks(response.data);
			} catch (error) {
				console.error("Błąd podczas pobierania danych:", error);
			}
		})();
	}, [books]);

	return (
		<main className="mx-auto my-20 grid grid-cols-1 justify-around gap-10 sm:grid-cols-2 md:grid-cols-3 lg:mx-48 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
			{books.map((book: BookType, index: number) => (
				<SingleBook key={index} _id={book._id} title={book.title} author={book.author} />
			))}
			<AddBook />
		</main>
	);
};
