import axios from "axios";
import { BookShelvesEnum } from "../../types/bookShelves.enum.ts";

export const changeBookShelf = async (_id: string, userId: string, bookShelf: BookShelvesEnum) => {
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
