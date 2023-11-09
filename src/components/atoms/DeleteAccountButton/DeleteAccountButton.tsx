import { deleteUser } from "../../../api/users/DeleteUserAPI.ts";
import { RootState } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../../../features/users/user-slice.ts";
import { logoutUser } from "../../../api/users/LogoutUserAPI.ts";

export const DeleteAccountButton = () => {
	const id = useSelector((state: RootState) => state.users.user?.id);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleDeleteAccount = async () => {
		const logoutResponse = await logoutUser();

		if (logoutResponse.success) {
			const deleteResponse = await deleteUser(id);
			if (deleteResponse.success) {
				dispatch(clearUser());
				navigate("/login");
			} else {
				console.error("Deleting account failed");
			}
		} else {
			console.error("Logging out failed");
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
