export type ToolsType = {
	_id?: string;
	isOpen: boolean;
	toggleTools: () => void;
};

export type ToolType = {
	text: string;
	isRed?: boolean;
};
