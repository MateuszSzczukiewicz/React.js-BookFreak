import axios from "axios";

export const logoutUser = async () => {
	const url = `${import.meta.env.VITE_API_KEY}/logout`;
	try {
		const response = await axios.delete(url);

		if (response.status === 204) {
			return { success: true };
		} else {
			console.error("Unexpected response status:", response.status);
			return { success: false };
		}
	} catch (err) {
		console.error("Error logging out user:", err);
		return { success: false };
	}
};
