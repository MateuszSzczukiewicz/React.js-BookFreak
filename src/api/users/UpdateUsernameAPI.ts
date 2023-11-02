import axios from "axios";

export const updateUsername = async (_id: string, username: string) => {
	try {
		const response = await axios.patch(import.meta.env.VITE_BOOKS_API_URL + `/${_id}`, {
			username,
		});
		return response.data;
	} catch (e) {
		console.error("Error updating username:", e);
	}
};
