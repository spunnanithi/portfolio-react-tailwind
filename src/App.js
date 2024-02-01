import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AppFooter from "./components/shared/AppFooter";
import AppHeader from "./components/shared/AppHeader";
import "./css/App.css";
import UseScrollToTop from "./hooks/useScrollToTop";
import Loading from "./components/reusable/Loading.jsx";

const About = lazy(() => import("./pages/AboutMe"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectSingle = lazy(() => import("./pages/ProjectSingle.jsx"));

function App() {
	return (
		<AnimatePresence>
			<div className="bg-ternary-light-light dark:bg-primary-dark transition duration-300">
				<Router>
					<ScrollToTop />
					<AppHeader />
					<Suspense fallback={<Loading />}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="projects" element={<Projects />} />
							<Route
								path="projects/playboxx"
								element={<ProjectSingle id={0} />}
							/>
							<Route
								path="projects/cartropolis"
								element={<ProjectSingle id={1} />}
							/>
							<Route
								path="projects/conferencego"
								element={<ProjectSingle id={2} />}
							/>
							<Route
								path="projects/calculatorapp"
								element={<ProjectSingle id={3} />}
							/>
							<Route
								path="projects/headgesports"
								element={<ProjectSingle id={4} />}
							/>
							<Route path="about" element={<About />} />
							<Route path="contact" element={<Contact />} />
						</Routes>
					</Suspense>
					<AppFooter />
				</Router>
				<UseScrollToTop />
			</div>
		</AnimatePresence>
	);
}

export default App;
