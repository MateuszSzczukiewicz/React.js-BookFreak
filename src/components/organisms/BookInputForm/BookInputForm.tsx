import { useForm, Controller } from "react-hook-form";
import { BookInputFormType } from "../../../types/bookInputForm.type.ts";
import { BookFormType } from "../../../types/bookInputForm.type";
import { bookFormSchema, BookFormSchemaType } from "../../../types/bookFormSchema.type.ts";
import { XMark } from "../../../assets/icons/x-mark.tsx";
import { ChangeEvent, useState } from "react";
import { convertToBase64 } from "../../../utils/convertToBase64.ts";
import { BookShelvesEnum } from "../../../types/bookShelves.enum.ts";
import { zodResolver } from "@hookform/resolvers/zod";

export const BookInputForm = ({ onFormSubmit, setIsFormVisible }: BookInputFormType) => {
	const [newBookImage, setNewBookImage] = useState<string | null>(null);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<BookFormSchemaType>({
		resolver: zodResolver(bookFormSchema),
	});

	const handleFormSubmit = async (data: BookFormType) => {
		const newData = { ...data, newBookImage };
		onFormSubmit(newData);
	};

	const handleDeny = () => {
		setIsFormVisible(false);
	};

	const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
		convertToBase64(e, setNewBookImage);
		console.log(e.target.files);
	};

	const handleRemoveImage = () => {
		setNewBookImage(null);
	};

	return (
		<>
			<div
				className="fixed left-0 top-0 z-50 flex h-screen w-screen bg-slate-100/20 opacity-90 backdrop-blur-3xl backdrop-filter"
				onClick={handleDeny}
			></div>
			<div className="fixed left-1/2 top-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center rounded-lg bg-white p-4 shadow-lg md:w-[40rem]">
				<button className="m-2 scale-125 self-end" onClick={handleDeny}>
					<XMark />
				</button>
				<form onSubmit={handleSubmit(handleFormSubmit)}>
					<div className="mb-4 flex flex-col">
						<label className="mx-auto mb-2 block text-sm font-bold text-gray-700">
							Tytuł książki:
						</label>
						<Controller
							name="newTitle"
							control={control}
							defaultValue=""
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
					<div className=" flex flex-col">
						<label className="mx-auto mb-2 block text-sm font-bold text-gray-700">
							Autor książki:
						</label>
						<Controller
							name="newAuthor"
							control={control}
							defaultValue=""
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
					<div className="mb-4 flex flex-col">
						<label className="mx-auto mb-2 block text-sm font-bold text-gray-700">Półka:</label>
						<Controller
							name="newBookShelf"
							control={control}
							defaultValue={BookShelvesEnum.READING}
							render={({ field }) => (
								<select
									{...field}
									className="focus:shadow-outline w-[20rem] appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow"
								>
									<option
										className="text-gray-700 hover:bg-zinc-500"
										value={BookShelvesEnum.READING}
									>
										Teraz czytam
									</option>
									<option value={BookShelvesEnum.READ}>Przeczytane</option>
									<option value={BookShelvesEnum.WANT_TO_READ}>Chcę przeczytać</option>
								</select>
							)}
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="bookImage"
							className="mx-auto mb-2 block text-sm font-bold text-gray-700"
						>
							Okładka książki:
						</label>
						{newBookImage ? (
							<div className="flex flex-col">
								<img
									src={newBookImage}
									alt="Okładka książki"
									className="mx-auto mt-2 max-w-[5rem]"
								/>
								<button
									onClick={handleRemoveImage}
									className="mx-auto mt-2 text-sm font-semibold text-red-950"
								>
									Usuń zdjęcie
								</button>
							</div>
						) : (
							<div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pb-6 pt-5">
								<div className="space-y-1 text-center">
									<input
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
					</div>
					<div className="flex">
						<button
							className="mx-auto mb-4 transform rounded bg-green-900 px-8 py-4 uppercase text-white transition hover:bg-green-950"
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
