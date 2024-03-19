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
import headgesportsTop from "../images/headgesports-desktop-1.png";
import headgesportsMiddle from "../images/headgesports-desktop-2.png";
import headgesportsBottom from "../images/headgesports-desktop-3.png";
import blogMainLight from "../images/blog-main-light.png";
import blogMainDark from "../images/blog-main-dark.png";
import blogPostDark from "../images/blog-post-dark.png";
import flixqueueMain from "../images/flixqueue-main.png";
import flixqueueSearch from "../images/flixqueue-search.png";
import flixqueueWatchlist from "../images/flixqueue-watchlist.png";

// Import icons
import { FiLinkedin, FiGitlab, FiGithub, FiGlobe } from "react-icons/fi";

export const singleProjectData = [
	// TODO: PlayBoxx
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

	// TODO: Cartropolis
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

	// TODO: Conference GO
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
					details: "https://github.com/spunnanithi/ConferenceGO",
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
					icon: <FiGithub />,
					url: "https://github.com/spunnanithi/ConferenceGO",
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

	// TODO: Calculator App
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

	// TODO: HeadgeSports
	{
		ProjectHeader: {
			title: "HeadgeSports",
			publishDate: "October 2023",
			tags: "UI / UX / Frontend / Mobile / Desktop",
		},
		ProjectImages: [
			{
				id: 1,
				title: "Desktop view of HeadgeSports",
				img: headgesportsTop,
			},
			{
				id: 2,
				title: "Desktop view of HeadgeSports",
				img: headgesportsMiddle,
			},
			{
				id: 3,
				title: "Desktop view of HeadgeSports",
				img: headgesportsBottom,
			},
		],
		ProjectInfo: {
			ClientHeading: "About HeadgeSports",
			CompanyInfo: [
				{
					id: 1,
					title: "Name",
					details: "HeadgeSports",
				},
				{
					id: 2,
					title: "Tags",
					details: "UI/UX Design & Frontend Development & Mobile Development",
				},
				{
					id: 3,
					title: "Website",
					details: "https://headgemedia.com/",
				},
			],
			ObjectivesHeading: "Description",
			ObjectivesDetails:
				"HeadgeSports is a user-friendly mobile web application designed for both novice and seasoned sports enthusiasts. Users can engage in testing their football and sports-betting intuition through an interactive interface featuring sliders linked to specific sports statistics. The application uses exclusive straightforward regression algorithms, delivering users instant updates on odds fluctuations. It presents an enjoyable and cost-free platform for individuals of all expertise levels to observe the potential shifts in point spreads, catering to both new and experienced sports bettors.",
			Technologies: [
				{
					title: "Tools & Technologies",
					techs: ["JavaScript", "React.js", "HTML", "CSS", "Microsoft Azure"],
				},
			],
			ProjectDetailsHeading: "Overview",
			ProjectDetails: [
				{
					id: 1,
					heading: "DISCLAIMER:",
					details:
						"This is a fun, free-to-use application for users to test their football intuition. PLEASE NOTE THAT THIS COMPANY IS NOT RESPONSBILE FOR ANY LOSSES INCURRED IN RELATION TO BETTING ACTIVITIES.",
				},
				{
					id: 2,
					heading:
						"Dynamic Football Point Spread: Real-Time Adjustments with User-Friendly Input Sliders",
					details:
						"HedgeSports harnesses the power of interactive features through three sliders, allowing users to dynamically adjust key statistics and witness real-time updates to the theoretical point spread. Using distinctive and tailored simple regression algorithms for each game, the platform calculates precise theoretical odds, enhancing the accuracy and responsiveness of the overall sport-betting experience.",
				},
				{
					id: 3,
					heading: "Share on Social Media",
					details:
						"Users have the ability to seamlessly share this application on social media platforms such as X (formerly known as 'Twitter') or Facebook, fostering organic growth through word-of-mouth referrals. This feature encourages an expanded user base and facilitates the spread of the application across various networks.",
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
					name: "Webiste Demo Link",
					icon: <FiGlobe />,
					url: "https://headgemedia.com/",
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

	// TODO: MyDevJourney
	{
		ProjectHeader: {
			title: "MyDevJourney",
			publishDate: "January 2024",
			tags: "UI / UX / Frontend / Desktop / Mobile",
		},
		ProjectImages: [
			{
				id: 1,
				title: "Main blog page in light mode",
				img: blogMainLight,
			},
			{
				id: 2,
				title: "Main blog page in dark mode",
				img: blogMainDark,
			},
			{
				id: 3,
				title: "Single blog page in dark mode",
				img: blogPostDark,
			},
		],
		ProjectInfo: {
			ClientHeading: "About MyDevJourney",
			CompanyInfo: [
				{
					id: 1,
					title: "Name",
					details: "MyDevJourney",
				},
				{
					id: 2,
					title: "Tags",
					details:
						"UI/UX Design & Frontend Development & Full-stack Development",
				},
				{
					id: 3,
					title: "Website",
					details: "https://mydevjourney.vercel.app/",
				},
			],
			ObjectivesHeading: "Description",
			ObjectivesDetails:
				"MyDevJourney is a user-friendly web application catering to coding enthusiasts at all skill levels. MyDevJourney aims to share my learning journey within the tech field with like-minded readers. With an elegant and simple design, MyDevJourney ensures an enjoyable and cost-free platform for individuals passionate about development. Whether you're a coding novice or a seasoned pro, embark on your coding adventure with me on MyDevJourney, where every line of code tells a story, and every coder finds a supportive community.",
			Technologies: [
				{
					title: "Tools & Technologies",
					techs: [
						"JavaScript",
						"Next.js",
						"TailwindCSS",
						"shadcn/ui",
						"Sanity.io",
						"Vercel",
					],
				},
			],
			ProjectDetailsHeading: "Overview",
			ProjectDetails: [
				{
					id: 1,
					heading: "Sanity.io CMS Integration",
					details:
						"Integrating Sanity.io content management system (CMS) into a Next.js blog web application offers a seamless and efficient content management solution. Sanity.io, a headless CMS, enables developers to structure content using a flexible and customizable schema, providing a user-friendly interface for content creators. The integration with Next.js, a React-based framework, ensures a fast and dynamic front-end experience. Developers can easily fetch and display content from Sanity.io, utilizing its powerful API, while maintaining a smooth editing workflow for content creators. This combination empowers teams to build and maintain a scalable blog application with ease, enjoying the benefits of a structured CMS and the performance advantages of Next.js.",
				},
				{
					id: 2,
					heading: "Embedded Sanity Studio",
					details:
						"Sanity.io CMS Studio seamlessly integrates with Next.js in a blog web application, offering content creators a user-friendly and efficient method to create and manage content. The combination of Sanity.io's powerful CMS capabilities and Next.js's high-performance framework ensures a smooth workflow for managing and updating content. With Sanity Studio, content creators can easily organize, edit, and publish their blog posts with a visually intuitive interface, streamlining the content creation process. The integration enables real-time collaboration, version control, and flexible customization, empowering users to maintain an engaging and dynamic blog while enjoying the benefits of a headless CMS.",
				},
				{
					id: 3,
					heading: "Dark/Light Mode",
					details:
						"Incorporating dark and light mode functionality into a Next.js blog web application enhances user experience by providing a customizable visual interface. This feature allows users to toggle between light and dark themes based on their preferences, reducing eye strain and improving readability in varying lighting conditions. With Next.js, implementing this feature is streamlined through its component-based architecture and support for dynamic data rendering. Leveraging Tailwind theme providers, developers can easily switch between color schemes, ensuring a seamless and visually pleasing experience for blog readers. Additionally, this customization aligns with modern design trends and caters to diverse user preferences, contributing to a more inclusive and user-friendly web application.",
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
					name: "Webiste Demo Link",
					icon: <FiGlobe />,
					url: "https://mydevjourney.vercel.app/",
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

	// TODO: FlixQueue
	{
		ProjectHeader: {
			title: "FlixQueue",
			publishDate: "March 2024",
			tags: "UI / UX / Frontend / Desktop / Mobile",
		},
		ProjectImages: [
			{
				id: 1,
				title: "FlixQueue - Main Page",
				img: flixqueueMain,
			},
			{
				id: 2,
				title: "FlixQueue - Search Page",
				img: flixqueueSearch,
			},
			{
				id: 3,
				title: "FlixQueue - Watchlist Page",
				img: flixqueueWatchlist,
			},
		],
		ProjectInfo: {
			ClientHeading: "About FlixQueue",
			CompanyInfo: [
				{
					id: 1,
					title: "Name",
					details: "FlixQueue",
				},
				{
					id: 2,
					title: "Tags",
					details: "UI/UX Design & Frontend Development",
				},
				{
					id: 3,
					title: "Website",
					details: "https://flixqueue.vercel.app/",
				},
			],
			ObjectivesHeading: "Description",
			ObjectivesDetails:
				"FlixQueue is a sleek, mobile-friendly web application designed for avid movie and TV show enthusiasts. With a vast library of titles at their fingertips, users can effortlessly explore and discover new favorites. Utilizing intuitive filter methods, users can navigate through trending, top-rated, or popular titles to find the perfect watch. Additionally, FlixQueue offers a personalized experience, allowing users to sign up and curate their own watchlist by adding movies or TV shows they're eager to see, ensuring they never miss out on the latest must-watch content.",
			Technologies: [
				{
					title: "Tools & Technologies",
					techs: [
						"JavaScript",
						"React.js",
						"Chakra UI",
						"Firebase Authentication",
						"Firebase Database",
						"Vercel",
					],
				},
			],
			ProjectDetailsHeading: "Overview",
			ProjectDetails: [
				{
					id: 1,
					heading: "Real-Time Movie and TV Show Data from TMDB API",
					details:
						"Accessing real-time movie and TV show data from the TMDB API enhances the functionality of web applications by providing up-to-date information on popular media content. By seamlessly integrating TMDB API into web platforms, developers can leverage its extensive database to enrich user experiences with dynamic content such as movie details, ratings, and recommendations. This integration offers users a comprehensive and engaging platform, enabling them to explore and discover their favorite movies and TV shows effortlessly.",
				},
				{
					id: 2,
					heading: "Personalize Your Movie & TV Show Watchlist",
					details:
						"Empower users to curate their personalized watchlists from a vast array of movie and TV show options through seamless integration with the TMDB API. By incorporating this API into web applications, developers enable users to browse, select, and track their favorite media content in real-time. Leveraging the comprehensive database of TMDB, users can explore diverse genres, discover trending titles, and access detailed information to tailor their viewing preferences. This integration offers an immersive and customizable experience, allowing users to effortlessly manage their entertainment choices and stay updated with the latest releases.",
				},
				{
					id: 3,
					heading: "Extensive Searching Feature",
					details:
						"Enhance user experience with an extensive searching feature powered by the TMDB API, enabling seamless exploration of a vast library of movies and TV shows. By integrating this feature into web applications, developers empower users to discover content based on various criteria such as genre, release date, and ratings. Leveraging the rich dataset provided by TMDB, users can efficiently browse and filter through numerous options to find their desired entertainment. This integration offers a user-friendly and dynamic search experience, allowing users to quickly locate their favorite media content and explore new discoveries with ease.",
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
					name: "Webiste Demo Link",
					icon: <FiGlobe />,
					url: "https://flixqueue.vercel.app/",
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
