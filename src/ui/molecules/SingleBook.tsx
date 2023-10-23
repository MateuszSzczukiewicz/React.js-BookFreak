import { Tools } from "./Tools.tsx";

interface SingleBookProps {
	_id: string;
	title: string;
	author: string;
}

export const SingleBook = ({ title, author, _id }: SingleBookProps) => {
	return (
		<div className="mx-auto flex h-56 w-44 flex-col rounded-2xl bg-zinc-200 text-2xl">
			<Tools _id={_id} />
			<div className="items-center justify-center text-center">
				<p>{title}</p>
				<p>{author}</p>
			</div>
		</div>
	);
};
