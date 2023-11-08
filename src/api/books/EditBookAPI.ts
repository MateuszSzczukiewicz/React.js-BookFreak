import axios from "axios";

export const editBook = async (
	_id: string,
	title: string,
	author: string,
	bookImage: string | ArrayBuffer | null,
	userId: string,
) => {
	const url = `${import.meta.env.VITE_API_KEY}/profile/${userId}/books/${_id}`;
	try {
		const response = await axios.put(url, {
			title,
			author,
			bookImage,
		});
		return response.data;
	} catch (err) {
		console.error("Error editing book:", err);
	}
};
