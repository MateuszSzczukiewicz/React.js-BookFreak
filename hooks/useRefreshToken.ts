import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAccessToken } from "../src/features/users/user-slice";
import { refreshAccessToken } from "../src/api/users/RefreshTokenAPI";
import { RootState } from "../src/store";

export const useRefreshToken = () => {
	const dispatch = useDispatch();
	const accessToken = useSelector((state: RootState) => state.users.accessToken);

	useEffect(() => {
		const refreshStoredAccessToken = async () => {
			if (!accessToken) {
				try {
					const refreshedToken = await dispatch(refreshAccessToken());
					if (refreshedToken) {
						dispatch(setAccessToken(refreshedToken));
					}
				} catch (error) {
					console.error("Błąd odświeżania tokenu:", error);
				}
			}
		};

		refreshStoredAccessToken();
	}, [accessToken, dispatch]);
};
