import * as assets from './assets';

const projects = [
	{
		id: "nosql-json-database",
		title: 'NoSQL Json Database',
		tags: ['NodeJS', 'Typescript', 'Javascript'],
		desc: `A Simple and quick database to help development process and speed`,
		more: `This module aims to help simplify the use of file modules using fs and path whenever developing an application that needs a database but you just don't want to use a standard database due to the long setup or for any other reason`,
		role: 'Backend Engineer',
		img: assets.nosql_json_database_1,
		imgs: [assets.nosql_json_database_1, assets.nosql_json_database_2, assets.nosql_json_database_3, assets.nosql_json_database_4],
		repo: "https://github.com/DanielBello7/nosql-json-database",
		link: 'https://www.npmjs.com/package/nosql-json-database'
	},
	{
		id: "figma-store-clone",
		title: 'Figma Store Clone',
		tags: ['NodeJS', 'Typescript', 'ViteJS', 'Framer Motion'],
		desc: `A near perfect re-make for the figma store website.`,
		more: `This was an attempt to remake the simple frontend functionalities the site used for it's interface, using raw code and not packages as much as possible`,
		role: 'Frontend Engineer',
		img: assets.figma_clone_1,
		imgs: [assets.figma_clone_1, assets.figma_clone_2, assets.figma_clone_3, assets.figma_clone_4],
		repo: 'https://github.com/DanielBello7/figma-website-clone',
		link: 'https://figma.danielbello.dev'
	},
	{
		id: "core-task",
		title: 'CoreTask Task Manager',
		tags: ['NodeJS', 'Typescript', 'NextJS', 'Framer Motion', 'Next Auth', 'MongoDB', 'Javascript', 'Jest'],
		desc: `A simple task manager application with some advanced features`,
		more: `A task manager to effortlessly manage tasks with a web application. Share, create, update, export, and import tasks seamlessly. Collaborate effortlessly and boost productivity. I built this as a side project to explore the feature of smooth transitions within all parts of the application. I handled the project from design to completion. `,
		role: 'Full Stack',
		img: assets.core_task_1,
		imgs: [assets.core_task_2, assets.core_task_3, assets.core_task_4, assets.core_task_5],
		repo: 'https://github.com/DanielBello7/time-tracker.git',
		link: 'https://coretask.danielbello.dev'
	},
	{
		id: "bus-t-mobile",
		title: 'BUS-T Mobile Application',
		tags: ['React Native', 'Typescript', 'MongoDB', 'Javascript', 'Jest'],
		desc: `A mobile application for the BUS-T transportation service, using React Native and Typescript.`,
		more: `BUS-T is a route providing system, that allows bus companies and other transportation services in Nigeria to access route defining systems for their transportation means and display them to the public, it also allows for the public to access these routes and information relating to the providers. I built the mobile app myself while working with designers on the team for the UI and UX, i also designed the architecture myself which made the process of building it smoother.`,
		role: 'Full Stack',
		img: assets.bus_t_mobile_1,
		imgs: [assets.bus_t_mobile_2, assets.bus_t_mobile_3, assets.bus_t_mobile_4, assets.bus_t_mobile_5],
		repo: null,
		link: 'https://apps.apple.com/us/app/bus-t/id6482978976'
	},
	{
		id: "bus-t-web",
		title: 'BUS-T Web Application',
		tags: ['NextJS', 'Typescript', 'MongoDB', 'Javascript', 'Jest'],
		desc: `A web application for the BUS-T transportation service, using NextJS.`,
		more: `BUS-T is a route providing system, that allows bus companies and other transportation services in Nigeria to access route defining systems for their transportation means and display them to the public, it also allows for the public to access these routes and information relating to the providers. I worked alone on this project building both this web app, the mobile app and the server while working with other designers for the UI and UX.`,
		role: 'Full Stack',
		img: assets.bus_t_web_1,
		imgs: [assets.bus_t_web_2, assets.bus_t_web_3, assets.bus_t_web_4, assets.bus_t_web_5],
		repo: null,
		link: 'https://bus-t.site'
	},
	{
		id: "case-law",
		title: 'Case Law Repository',
		tags: ['ReactJS', 'Typescript', 'MongoDB', 'ViteJS', 'Mocha', 'Jest', 'Postman'],
		desc: `A repository for legal documents, the system also provides a detailed search system for professional users who subscribe to the service.`,
		more: `With over 2000 active users and 750 documents uploaded, Case Law Repository is a web application built to store case documents and make them available for public and professional use. The system also allows for specific search using text and relevant keywords and phrases amongst other documents. I worked on this with a team for the analytics and design but i built the frontend and backend for this application myself.`,
		role: 'Full Stack',
		img: assets.case_law_1,
		imgs: [assets.case_law_2, assets.case_law_3, assets.case_law_4, assets.case_law_5],
		repo: null,
		link: 'http://caselaw.moj.dl.gov.ng'
	},
	{
		id: "tracer-ng",
		title: 'Tracer Study NG',
		tags: ['Notion', 'Postman', 'MongoDB', 'Javascript', 'Typescript'],
		desc: `A tracer study programme application for part-time students enrolling under a partiular organization, aiming for jobs and other opportunities while learning.`,
		more: `With over 500 students enrolled, Tracer study triples as a school management system, mentor programme system, and a tracer study system for the students under the organization. I worked as the Software architect who designed the core system and controlled features and the product, i also helped function as the interface for the backend and the frontend engineers on the project bringing the project from idea to completion`,
		role: 'Software Architect',
		img: assets.tracer_1,
		imgs: [assets.tracer_2, assets.tracer_3, assets.tracer_4, assets.tracer_5],
		repo: null,
		link: 'https://app.tracer.ng'
	}
]

const experience = [
	{
		id: 1,
		title: 'Software Engineer',
		location: 'Defence Space Administration',
		period: 'April 2021 - October 2023'
	},
	{
		id: 2,
		title: 'Full Stack Developer',
		location: 'Gallery of Code',
		period: 'June 2021 - Feb 2024'
	},
	{
		id: 3,
		title: 'Product Engineer',
		location: 'P.A.R.V.I',
		period: 'August 2021 - Feb 2022'
	}
]

const skills = [
	'Full-Stack Development',
	'Backend Development',
	'CI/CD',
	'RESTful API',
	'Test-Driven Development',
	'Github Actions',
	'JavaScript',
	'TypeScript',
	'Kotlin',
	'Frontend Development',
	'Python',
	'C#',
	'NodeJS',
	'ReactJS',
	'Mobile Development',
	'Kotlin',
	'Android Development',
	'React Native',
	'Bootstrap 5',
	'Github',
	'Tailwind',
	'Linux',
	'ASP.NET-CORE',
	'.NET',
	'Digital Ocean',
	'Docker',
	'Firebase',
	'MongoDB',
	'MySQL',
	'AWS'
]

const skills2 = [
	{
		id: 0,
		title: "Languages",
		values: [
			'Javascript',
			'Typescript',
			'Kotlin',
			'HTML',
			'C#',
			'CSS',
		]
	},
	{
		id: 1,
		title: "Skills",
		values: [
			'Full-Stack Development',
			'Frontend Development',
			'Backend Development',
			'Behavior-Driven Development',
			'CI/CD',
			'Test-Driven Development',
			'Mobile Development',
			'Android Development',
			'RESTful API',
		]
	},
	{
		id: 2,
		title: "Frameworks",
		values: [
			'ReactJS',
			'React Native',
			'ExpressJS',
			'NextJS',
			'NestJS',
			'Tailwind CSS',
			'Mud Blazor',
			'Blazor',
			'.NET-CORE',
			'ASP.NET-CORE',
			'Redis',
			'Bootstrap 5',
		]
	},
	{
		id: 3,
		title: "Database Systems",
		values: [
			'Firebase Firestore',
			'MongoDB',
			'MySQL',
			'Postgres SQL',
			'SQLite',
		]
	},
	{
		id: 4,
		title: "DevOps, Deployment & Source Code Management",
		values: [
			'Github',
			'Github Actions',
			'Digital Ocean',
			'Docker',
			'NGINX',
			'AWS'
		]
	}
]

export { projects, experience, skills, skills2 };

