import { useQuery } from "react-query";
import { AuthenticatedApp } from "./AuthenticatedApp.tsx";
import { UnauthenticatedApp } from "./UnauthenticatedApp.tsx";

export const Root = () => {
	const { data } = useQuery("accessToken");

	return data ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};
