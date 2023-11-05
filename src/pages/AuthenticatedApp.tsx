import { Navigate, Route, Routes } from "react-router-dom";
import { Homepage } from "./Homepage.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const AuthenticatedApp = () => {
	const user = useSelector((state: RootState) => state.users.user);
	const isUserLoggedIn = () => Boolean(user);

	return (
		<Routes>
			{isUserLoggedIn() ? (
				<Route path="/" element={<Homepage />} />
			) : (
				<Navigate to="/login" replace={true} />
			)}
		</Routes>
	);
};
