import { useForm, Controller } from "react-hook-form";
import { loginUser } from "../../../api/users/LoginUserAPI.ts";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAccessToken, setRefreshToken, setUser } from "../../../features/users/user-slice.ts";
import { signInSchema, SignInSchemaType } from "../../../types/signInSchema.type.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserFormType } from "../../../types/user.type.ts";
import { useState } from "react";

export const LoginForm = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [loginError, setLoginError] = useState("");

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<SignInSchemaType>({
		resolver: zodResolver(signInSchema),
	});

	const onSubmit = async ({ username, password }: UserFormType) => {
		try {
			const response = await loginUser(username, password);
			if (response.success) {
				dispatch(setUser(response.user));
				dispatch(setAccessToken(response.token));
				dispatch(setRefreshToken(response.refreshToken));
				navigate("/");
			} else {
				setLoginError("Dane logowania nieprawidłowe");
				console.error("Login failed");
			}
		} catch (e) {
			console.error("Login Error:", e);
		}
	};

	return (
		<div className="w-full max-w-2xl">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
			>
				<div className="mb-6">
					<label className="mb-2 block text-sm font-bold text-gray-700">Adres e-mail</label>
					<Controller
						name="username"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<input
								{...field}
								className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
								type="text"
								placeholder="example@example.pl"
								autoComplete="username"
							/>
						)}
					/>
					{errors.username && <p className="text-xs italic text-red-500">E-mail jest wymagany</p>}
				</div>
				<div className="mb-6">
					<label className="mb-2 block text-sm font-bold text-gray-700">Hasło</label>
					<Controller
						name="password"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<input
								{...field}
								className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
								type="password"
								placeholder="1234567890"
								autoComplete="current-password"
							/>
						)}
					/>
					{errors.password && <p className="text-xs italic text-red-500">Hasło jest wymagane!</p>}
					{loginError && <p className="text-xs italic text-red-500">{loginError}</p>}
				</div>
				<div className="flex items-center justify-between">
					<button
						className="focus:shadow-outline rounded bg-zinc-700 px-4 py-2 font-bold text-white focus:outline-none"
						type="submit"
					>
						Zaloguj się
					</button>
					<button
						onClick={() => navigate("/register")}
						className="inline-block align-baseline text-sm font-bold text-zinc-800"
					>
						Utwórz konto
					</button>
				</div>
			</form>
		</div>
	);
};
