import { useForm, Controller } from "react-hook-form";
import { BookInputFormType } from "../../../types/bookInputForm.type.ts";
import { BookFormType } from "../../../types/book.type.ts";
import { bookFormSchema, BookFormSchemaType } from "../../../types/bookFormSchema.type.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { XMark } from "../../../assets/icons/x-mark.tsx";
import { ChangeEvent, useState } from "react";
import { convertToBase64 } from "../../../utils/convertToBase64.ts";

export const BookInputForm = ({ onFormSubmit, setIsFormVisible }: BookInputFormType) => {
	const [newBookImage, setNewBookImage] = useState<string | null>(null);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<BookFormSchemaType>({
		resolver: zodResolver(bookFormSchema),
	});

	const handleAccept = ({ newTitle, newAuthor }: BookFormType) => {
		onFormSubmit(newTitle, newAuthor, newBookImage);
	};

	const handleDeny = () => {
		setIsFormVisible(false);
	};

	const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
		convertToBase64(e, setNewBookImage);
	};

	const handleRemoveImage = () => {
		setNewBookImage(null);
	};

	return (
		<>
			<div
				className="absolute left-0 top-0 z-50 flex h-screen w-screen bg-slate-100/20 opacity-90 backdrop-blur-3xl backdrop-filter"
				onClick={handleDeny}
			></div>
			<div className="absolute left-1/2 top-1/2 z-50 flex w-[40rem] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center rounded-lg bg-white shadow-lg">
				<button className="m-2 scale-125 self-end" onClick={handleDeny}>
					<XMark />
				</button>
				<form onSubmit={handleSubmit(handleAccept)}>
					<div className="mb-4 flex flex-col">
						<label className="mx-auto mb-2 block text-sm font-bold text-gray-700">
							Tytuł książki:
						</label>
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
					<div className="mb-4 flex flex-col">
						<label className="mx-auto mb-2 block text-sm font-bold text-gray-700">
							Autor książki:
						</label>
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
					{newBookImage ? (
						<div className="mb-4 flex flex-col">
							<img src={newBookImage} alt="Okładka książki" className="mx-auto mt-2 max-w-[5rem]" />
							<button
								onClick={handleRemoveImage}
								className="mx-auto mt-2 text-sm font-semibold text-red-950"
							>
								Usuń zdjęcie
							</button>
						</div>
					) : (
						<div className="mb-4">
							<Controller
								name="newBookImage"
								control={control}
								render={({ field }) => (
									<div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pb-6 pt-5">
										<div className="space-y-1 text-center">
											<input
												{...field}
												className="sr-only"
												id="bookImage"
												type="file"
												accept="image/*"
												onChange={handleImageChange}
											/>
											<label htmlFor="bookImage" className="cursor-pointer">
												<div className="h-full w-full text-sm text-gray-600">
													Kliknij, by wybrać zdjęcie
												</div>
											</label>
										</div>
									</div>
								)}
							/>
						</div>
					)}
					<div className="flex">
						<button
							className="mx-auto mb-4 transform rounded bg-zinc-800 px-8 py-4 uppercase text-white transition"
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
