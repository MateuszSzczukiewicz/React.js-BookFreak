import { Navigate, Route, Routes } from "react-router-dom";
import { Homepage } from "./Homepage.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { ProfilePage } from "./ProfilePage.tsx";

export const AuthenticatedApp = () => {
	const user = useSelector((state: RootState) => state.users.user);
	const isUserLoggedIn = () => Boolean(user);

	return (
		<Routes>
			{isUserLoggedIn() ? (
				<>
					<Route path="/" element={<Homepage />} />
					<Route path="/profile" element={<ProfilePage />} />
				</>
			) : (
				<Navigate to="/login" replace={true} />
			)}
		</Routes>
	);
};
