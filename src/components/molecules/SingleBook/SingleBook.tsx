import { useState } from "react";
import { Tools } from "../../organisms/Tools/Tools.tsx";
import { SettingsButton } from "../../atoms/SettingsButton/SettingsButton.tsx";
import { BookType } from "../../../types/book.type.ts";
import

export const SingleBook = ({ title, author, _id }: BookType) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleTools = (): void => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			{isOpen ? (
				<Tools isOpen={isOpen} _id={_id} toggleTools={toggleTools} />
			) : (
				<div className="max-w-md">
					<div className="mx-auto flex h-56 w-44 flex-col rounded-2xl bg-zinc-200 text-2xl shadow-lg">
						<SettingsButton isOpen={isOpen} toggleTools={toggleTools} />
						img
					</div>
					<div className="mt-4 flex flex-col items-center truncate text-lg font-semibold text-zinc-950">
						<span className="max-w-full overflow-hidden overflow-ellipsis">{title}</span>
						<span className="max-w-full overflow-hidden overflow-ellipsis">{author}</span>
					</div>
				</div>
			)}
		</>
	);
};
