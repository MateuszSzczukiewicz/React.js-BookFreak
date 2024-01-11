import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

export const useUpdatePassword = () => {
	const queryClient = useQueryClient();

	return useMutation(
		async ({ id, password }: { id: string | undefined; password: string }) => {
			const url = `${import.meta.env.VITE_API_KEY}/profile/${id}`;
			const response = await axios.patch(url, {
				password,
			});
			return response.data;
		},
		{
			onSuccess: async () => {
				await queryClient.invalidateQueries("users");
			},
		},
	);
};
