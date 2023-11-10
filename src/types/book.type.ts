import { BookShelvesEnum } from "./bookShelves.enum.ts";

export type BookType = {
	_id: string;
	title: string;
	author: string;
	bookImage: string | ArrayBuffer | null;
	bookShelf: BookShelvesEnum;
};
