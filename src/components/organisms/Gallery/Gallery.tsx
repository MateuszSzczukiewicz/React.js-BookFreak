import { Carousel } from "react-responsive-carousel";

export const Gallery = () => {
	const images: string[] = [];

	const galleryOptions = {
		showStatus: false,
		showThumbs: false,
		infiniteLoop: true,
	};

	return (
		<div className="m-20 hidden h-[25rem] w-[100rem] bg-zinc-950 xl:block">
			<Carousel {...galleryOptions}>
				{images.map((image, index) => (
					<img key={index} src={image} alt="App preview" />
				))}
			</Carousel>
		</div>
	);
};
