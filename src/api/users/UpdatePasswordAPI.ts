import axios from "axios";

export const updatePassword = async (_id: string | undefined, password: string) => {
	try {
		const response = await axios.patch(import.meta.env.VITE_USERS_API_URL + `/${_id}`, {
			password,
		});
		return response.data;
	} catch (e) {
		console.error("Error updating password:", e);
		console.log(password);
	}
};
