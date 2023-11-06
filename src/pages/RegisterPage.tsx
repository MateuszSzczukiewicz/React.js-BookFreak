import { RegisterForm } from "../components/organisms/RegisterForm/RegisterForm.tsx";
import { UnauthenticatedAppTemplate } from "../components/Templates/UnauthenticatedAppTemplate/UnauthenticatedAppTemplate.tsx";

export const RegisterPage = () => {
	return (
		<UnauthenticatedAppTemplate>
			<RegisterForm />
		</UnauthenticatedAppTemplate>
	);
};
