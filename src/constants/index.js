import {
  //Overview
  mobile,
  backend,
  frontend,
  web,
  //3d balls
  javascript,
  html,
  css,
  reactjs,
  python,
  github_dark,
  mysql,
  firebase,
  rest_api,
  flask,
  ec2,
  php,
  burpsuite,
  //Work experience
  amazon,
  lorem,
  APIsec,
  awsAcademy,
  //Project
  kalamari,
  portfolio,
  logo,
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
    title: "Cyber Security",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
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
    name: "github",
    icon: github_dark,
  },
  {
    name: "Mysql",
    icon: mysql,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "rest_api",
    icon: rest_api,
  },
  {
    name: "flask",
    icon: flask,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "ec2",
    icon: ec2,
  },
  {
    name: "burpsuite",
    icon: burpsuite,
  },

];

const experiences = [
  {
    title: "API Penetration Testing - Certificate of Completion",
    company_name: "APIsec University",
    icon: APIsec,
    iconBg: "#FFFFFF",
    date: "March 2023",
    points: [
      "Discovering and analyzing API.",
      "Endpoint Analysis and scanning API.",
      "Finding and testing vulnerability.",
      "Simulating API authentication attack, authorization attack such as BOLA and BFLA, improper assets management, mass assignment, server-side request forgery, and injection attack.",
    ],
  },
  {
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    company_name: "Amazon Web Services (AWS)",
    icon: awsAcademy,
    iconBg: "#E6DEDD",
    date: "March 2023",
    points: [
      "Learn about AWS fundamental and cloud concept.",
      "Securing AWS account, and giving least priviliges with Identity and Access management (IAM).",
      "How Networking and routing works in AWS.",
      "Learning about AWS compute service such as EC2, Lambda, Elastic Beanstalk, container service (Kubernetes & docker)",
    ],
  },
];

const projects = [
  {
    name: "Kalamari",
    description:
      "Kalamari is web-based file sharing platform, where user can upload and share the file to others user.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
      {
        name: "AWS EC2",
        color: "green-text-gradient",
      },
      {
        name: "Firestore",
        color: "pink-text-gradient",
      },
      {
        name: "GmailAPI",
        color: "orange-text-gradient",
      },      
      {
        name: "HTML",
        color: "white-text-gradient",
      },
    ],
    image: kalamari,
    source_code_link: "https://github.com/AngelVEC/public-secure-file-sharing/",
    source_code_link2: "https://www.kalamarisolutions.tk/",
  },
  {
    name: "3D Portofolio",
    description:
      "My first React Project and will used for my web portfolio from now on, will be updated in the future",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "react-three/fiber",
        color: "green-text-gradient",
      },
      {
        name: "emailjs",
        color: "pink-text-gradient",
      },
      {
        name: "vite",
        color: "orange-text-gradient",
      },      
    ],
    image: portfolio,
    source_code_link: "https://github.com/AngelVEC/React-Portfolio",
    source_code_link2: "https://www.ekkigunawan.com",
  },
];

const testimonials = [
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in lorem suscipit, porta urna et, dignissim sem. Donec sed orci semper, scelerisque velit eget, efficitur arcu. Aenean et turpis vestibulum, consectetur neque ac, laoreet eros. Pellentesque ut purus nec dui accumsan euismod. Nunc id ex enim. Suspendisse semper neque sed turpis imperdiet,",
    name: "Lorem Ipsum",
    designation: "CFO",
    company: "Self published",
    image: logo,
    //image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in lorem suscipit, porta urna et, dignissim sem. Donec sed orci semper, scelerisque velit eget, efficitur arcu. Aenean et turpis vestibulum, consectetur neque ac, laoreet eros. Pellentesque ut purus nec dui accumsan euismod. Nunc id ex enim. Suspendisse semper neque sed turpis imperdiet,",
    name: "Lorem Ipsum",
    designation: "COO",
    company: "Maintain self",
    image: logo,
    //image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in lorem suscipit, porta urna et, dignissim sem. Donec sed orci semper, scelerisque velit eget, efficitur arcu. Aenean et turpis vestibulum, consectetur neque ac, laoreet eros. Pellentesque ut purus nec dui accumsan euismod. Nunc id ex enim. Suspendisse semper neque sed turpis imperdiet,",
    name: "Lorem Ipsum",
    designation: "CTO",
    company: "self Enterprises",
    image: logo,
    //image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export { services, technologies, experiences, testimonials, projects };
