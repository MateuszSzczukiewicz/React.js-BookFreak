export type BookType = {
	_id: string;
	title: string;
	author: string;
	bookImage?: string | ArrayBuffer;
};

export type BookFormType = {
	newTitle: string;
	newAuthor: string;
	newBookImage?: string | ArrayBuffer;
};
