export type BookInputFormType = {
	onFormSubmit: (
		newTitle: string,
		newAuthor: string,
		newBookImage?: string | ArrayBuffer | null,
	) => void;
	setIsFormVisible: (isVisible: boolean) => void;
};
