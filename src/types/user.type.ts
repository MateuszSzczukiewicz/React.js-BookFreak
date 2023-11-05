export type UserType = {
	user: {
		username: string;
		id: string;
	} | null;
	accessToken: string | null;
	refreshToken: string | null;
};
