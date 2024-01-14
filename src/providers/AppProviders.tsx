import { ReactNode, StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

export const AppProviders = ({ children }: { children: ReactNode }) => {
	const queryClient = new QueryClient();

	return (
		<StrictMode>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<>{children}</>
				</BrowserRouter>
			</QueryClientProvider>
		</StrictMode>
	);
};
