import { configureStore } from "@reduxjs/toolkit";
import { booksSlice } from "../features/books/books-slice.ts";

export const store = configureStore({
	reducer: {
		books: booksSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
