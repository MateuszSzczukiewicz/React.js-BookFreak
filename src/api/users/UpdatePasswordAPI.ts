import axios from "axios";

export const updatePassword = async (_id: string, password: string) => {
	try {
		const response = await axios.patch(import.meta.env.VITE_BOOKS_API_URL + `/${_id}`, {
			password,
		});
		return response.data;
	} catch (e) {
		console.error("Error updating password:", e);
	}
};
