import { useContext } from "react";
import SingleProjectContext from "../../context/SingleProjectContext";
// import { projectsData } from "../../data/projects";

const ProjectGallery = ({ id }) => {
	const { singleProjectData } = useContext(SingleProjectContext);
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			{singleProjectData[id].ProjectImages.map((data) => {
				return (
					<div className="mb-10 sm:mb-0" key={data.id}>
						<img
							src={data.img}
							style={{ height: "15rem", width: "30rem" }}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
							alt={data.title}
							key={data.id}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ProjectGallery;
