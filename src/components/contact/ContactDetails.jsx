import { FiMapPin, FiMail } from "react-icons/fi";
import Lottie from "react-lottie";
import animationData from "../reusable/animation-text-message.json";

const contacts = [
	{
		id: 1,
		name: "Las Vegas, NV, USA (Open to relocate)",
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: "spunnanithi@gmail.com",
		icon: <FiMail />,
	},
];

const ContactDetails = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		setSpeed: 0.1,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	return (
		<div className="w-full lg:w-1/2">
			<div className="text-left max-w-xl px-6">
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					Contact Details
				</h2>
				<ul className="font-general-regular">
					{contacts.map((contact) => (
						<li className="flex " key={contact.id}>
							<i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
								{contact.icon}
							</i>
							<span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
								{contact.name}
							</span>
						</li>
					))}
				</ul>
				<div className="mt-20">
					<Lottie options={defaultOptions} width={400} height={400} />
				</div>
			</div>
		</div>
	);
};

export default ContactDetails;
