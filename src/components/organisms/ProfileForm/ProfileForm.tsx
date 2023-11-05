import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updatePassword } from "../../../api/users/UpdatePasswordAPI.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export const ProfileForm = () => {
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const navigate = useNavigate();
	const id = useSelector((state: RootState) => state.users.user?.id);

	const handlePasswordChange = async () => {
		try {
			if (password === passwordConfirmation) {
				await updatePassword(id, password);
				navigate("/");
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
					<label className="mb-2 block text-sm font-bold text-gray-700">Nowe hasło</label>
					<input
						className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
						id="password"
						type="password"
						placeholder="Nowe hasło"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						autoComplete="new-password"
					/>
					{/*<p className="text-xs italic text-red-500">Please choose a password.</p>*/}
				</div>
				<div className="mb-6">
					<label className="mb-2 block text-sm font-bold text-gray-700">Powtórz nowe hasło</label>
					<input
						className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
						id="passwordConfirmation"
						type="password"
						placeholder="Powtórz nowe hasło"
						value={passwordConfirmation}
						onChange={(e) => setPasswordConfirmation(e.target.value)}
						autoComplete="new-password"
					/>
					{/*<p className="text-xs italic text-red-500">Please choose a password.</p>*/}
				</div>
				<div className="flex items-center justify-between">
					<button
						onClick={handlePasswordChange}
						className="focus:shadow-outline mx-auto rounded bg-zinc-700 px-4 py-2 font-bold text-white focus:outline-none"
						type="button"
					>
						Zapisz zmiany
					</button>
				</div>
			</form>
		</div>
	);
};
