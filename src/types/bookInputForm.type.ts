import { SubmitHandler } from "react-hook-form";

export type BookFormType = {
	newTitle: string;
	newAuthor: string;
	newBookImage?: string | ArrayBuffer | null;
	newBookShelf: string;
};

export type BookInputFormType = {
	onFormSubmit: SubmitHandler<BookFormType>;
	setIsFormVisible: (isVisible: boolean) => void;
};
