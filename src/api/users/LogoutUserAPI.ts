import axios from "axios";

export const logoutUser = async () => {
	try {
		const response = await axios.delete(import.meta.env.VITE_LOGOUT_API_URL);

		if (response.status === 204) {
			return { success: true };
		} else {
			console.error("Unexpected response status:", response.status);
			return { success: false };
		}
	} catch (e) {
		console.error("Error logging out user:", e);
		return { success: false };
	}
};
