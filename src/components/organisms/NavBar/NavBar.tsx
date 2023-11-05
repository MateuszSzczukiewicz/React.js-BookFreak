import { LogoutButton } from "../../atoms/LogoutButton/LogoutButton.tsx";
import banner from "../../../assets/images/banner.png";
import { UsernameButton } from "../../atoms/UsernameButton/UsernameButton.tsx";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
	const navigate = useNavigate();

	return (
		<header className="sticky top-0 z-20 w-full border-b bg-zinc-200 bg-opacity-60 backdrop-blur-lg">
			<nav className="flex h-20 justify-between md:ml-20">
				<button onClick={() => navigate("/")}>
					<img src={banner} alt="Logo BookFreak" className="h-20" />
				</button>
				<UsernameButton />
				<LogoutButton />
			</nav>
		</header>
	);
};
