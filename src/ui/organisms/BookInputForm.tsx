import { BookAcceptButton } from "../atoms/BookAcceptButton.tsx";

export const BookInputForm = () => {
	return (
		<div className="absolute left-0 top-0 z-50 flex h-screen w-screen bg-slate-100/20 opacity-90 backdrop-blur-3xl backdrop-filter">
			<div className="m-auto flex h-80 w-[40rem] flex-col items-center justify-center rounded-lg bg-white shadow-lg">
				<div className="mb-4">
					<label className="mb-2 block text-sm font-bold text-gray-700">Tytuł książki:</label>
					<input
						className="focus:shadow-outline w-[20rem] appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
						id="title"
						type="text"
						placeholder="Wpisz tytuł..."
					/>
				</div>
				<div className="mb-6">
					<label className="mb-2 block text-sm font-bold text-gray-700">Autor książki:</label>
					<input
						className="focus:shadow-outline mb-3 w-[20rem] appearance-none rounded border px-3 py-2 leading-tight text-zinc-700 shadow focus:outline-none"
						id="author"
						type="text"
						placeholder="Wpisz autora..."
					/>
				</div>
				<div className="flex items-center justify-between">
					<BookAcceptButton />
				</div>
			</div>
		</div>
	);
};
