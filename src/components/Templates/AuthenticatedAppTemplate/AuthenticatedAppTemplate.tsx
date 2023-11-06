import { NavBar } from "../../organisms/NavBar/NavBar.tsx";
import { ReactNode } from "react";

export const AuthenticatedAppTemplate = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<NavBar />
			{children}
		</>
	);
};
