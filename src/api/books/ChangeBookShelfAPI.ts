import axios from "axios";

export const changeBookShelf = async (_id: string, userId: string, bookShelf: string) => {
	const url = `${import.meta.env.VITE_API_KEY}/profile/${userId}/books/${_id}`;
	try {
		const response = await axios.patch(url, {
			bookShelf,
		});
		return response.data;
	} catch (err) {
		console.error("Error changing book shelf:", err);
	}
};
