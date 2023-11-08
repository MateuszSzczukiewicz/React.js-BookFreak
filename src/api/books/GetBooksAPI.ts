import axios, { AxiosResponse } from "axios";
import { BookType } from "../../types/book.type.ts";

export const getBooks = async (userId: string): Promise<BookType[]> => {
	const url = `${import.meta.env.VITE_API_KEY}/profile/${userId}/books`;

	try {
		const response: AxiosResponse<BookType[]> = await axios.get(url, { userId });
		return [...response.data];
	} catch (e) {
		console.error("Error getting books:", e);
		return [];
	}
};
