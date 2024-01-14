import "./index.css";
import { createRoot } from "react-dom/client";
import { AppProviders } from "./providers/AppProviders.tsx";
import { Root } from "./pages/Root.tsx";

createRoot(document.getElementById("root")!).render(
	<AppProviders>
		<Root />
	</AppProviders>,
);
