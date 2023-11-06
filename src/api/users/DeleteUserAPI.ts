import axios from "axios";

export const deleteUser = async (_id: string | undefined) => {
	try {
		const response = await axios.delete(import.meta.env.VITE_USERS_API_URL + `/${_id}`);
		return response.data;
	} catch (e) {
		console.error("Error getting user:", e);
	}
};
