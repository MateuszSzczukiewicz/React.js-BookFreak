import axios from "axios";
import { setAccessToken } from "../../features/users/user-slice";
import { Dispatch } from "redux";
import { RootState } from "../../store";

export const refreshAccessToken = () => {
	return async (dispatch: Dispatch, getState: () => RootState) => {
		const refreshToken = getState().users.refreshToken;

		try {
			const response = await axios.post(import.meta.env.VITE_REFRESH_API_URL, {
				token: refreshToken,
			});

			if (response.status === 200) {
				const newAccessToken = response.data.token;
				dispatch(setAccessToken(newAccessToken));
				return true;
			}
		} catch (error) {
			console.error("Error refreshing access token:", error);
		}

		return false;
	};
};
