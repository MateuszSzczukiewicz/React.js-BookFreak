import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useNavigate } from "react-router-dom";

export const UsernameButton = () => {
	const username = useSelector((state: RootState) => state.users.user?.username);
	const navigate = useNavigate();

	return (
		<button
			onClick={() => navigate("/profile")}
			className="font-bold uppercase text-zinc-900 sm:block"
		>
			{username}
		</button>
	);
};
