import { useState } from "react";
import { Tools } from "../organisms/Tools.tsx";
import { SettingsButton } from "../atoms/SettingsButton.tsx";

interface SingleBookProps {
	_id: string;
	title: string;
	author: string;
}

export const SingleBook = ({ title, author, _id }: SingleBookProps) => {
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
