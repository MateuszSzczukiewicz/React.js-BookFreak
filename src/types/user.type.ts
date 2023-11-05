export type UserType = {
	user: {
		username: string;
	} | null;
	accessToken: string | null;
	refreshToken: string | null;
};
