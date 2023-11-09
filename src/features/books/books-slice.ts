import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookType } from "../../types/book.type";
import { getBooks } from "../../api/books/GetBooksAPI.ts";
import { addBook } from "../../api/books/AddBookAPI.ts";
import { editBook } from "../../api/books/EditBookAPI.ts";
import { deleteBook } from "../../api/books/DeleteBookAPI.ts";
import { changeBookShelf } from "../../api/books/ChangeBookShelfAPI.ts";
import { BookShelvesEnum } from "../../types/bookShelves.enum.ts";
const initialState: BookType[] = [];

export const fetchBooks = createAsyncThunk<BookType[], { userId: string | undefined }>(
	"books/fetchBooks",
	async ({ userId }) => {
		return await getBooks(userId);
	},
);

export const addBooks = createAsyncThunk<
	BookType,
	{
		title: string;
		author: string;
		bookImage: string | ArrayBuffer | null;
		userId: string;
		bookShelf: BookShelvesEnum;
	}
>("books/addBook", async ({ title, author, bookImage, userId, bookShelf }) => {
	return await addBook(title, author, bookImage, userId, bookShelf);
});

export const editBooks = createAsyncThunk<
	BookType,
	{
		_id: string;
		title: string;
		author: string;
		bookImage: string | ArrayBuffer | null;
		userId: string;
		bookShelf: BookShelvesEnum;
	}
>("books/editBook", async ({ _id, title, author, bookImage, userId, bookShelf }) => {
	return await editBook(_id, title, author, bookImage, userId, bookShelf);
});

export const deleteBooks = createAsyncThunk<BookType, { _id: string; userId: string }>(
	"books/deleteBook",
	async ({ _id, userId }) => {
		return await deleteBook(_id, userId);
	},
);

export const changeBooksShelf = createAsyncThunk<
	BookType,
	{ _id: string; userId: string; bookShelf: BookShelvesEnum }
>("books/changeBookShelf", async ({ _id, userId, bookShelf }) => {
	return changeBookShelf(_id, userId, bookShelf);
});

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
			const deletedBookId = action.payload._id;
			return state.filter((book) => book._id !== deletedBookId);
		});

		builder.addCase(changeBooksShelf.fulfilled, (state, action: PayloadAction<BookType>) => {
			const index = state.findIndex((book) => book._id === action.payload._id);
			state[index] = action.payload;
		});
	},
});

export default booksSlice.reducer;
