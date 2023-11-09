import { BookShelvesEnum } from "./bookShelves.enum.ts";

export type BookShelvesType = {
	name: string;
	shelf: BookShelvesEnum;
	selectedShelf: BookShelvesEnum | null;
	onClick: () => void;
};
