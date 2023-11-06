import { useSelector } from "react-redux";
import { RootState } from "../store";
import { AuthenticatedApp } from "./AuthenticatedApp.tsx";
import { UnauthenticatedApp } from "./UnauthenticatedApp.tsx";

export const Root = () => {
	const token = useSelector((state: RootState) => state.users.user);

	return token ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};
