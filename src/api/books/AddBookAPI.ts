import axios from "axios";

export const addBook = async (
	title: string,
	author: string,
	bookImage: string | ArrayBuffer | null,
	userId: string,
	bookShelf: string,
) => {
	const url = `${import.meta.env.VITE_API_KEY}/profile/${userId}/books`;
	try {
		const response = await axios.post(url, {
			title,
			author,
			bookImage,
			bookShelf,
		});
		console.log("bookImage:", bookImage);
		return response.data;
	} catch (err) {
		console.error("Error adding book:", err);
	}
};
