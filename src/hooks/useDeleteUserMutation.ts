import { useMutation } from "react-query";
import axios from "axios";

export const useDeleteUserMutation = () => {
	return useMutation(async (variables: { userId: string | undefined }) => {
		const url = `${import.meta.env.VITE_API_KEY}/profile/${variables.userId}`;
		const { data } = await axios.delete(url);
		return data;
	});
};
