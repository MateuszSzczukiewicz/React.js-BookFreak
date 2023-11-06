import { LoginForm } from "../components/organisms/LoginForm/LoginForm.tsx";
import { UnauthenticatedAppTemplate } from "../components/Templates/UnauthenticatedAppTemplate/UnauthenticatedAppTemplate.tsx";

export const LoginPage = () => {
	return (
		<UnauthenticatedAppTemplate>
			<LoginForm />
		</UnauthenticatedAppTemplate>
	);
};
