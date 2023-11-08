import axios from "axios";

export const updatePassword = async (_id: string | undefined, password: string) => {
	const url = `${import.meta.env.VITE_API_KEY}/profile/${_id}`;
	try {
		const response = await axios.patch(url, {
			password,
		});
		return response.data;
	} catch (err) {
		console.error("Error updating password:", err);
		console.log(password);
	}
};
