import axios, { AxiosResponse } from "axios";
import { BookType } from "../types/book.type.ts";

export const getBooks = async (): Promise<BookType[]> => {
	try {
		const response: AxiosResponse<BookType[]> = await axios.get(import.meta.env.VITE_API_URL);
		return response.data;
	} catch (error) {
		console.error("Błąd podczas pobierania danych:", error);
		return [];
	}
};
