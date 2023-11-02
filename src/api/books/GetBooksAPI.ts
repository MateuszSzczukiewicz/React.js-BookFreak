import axios, { AxiosResponse } from "axios";
import { BookType } from "../../types/book.type.ts";

export const getBooks = async (): Promise<BookType[]> => {
	try {
		const response: AxiosResponse<BookType[]> = await axios.get(import.meta.env.VITE_BOOKS_API_URL);
		return [...response.data];
	} catch (e) {
		console.error("Error getting books:", e);
		return [];
	}
};
