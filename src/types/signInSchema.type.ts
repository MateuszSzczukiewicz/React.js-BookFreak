import { z } from "zod";

export const signInSchema = z.object({
	username: z.string().email("Niepoprawny adres email"),
	password: z.string(),
});
export type SignInSchemaType = z.infer<typeof signInSchema>;
