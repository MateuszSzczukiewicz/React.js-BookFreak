import { useState } from "react";
import { BookShelvesEnum } from "../types/bookShelves.enum";

export const useSelectedShelf = () => {
	const [selectedShelf, setSelectedShelf] = useState<BookShelvesEnum | null>(
		BookShelvesEnum.READING,
	);

	const handleShelfClick = (shelf: BookShelvesEnum) => setSelectedShelf(shelf);

	return {
		selectedShelf,
		handleShelfClick,
	};
};
