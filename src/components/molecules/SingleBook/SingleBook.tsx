import { useState } from "react";
import { Tools } from "../../organisms/Tools/Tools.tsx";
import { SettingsButton } from "../../atoms/SettingsButton/SettingsButton.tsx";
import { BookType } from "../../../types/book.type.ts";
import { Photo } from "../../../assets/icons/photo.tsx";

export const SingleBook = ({ title, author, _id, bookImage }: BookType) => {
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
					<div className="relative mx-auto flex h-56 w-44 flex-col rounded-2xl bg-zinc-200 text-2xl shadow-lg">
						<SettingsButton isOpen={isOpen} toggleTools={toggleTools} />
						{typeof bookImage === "string" ? (
							<img
								src={bookImage}
								className="absolute h-full w-full rounded-2xl object-cover"
								alt="Okładka książki"
							/>
						) : (
							<div className="flex h-full items-center justify-center pb-10">
								<Photo />
							</div>
						)}
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
