import { useContext } from "react";
import { EditButton } from "../../atoms/EditButton/EditButton.tsx";
import { DeleteButton } from "../../atoms/DeteteButton/DeleteButton.tsx";
import { SettingsButton } from "../../atoms/SettingsButton/SettingsButton.tsx";
import { BookContext } from "../BookShelf/BookShelf.tsx";
import { OpenContext } from "../../molecules/SingleBook/SingleBook.tsx";

export const Tools = () => {
	const bookContext = useContext(BookContext);
	const openContext = useContext(OpenContext);

	if (!bookContext) return null;
	if (!openContext) return null;

	const { _id } = bookContext;
	const { isOpen, toggleTools } = openContext;

	return (
		<div className="mx-auto flex h-56 w-44 flex-col rounded-2xl border bg-zinc-50 text-2xl shadow-lg">
			<SettingsButton isOpen={isOpen} toggleTools={toggleTools} />
			<div className="h-full justify-center divide-y-2 divide-zinc-200">
				<EditButton _id={_id} />
				<DeleteButton _id={_id} />
			</div>
		</div>
	);
};
