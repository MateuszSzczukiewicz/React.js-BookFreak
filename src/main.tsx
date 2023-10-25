import React from "react";
import ReactDOM from "react-dom/client";
import { Homepage } from "./pages/Homepage.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Homepage />
		</BrowserRouter>
	</React.StrictMode>,
);
