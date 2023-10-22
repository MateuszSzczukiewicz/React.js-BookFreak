export const BookAcceptButton = () => {
	const handleAccept = () => {
		console.log("Accept");
	};

	return (
		<button
			className="focus:shadow-outline rounded bg-zinc-400 px-8 py-4 uppercase text-white opacity-70 transition hover:bg-zinc-800 focus:outline-none"
			type="button"
			onClick={handleAccept}
		>
			Dodaj
		</button>
	);
};
