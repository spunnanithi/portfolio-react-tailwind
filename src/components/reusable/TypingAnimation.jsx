import React from "react";
import { TypeAnimation } from "react-type-animation";

export const TypeAnimator = () => {
	return (
		<TypeAnimation
			preRenderFirstString={true}
			sequence={[
				"Full-stack Software Engineer",
				1500,
				"Front-end Software Engineer",
				1500,
				"Back-end Software Engineer",
				1500,
				"Life-long Learner",
				1500,
				"Teamplayer",
				1500,
			]}
			speed={60}
			style={{ color: "#1976D2", fontWeight: "bold" }}
			repeat={Infinity}
		/>
	);
};
