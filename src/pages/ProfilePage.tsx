import { ProfileForm } from "../components/organisms/ProfileForm/ProfileForm.tsx";
import { DeleteAccountButton } from "../components/atoms/DeleteAccountButton/DeleteAccountButton.tsx";
import { AuthenticatedAppTemplate } from "../components/Templates/AuthenticatedAppTemplate/AuthenticatedAppTemplate.tsx";

export const ProfilePage = () => {
	return (
		<AuthenticatedAppTemplate>
			<div className="mt-40 flex flex-col items-center justify-center">
				<ProfileForm />
				<DeleteAccountButton />
			</div>
		</AuthenticatedAppTemplate>
	);
};
