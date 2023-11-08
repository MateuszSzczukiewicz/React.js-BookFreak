import axios from "axios";

export const refreshAccessToken = async (refreshToken: string) => {
	const url = `${import.meta.env.VITE_API_KEY}/refresh`;
	try {
		const response = await axios.post(url, {
			token: refreshToken,
		});

		if (response.status === 200) {
			return response.data.token;
		}
	} catch (err) {
		console.error("Error refreshing access token:", err);
	}

	return false;
};
