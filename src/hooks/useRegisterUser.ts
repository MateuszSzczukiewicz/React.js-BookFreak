import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { UserFormType } from "../types/user.type.ts";

export const useRegisterUser = () => {
	const queryClient = useQueryClient();

	return useMutation(
		async ({ username, password }: UserFormType) => {
			const url = `${import.meta.env.VITE_API_KEY}/register`;
			const response = await axios.post(url, {
				username,
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
