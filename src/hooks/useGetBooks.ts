import { useQuery } from "react-query";
import axios, { AxiosResponse } from "axios";
import { BookType } from "../types/book.type.ts";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useGetBooks = () => {
	const userId = useSelector((state: RootState) => state.users.user?.id);

	return useQuery({
		queryKey: "books",
		queryFn: async () => {
			const url = `${import.meta.env.VITE_API_KEY}/profile/${userId}/books`;
			const { data }: AxiosResponse<BookType[]> = await axios.get(url);
			return data;
		},
	});
};
