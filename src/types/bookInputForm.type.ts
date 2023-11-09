import { SubmitHandler } from "react-hook-form";
import { BookFormType } from "./book.type.ts";

export type BookInputFormType = {
	onFormSubmit: SubmitHandler<BookFormType>;
	setIsFormVisible: (isVisible: boolean) => void;
};
