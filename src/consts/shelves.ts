import { BookShelvesEnum } from "../types/bookShelves.enum.ts";

export const SHELVES = [
	{ shelf: BookShelvesEnum.READING, text: "Teraz czytam" },
	{ shelf: BookShelvesEnum.READ, text: "Przeczytane" },
	{ shelf: BookShelvesEnum.WANT_TO_READ, text: "Chcę przeczytać" },
];
