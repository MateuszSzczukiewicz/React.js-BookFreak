import { useNavigate } from "react-router-dom";
import useClearUser from "../../../hooks/useClearUser.ts";

export const LogoutButton = () => {
	const navigate = useNavigate();
	const clearUserData = useClearUser();

	const handleLogout = async () => {
		clearUserData();
		navigate("/");
	};

	return (
		<button onClick={handleLogout} className="pr-5 font-semibold uppercase text-zinc-900 md:pr-20">
			wyloguj
		</button>
	);
};
