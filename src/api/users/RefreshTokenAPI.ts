import axios from "axios";

export const refreshAccessToken = async (refreshToken: string) => {
	try {
		const response = await axios.post(import.meta.env.VITE_REFRESH_API_URL, {
			token: refreshToken,
		});

		if (response.status === 200) {
			return response.data.token;
		}
	} catch (error) {
		console.error("Error refreshing access token:", error);
	}

	return false;
};
