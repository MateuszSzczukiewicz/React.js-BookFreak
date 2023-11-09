import { BookShelvesEnum } from "./bookShelves.enum.ts";

export type BookInputFormType = {
	onFormSubmit: (
		newTitle: string,
		newAuthor: string,
		userId: string | null,
		newBookShelf: BookShelvesEnum,
		newBookImage?: string | ArrayBuffer | null,
	) => void;
	setIsFormVisible: (isVisible: boolean) => void;
};
