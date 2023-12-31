import { Provider } from "react-redux";
import { store } from "../src/store";
import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

export const AppProviders = ({ children }: { children: ReactNode }) => {
	return (
		<Provider store={store}>
			<BrowserRouter>{children}</BrowserRouter>
		</Provider>
	);
};
