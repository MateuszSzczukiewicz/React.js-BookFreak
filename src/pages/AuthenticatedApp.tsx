import { Routes, Route } from "react-router-dom";
import { Homepage } from "./Homepage";
import { ProfilePage } from "./ProfilePage";
import { UnauthenticatedApp } from "./UnauthenticatedApp";
import { useQuery } from "react-query";

export const AuthenticatedApp = () => {
	const { data } = useQuery("accessToken");

	const isUserLoggedIn = Boolean(data);

	return (
		<Routes>
			{isUserLoggedIn ? (
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
