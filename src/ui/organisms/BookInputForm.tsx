import { useState } from "react";

interface BookInputFormProps {
	onFormSubmit: (newTitle: string, newAuthor: string) => void;
	setIsFormVisible: (isVisible: boolean) => void;
}

export const BookInputForm = ({ onFormSubmit, setIsFormVisible }: BookInputFormProps) => {
	const [newTitle, setNewTitle] = useState<string>("");
	const [newAuthor, setNewAuthor] = useState<string>("");

	const handleAccept = () => {
		onFormSubmit(newTitle, newAuthor);

		setNewTitle("");
		setNewAuthor("");
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
			<div className="absolute left-1/2 top-1/2 flex h-80 w-[40rem] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center rounded-lg bg-white shadow-lg">
				<button className="self-end" onClick={handleDeny}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="mr-2 mt-2 h-8 w-8"
					>
						<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
				<div className="mb-4">
					<label className="mb-2 block text-sm font-bold text-gray-700">Tytuł książki:</label>
					<input
						className="focus:shadow-outline w-[20rem] appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow"
						id="title"
						type="text"
						placeholder="Wpisz tytuł..."
						value={newTitle}
						onChange={(e) => setNewTitle(e.target.value)}
					/>
				</div>
				<div className="mb-6">
					<label className="mb-2 block text-sm font-bold text-gray-700">Autor książki:</label>
					<input
						className="focus:shadow-outline mb-3 w-[20rem] appearance-none rounded border px-3 py-2 leading-tight text-zinc-700 shadow"
						id="author"
						type="text"
						placeholder="Wpisz autora..."
						value={newAuthor}
						onChange={(e) => setNewAuthor(e.target.value)}
					/>
				</div>
				<div className="flex items-center justify-between">
					<button
						className="transform rounded bg-zinc-800 px-8 py-4 uppercase text-white transition"
						type="button"
						onClick={handleAccept}
					>
						Dodaj
					</button>
				</div>
			</div>
		</>
	);
};
