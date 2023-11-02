import { RegisterForm } from "../components/organisms/RegisterForm/RegisterForm.tsx";
import banner from "../assets/images/banner.png";

export const RegisterPage = () => {
	return (
		<div className="flex justify-around">
			<div className="flex w-full flex-col items-center justify-center gap-16 md:gap-20 xl:mt-40">
				<img src={banner} alt="Baner" className="xl:w-[30rem]" />
				<RegisterForm />
			</div>
		</div>
	);
};
