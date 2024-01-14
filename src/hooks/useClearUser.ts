import { useQueryClient } from "react-query";

const useClearUser = () => {
	const queryClient = useQueryClient();

	return () => {
		queryClient.setQueryData("user", null);
		queryClient.setQueryData("accessToken", null);
	};
};

export default useClearUser;
