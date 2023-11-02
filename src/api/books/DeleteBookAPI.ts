import axios from "axios";

export const deleteBook = async (_id: string) => {
	try {
		const response = await axios.delete(import.meta.env.VITE_BOOKS_API_URL + `/${_id}`);
		return response.data;
	} catch (e) {
		console.error("Error deleting book:", e);
	}
};
