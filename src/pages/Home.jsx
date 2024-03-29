import { Link } from "react-router-dom";
import AppBanner from "../components/shared/AppBanner";
import ProjectsHomeGrid from "../components/projects/ProjectsHomeGrid";
import { ProjectsProvider } from "../context/ProjectsContext";
import Button from "../components/reusable/Button";

// ! Uncomment below if you want to display MORE THAN three projects on Home page
// ! Insert component between ProjectsProvider
// import ProjectsGrid from "../components/projects/ProjectsGrid";

const Home = () => {
	return (
		<div className="container mx-auto">
			<AppBanner></AppBanner>

			<ProjectsProvider>
				<ProjectsHomeGrid />
			</ProjectsProvider>

			<div className="mt-8 sm:mt-10 flex justify-center">
				<Link
					to="/projects"
					className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-primary-blue hover:bg-secondary-blue focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
					aria-label="More Projects">
					<Button title="More Projects" />
				</Link>
			</div>
		</div>
	);
};

export default Home;
