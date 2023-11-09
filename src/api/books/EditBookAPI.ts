import axios from "axios";
import { BookShelvesEnum } from "../../types/bookShelves.enum.ts";

export const editBook = async (
	_id: string,
	title: string,
	author: string,
	bookImage: string | ArrayBuffer | null,
	userId: string | undefined,
	bookShelf: BookShelvesEnum,
) => {
	const url = `${import.meta.env.VITE_API_KEY}/profile/${userId}/books/${_id}`;
	try {
		const response = await axios.put(url, {
			title,
			author,
			bookImage,
			bookShelf,
		});
		return response.data;
	} catch (err) {
		console.error("Error editing book:", err);
	}
};
