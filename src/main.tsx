import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Homepage } from "./pages/Homepage.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { LoginPage } from "./pages/LoginPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/login" element={<LoginPage />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	</StrictMode>,
);
