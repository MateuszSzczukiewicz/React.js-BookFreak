import { z } from "zod";

export const bookFormSchema = z.object({
	newTitle: z.string(),
	newAuthor: z.string(),
});
export type BookFormSchemaType = z.infer<typeof bookFormSchema>;
