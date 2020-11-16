import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'P. Ciccone | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Peter,',
  subtitle: 'A recent greread software developer.',
  cta: 'Read more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile',
  paragraphOne:
    'I am a recent graduate of Farmingdale State College (SUNY) with a Bachelor of Science degree in Computer Programming and Information Systems.',
  paragraphTwo:
    "I've been programming since 2015, with lots of exposure to software and web development. I've worked with languages such as Java, C++, C#, HTML & JavaScript, PHP, with recently used technologies such as Node and React.js.",
  paragraphThree:
    'Links to my Github and LinkedIn profiles can be found at the very bottom of this page. Thank you for the visit, and I look forward to hearing from you!',
  resume: 'https://drive.google.com/file/d/1afbdi2-TTlREv6agfFUM3QbIC5BcZPJM/view', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'fscevents.png',
    title: 'FSCEvents',
    info:
      'This was a capstone project completed by myself and a group of classmates. We set out to build a full stack web application that could be of use to the college. Using php/MySQL, we created an event registration system for on-campus activites.',
    info2:
      'Creating FSCEvents was a process that took several months of planning, coordinating, and deploying a registration system for Farmingdale State College. Following Agile, we went through stages of diagramming, writing test plans, thinking of user stories. At the end of each two-week sprint, we completed retrospectives to ensure we kept building upon our ideas.',
    url: 'http://fscevents.com/',
    repo: 'https://github.com/ciccpa/FSCEvents?', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'payrollgui.png',
    title: 'PayrollGUI',
    info:
      'Payroll app created with C#/WPF that relies on serialization to read from "department" files in JSON format - Which contains workers and their shift information. As long as department files are correctly formatted, they can be read from and used.',
    info2:
      'This project was administered with a set of specs that were to be strictly followed, similar to how it would work in a real-world situation. The application allows a user to read data from JSON files and use that data to perform certain actions such as find an employee based on their ID, calculate total hours worked and total worker pay, and load data of all workers and shifts.',
    url: 'https://www.youtube.com/watch?v=L1VwluPz6xU&feature=emb_title',
    repo: 'https://github.com/ciccpa/PayrollGUI?', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'node_demo.jpg',
    title: 'CountdownApp',
    info:
      "Personal project created using Node.js and Twitter's API. This was used to build a possible promotional tool for upcoming films, videogames, sporting events, or anything of the sort. Each day an automated Tweet is fired off, along with a randomly selected gif.",
    info2:
      'The primary goal of this project was to be able to teach myself about Node.js, but to also solve a problem in being able to preschedule and automate tweets. The user creates a library of gifs, however many they choose to include. From there, a daily automated post is sent out and a random gif is chosen from that folder and attached to the tweet.',
    url: 'https://www.youtube.com/watch?v=_KO77GQaTH0&feature=emb_title',
    repo: 'https://github.com/ciccpa/CountdownApp?', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: ' ',
  btn: 'Send Message',
  email: 'peteraciccone@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url:
        'https://www.linkedin.com/authwall?trk=gf&trkInfo=AQG2JtwDvhUmxAAAAXXC171Awnw2GHeDRA8VIaFCe4k7z58_w3bLsWkitFESTlPvg0KVw1ws1yjFwFWlM-oAiYTvb47RXZpGDYeW-xS1QI0fLMtjpypoJmpy5U0peJbmzgzhWKo=&originalReferer=https://peterciccone.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fpeter-c-406065156%2F',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ciccpa',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
