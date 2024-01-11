import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

export const useDeleteBook = () => {
	const queryClient = useQueryClient();

	return useMutation(
		async (variables: { userId: string; _id: string }) => {
			const url = `${import.meta.env.VITE_API_KEY}/profile/${variables.userId}/books/${
				variables._id
			}`;
			const { data } = await axios.delete(url);
			return data;
		},
		{
			onSuccess: async () => {
				await queryClient.invalidateQueries("books");
			},
		},
	);
};
