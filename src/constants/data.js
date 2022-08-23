


import assets from './assets';

const projects = [
  {
    id: 1,
    title: 'inScript Connect Web App',
    tags: ['Typescript', 'Bootstrap 5', 'ReactJS'],
    desc: `A web application for the Twitter-type social media system. Version 1.11.1`,
    more: `It was built with react as the frontend, NodeJS as the server, firebase hosting, and MongoDB as the database. It was built for handling basic social media functions such as making posts and interactions with those posts and users and has algorithms for handling what each user sees.`,
    role: 'Full-Stack',
    img: assets.insc_web_app_1,
    imgs: [assets.insc_web_app_1, assets.insc_web_app_2, assets.insc_web_app_3, assets.insc_web_app_4],
    repo: 'https://github.com/DanielBello7/inScript',
    link: 'https://inscript-connect.web.app'
  },
  {
    id: 2,
    title: 'Finder Web App',
    tags: ['Typescript', 'Javascript', 'Tailwind', 'ReactJS'],
    desc: `The web application find is a search engine system that was built with TailwindCSS.`,
    more: `It was built with Typescript and React and uses Heroku as the backend. It is an application that allows a user to upload raw data in JSON format and run a search for anything and if it’s within the data being provided.`,
    role: 'Full-Stack',
    img: assets.finder_1,
    imgs: [assets.finder_1, assets.finder_2, assets.finder_3],
    repo: 'https://github.com/DanielBello7/Simple-Search-Engine.git',
    link: 'https://find-search-application.web.app'
  },
  {
    id: 3,
    title: 'inScript Connect Mobile App',
    tags: ['Typescript', 'React Native', 'ReactJS'],
    desc: `This is the mobile application for the inScript Connect Social media application.`,
    more: `It was built with React Native for the mobile UI and also uses DigitalOcean as the server hosting and NodeJS for the server. The application runs on both Android and iOS and is currently being hosted on the Expo platform. The app was created using Expo support.`,
    role: 'Full-Stack',
    img: assets.insc_mobile_1,
    imgs: [assets.insc_mobile_2, assets.insc_mobile_3, assets.insc_mobile_4, assets.insc_mobile_5],
    repo: null,
    link: 'https://expo.dev/@chaseofficial/inScript-Connect?serviceType=classic&distribution=expo-go'
  },
  {
    id: 4,
    title: 'inScript Website',
    tags: ['HTML & CSS', 'ThreeJS', 'Firebase'],
    desc: `This is the website for the inScript system. Version 2.1.1`,
    more: `The system was built with HTML5 and CSS and used ThreeJS for the few design elements and concepts within the website. The backend was created with firebase firestore.`,
    role: 'Full-Stack',
    img: assets.insc_web_1,
    imgs: [assets.insc_web_2, assets.insc_web_3, assets.insc_web_4, assets.insc_web_5],
    repo: null,
    link: 'https://inscript-a7ed3.web.app'
  },
  {
    id: 5,
    title: 'Frontend Social Media App',
    tags: ['HTML & CSS', 'ReactJS', 'Typescript', 'Javascript', 'Firebase'],
    desc: `This is the website for the inScript system. Version 2.1.1`,
    more: `The system was built with HTML5 and CSS and used ThreeJS for the few design elements and concepts within the website. The backend was created with firebase firestore.`,
    role: 'Full-Stack',
    img: assets.social_app_1,
    imgs: [assets.social_app_2, assets.social_app_3, assets.social_app_4, assets.social_app_5],
    repo: 'https://github.com/DanielBello7/simple-communication-system.git',
    link: 'https://quick-social-application.web.app'
  },
  {
    id: 6,
    title: 'NFT Marketplace Mobile App',
    tags: ['React Native', 'Typescript'],
    desc: `This is a front-end mobile app created with react native currently on the Expo servers.`,
    more: `Hasn’t been deployed to the App Store or Google Play store.`,
    role: 'Front-end',
    img: assets.nft_1,
    imgs: [assets.nft_2, assets.nft_3, assets.nft_4, assets.nft_5],
    repo: null,
    link: 'https://expo.dev/@chaseofficial/NFT-Market-Place?serviceType=classic&distribution=expo-go'
  },
  {
    id: 7,
    title: 'E-commerce Mobile App',
    tags: ['React Native', 'Typescript'],
    desc: `This is a frontend mobile application for a quick sharing of goods and services.`,
    more: `This connects goods owners to people in search of those goods and services. Uses ReactJS and is hosted on Heroku.`,
    role: 'Front-end',
    img: assets.corner_market_1,
    imgs: [assets.corner_market_2, assets.corner_market_3, assets.corner_market_4],
    repo: null,
    link: 'https://expo.dev/@chaseofficial/Croner-MarketPlace?serviceType=classic&distribution=expo-go'
  },
  {
    id: 8,
    title: 'Social-Connect Web App',
    tags: ['NodeJS', 'HTML & CSS', 'Typescript', 'Javascript', 'EJS'],
    desc: `This is a login application that was created using template engines.`,
    more: `The application was created using EJS. Mostly hosted on the server. It is completely dynamic and loads resources from a database. The database being used here is MongoDB.`,
    role: 'Front-end',
    img: assets.ejs_auth_1,
    imgs: [assets.ejs_auth_1, assets.ejs_auth_2, assets.ejs_auth_3],
    repo: null,
    link: 'https://api-handy.herokuapp.com/'
  },
]

const experience = [
  {
    id: 1,
    title: 'Senior Software Engineer (Communications Satellite Engineer)',
    location: 'Defence Space Administration',
    period: 'April 2021 - Present'
  },
  {
    id: 2,
    title: 'Backend Developer',
    location: 'Chowberry',
    period: 'March 2020 - June 2022'
  },
  {
    id: 3,
    title: 'Senior Software Engineer (Technological Manager)',
    location: 'Pan-African Renaissance Vocational Institute',
    period: 'August 2021 - March 2022'
  },
  {
    id: 4,
    title: 'Full-Stack Developer',
    location: 'inScript',
    period: 'Febuary 2019 - December 2021'
  },
  {
    id: 5,
    title: 'Full-Stack Developer',
    location: 'Freelance',
    period: 'December 2018 - Present'
  }
]

const skills = [
  'Full-Stack Development',
  'HTML & CSS',
  'Test-Driven Development',
  'RESTful API',
  'Javascript',
  'Typescript',
  'C#',
  'Python',
  'PHP',
  'NodeJS',
  'ReactJS',
  'React-Native',
  'Bootstrap 5',
  'Tailwind',
  'ASP.NET CORE',
  'Heroku',
  'Digital Ocean',
  'Docker',
  'Firebase',
  'MongoDB',
  'MySQL',
  'NGINX'
];

const tabs = [
  'All', 
  'ReactJS', 
  'React Native', 
  'Javascript', 
  'NodeJS', 
  'Typescript', 
  'HTML & CSS',
  'Tailwind',
  'Bootstrap 5',
  'Firebase'
]

export { projects, experience, skills, tabs };