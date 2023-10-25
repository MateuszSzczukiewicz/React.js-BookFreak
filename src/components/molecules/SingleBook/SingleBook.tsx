import { createContext, useContext, useState } from "react";
import { Tools } from "../../organisms/Tools/Tools.tsx";
import { SettingsButton } from "../../atoms/SettingsButton/SettingsButton.tsx";
import { BookContext } from "../../organisms/BookShelf/BookShelf.tsx";
import { ToolsType } from "../../../types/tool.type.ts";

export const OpenContext = createContext<ToolsType | null>(null);

export const SingleBook = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleTools = (): void => {
		setIsOpen(!isOpen);
	};

	const context = useContext(BookContext);

	if (!context) return null;

	const { title, author } = context;

	return (
		<OpenContext.Provider
			value={{
				isOpen: isOpen,
				toggleTools: toggleTools,
			}}
		>
			{isOpen ? (
				<Tools />
			) : (
				<div className="mx-auto flex h-56 w-44 flex-col rounded-2xl bg-zinc-200 text-2xl shadow-lg">
					<SettingsButton isOpen={isOpen} toggleTools={toggleTools} />
					<div className="items-center justify-center text-center">
						<p>{title}</p>
						<p>{author}</p>
					</div>
				</div>
			)}
		</OpenContext.Provider>
	);
};
