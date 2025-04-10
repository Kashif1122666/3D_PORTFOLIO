import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ecommerce,
  jobPortel,
  stockManagment,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
{
  title: "Frontend Developer",
  icon: backend,
},
{
  title: "Backend Developer",
  icon: creator,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using ReactNative and other related technologies.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
         "I have hands-on experience in full-stack web development",
         "specializing in the MERN stack and building responsive, user-friendly applications.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "I have solid backend development experience, primarily using Node.js and Express", 
      "focus on building secure RESTful APIs and integrating MongoDB for scalable data management"   
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-commerce",
    description:
      "I developed an e-commerce website with Firebase authentication, using React for the frontend and Tailwind CSS for styling. The app features Redux for state management, allowing users to add products to the cart or favorites. For a deeper look, click the GitHub icon to check the repository and explore the full set of features, from dynamic interactions to a responsive user interface.",
    tags: [
      {
        name: "react",
        color: "blue",
      },
      {
        name: "firebase",
        color: "green",
      },
      {
        name: "tailwind",
        color: "pink",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/Kashif1122666/K-and-Z-ecommerce-website",
  },
  {
    name: "Job Portal",
    description:
     "I created a job portal where recruiters and students can create accounts. Recruiters have personalized dashboards to manage job postings, while students can filter jobs based on fields or locations. Recruiters can register companies and post jobs. Built with MongoDB, Node.js, Express.js, React, and ShadCN, explore the GitHub repository for more insights on the features and the user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: jobPortel,
    source_code_link: "https://github.com/Kashif1122666/complete-Job-portal-app-with-mern-stack",
  },
  {
    name: "Stock Management",
    description:
      "I developed a stock management app in React Native to enhance my skills. Built with React Native and styled using Tailwind CSS, this app allows users to manage stock levels effectively. It’s a mini project aimed at refining my React Native skills, offering a simple and intuitive interface. Visit the GitHub repository to explore the features and code behind the app.",
    tags: [
      {
        name: "reactNative",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },    
    ],
    image: stockManagment,
    source_code_link: "https://github.com/Kashif1122666/stocksManagment_reactNative_CLI",
  },
];

export { services, technologies, experiences, testimonials, projects };
