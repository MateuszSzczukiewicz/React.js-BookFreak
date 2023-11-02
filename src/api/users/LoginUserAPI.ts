import axios from "axios";

export const loginUser = async (username: string, password: string) => {
	try {
		const response = await axios.post(import.meta.env.VITE_LOGIN_API_URL, {
			username,
			password,
		});
		return response.data;
	} catch (e) {
		console.error("Error logging user:", e);
	}
};
