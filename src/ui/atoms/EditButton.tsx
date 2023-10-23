import { useState } from "react";
import axios from "axios";
import { BookInputForm } from "../organisms/BookInputForm.tsx";

export const EditButton = ({ _id }: { _id: string }) => {
	const [isFormVisible, setIsFormVisible] = useState<boolean>(false);

	const handleEdit = () => {
		setIsFormVisible(true);
	};

	const handleFormSubmit = async (newTitle: string, newAuthor: string): Promise<void> => {
		try {
			await axios.put(`http://localhost:8000/api/books/${_id}`, {
				title: newTitle,
				author: newAuthor,
			});
		} catch (e) {
			console.error("Error edit item:", e);
		}

		setIsFormVisible(false);
	};

	return (
		<div>
			{isFormVisible ? (
				<BookInputForm onFormSubmit={handleFormSubmit} setIsFormVisible={setIsFormVisible} />
			) : (
				<button onClick={handleEdit}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="mr-2 h-6 w-6 opacity-50 transition hover:opacity-100"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
						/>
					</svg>
				</button>
			)}
		</div>
	);
};
