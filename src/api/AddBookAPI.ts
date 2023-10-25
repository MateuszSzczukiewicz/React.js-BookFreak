import axios from "axios";

export const addBook = async (title: string, author: string): Promise<void> => {
	try {
		await axios.post(import.meta.env.VITE_API_URL, {
			title,
			author,
		});
	} catch (e) {
		console.error("Error adding item:", e);
	}
};
