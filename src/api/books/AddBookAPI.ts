import axios from "axios";

export const addBook = async (
	title: string,
	author: string,
	bookImage: string | ArrayBuffer | null,
) => {
	try {
		const response = await axios.post(import.meta.env.VITE_BOOKS_API_URL, {
			title,
			author,
			bookImage,
		});
		console.log("response", response.data.bookImage);
		return response.data;
	} catch (e) {
		console.error("Error adding book:", e);
	}
};
