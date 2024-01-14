import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, SignUpSchemaType } from "../../../types/signUpSchema.type.ts";
import { UserFormType } from "../../../types/user.type.ts";
import { useRegisterUser } from "../../../hooks/useRegisterUser.ts";

export const RegisterForm = () => {
	const navigate = useNavigate();
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpSchemaType>({
		resolver: zodResolver(signUpSchema),
	});

	const registerUserMutation = useRegisterUser();

	const onSubmit = async ({ username, password }: UserFormType) => {
		try {
			navigate("/login");
			await registerUserMutation.mutateAsync({ username, password });
		} catch (e) {
			console.error("Registration Error:", e);
		}
	};

	return (
		<div className="w-full max-w-2xl">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
			>
				<div className="mb-4">
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
								placeholder="Adres e-mail"
								autoComplete="username"
							/>
						)}
					/>
					{errors.username && <p className="text-xs italic text-red-500">E-mail jest wymagany!</p>}
				</div>
				<div className="mb-4">
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
								placeholder="Hasło"
								autoComplete="new-password"
							/>
						)}
					/>
					{errors.password && <p className="text-xs italic text-red-500">Hasło jest wymagane!</p>}
				</div>
				<div className="mb-6">
					<label className="mb-2 block text-sm font-bold text-gray-700">Powtórz hasło</label>
					<Controller
						name="passwordConfirmation"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<input
								{...field}
								className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
								type="password"
								placeholder="Powtórz hasło"
								autoComplete="new-password"
							/>
						)}
					/>
					{errors.passwordConfirmation && (
						<p className="text-xs italic text-red-500">Powtórzone hasło jest wymagane!</p>
					)}
				</div>
				<div className="flex items-center justify-between">
					<button
						className="focus:shadow-outline rounded bg-zinc-700 px-4 py-2 font-bold text-white focus:outline-none"
						type="submit"
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
