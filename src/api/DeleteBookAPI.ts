import axios from "axios";

export const deleteBook = async (_id: string) => {
	try {
		await axios.delete(import.meta.env.VITE_API_URL + `/${_id}`);
	} catch (e) {
		console.error("Error deleting item:", e);
	}
};
