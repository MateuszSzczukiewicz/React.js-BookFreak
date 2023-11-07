import { ChangeEvent } from "react";

export const convertToBase64 = (
	e: ChangeEvent<HTMLInputElement>,
	setNewBookImage: (image: string | null) => void,
) => {
	if (e.target) {
		const file = e.target.files?.[0];
		if (file) {
			if (file.size > 60 * 1024) {
				alert("Plik jest za duży. Maksymalny rozmiar to 60KB.");
				return;
			}
			const reader = new FileReader();
			reader.onload = (e: ProgressEvent<FileReader>) => {
				if (e.target) {
					const base64String = e.target.result as string;
					setNewBookImage(base64String);
				}
			};
			reader.readAsDataURL(file);
		}
	}
};
