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
		desc: `A near perfrct re-make for the figma store website.`,
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
		more: `A task manager to effortlessly manage tasks with a web application. Share, create, update, export, and import tasks seamlessly. Collaborate effortlessly and boost productivity. Streamline your workflow with intuitive features designed for efficient task management.`,
		role: 'Full Stack',
		img: assets.core_task_1,
		imgs: [assets.core_task_2, assets.core_task_3, assets.core_task_4, assets.core_task_5],
		repo: 'https://github.com/DanielBello7/time-tracker.git',
		link: 'https://coretask.danielbello.dev'
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
		location: 'Pan-African Renaissance Vocational Institute',
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
	'DevOps',
	'AWS'
]

export { projects, experience, skills };

