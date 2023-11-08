export type BookInputFormType = {
	onFormSubmit: (
		newTitle: string,
		newAuthor: string,
		userId: string,
		newBookImage?: string | ArrayBuffer | null,
	) => void;
	setIsFormVisible: (isVisible: boolean) => void;
};
