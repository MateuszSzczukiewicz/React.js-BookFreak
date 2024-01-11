import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../features/users/user-slice.ts";

export const store = configureStore({
	reducer: {
		users: userSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
