import { useForm, Controller } from "react-hook-form";
import { BookInputFormType } from "../../../types/bookInputForm.type.ts";
import { BookFormType } from "../../../types/book.type.ts";
import { bookFormSchema, BookFormSchemaType } from "../../../types/bookFormSchema.type.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { XMark } from "../../../assets/icons/x-mark.tsx";

export const BookInputForm = ({ onFormSubmit, setIsFormVisible }: BookInputFormType) => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<BookFormSchemaType>({
		resolver: zodResolver(bookFormSchema),
	});

	const handleAccept = ({ newTitle, newAuthor }: BookFormType) => {
		onFormSubmit(newTitle, newAuthor);
	};

	const handleDeny = () => {
		setIsFormVisible(false);
	};

	return (
		<>
			<div
				className="absolute left-0 top-0 flex h-screen w-screen bg-slate-100/20 opacity-90 backdrop-blur-3xl backdrop-filter"
				onClick={handleDeny}
			></div>
			<div className="absolute left-1/2 top-1/2 flex h-96 w-[40rem] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center rounded-lg bg-white shadow-lg">
				<button className="m-2 scale-125 self-end" onClick={handleDeny}>
					<XMark />
				</button>
				<form onSubmit={handleSubmit(handleAccept)}>
					<div className="mb-4">
						<label className="mb-2 block text-sm font-bold text-gray-700">Tytuł książki:</label>
						<Controller
							name="newTitle"
							control={control}
							render={({ field }) => (
								<input
									{...field}
									className="focus:shadow-outline w-[20rem] appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow"
									id="title"
									type="text"
									placeholder="Wpisz tytuł..."
								/>
							)}
						/>
						{errors.newTitle && <p className="text-xs italic text-red-500">Tytuł jest wymagany!</p>}
					</div>
					<div className="mb-6">
						<label className="mb-2 block text-sm font-bold text-gray-700">Autor książki:</label>
						<Controller
							name="newAuthor"
							control={control}
							render={({ field }) => (
								<input
									{...field}
									className="focus:shadow-outline mb-3 w-[20rem] appearance-none rounded border px-3 py-2 leading-tight text-zinc-700 shadow"
									id="author"
									type="text"
									placeholder="Wpisz autora..."
								/>
							)}
						/>
						{errors.newAuthor && (
							<p className="text-xs italic text-red-500">Autor jest wymagany!</p>
						)}
					</div>
					<div className="flex">
						<button
							className="mx-auto transform rounded bg-zinc-800 px-8 py-4 uppercase text-white transition"
							type="submit"
						>
							Dodaj
						</button>
					</div>
				</form>
			</div>
		</>
	);
};
