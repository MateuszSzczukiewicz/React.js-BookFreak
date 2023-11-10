import { deleteUser } from "../../../api/users/DeleteUserAPI.ts";
import { RootState } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../../../features/users/user-slice.ts";

export const DeleteAccountButton = () => {
	const id = useSelector((state: RootState) => state.users.user?.id);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleDeleteAccount = async () => {
		const isConfirmed = window.confirm("Czy na pewno chcesz usunąć konto?");

		if (isConfirmed) {
			await deleteUser(id);
			dispatch(clearUser());
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
