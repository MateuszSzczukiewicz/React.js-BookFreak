import { NavBar } from "../ui/organisms/NavBar.tsx";
import { BookShelf } from "../ui/organisms/BookShelf.tsx";
import { BookInputForm } from "../ui/organisms/BookInputForm.tsx";

export const App = () => {
	return (
		<>
			<NavBar />
			<BookShelf />
			<BookInputForm />
		</>
	);
};
