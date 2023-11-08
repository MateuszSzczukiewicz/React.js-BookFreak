import axios from "axios";

export const deleteBook = async (_id: string, userId: string) => {
	const url = `${import.meta.env.VITE_API_KEY}/profile/${userId}/books/${_id}`;
	try {
		const response = await axios.delete(url);
		return response.data;
	} catch (e) {
		console.error("Error deleting book:", e);
	}
};
