import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

export const useLoginUser = () => {
	const queryClient = useQueryClient();

	return useMutation(
		async ({ username, password }: { username: string; password: string }) => {
			const url = `${import.meta.env.VITE_API_KEY}/login`;
			const { status, data } = await axios.post(url, {
				username,
				password,
			});

			if (status === 200) {
				const { token, refreshToken, user } = data;
				return { success: true, token, refreshToken, user };
			} else {
				console.error("Unexpected response status:", status);
				return { success: false };
			}
		},
		{
			onSuccess: async (data) => {
				if (data.success) {
					const { token, refreshToken, user } = data;
					console.log(token);
					await queryClient.invalidateQueries("user", user);
					await queryClient.invalidateQueries("refreshToken", refreshToken);
					await queryClient.invalidateQueries("accessToken", token);
				}
			},
		},
	);
};
