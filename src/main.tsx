import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppProviders } from "../Providers/AppProviders.tsx";
import { Root } from "./pages/Root.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<AppProviders>
			<Root />
		</AppProviders>
	</StrictMode>,
);
