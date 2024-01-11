import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

export const useEditBook = () => {
	const queryClient = useQueryClient();

	return useMutation(
		async (variables: {
			_id: string;
			title: string;
			author: string;
			bookImage?: ArrayBuffer | string | undefined;
			userId: string;
			bookShelf: string;
		}) => {
			const url = `${import.meta.env.VITE_API_KEY}/profile/${variables.userId}/books/${
				variables._id
			}`;
			const { data } = await axios.put(url, {
				title: variables.title,
				author: variables.author,
				bookImage: variables.bookImage,
				bookShelf: variables.bookShelf,
			});
			return data;
		},
		{
			onSuccess: async () => {
				await queryClient.invalidateQueries("books");
			},
		},
	);
};
