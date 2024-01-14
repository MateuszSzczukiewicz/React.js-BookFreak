import { useQuery } from "react-query";
import { UserDataType } from "../types/userData.type.ts";

export const useUserData = () => {
	const { data } = useQuery<UserDataType>("user");

	const userId = data?.id;
	const username = data?.username;

	return { userId, username };
};

export default useUserData;
