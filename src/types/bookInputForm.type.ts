import { BookShelves } from "./bookShelves.enum.ts";

export type BookInputFormType = {
	onFormSubmit: (
		newTitle: string,
		newAuthor: string,
		userId: string,
		newBookShelf: BookShelves,
		newBookImage?: string | ArrayBuffer | null,
	) => void;
	setIsFormVisible: (isVisible: boolean) => void;
};
