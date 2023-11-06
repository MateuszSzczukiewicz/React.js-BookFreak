import banner from "../../../assets/images/banner.png";
import { ReactNode } from "react";

export const UnauthenticatedAppTemplate = ({ children }: { children: ReactNode }) => {
	return (
		<div className="flex justify-around">
			<div className="flex w-full flex-col items-center justify-center gap-16 md:gap-20 xl:mt-40">
				<img src={banner} alt="Baner" className="xl:w-[30rem]" />
				{children}
			</div>
		</div>
	);
};
