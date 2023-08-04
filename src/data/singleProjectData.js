// Import images
import playboxxLanding from "../images/playboxx-landing.png";
import playboxxQuestion from "../images/playboxx-question.png";
import playboxxLeaderboard from "../images/playboxx-leaderboard.png";
import cartropolisInventory from "../images/cartropolis-intentory.png";
import cartropolisService from "../images/cartropolis-service.png";
import cartropolisSales from "../images/cartropolis-sales.png";
import conferenceGoLanding from "../images/conference-go-landing.png";
import conferenceGoConferences from "../images/conference-go-conferences.png";
import conferenceGoForms from "../images/conference-go-form.png";
import calculatorEmpty from "../images/calculator-empty.png";
import calculatorNonEmpty from "../images/calculator-nonempty.png";

// Import icons
import { FiLinkedin, FiGitlab, FiGithub, FiGlobe } from "react-icons/fi";

export const singleProjectData = [
	// PlayBoxx Data
	{
		ProjectHeader: {
			title: "PlayBoxx",
			publishDate: "May 2023",
			tags: "UI / Fullstack",
		},
		ProjectImages: [
			{
				id: 1,
				title: "PlayBoxx Landing Page",
				img: playboxxLanding,
			},
			{
				id: 2,
				title: "PlayBoxx Question Page",
				img: playboxxQuestion,
			},
			{
				id: 3,
				title: "PlayBoxx Leaderboard Page",
				img: playboxxLeaderboard,
			},
		],
		ProjectInfo: {
			ClientHeading: "About PlayBoxx",
			CompanyInfo: [
				{
					id: 1,
					title: "Name",
					details: "PlayBoxx",
				},
				{
					id: 2,
					title: "Tags",
					details: "UI Design & Fullstack Development",
				},
				{
					id: 3,
					title: "Website",
					details: "https://playboxx.gitlab.io/play-boxx/",
				},
			],
			ObjectivesHeading: "Description",
			ObjectivesDetails:
				"PlayBoxx takes you back to the nostalgic era of flash-based gaming while incorporating contemporary, visually-appealing design elements. Enjoy the convenience of user authentication/authorization, compete for the top spot on the leaderboard, and don't miss out on the excitement of our flagship Quiz game.",
			Technologies: [
				{
					title: "Tools & Technologies",
					techs: [
						"HTML",
						"CSS",
						"JavaScript",
						"React.js",
						"Redux Toolkit",
						"TailwindCSS",
						"Python",
						"FastAPI",
						"PostgreSQL",
						"Docker",
						"Exalidraw",
					],
				},
			],
			ProjectDetailsHeading: "Overview",
			ProjectDetails: [
				{
					id: 1,
					heading: "Quiz Game",
					details:
						"PlayBoxx's flagship game, 'Quiz Game' offers an unparalleled gaming experience. This exciting game is powered by an extensive collection of 1000+ Trivia questions gathered from a reliable third-party API, guaranteeing a fresh and unique experience every time you play. Each session presents the user with a randomized set of 10 questions covering diverse categories, from Science to Film & TV to Sports & Leisure.",
				},
				{
					id: 2,
					heading: "Leaderboard",
					details:
						"The leaderboard highlights the Top 10 players, symbolizing the pinnacle of gaming excellence. Logged-in players strive to answer questions with precision and speed, vying to earn a place within the Top 10. Achieving a place on this prestigious leaderboard grants players recognition and admiration from fellow players, as your accomplishments become an inspiration for others to excel.",
				},
				{
					id: 3,
					heading: "User Authentication/Authorization",
					details:
						"PlayBoxx features a robust user authentication/authorization system that enables seamless sign-up, log-in, and log-out processes. Once logged in, users can track their scores on their personalized leaderboard and, for the most-skilled players, on the global leaderboard.",
				},
			],
			SocialSharingHeading: "Check Out These Links!",
			SocialSharing: [
				{
					id: 1,
					name: "LinkedIn",
					icon: <FiLinkedin />,
					url: "https://www.linkedin.com/in/sirasit-punnanithi/",
				},
				{
					id: 2,
					name: "GitLab",
					icon: <FiGitlab />,
					url: "https://gitlab.com/playboxx/play-boxx",
				},
				{
					id: 3,
					name: "Demo Link",
					icon: <FiGlobe />,
					url: "https://playboxx.gitlab.io/play-boxx/",
				},
			],
		},
		// ! Uncomment if you want to add related projects back
		// RelatedProject: {
		// 	title: "Related Projects",
		// 	Projects: [
		// 		{
		// 			id: 1,
		// 			title: "Mobile UI",
		// 			img: Image4,
		// 		},
		// 		{
		// 			id: 2,
		// 			title: "Web Application",
		// 			img: Image5,
		// 		},
		// 		{
		// 			id: 3,
		// 			title: "UI Design",
		// 			img: Image6,
		// 		},
		// 		{
		// 			id: 4,
		// 			title: "Kabul Mobile App UI",
		// 			img: Image3,
		// 		},
		// 	],
		// },
	},

	// Cartropolis
	{
		ProjectHeader: {
			title: "Cartropolis",
			publishDate: "April 2023",
			tags: "UI / UX / Fullstack",
		},
		ProjectImages: [
			{
				id: 1,
				title: "Cartropolis Inventory Page",
				img: cartropolisInventory,
			},
			{
				id: 2,
				title: "Cartropolis Service Page",
				img: cartropolisService,
			},
			{
				id: 3,
				title: "Cartropolis Sales Page",
				img: cartropolisSales,
			},
		],
		ProjectInfo: {
			ClientHeading: "About Cartropolis",
			CompanyInfo: [
				{
					id: 1,
					title: "Name",
					details: "Cartropolis",
				},
				{
					id: 2,
					title: "Tags",
					details: "UI/UX Design & Fullstack Development",
				},
				{
					id: 3,
					title: "Website",
					details: "https://github.com/spunnanithi/cartropolis",
				},
			],
			ObjectivesHeading: "Description",
			ObjectivesDetails:
				"Cartropolis is a modern car dealership application that empowers users to seamlessly schedule service appointments, record car sales, check available car inventory, and explore a range of other convenient features.",
			Technologies: [
				{
					title: "Tools & Technologies",
					techs: [
						"HTML",
						"CSS",
						"JavaScript",
						"React.js",
						"Bootstrap",
						"Python",
						"Django",
						"PostgreSQL",
						"Docker",
						"Exalidraw",
					],
				},
			],
			ProjectDetailsHeading: "Overview",
			ProjectDetails: [
				{
					id: 1,
					heading: "Inventory",
					details:
						"With the inventory microservice, users can efficiently enter, manage, and track various vehicle details, including manufacturers, models, and automobile information. Employing a microservice architecture allows seamless data exchange between the service and sales microservices, enabling them to independently access inventory data for their specific needs.",
				},
				{
					id: 2,
					heading: "Service",
					details:
						"With our service microservice, users gain the ability to effortlessly schedule service appointments for customers and assign dedicated technicians to each appointment. Additionally, users can easily view and filter appointments by their respective Vehicle Identification Number (VIN). Notably, if the vehicle linked to the VIN was purchased from our dealership, the customer is entitled to VIP treatment, ensuring a premium service experience.",
				},
				{
					id: 3,
					heading: "Sales",
					details:
						"With the sales microservice, users can record vehicle sales and associate a sales representative with each sale. Furthermore, users have the ability to view and filter sales based on the assigned sales representatives.",
				},
			],
			SocialSharingHeading: "Check Out These Links!",
			SocialSharing: [
				{
					id: 1,
					name: "LinkedIn",
					icon: <FiLinkedin />,
					url: "https://www.linkedin.com/in/sirasit-punnanithi/",
				},
				{
					id: 2,
					name: "GitLab",
					icon: <FiGithub />,
					url: "https://github.com/spunnanithi/cartropolis",
				},
			],
		},
		// ! Uncomment if you want to add related projects back
		// RelatedProject: {
		// 	title: "Related Projects",
		// 	Projects: [
		// 		{
		// 			id: 1,
		// 			title: "Mobile UI",
		// 			img: Image4,
		// 		},
		// 		{
		// 			id: 2,
		// 			title: "Web Application",
		// 			img: Image5,
		// 		},
		// 		{
		// 			id: 3,
		// 			title: "UI Design",
		// 			img: Image6,
		// 		},
		// 		{
		// 			id: 4,
		// 			title: "Kabul Mobile App UI",
		// 			img: Image3,
		// 		},
		// 	],
		// },
	},

	// Conference GO
	{
		ProjectHeader: {
			title: "Conference GO",
			publishDate: "March 2023",
			tags: "UI / UX / Fullstack",
		},
		ProjectImages: [
			{
				id: 1,
				title: "Conference GO Inventory Page",
				img: conferenceGoLanding,
			},
			{
				id: 2,
				title: "Conference GO Conferences Page",
				img: conferenceGoConferences,
			},
			{
				id: 3,
				title: "Conference GO Form Page",
				img: conferenceGoForms,
			},
		],
		ProjectInfo: {
			ClientHeading: "About Conference GO",
			CompanyInfo: [
				{
					id: 1,
					title: "Name",
					details: "Conference GO",
				},
				{
					id: 2,
					title: "Tags",
					details: "UI/UX Design & Fullstack Development",
				},
				{
					id: 3,
					title: "Website",
					details: "https://gitlab.com/spunnanithi/conferencego",
				},
			],
			ObjectivesHeading: "Description",
			ObjectivesDetails:
				"Conference GO is a unique conference management application that empowers users to effortlessly discover and register for upcoming conferences. Additionally, the app provides users with valuable insights about each conference's host city, offering relevant pictures and real-time weather information for the area.",
			Technologies: [
				{
					title: "Tools & Technologies",
					techs: [
						"HTML",
						"CSS",
						"JavaScript",
						"React.js",
						"Bootstrap",
						"Python",
						"Django",
						"PostgreSQL",
						"Docker",
						"Exalidraw",
					],
				},
			],
			ProjectDetailsHeading: "Overview",
			ProjectDetails: [
				{
					id: 1,
					heading: "Relevant Weather Data",
					details:
						"Conference GO offers an invaluable feature by seamlessly integrating real-time weather data from a trusted third-party API. Users attending conferences can now access up-to-date and accurate weather information tailored to each city's specific event location.",
				},
				{
					id: 2,
					heading: "Realistic Picture of Host City",
					details:
						"Conference GO integrates reliable third-party API to allow users to explore realistic pictures of the host city before making the decision to attend the event. Get a sneak peek of breathtaking landmarks, vibrant streets, and stunning venues, all from the comfort of your screen.",
				},
				{
					id: 3,
					heading: "Registration Form",
					details:
						"Interested in attending a conference? It's simple and convenient with our user-friendly sign-up form. Users can easily select the conference they wish to attend from the available options. Once the user has made their choice, the data they provide will be securely sent and stored in our database for safekeeping.",
				},
			],
			SocialSharingHeading: "Check Out These Links!",
			SocialSharing: [
				{
					id: 1,
					name: "LinkedIn",
					icon: <FiLinkedin />,
					url: "https://www.linkedin.com/in/sirasit-punnanithi/",
				},
				{
					id: 2,
					name: "GitLab",
					icon: <FiGitlab />,
					url: "https://gitlab.com/spunnanithi/conferencego",
				},
			],
		},
		// ! Uncomment if you want to add related projects back
		// RelatedProject: {
		// 	title: "Related Projects",
		// 	Projects: [
		// 		{
		// 			id: 1,
		// 			title: "Mobile UI",
		// 			img: Image4,
		// 		},
		// 		{
		// 			id: 2,
		// 			title: "Web Application",
		// 			img: Image5,
		// 		},
		// 		{
		// 			id: 3,
		// 			title: "UI Design",
		// 			img: Image6,
		// 		},
		// 		{
		// 			id: 4,
		// 			title: "Kabul Mobile App UI",
		// 			img: Image3,
		// 		},
		// 	],
		// },
	},

	// Calculator App
	{
		ProjectHeader: {
			title: "Calculator App",
			publishDate: "August 2023",
			tags: "UI / UX / Frontend",
		},
		ProjectImages: [
			{
				id: 1,
				title: "Calculator app no number on screen",
				img: calculatorEmpty,
			},
			{
				id: 2,
				title: "Calculator app number on screen",
				img: calculatorNonEmpty,
			},
		],
		ProjectInfo: {
			ClientHeading: "About Calculator App",
			CompanyInfo: [
				{
					id: 1,
					title: "Name",
					details: "Calculator App",
				},
				{
					id: 2,
					title: "Tags",
					details: "UI/UX Design & Frontend Development",
				},
				{
					id: 3,
					title: "Website",
					details: "https://github.com/spunnanithi/calculator-app",
				},
			],
			ObjectivesHeading: "Description",
			ObjectivesDetails:
				"Calculator app is an application users can use to perform simple math calculations. The Calculator app is built with Next.js for client-side and server-side rendering as well as TailwindCSS for styling. The application features an interactive, minimalistic user interface with fully-functioning number, operation, clear, percentage, sign inverse, and equals buttons.",
			Technologies: [
				{
					title: "Tools & Technologies",
					techs: [
						"JavaScript",
						"Next.js",
						"React.js",
						"TailwindCSS",
						"HTML",
						"CSS",
					],
				},
			],
			ProjectDetailsHeading: "Overview",
			ProjectDetails: [
				{
					id: 1,
					heading:
						"Perform Addition, Subtraction, Multiplication, and Division",
					details:
						"Calculator App allows users to perform simple arithmetic math calcuations. Large numbers are automatically converted and expressed in Scientific Notation.",
				},
				{
					id: 2,
					heading: "Fully-Functional Buttons",
					details:
						"Users can interact with all of the buttons seen on the Calculator. Aside from the arithmetic math calculations, users can clear the screen, convert current number into a percentage, and inverse the current sign of the number.",
				},
			],
			SocialSharingHeading: "Check Out These Links!",
			SocialSharing: [
				{
					id: 1,
					name: "LinkedIn",
					icon: <FiLinkedin />,
					url: "https://www.linkedin.com/in/sirasit-punnanithi/",
				},
				{
					id: 2,
					name: "Github",
					icon: <FiGithub />,
					url: "https://github.com/spunnanithi/calculator-app",
				},
			],
		},
		// ! Uncomment if you want to add related projects back
		// RelatedProject: {
		// 	title: "Related Projects",
		// 	Projects: [
		// 		{
		// 			id: 1,
		// 			title: "Mobile UI",
		// 			img: Image4,
		// 		},
		// 		{
		// 			id: 2,
		// 			title: "Web Application",
		// 			img: Image5,
		// 		},
		// 		{
		// 			id: 3,
		// 			title: "UI Design",
		// 			img: Image6,
		// 		},
		// 		{
		// 			id: 4,
		// 			title: "Kabul Mobile App UI",
		// 			img: Image3,
		// 		},
		// 	],
		// },
	},
];
