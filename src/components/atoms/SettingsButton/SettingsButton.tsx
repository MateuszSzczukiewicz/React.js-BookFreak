import { XMark } from "../../../assets/icons/x-mark.tsx";
import { Cog } from "../../../assets/icons/cog.tsx";
import { useContext } from "react";
import { OpenContext } from "../../molecules/SingleBook/SingleBook.tsx";

export const SettingsButton = () => {
	const context = useContext(OpenContext);

	if (!context) return null;

	const { isOpen, toggleTools } = context;

	const handleClick = (): void => {
		toggleTools();
	};

	return (
		<button className="m-2 self-end" onClick={handleClick}>
			{isOpen ? XMark() : Cog()}
		</button>
	);
};
