import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

export const useChangeBookshelf = () => {
	const queryClient = useQueryClient();

	return useMutation(
		async (variables: { _id: string; userId: string; bookShelf: string }) => {
			const url = `${import.meta.env.VITE_API_KEY}/profile/${variables.userId}/books/${
				variables._id
			}`;
			const { data } = await axios.patch(url, { bookShelf: variables.bookShelf });
			return data;
		},
		{
			onSuccess: async () => {
				await queryClient.invalidateQueries("books");
			},
		},
	);
};
