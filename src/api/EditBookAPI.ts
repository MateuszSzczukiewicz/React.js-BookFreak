import axios from "axios";

export const editBook = async (_id: string, title: string, author: string) => {
	try {
		await axios.put(import.meta.env.VITE_API_URL + `/${_id}`, {
			title,
			author,
		});
	} catch (e) {
		console.error("Error edit item:", e);
	}
};
