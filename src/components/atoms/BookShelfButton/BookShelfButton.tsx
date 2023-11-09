import { FC } from "react";
import { BookShelves } from "../../../types/bookShelves.enum.ts";

interface BookShelfButtonProps {
	name: string;
	shelf: BookShelves;
	selectedShelf: BookShelves | null;
	onClick: () => void;
}

export const BookShelfButton: FC<BookShelfButtonProps> = ({
	name,
	shelf,
	selectedShelf,
	onClick,
}) => {
	const isActive = selectedShelf === shelf;

	return (
		<button
			onClick={onClick}
			className={`w-44 rounded-xl p-2 font-semibold uppercase shadow-xl transition focus:border-zinc-900 ${
				isActive ? "bg-gray-300 text-zinc-600" : "bg-zinc-500 text-zinc-50"
			}`}
		>
			{name}
		</button>
	);
};
