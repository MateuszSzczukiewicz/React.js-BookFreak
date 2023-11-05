import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../types/user.type.ts";

const initialState: UserType = {
	user: null,
	accessToken: null,
	refreshToken: null,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserType["user"] | null>) => {
			state.user = action.payload;
		},
		setAccessToken: (state, action: PayloadAction<string | null>) => {
			state.accessToken = action.payload;
		},
		setRefreshToken: (state, action: PayloadAction<string | null>) => {
			state.refreshToken = action.payload;
		},
		clearUser: (state) => {
			state.user = null;
			state.accessToken = null;
			state.refreshToken = null;
		},
	},
});

export const { setUser, setAccessToken, setRefreshToken, clearUser } = userSlice.actions;

export default userSlice.reducer;
