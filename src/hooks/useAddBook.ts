import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

export const useAddBook = () => {
	const queryClient = useQueryClient();

	return useMutation(
		async (variables: {
			title: string;
			author: string;
			bookImage?: ArrayBuffer | string | undefined;
			userId: string | undefined;
			bookShelf: string;
		}) => {
			const url = `${import.meta.env.VITE_API_KEY}/profile/${variables.userId}/books`;
			const { data } = await axios.post(url, {
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
