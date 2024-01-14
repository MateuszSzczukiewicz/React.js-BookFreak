import { useMutation } from "react-query";
import axios from "axios";

export const useUpdatePassword = () => {
	return useMutation(
		async ({ userId, password }: { userId: string | undefined; password: string }) => {
			const url = `${import.meta.env.VITE_API_KEY}/profile/${userId}`;
			const response = await axios.patch(url, {
				password,
			});
			return response.data;
		},
	);
};
