import axios from "axios";

export const getUser = async (_id: string, username: string, password: string) => {
	try {
		const response = await axios.get(import.meta.env.VITE_USERS_API_URL + `/${_id}`, {
			params: {
				username,
				password,
			},
		});
		return response.data;
	} catch (e) {
		console.error("Error getting user:", e);
	}
};
