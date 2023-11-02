import axios from "axios";

export const addBook = async (title: string, author: string) => {
	try {
		const response = await axios.post(import.meta.env.VITE_BOOKS_API_URL, {
			title,
			author,
		});
		return response.data;
	} catch (e) {
		console.error("Error adding book:", e);
	}
};
