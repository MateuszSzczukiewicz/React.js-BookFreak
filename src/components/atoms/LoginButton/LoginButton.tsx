import { useNavigate } from "react-router-dom";

export const LoginButton = () => {
	const navigate = useNavigate();

	return (
		<button
			onClick={() => navigate("/")}
			className="mx-auto flex rounded bg-zinc-700 px-4 py-2 font-bold text-white"
			type="button"
		>
			Zaloguj się
		</button>
	);
};
