import { AuthenticatedApp } from "./AuthenticatedApp.tsx";
import { UnauthenticatedApp } from "./UnauthenticatedApp.tsx";
import { useQueryClient } from "react-query";

export const Root = () => {
	const queryClient = useQueryClient();

	const token = queryClient.getQueryData("accessToken");

	console.log(token);

	return token ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};
