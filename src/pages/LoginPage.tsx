import { LoginForm } from "../components/organisms/LoginForm/LoginForm.tsx";
import banner from "../assets/images/banner.png";

export const LoginPage = () => {
	return (
		<div className="flex justify-around">
			<div className="flex w-full flex-col items-center justify-center gap-16 md:gap-20 xl:mt-40">
				<img src={banner} alt="Baner" className="xl:w-[30rem]" />
				<LoginForm />
			</div>
		</div>
	);
};
