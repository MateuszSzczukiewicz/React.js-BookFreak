import axios from "axios";

export const editBook = async (
	_id: string,
	title: string,
	author: string,
	bookImage: string | ArrayBuffer | null,
) => {
	try {
		const response = await axios.put(import.meta.env.VITE_BOOKS_API_URL + `/${_id}`, {
			title,
			author,
			bookImage,
		});
		return response.data;
	} catch (e) {
		console.error("Error edit book:", e);
	}
};
