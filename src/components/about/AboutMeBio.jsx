import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";
import sirasit from "../../images/sirasit-picture.png";

const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-2/5 mb-7 sm:mb-0">
				<img
					src={sirasit}
					className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
					alt="sirasit"
				/>
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">
				{aboutMe.map((bio) => (
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						key={bio.id}>
						{bio.bio}
					</p>
				))}
			</div>
		</div>
	);
};

export default AboutMeBio;
