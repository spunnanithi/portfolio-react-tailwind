import { useState, createContext } from "react";
import { singleBlogData as singleBlogDataJson } from "../data/singleBlogData";

const SingleBlogContext = createContext();

export const SingleProjectProvider = ({ children }) => {
	const [singleBlogData, setSingleBlogData] = useState(singleBlogDataJson);

	return (
		<SingleBlogContext.Provider value={{ singleBlogData, setSingleBlogData }}>
			{children}
		</SingleBlogContext.Provider>
	);
};

export default SingleBlogContext;
