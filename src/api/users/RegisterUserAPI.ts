import axios from "axios";

export const registerUser = async (username: string, password: string) => {
	try {
		const response = await axios.post(import.meta.env.VITE_REGISTER_API_URL, {
			username,
			password,
		});
		return response.data;
	} catch (e) {
		console.error("Error registering user:", e);
	}
};
