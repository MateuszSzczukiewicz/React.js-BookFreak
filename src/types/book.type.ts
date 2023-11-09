import { BookShelvesEnum } from "./bookShelves.enum.ts";

export type BookType = {
	_id: string;
	title: string;
	author: string;
	bookImage?: string | ArrayBuffer;
	bookShelf: BookShelvesEnum;
};

export type BookFormType = {
	newTitle: string;
	newAuthor: string;
	newBookImage?: string | ArrayBuffer | null;
	newBookShelf: BookShelvesEnum;
};
