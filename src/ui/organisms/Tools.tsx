import { EditButton } from "../atoms/EditButton.tsx";
import { DeleteButton } from "../atoms/DeleteButton.tsx";
import { SettingsButton } from "../atoms/SettingsButton.tsx";

interface ToolsProps {
	_id: string;
	isOpen: boolean;
	toggleTools: () => void;
}

export const Tools = ({ _id, isOpen, toggleTools }: ToolsProps) => {
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
