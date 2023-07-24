const AboutTechSingle = ({ title, image }) => {
	return (
		<div className="mb-5">
			<img
				src={image}
				className="w-64 py-5 px-10 border bg-gray-400 border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg cursor-pointer"
				alt={title}
			/>
			<span className="font-general-semibold text-secondary-dark dark:text-secondary-light">
				{title}
			</span>
		</div>
	);
};

export default AboutTechSingle;
