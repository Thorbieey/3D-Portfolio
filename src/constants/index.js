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
    threejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    weatherdashboard,
    passwordgenerator,
    codequiz,
    readmegenerator,
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
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "React JS",
      icon: reactjs,
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
      title: "Web Developer",
      company_name: "AITI",
      icon: tesla,
      iconBg: "#383E56",
      date: "Nov 2022 -  Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "HR Systems Administrator",
      company_name: "The AA",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Aug 2023 - Present",
      points: [
        "Spearheading the onboarding process for new employees, managing hardware and software troubleshooting and installation to maintain optimal performance levels.",
        "Providing comprehensive support to users, diagnosing issues and delivering effective solutions via phone, email, and desktop.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Administering HR information systems, ensuring data accuracy and system reliability.",
      ],
    },
    {
      title: "Customer Service Advisor",
      company_name: "02",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jul 2022 - Oct 2022",
      points: [
        "Actively listening to customer, trainers and managers feedback to improve service quality, maintaining a 98% customer satisfaction rating.",
        "Handling customer complaints and concerns, ensuring their satisfaction and retention, resulting in a 90%+ complaint resolution rate.",
      ],
    },
    {
      title: "Quality Assurance Supervisor",
      company_name: "LBSL",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Aug 2018 - Sep 2020",
      points: [
        "Coordinating post-delivery vehicle inspections for a fleet of over 150 vehicles, ensuring compliance with industry standards and safety regulations.",
        "Lead quality improvement initiatives, authoring Standard Operating Procedures (SOPs) and Service Level Agreements (SLAs) to streamline processes, resulting in a 20% increase in inspection efficiency.",
        "Collaborating remotely with the development team on Microsoft 365 to identify and resolve software defects and issues.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Weather Dashboard",
      description:
        "Responsive web-based platform that provides users with the ability to easily check the weather outlook for any city around the world from any device.",
      tags: [
        {
          name: "js",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: weatherdashboard,
      source_code_link: "https://thorbieey.github.io/Weather-Dashboard/",
    },
    {
      name: "Password Generator",
      description:
        "Web application for personal or professional users that generates passwords of varying complexities based on user-selected criterias.",
      tags: [
        {
          name: "js",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: passwordgenerator,
      source_code_link: "https://thorbieey.github.io/Password-Generator/",
    },
    {
      name: "Code Quiz",
      description:
        "A dynamic and interactive web application, where users are presented with multiple-choice code-related questions.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: codequiz,
      source_code_link: "https://thorbieey.github.io/Code-Quiz-OT/",
    },
    {
      name: "ReadMe Generator",
      description:
        "A command-line application that dynamically generates a professional README.md file from a user's input.",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "js",
          color: "blue-text-gradient",
        },
      ],
      image: readmegenerator,
      source_code_link: "https://github.com/Thorbieey/ReadMe-Generator/",
    },
  ];
  
  export { services, technologies, experiences, projects };