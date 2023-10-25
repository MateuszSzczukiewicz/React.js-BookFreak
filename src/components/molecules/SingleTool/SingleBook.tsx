import { useState } from "react";
import { Tools } from "../../organisms/Tools/Tools.tsx";
import { SettingsButton } from "../../atoms/SettingsButton/SettingsButton.tsx";
import { BookType } from "../../../types/book.type.ts";

export const SingleBook = ({ title, author, _id }: BookType) => {
	const [isOpen, setIsOpen] = useState<boolean>(true);

	const toggleTools = (): void => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			{isOpen ? (
				<Tools isOpen={isOpen} _id={_id} toggleTools={toggleTools} />
			) : (
				<div className="mx-auto flex h-56 w-44 flex-col rounded-2xl bg-zinc-200 text-2xl shadow-lg">
					<SettingsButton isOpen={isOpen} toggleTools={toggleTools} />

					<div className="items-center justify-center text-center">
						<p>{title}</p>
						<p>{author}</p>
					</div>
				</div>
			)}
		</>
	);
};
