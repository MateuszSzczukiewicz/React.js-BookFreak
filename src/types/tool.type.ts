import { BookShelvesEnum } from "./bookShelves.enum.ts";

export type ToolsType = {
	_id: string;
	isOpen: boolean;
	bookShelf?: BookShelvesEnum;
	toggleTools: () => void;
};

export type ChangeBookShelfType = {
	_id: string;
	toggleTools: () => void;
	text: string;
	shelf: BookShelvesEnum;
};

export type SettingsTool = Omit<ToolsType, "_id">;

export type DeleteAndEditType = Omit<ToolsType, "isOpen">;

export type ToolType = {
	text: string;
	isRed?: boolean;
};
