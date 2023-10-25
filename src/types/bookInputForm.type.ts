export type BookInputFormType = {
	onFormSubmit: (newTitle: string, newAuthor: string) => void;
	setIsFormVisible: (isVisible: boolean) => void;
};
