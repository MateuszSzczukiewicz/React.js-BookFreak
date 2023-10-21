import { Tools } from "./Tools.tsx";

export const SingleBook = ({ title, author }: { title: string; author: string }) => {
	return (
		<div className="mx-auto flex h-56 w-44 flex-col rounded-2xl bg-zinc-200 text-2xl">
			<Tools />
			<div className="items-center justify-center text-center">
				<p>{title}</p>
				<p>{author}</p>
			</div>
		</div>
	);
};
