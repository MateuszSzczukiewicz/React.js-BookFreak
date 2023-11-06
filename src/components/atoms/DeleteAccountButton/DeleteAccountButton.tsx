import { deleteUser } from "../../../api/users/DeleteUserAPI.ts";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const DeleteAccountButton = () => {
	const id = useSelector((state: RootState) => state.users.user?.id);
	const navigate = useNavigate();

	const handleDeleteAccount = async () => {
		await deleteUser(id);
		navigate("/login");
	};

	return (
		<button onClick={handleDeleteAccount} className="mt-4 font-semibold uppercase text-red-950">
			Usuń konto
		</button>
	);
};
