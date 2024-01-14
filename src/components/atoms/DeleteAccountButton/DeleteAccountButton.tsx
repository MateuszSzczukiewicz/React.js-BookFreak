import { useNavigate } from "react-router-dom";
import useUserData from "../../../hooks/useUserData.ts";
import { useDeleteUserMutation } from "../../../hooks/useDeleteUserMutation.ts";
import useClearUser from "../../../hooks/useClearUser.ts";

export const DeleteAccountButton = () => {
	const { userId } = useUserData();
	const deleteUserMutation = useDeleteUserMutation();
	const clearUserData = useClearUser();
	const navigate = useNavigate();

	const handleDeleteAccount = async () => {
		const isConfirmed = window.confirm("Czy na pewno chcesz usunąć konto?");
		if (isConfirmed) {
			await deleteUserMutation.mutateAsync({ userId });
			clearUserData();
			navigate("/");
		}
	};

	return (
		<button
			onClick={handleDeleteAccount}
			className="mt-4 font-semibold text-red-900 transition hover:text-red-950"
		>
			Usuń konto
		</button>
	);
};
