import { ToolType } from "../../../types/tool.type.ts";

export const SingleTool = ({ text, isRed }: ToolType) => {
	return (
		<button
			className={`h-full w-full text-lg font-semibold uppercase hover:bg-zinc-200 ${
				isRed ? "text-red-400" : ""
			}`}
		>
			{text}
		</button>
	);
};
