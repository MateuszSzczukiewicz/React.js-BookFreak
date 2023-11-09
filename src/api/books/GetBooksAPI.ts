import axios, { AxiosResponse } from "axios";
import { BookType } from "../../types/book.type.ts";

export const getBooks = async (userId: string | undefined): Promise<BookType[]> => {
	const url = `${import.meta.env.VITE_API_KEY}/profile/${userId}/books`;

	try {
		const response: AxiosResponse<BookType[]> = await axios.get(url);
		return [...response.data];
	} catch (err) {
		console.error("Error getting books:", err);
		return [];
	}
};
