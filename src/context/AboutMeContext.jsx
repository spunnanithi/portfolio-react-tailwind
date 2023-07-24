import { useState, createContext } from "react";
import { aboutMeData } from "../data/aboutMeData";
import { techHeading as techPageHeading } from "../data/techData";
import { techData as techDataJson } from "../data/techData";

const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
	const [aboutMe, setAboutMe] = useState(aboutMeData);

	const techsHeading = techPageHeading;

	const [techsData, setTechsData] = useState(techDataJson);

	return (
		<AboutMeContext.Provider
			value={{
				aboutMe,
				setAboutMe,
				techsHeading,
				techsData,
				setTechsData,
			}}>
			{children}
		</AboutMeContext.Provider>
	);
};

export default AboutMeContext;
