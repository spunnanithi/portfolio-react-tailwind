// import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import { FiFileText } from "react-icons/fi";
// import developerLight from "../../images/developer.svg";
// import developerDark from "../../images/developer-dark.svg";
import { motion } from "framer-motion";
import { TypeAnimator } from "../reusable/TypingAnimation";
import programmer from "../../images/programmer.svg";

const AppBanner = () => {
	// const [activeTheme] = useThemeSwitcher();

	return (
		// Banner
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
			className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2">
			{/* Left text section */}
			<div className="w-full md:w-2/5 text-left">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: "easeInOut",
						duration: 0.9,
						delay: 0.1,
					}}
					className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-ternary-light uppercase">
					{/* text color blue 700 hex value */}
					Hello! I'm <span style={{ color: "#1976D2" }}>Sirasit</span>
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: "easeInOut",
						duration: 0.9,
						delay: 0.2,
					}}
					className="font-general-medium mt-4 text-lg md:text-xl lg:text-xl xl:text-2xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200">
					I am a <TypeAnimator />
				</motion.p>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: "easeInOut",
						duration: 0.9,
						delay: 0.25,
					}}
					className="font-general-medium mt-4 text-md md:text-lg lg:text-xl xl:text-2xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200">
					I'm passionate about developing feature-rich and intuitive software
					solutions.
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: "easeInOut",
						duration: 0.9,
						delay: 0.3,
					}}
					className="flex justify-center sm:block">
					<a
						href="/files/Sirasit_Punnanithi_Software_Engineer_Resume.pdf"
						target="_blank"
						rel="noreferrer"
						className="font-general-medium flex justify-center items-center w-36 sm:w-40 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-secondary-blue hover:bg-primary-blue text-gray-500 hover:text-white duration-500"
						aria-label="Download Resume">
						<FiFileText className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiFileText>
						<span className="text-sm sm:text-base font-general-medium duration-100">
							My Resume
						</span>
					</a>
				</motion.div>
			</div>

			{/* Developer Image */}
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
				className="w-full sm:w-3/5 text-right float-right mt-8 sm:mt-0">
				<img src={programmer} alt="Developer" />
			</motion.div>
		</motion.section>
	);
};

export default AppBanner;
