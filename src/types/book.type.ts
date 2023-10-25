export type BookType = {
	_id: string;
	title?: string;
	author?: string;
};

export type NewBookType = Omit<BookType, "_id">;
