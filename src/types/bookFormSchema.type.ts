import { z } from "zod";
import { BookShelvesEnum } from "./bookShelves.enum.ts";

const bookShelvesTuple = Object.values(BookShelvesEnum) as [string, ...string[]];

export const bookFormSchema = z.object({
	newTitle: z.string(),
	newAuthor: z.string(),
	newBookShelf: z.enum(bookShelvesTuple),
});

export type BookFormSchemaType = z.infer<typeof bookFormSchema>;
