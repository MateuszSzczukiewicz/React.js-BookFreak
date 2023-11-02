import { useNavigate } from "react-router-dom";

export const LogoutButton = () => {
	const navigate = useNavigate();

	return (
		<button
			onClick={() => navigate("/login")}
			className="pr-5 font-semibold uppercase text-zinc-900 md:pr-20"
		>
			wyloguj
		</button>
	);
};
