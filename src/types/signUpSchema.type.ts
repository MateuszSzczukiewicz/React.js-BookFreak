import { z } from "zod";

export const signUpSchema = z
	.object({
		username: z.string().email("Niepoprawny adres email"),
		password: z.string().min(8, "Hasło musi mieć co najmniej 8 znaków"),
		passwordConfirmation: z.string(),
	})
	.refine((data) => data.password === data.passwordConfirmation, {
		message: "Hasła muszą być takie same!",
		path: ["passwordConfirmation"],
	});
export type SignUpSchemaType = z.infer<typeof signUpSchema>;
