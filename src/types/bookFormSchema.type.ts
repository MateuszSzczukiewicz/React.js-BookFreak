import { z } from "zod";

export const bookFormSchema = z.object({
	newTitle: z.string(),
	newAuthor: z.string(),
	newBookImage: z.string().optional(),
});
export type BookFormSchemaType = z.infer<typeof bookFormSchema>;
