import axios from "axios";

export const registerUser = async (username: string, password: string) => {
	const url = `${import.meta.env.VITE_API_KEY}register`;
	try {
		const response = await axios.post(url, {
			username,
			password,
		});
		return response.data;
	} catch (err) {
		console.error("Error registering user:", err);
	}
};
