import { useDispatch } from "react-redux";
import { logoutUser } from "../../../api/users/LogoutUserAPI.ts";
import { clearUser } from "../../../features/users/user-slice.ts";
import { useNavigate } from "react-router-dom";

export const LogoutButton = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = async () => {
		const response = await logoutUser();
		if (response.success) {
			dispatch(clearUser());
			navigate("/login");
		} else {
			console.error("Logout failed");
		}
	};

	return (
		<button onClick={handleLogout} className="pr-5 font-semibold uppercase text-zinc-900 md:pr-20">
			wyloguj
		</button>
	);
};
