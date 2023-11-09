import { BookShelves } from "./bookShelves.enum.ts";

export type BookType = {
	_id: string;
	title: string;
	author: string;
	bookImage?: string | ArrayBuffer;
	bookShelf: BookShelves;
};

export type BookFormType = {
	newTitle: string;
	newAuthor: string;
	newBookImage?: string | ArrayBuffer;
	newBookShelf: BookShelves;
};
