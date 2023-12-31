import axios from "axios";

export const deleteUser = async (_id: string | undefined) => {
	const url = `${import.meta.env.VITE_API_KEY}/profile/${_id}`;
	try {
		const response = await axios.delete(url);
		return response.data;
	} catch (err) {
		console.error("Error deleting user:", err);
		return { success: false, error: "Error deleting user" };
	}
};
