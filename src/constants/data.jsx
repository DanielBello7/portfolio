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
	}
]

const experience = [
	{
		id: 1,
		title: 'Software Engineer',
		location: 'Defence Space Administration',
		period: 'April 2021 - Present'
	},
	{
		id: 2,
		title: 'Full Stack Developer',
		location: 'Gallery of Code',
		period: 'January 2022 - December 2022'
	},
	{
		id: 3,
		title: 'Frontend Engineer',
		location: 'Gallery of Code',
		period: 'June 2021 - December 2021'
	},
	{
		id: 4,
		title: 'Product Engineer',
		location: 'Pan-African Renaissance Vocational Institute',
		period: 'August 2021 - March 2022'
	},
	{
		id: 5,
		title: 'Full Stack Engineer',
		location: 'inScript',
		period: 'December 2020 - December 2021'
	},
	{
		id: 6,
		title: 'Junior Frontent Engineer',
		location: 'inScript',
		period: 'September 2019 - December 2020'
	}
]

const skills = [
	'Full-Stack Development',
	'Test-Driven Development',
	'RESTful API',
	'JavaScript',
	'TypeScript',
	'C#',
	'NodeJS',
	'ReactJS',
	'Mobile Development',
	'Kotlin',
	'Android Development',
	'React Native',
	'Bootstrap 5',
	'Tailwind',
	'ASP.NET-CORE',
	'Digital Ocean',
	'Docker',
	'Firebase',
	'MongoDB',
	'MySQL',
	'DevOps',
	'AWS'
]

export { projects, experience, skills };

