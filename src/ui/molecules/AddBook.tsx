import axios from "axios";

export const AddBook = () => {
	const HandleSave = async () => {
		const newTitle: string | null = prompt("Enter new title");
		const newAuthor: string | null = prompt("Enter new author");

		try {
			await axios.post(`http://localhost:8000/api/books`, {
				title: newTitle,
				author: newAuthor,
			});
		} catch (e) {
			console.error("Error deleting item:", e);
		}
	};

	return (
		<div className="mx-auto flex h-56 w-44 items-center justify-center rounded-2xl bg-zinc-200 text-center text-2xl">
			<button onClick={HandleSave}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1}
					stroke="currentColor"
					className="h-16 w-16 transition hover:scale-110"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</button>
		</div>
	);
};
