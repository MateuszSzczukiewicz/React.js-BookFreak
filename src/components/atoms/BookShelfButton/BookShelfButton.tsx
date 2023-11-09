import { FC } from "react";
import { BookShelvesType } from "../../../types/bookShelves.type.ts";

export const BookShelfButton: FC<BookShelvesType> = ({ name, shelf, selectedShelf, onClick }) => {
	const isActive = selectedShelf === shelf;

	return (
		<button
			onClick={onClick}
			className={`w-44 rounded-xl p-2 font-semibold uppercase shadow-xl transition focus:border-zinc-900 ${
				isActive ? "bg-green-800 text-zinc-50" : "bg-green-100 text-zinc-600"
			}`}
		>
			{name}
		</button>
	);
};
