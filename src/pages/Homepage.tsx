import { BookShelf } from "../components/organisms/BookShelf/BookShelf.tsx";
import { AuthenticatedAppTemplate } from "../components/Templates/AuthenticatedAppTemplate/AuthenticatedAppTemplate.tsx";

export const Homepage = () => {
	return (
		<AuthenticatedAppTemplate>
			<BookShelf />
		</AuthenticatedAppTemplate>
	);
};
