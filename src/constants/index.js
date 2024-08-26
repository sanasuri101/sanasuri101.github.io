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
  edgile,
  helmer,
  shopify,
  purdue,
  carrent,
  fakeorreal,
  LLM20,
  jobit,
  tripguide,
  threejs,
  google,
  airline
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
    title: "AI/ML Engineer",
    icon: web,
  },
  {
    title: "Cybersecurity Consultant",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: creator,
  },
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
    name: "TypeScript",
    icon: typescript,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software/Cybersecurity Consultant",
    company_name: "Edgile",
    icon: edgile,
    iconBg: "#383E56",
    date: "September 2022 - Current",
    points: [
      "Cloud Information Security with Azure",
      "Governance and Risk Compliance with ServiceNow",
      "Identity Governance and Access Management with Sailpoint",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "Helmer Scientific",
    icon: helmer,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - May 2022",
    points: [
      "Explored Helmer Scientific Data through creating PowerBI / Tableau Visualizations used in identifying seasonal trends and products that drive sales and eliminate locations that are underutilized, saving the company 3M in revenue.",
      "Created SQL Stored Procedures that improved retrieval of data from internal database runtime by 20%.",
      "Implemented Time Series Models (ARIMA/SARIMA) to predict and model future sales forecasting.",
    ],
  },
  {
    title: "Computer Vision Researcher",
    company_name: "Meta",
    icon: meta,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Enhanced Purdue’s Solution for Object Recognition by Cameras mounted on drones for Meta’s Low Power Computer Vision Challenge by implementing pytorch model quantization on YoloV5 and Deepsort Models reducing training time for models by 45%.",
      "Converted Python scripts to Cython improving runtime of large dimension matrix functions of Convolutional Neural Networks from 1 hour to 5 minutes.",
      "Created the Object detection Rest API architecture utilizing Python Flask making it easier to upload a 100kb image at 100mbps on a Raspberry PI device.",
    ],
  },
  {
    title: "Computer Vision Researcher",
    company_name: "Google",
    icon: google,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Collaborated with Google’s TensorFlow Model Garden Team on experiments to build low power computer vision models (YoloX-Tiny, YoloX-Nano, MobileNetV3).",
      "Led Optimization of CPU Multithreading Processes leading to reducing number of CPU Compute Nodes & improving energy consumption by 38% with better pipelining, tucker decomposition, and input size reduction.",
      "Trained YoloV3 Model in tensorflow and began implementation of YoloV4.",
    ],
  },
  {
    title: "Software Researcher",
    company_name: "Purdue",
    icon: purdue,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Contributed to creating a prototype for a memoized backtracking regex engine and developing benchmark standards for large-scale Evaluation of real-world regexes.",
      "Conducted Regular Expression Denial of Service Analysis and improved API and HTML Security Posture for various active web services improving client side sanitization time by 15% and compression of regex results from avg. 2,83 MB to 1.02 MB.",
      "Collaborated in developing an interactive web-application with Node.js and Express.js with MongoDB Database connected to an AWS Lightsail instance to visualize the safety of a Regex.",
    ],
  }
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
    name: "LLM 20",
    description:
      "Created a large language model capable of playing the game 20 Questions. Teams will be paired in 2 vs 2 player matchups and race to deduce the secret word first.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "LLM",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: LLM20,
    source_code_link: "https://github.com/sanasuri101/LLM20",
  },
  {
    name: "FakeOrReal",
    description:
      "Machine Learning model that predicts whether a given text such as a tweet or a paragraph from a pdf is written by a bot or a real human.",
    tags: [
      
      {
        name: "python3",
        color: "green-text-gradient",
      },
      {
        name: "jupyter",
        color: "pink-text-gradient",
      },
      
    ],
    image: fakeorreal,
    source_code_link: "https://github.com/sanasuri101/fakeorreal",
  },
  {
    name: "Airport Manager",
    description:
      "Created a simulation of an airline managing system which handled flight changes, seat assignments, and boarding pass information through a JAVA interface ",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      
    ],
    image: airline,
    source_code_link: "https://github.com/sanasuri101/Project05-AirportManager",
  },
];

export { services, technologies, experiences, testimonials, projects };
