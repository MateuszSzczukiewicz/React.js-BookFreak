export type UserType = {
	user: {
		username: string;
		id: string;
	} | null;
	accessToken: string | null;
	refreshToken: string | null;
};

export type UserFormType = {
	username: string;
	password: string;
};

export type ChangeUserPasswordType = {
	password: string;
};
