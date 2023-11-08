import axios from "axios";

export const loginUser = async (username: string, password: string) => {
	const url = `${import.meta.env.VITE_API_KEY}/login`;
	try {
		const response = await axios.post(url, {
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
	} catch (err) {
		console.error("Error logging user:", err);
		return { success: false };
	}
};
