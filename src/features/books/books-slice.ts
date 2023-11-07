import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookType } from "../../types/book.type";
import { getBooks } from "../../api/books/GetBooksAPI.ts";
import { addBook } from "../../api/books/AddBookAPI.ts";
import { editBook } from "../../api/books/EditBookAPI.ts";
import { deleteBook } from "../../api/books/DeleteBookAPI.ts";

const initialState: BookType[] = [];

export const fetchBooks = createAsyncThunk<BookType[]>("books/fetchBooks", async () => {
	return await getBooks();
});

export const addBooks = createAsyncThunk<
	BookType,
	{ title: string; author: string; bookImage: string | ArrayBuffer | null }
>("books/addBook", async ({ title, author, bookImage }) => {
	return await addBook(title, author, bookImage);
});

export const editBooks = createAsyncThunk<
	BookType,
	{ _id: string; title: string; author: string; bookImage: string | ArrayBuffer | null }
>("books/editBook", async ({ _id, title, author, bookImage }) => {
	return await editBook(_id, title, author, bookImage);
});

export const deleteBooks = createAsyncThunk<BookType, { _id: string }>(
	"books/deleteBook",
	async ({ _id }) => {
		return await deleteBook(_id);
	},
);

export const booksSlice = createSlice({
	name: "books",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchBooks.fulfilled, (_state, action: PayloadAction<BookType[]>) => {
			return action.payload;
		});

		builder.addCase(addBooks.fulfilled, (state, action: PayloadAction<BookType>) => {
			state.push(action.payload);
		});

		builder.addCase(editBooks.fulfilled, (state, action: PayloadAction<BookType>) => {
			const index = state.findIndex((book) => book._id === action.payload._id);
			state[index] = action.payload;
		});

		builder.addCase(deleteBooks.fulfilled, (state, action: PayloadAction<BookType>) => {
			const index = state.findIndex((book) => book._id === action.payload._id);
			state.splice(index, 1);
		});
	},
});

export default booksSlice.reducer;
