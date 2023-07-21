import React from "react";
import { TypeAnimation } from "react-type-animation";

export const TypeAnimator = () => {
	return (
		<TypeAnimation
			preRenderFirstString={true}
			sequence={[
				"Full-stack Software Engineer",
				2000,
				"Front-end Software Engineer",
				2000,
				"Back-end Software Engineer",
				2000,
				"Life-long Learner",
				2000,
			]}
			speed={50}
			style={{ color: "#1976D2" }}
			repeat={Infinity}
		/>
	);
};
