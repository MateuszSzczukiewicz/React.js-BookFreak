import axios from "axios";

export const editBook = async (_id: string, title: string, author: string) => {
	try {
		const response = await axios.put(import.meta.env.VITE_BOOKS_API_URL + `/${_id}`, {
			title,
			author,
		});
		return response.data;
	} catch (e) {
		console.error("Error edit book:", e);
	}
};
