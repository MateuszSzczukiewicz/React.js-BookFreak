import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../api/users/RegisterUserAPI.ts";

export const RegisterForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const navigate = useNavigate();

	const handleRegistration = async () => {
		try {
			if (password === passwordConfirmation) {
				await registerUser(username, password);
				navigate("/login");
			} else {
				console.error("Passwords do not match");
			}
		} catch (e) {
			console.error("Registration Error:", e);
		}
	};

	return (
		<div className="w-full max-w-2xl">
			<form className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
				<div className="mb-4">
					<label className="mb-2 block text-sm font-bold text-gray-700">Adres e-mail</label>
					<input
						className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
						id="username"
						type="text"
						placeholder="Adres e-mail"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className="mb-4">
					<label className="mb-2 block text-sm font-bold text-gray-700">Hasło</label>
					<input
						className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
						id="password"
						type="password"
						placeholder="Hasło"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					{/*<p className="text-xs italic text-red-500">Please choose a password.</p>*/}
				</div>
				<div className="mb-6">
					<label className="mb-2 block text-sm font-bold text-gray-700">Powtórz hasło</label>
					<input
						className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
						id="password"
						type="password"
						placeholder="Hasło"
						value={passwordConfirmation}
						onChange={(e) => setPasswordConfirmation(e.target.value)}
					/>
					{/*<p className="text-xs italic text-red-500">Please choose a password.</p>*/}
				</div>
				<div className="flex items-center justify-between">
					<button
						onClick={handleRegistration}
						className="focus:shadow-outline rounded bg-zinc-700 px-4 py-2 font-bold text-white focus:outline-none"
						type="button"
					>
						Utwórz konto
					</button>
					<button
						onClick={() => navigate("/login")}
						className="inline-block align-baseline text-sm font-bold text-zinc-800"
					>
						Zaloguj się
					</button>
				</div>
			</form>
		</div>
	);
};
