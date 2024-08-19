import {
  mobile,
  backend,
  creator,
  dev,
  cpp,
  java,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mysql,
  git,
  adobexd,
  docker,
  meta,
  starbucks,
  rts,
  AS_Chico,
  updatus,
  cognifront,
  SPIT,
  tesla,
  shopify,
  chatbot,
  ChargeEasy,
  cfv,
  bank,
  DTMF,
  matlab,
  python,
  mendix,
  csu_chico,
} from "../assets";

export const navLinks = [
  {
    id: "Resume",
    title: "Resume",
  },
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
    title: "Software Developer",
    icon: dev,
  },
  {
    title: "Master's Student",
    icon: csu_chico,
  },
];


const technologies = [
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "Mendix",
    icon: mendix,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MATLAB",
    icon: matlab,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Adobe XD",
    icon: adobexd,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
];

const experiences = [
  {
    title: "AI - Full Stack Developer Intern",
    company_name: "RoundTechSquare",
    icon: rts,
    iconBg: "#E6DEDD",
    date: "May 2024 - Present",
    points: [
      "Contributed to both the development process and the effective management of our Agile teams while increasing stakeholder's engagement.",
      " Encouraged team members to share their ideas for process enhancements, which led to reduced defect rate by 15%.",
      "Increased team productivity by approximately 20% through streamlined processes.",
      "Effectively managed team conflicts by creating a safe environment for open dialogue.",
    ],
  },
  {
    title: "Student Ambassador",
    company_name: "Associated Students of CSU",
    icon: AS_Chico,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Present",
    points: [
      "Contributed to an ongoing exploration of transitioning the application towards a SaaS model.",
      "Developed solutions for data migration to ensure smooth transitions between systems.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Associate Software Developer",
    company_name: "Updatus Inc",
    icon: updatus,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - July 2023",
    points: [
      "Developed dynamic web pages using React.js to capture user data and present results • Constructed complex data structure and point system based on user answers for assessments • Implemented Stripe integration to collect payments • Utilized Firebase Authentication, Firebase Realtime Database, and Firebase Functions written in JavaScript.",
      "Developed proficiency in RESTful web services using the Python web framework Django • Followed best coding practices like code reviews, unit testing, and continuous integration to ensure high-quality code • Implemented object-oriented programming concepts to design and build modular and reusable code.",
    ],
  },
  {
    title: "Machine Lerning Intern",
    company_name: "Cognifront",
    icon: cognifront,
    iconBg: "#FFFFFF",
    date: "May 2021 - July 2021",
    points: [
      "Developed module proficiency in machine learning using Python 3 and libraries such as Matplotlib, NumPy, Pandas, Seaborn & Sklearn to create models with high accuracy.",
      "Demonstrated initiative by leveraging virtual work structure to manage responsibilities & share information across a distributed team of 10 members • Acquired ability to take initiative, manage time and prioritize tasks efficiently, while maintaining self-discipline",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Vyankatesh consistently demonstrates a high level of technical proficiency and creativity. His ability to collaborate effectively and contribute meaningful insights makes him an outstanding team player. He’s someone you can rely on to deliver beyond expectations.",
    name: "Sumit Wagh",
    designation: "Manager",
    company: "Updatus Inc.",
    image: "",
  },
  {
    testimonial:
      "Vyankatesh approaches every challenge with a positive attitude and a strong work ethic. His problem-solving skills are exceptional, and his ability to adapt and innovate sets him apart. He’s always looking for ways to improve and make a difference.",
    name: " Anjali Kakkad Patel",
    designation: "Technical Project Manager",
    company: "Google",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
    // "Vyankatesh’s role as a Student Ambassador at CSU Chico is a testament to his commitment to both academic excellence and community involvement. He’s a natural leader who connects with students and faculty alike, always striving to create a supportive and inclusive environment."
      "As a Student Ambassador, Vyankatesh has shown exceptional leadership and communication skills. His enthusiasm for helping fellow students and representing CSU Chico is truly inspiring. He brings a positive energy to every event and interaction, making him a wonderful ambassador for our university.",
    name: "XYZ",
    designation: "Program Coordinator",
    company: "Associated Students CSU",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "College Enquiry Chatbot",
    description:
      "A chatbot featuring a custom algorithm, meticulously designed to optimize accuracy (more than 95%) and provide precise, context-aware responses for enhanced user interactions and satisfaction.",
    tags: [
      {
        name: "NLP",
        color: "blue-text-gradient",
      },
      {
        name: "Kiwi",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "blue-text-gradient",
      },
    ],
    image: chatbot,
    source_code_link: "https://github.com/pranjalpimpale4/College_Enquiry_Chatbot",
    research_paper_link: "https://drive.google.com/file/d/1FxUasJsF3A8DaF8PG_CY-xDxVosaZi7H/view?usp=sharing",
  },
  {
    name: "ChargeEasy",
    description:
      "Developed a full-stack web application to assist electric vehicle (EV) drivers with navigation, utilizing the Angular framework for the frontend and Firebase for the backend.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
    ],
    image: ChargeEasy,
    source_code_link: "https://github.com/pranjalpimpale4/ChargeEasy",
    research_paper_link: "https://drive.google.com/file/d/1jBjI5_pBLD1MJ6_msf-n9DB0alx0NM36/view?usp=sharing",
  },
  {
    name: "Contactless Fingerprint Verification",
    description:
      "Implemented pre-processing and a CNN model using deep learning on the Keras framework, achieving fingerprint recognition accuracy exceeding 90%.",
    tags: [
      {
        name: "CCN",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "MATLAB",
        color: "blue-text-gradient",
      },
    ],
    image: cfv,
    source_code_link: "https://github.com/pranjalpimpale4/Contactless-Fingerprint-Verification-using-Neural-Networks",
    research_paper_link: "https://ieeexplore.ieee.org/document/9510036",
  },
  {
    name: "Bank DBMS",
    description:
      "Developed an entire Bank database management system using MySQL Workbench and SQL queries required for it considering most of the use cases of a bank.",
    tags: [
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
    ],
    image: bank,
    source_code_link: "https://github.com/pranjalpimpale4/Bank-Database-Management-System",
    research_paper_link: "https://drive.google.com/file/d/1QG-dN4OuhoRlsMDa62uPeXHuC9CWfuF8/view?usp=sharing",
  },
  {
    name: "DTMF Encoder Decoder",
    description:
      "Developed a Dual Tone Multi-Frequency MATLAB web app for encoding and decoding in text and audio format based on frequencies of the input using Gonzalez algorithm",
    tags: [
      {
        name: "MATLAB",
        color: "blue-text-gradient",
      },
    ],
    image: DTMF,
    source_code_link: "https://github.com/pranjalpimpale4/Bank-Database-Management-System",
    research_paper_link: "https://drive.google.com/file/d/1vzQwEaY9_SmQfxN8SoC63_FUKKqyc-Rw/view?usp=sharing",
  },
];

export { services, technologies, experiences, testimonials, projects };
