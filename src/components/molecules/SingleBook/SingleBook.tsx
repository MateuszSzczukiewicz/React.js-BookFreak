import { useState } from "react";
import { Tools } from "../../organisms/Tools/Tools.tsx";
import { SettingsButton } from "../../atoms/SettingsButton/SettingsButton.tsx";
import { BookType } from "../../../types/book.type.ts";
import cover from "../../../assets/images/cover.webp";

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
				<div className="relative max-w-md">
					<div className="relative mx-auto flex h-56 w-44 flex-col rounded-2xl text-2xl shadow-lg">
						<SettingsButton isOpen={isOpen} toggleTools={toggleTools} />
						<img src={cover} className="absolute h-full w-full rounded-2xl object-cover" alt="" />
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
