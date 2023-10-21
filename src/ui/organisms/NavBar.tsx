import { LogoffButton } from "../atoms/LogoffButton.tsx";

export const NavBar = () => {
	return (
		<header className="sticky top-0 z-20 w-full border-b bg-zinc-200 bg-opacity-60 backdrop-blur-lg">
			<nav className="flex h-20 justify-between md:ml-20">
				<img src="../../../src/assets/images/Baner.png" alt="Logo BookFreak" className="h-20" />
				<LogoffButton />
			</nav>
		</header>
	);
};
