import { useContext } from "react";
import SingleProjectContext from "../../context/SingleProjectContext";

const ProjectInfo = ({ id }) => {
	const { singleProjectData: data } = useContext(SingleProjectContext);

	return (
		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-left">
				{/* Single project about details */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-primary-blue dark:text-primary-blue mb-2">
						{data[id].ProjectInfo.ClientHeading}
					</p>
					<ul className="leading-loose">
						{data[id].ProjectInfo.CompanyInfo.map((info) => {
							return (
								<li
									className="font-general-regular font-semibold text-ternary-dark dark:text-ternary-light"
									key={info.id}>
									<span>{info.title}: </span>
									<a
										href="/"
										key={info.detail}
										className={
											info.title === "Website" || info.title === "Phone"
												? "hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300"
												: ""
										}
										aria-label="Project Website and Phone">
										{info.details}
									</a>
								</li>
							);
						})}
					</ul>
				</div>

				{/* Single project description */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-primary-blue dark:text-primary-blue mb-2">
						{data[id].ProjectInfo.ObjectivesHeading}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						{data[id].ProjectInfo.ObjectivesDetails}
					</p>
				</div>

				{/* Single project technologies */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-primary-blue dark:text-primary-blue mb-2">
						{data[id].ProjectInfo.Technologies[0].title}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						{data[id].ProjectInfo.Technologies[0].techs.join(", ")}
					</p>
				</div>

				{/* Single project social sharing */}
				<div>
					<p className="font-general-regular text-2xl font-semibold text-primary-blue dark:text-primary-blue mb-2">
						{data[id].ProjectInfo.SocialSharingHeading}
					</p>
					<div className="flex items-center gap-3 mt-5">
						{data[id].ProjectInfo.SocialSharing.map((social) => {
							return (
								<a
									data-tooltip-target="tooltip-bottom"
									data-tooltip-placement="bottom"
									key={social.id}
									href={social.url}
									target="__blank"
									aria-label="Share Project"
									className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500">
									<span className="text-lg lg:text-2xl">{social.icon}</span>
								</a>
							);
						})}
					</div>
				</div>
			</div>

			{/*  Single project right section */}
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
				<p className="font-general-regular text-primary-blue dark:text-primary-blue text-2xl font-bold mb-7">
					{data[id].ProjectInfo.ProjectDetailsHeading}
				</p>
				{data[id].ProjectInfo.ProjectDetails.map((details) => {
					return (
						<>
							<p
								key={details.id}
								className="font-general-regular mb-5 text-xl text-ternary-dark dark:text-ternary-light">
								{details?.heading}
							</p>
							<p
								key={details.id}
								className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">
								{details.details}
							</p>
						</>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectInfo;
