import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import {
	changePasswordSchema,
	changePasswordSchemaType,
} from "../../../types/changePasswordSchema.type.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeUserPasswordType } from "../../../types/user.type.ts";
import { useUpdatePassword } from "../../../hooks/useUpdatePassword.ts";
import { Spinner } from "../../atoms/Spinner/Spinner.tsx";
import useUserData from "../../../hooks/useUserData.ts";

export const ProfileForm = () => {
	const navigate = useNavigate();
	const { userId } = useUserData();
	const updatePasswordMutation = useUpdatePassword();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<changePasswordSchemaType>({
		resolver: zodResolver(changePasswordSchema),
	});

	const onSubmit = async ({ password }: ChangeUserPasswordType) => {
		try {
			await updatePasswordMutation.mutateAsync({ userId, password });
			navigate("/");
		} catch (e) {
			console.error("Registration Error:", e);
		}
	};

	return (
		<div className="w-full max-w-2xl">
			{updatePasswordMutation.isLoading && <Spinner />}
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="mb-4 flex flex-col rounded bg-white px-8 pb-8 shadow-md sm:pt-6"
			>
				<h2 className="mx-auto mb-4 text-xl font-semibold uppercase">Zmień hasło</h2>
				<div className="mb-4">
					<label className="mb-2 block text-sm font-bold text-gray-700">Nowe hasło</label>
					<Controller
						name="password"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<input
								{...field}
								className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
								id="password"
								type="password"
								placeholder="Nowe hasło"
								autoComplete="new-password"
							/>
						)}
					/>
					{errors.password && (
						<p className="text-xs italic text-red-500">{errors.password.message}</p>
					)}
				</div>
				<div className="mb-6">
					<label className="mb-2 block text-sm font-bold text-gray-700">Powtórz nowe hasło</label>
					<Controller
						name="passwordConfirmation"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<input
								{...field}
								className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
								id="passwordConfirmation"
								type="password"
								placeholder="Powtórz nowe hasło"
								autoComplete="new-password"
							/>
						)}
					/>
					{errors.passwordConfirmation && (
						<p className="text-xs italic text-red-500">{errors.passwordConfirmation.message}</p>
					)}
				</div>
				<div className="flex items-center justify-between">
					<button
						className="focus:shadow-outline mx-auto rounded bg-green-900 px-4 py-2 font-bold text-white transition hover:bg-green-950 focus:outline-none"
						type="submit"
					>
						Zapisz zmiany
					</button>
				</div>
			</form>
		</div>
	);
};
