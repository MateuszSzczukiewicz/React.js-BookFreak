import { useNavigate } from "react-router-dom";
import useUserData from "../../../hooks/useUserData.ts";

export const UsernameButton = () => {
	const { username } = useUserData();
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
