import { NavBar } from "../components/organisms/NavBar/NavBar.tsx";
import { BookShelf } from "../components/organisms/BookShelf/BookShelf.tsx";

export const Homepage = () => {
	return (
		<>
			<NavBar />
			<BookShelf />
		</>
	);
};
