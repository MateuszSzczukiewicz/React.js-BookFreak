import { NavBar } from "../components/organisms/NavBar/NavBar.tsx";
import { ProfileForm } from "../components/organisms/ProfileForm/ProfileForm.tsx";
import { DeleteAccountButton } from "../components/atoms/DeleteAccountButton/DeleteAccountButton.tsx";

export const ProfilePage = () => {
	return (
		<>
			<NavBar />
			<div className="mt-40 flex flex-col items-center justify-center">
				<ProfileForm />
				<DeleteAccountButton />
			</div>
		</>
	);
};
