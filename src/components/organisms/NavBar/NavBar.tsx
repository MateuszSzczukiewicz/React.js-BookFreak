import { LogoutButton } from "../../atoms/LogoutButton/LogoutButton.tsx";
import banner from "../../../assets/images/banner.png";

export const NavBar = () => {
	return (
		<header className="sticky top-0 z-20 w-full border-b bg-zinc-200 bg-opacity-60 backdrop-blur-lg">
			<nav className="flex h-20 justify-between md:ml-20">
				<img src={banner} alt="Logo BookFreak" className="h-20" />
				<LogoutButton />
			</nav>
		</header>
	);
};
