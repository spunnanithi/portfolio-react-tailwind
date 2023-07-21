// NOTE: This scroll to top is the actual working scroll to to when user clicks on the circle arrow that appears when use scrolls down.
// The other `ScrollToTop` component in components folder is for the default react scroll to top behavior on route visit.

import { useState, useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";
import useThemeSwitcher from "./useThemeSwitcher";

const useScrollToTop = () => {
	const [showScroll, setShowScroll] = useState(false);

	const [activeTheme] = useThemeSwitcher();

	useEffect(() => {
		window.addEventListener("scroll", scrollToTop);
		return function cleanup() {
			window.removeEventListener("scroll", scrollToTop);
		};
	});

	const scrollToTop = () => {
		if (!showScroll && window.pageYOffset > 400) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 400) {
			setShowScroll(false);
		}
	};

	const backToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	window.addEventListener("scroll", scrollToTop);

	return (
		<>
			<FiChevronUp
				className="scrollToTop"
				onClick={backToTop}
				style={{
					height: 45,
					width: 45,
					borderRadius: 50,
					border: "1px solid #1976D2",
					right: 50,
					bottom: 50,
					display: showScroll ? "flex" : "none",
					padding: 5,
					color: "#1976D2",
				}}
			/>
		</>
	);
};

export default useScrollToTop;
