import { SettingsTool } from "../../../types/tool.type.ts";
import { XMark } from "../../../assets/icons/x-mark.tsx";
import { Cog } from "../../../assets/icons/cog.tsx";

export const SettingsButton = ({ isOpen, toggleTools }: SettingsTool) => {
	const handleClick = (): void => {
		toggleTools();
	};

	return (
		<>
			<button className="z-10 m-2 self-end" onClick={handleClick}>
				{isOpen ? <XMark /> : <Cog />}
			</button>
		</>
	);
};
