import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./LoginPage.tsx";
import { RegisterPage } from "./RegisterPage.tsx";

export const UnauthenticatedApp = () => {
	return (
		<Routes>
			<Route path="*" element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage />} />
		</Routes>
	);
};
