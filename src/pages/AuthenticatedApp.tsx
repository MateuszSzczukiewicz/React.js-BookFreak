import { Route, Routes } from "react-router-dom";
import { Homepage } from "./Homepage.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { ProfilePage } from "./ProfilePage.tsx";
import { UnauthenticatedApp } from "./UnauthenticatedApp.tsx";

export const AuthenticatedApp = () => {
	const token = useSelector((state: RootState) => state.users.accessToken);

	const isUserLoggedIn = () => Boolean(token);

	return (
		<Routes>
			{isUserLoggedIn() ? (
				<>
					<Route path="*" element={<Homepage />} />
					<Route path="/profile" element={<ProfilePage />} />
				</>
			) : (
				<UnauthenticatedApp />
			)}
		</Routes>
	);
};
