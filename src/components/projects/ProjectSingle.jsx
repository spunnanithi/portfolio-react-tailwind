import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectSingle = ({ id, title, category, image, description }) => {
	let lowercaseTitle = title.split(" ").join("").toLowerCase();

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: "easeInOut",
				duration: 0.7,
				delay: 0.15,
			}}>
			<Link to={`/projects/${lowercaseTitle}`} aria-label="Single Project">
				<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer hover:scale-110 mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
					<div>
						<img
							src={image}
							style={{ height: "15em", width: "30em" }}
							className="rounded-t-xl border-b-2"
							alt="Single Project"
						/>
					</div>
					<div className="text-center px-4 py-6">
						<p className="font-general-medium text-2xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2">
							{title}
						</p>
						<span className="text-lg font-medium text-primary-blue dark:text-primary-blue">
							{category}
						</span>
						<p className="overflow-y-auto max-h-36 text-md text-ternary-dark dark:text-gray-200">
							{description}
						</p>
						{/* <p className="mt-5 inline-flex items-center text-ternary-dark dark:text-ternary-light">
							Click the card for more information!
						</p> */}
						<p
							href="#"
							className="mt-5 font-medium text-primary-blue hover:text-secondary-blue dark:text-primary-blue">
							Click for more information!
						</p>
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default ProjectSingle;
