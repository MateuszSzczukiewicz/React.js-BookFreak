import { LogoutButton } from "../../atoms/LogoutButton/LogoutButton.tsx";
import banner from "../../../assets/images/banner.png";
import { UsernameButton } from "../../atoms/UsernameButton/UsernameButton.tsx";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
	const navigate = useNavigate();

	return (
		<header className="sticky top-0 z-20 w-full border-b bg-green-200 bg-opacity-60 backdrop-blur-lg">
			<nav className="flex h-20 justify-around sm:justify-between md:ml-20">
				<button onClick={() => navigate("/")}>
					<img src={banner} alt="Logo BookFreak" className="h-12 sm:h-20" />
				</button>
				<div className="line letter flex flex-col justify-center gap-2 text-sm sm:flex-row sm:gap-20 sm:text-lg">
					<UsernameButton />
					<LogoutButton />
				</div>
			</nav>
		</header>
	);
};
