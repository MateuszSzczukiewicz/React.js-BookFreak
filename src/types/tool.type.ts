export type ToolsType = {
	_id: string;
	isOpen: boolean;
	toggleTools: () => void;
};

export type SettingsTool = Omit<ToolsType, "_id">;

export type ToolType = {
	text: string;
	isRed?: boolean;
};
