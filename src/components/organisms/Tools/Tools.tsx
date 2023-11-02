import { EditButton } from "../../atoms/EditButton/EditButton.tsx";
import { DeleteButton } from "../../atoms/DeteteButton/DeleteButton.tsx";
import { SettingsButton } from "../../atoms/SettingsButton/SettingsButton.tsx";
import { ToolsType } from "../../../types/tool.type.ts";

export const Tools = ({ _id, isOpen, toggleTools }: ToolsType) => {
	return (
		<div className="mx-auto flex h-56 w-44 flex-col rounded-2xl border bg-zinc-50 text-2xl shadow-lg">
			<SettingsButton isOpen={isOpen} toggleTools={toggleTools} />
			<div className="h-full justify-center divide-y-2 divide-zinc-200">
				<EditButton _id={_id} toggleTools={toggleTools} />
				<DeleteButton _id={_id} toggleTools={toggleTools} />
			</div>
		</div>
	);
};
