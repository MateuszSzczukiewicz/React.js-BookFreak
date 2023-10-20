export const SingleBook = ({ title, author }: { title: string; author: string }) => {
	return (
		<div className="mx-auto flex h-56 w-44 items-center justify-center rounded-2xl bg-zinc-200 text-center text-2xl">
			<div>
				<p>{title}</p>
				<p>{author}</p>
			</div>
		</div>
	);
};
