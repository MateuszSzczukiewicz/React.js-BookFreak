import axios from "axios";

export const loginUser = async (username: string, password: string) => {
	try {
		const response = await axios.post(import.meta.env.VITE_LOGIN_API_URL, {
			username,
			password,
		});

		if (response.status === 200) {
			const { token, refreshToken, user } = response.data;
			return { success: true, token, refreshToken, user };
		} else {
			console.error("Unexpected response status:", response.status);
			return { success: false };
		}
	} catch (e) {
		console.error("Error logging user:", e);
		return { success: false };
	}
};
