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
    title: "Software Engineer",
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
    title: "Software Engineer",
    company_name: "Updatus Inc",
    icon: updatus,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Build client onboarding modules with React, Next.js, and Spring Boot that cut account setup time 40% and improve KYC accuracy.",
      "Refactor a legacy monolith into Spring Boot microservices behind an API gateway, cutting release rollbacks 30% and improving fault isolation for trading workflows.",
      "Implement Kafka pipelines for real-time transactions and audit logs that process 100k+ events per day with 99.99% audit trails.",
      "Automate AWS provisioning with CloudFormation and deploy to EKS, reducing environment setup from days to under 2 hours for testing and regulatory reporting.",
      "Improve CI/CD with Jenkins and GitHub Actions. Add JUnit tests and blue-green deploys that reduce production downtime 60%.",
      "Integrate the ELK stack to boost observability, speeding anomaly detection 50% in reconciliation pipelines.",
      "Implemented a Retrieval-Augmented Generation (RAG) system combining a vector database with LLMs to answer internal knowledge base queries, reducing employee search times by 40% and increasing accuracy of answers by 20%.",
      "Applied Test-Driven Development (JUnit, Mockito) to reach 90%+ test coverage, reducing post-release bugs by 35%.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "RoundTechSquare",
    icon: rts,
    iconBg: "#E6DEDD",
    date: "May 2024 - Sept 2024",
    points: [
      "Designed and deployed Spring Boot and FastAPI for healthcare analytics, reducing response times by 35% and expediting insurance claim validations.",
      "Migrated backend workflows from polling to event-driven architecture with Amazon SQS, cutting AWS Lambda compute costs by 30% and improving efficiency.",
      "Built GraphQL services with Express.js to optimize data retrieval, reducing frontend over-fetching by 50% and boosting performance of healthcare dashboards.",
      "Configured monitoring with Prometheus, Grafana, and AWS CloudWatch, lowering average incident resolution time by 25%.",
      "Containerized backend services with Docker and automated deployment pipelines with GitLab CI, cutting build failures by 40% and ensuring consistent delivery.",
      "Engineered a cron orchestration microservice and optimized frontend modules, resulting in 60% faster page load times and improved end-user experience.",
    ],
  },
  {
    title: "Student Ambassador",
    company_name: "Associated Students of CSU",
    icon: AS_Chico,
    iconBg: "#E6DEDD",
    date: "May 2024 - Present",
    points: [
      "Actively collaborated with university departments to organize and promote student engagement events, contributing to a 20% increase in event participation.",
      "Facilitated interactions with students, fostering a welcoming and informative environment to enhance their campus visit experience.",
      "Utilized strong interpersonal skills to build rapport with diverse student groups, aiding in the university's outreach and inclusivity efforts.",
      "Managed event logistics, including scheduling, set-up, and coordination with campus departments, ensuring smooth operations during key events.",
    ],
  },
  {
    title: "Associate Software Developer",
    company_name: "Updatus Inc",
    icon: updatus,
    iconBg: "#E6DEDD",
    date: "Sept 2021 - July 2023",
    points: [
      "Developed and maintained modular UI components using Angular and TypeScript, improving responsiveness and reducing UI-related defects by 30%.",
      "Built backend services with Flask and REST APIs, which increased feature rollout speed by 25% through reusable API design.",
      "Managed deployments on Azure DevOps pipelines, achieving a 95% deployment success rate across multiple environments.",
      "Integrated RabbitMQ for asynchronous communication, boosting request throughput by 40% under heavy load.",
      "Tuned Python applications using Gunicorn, reducing response time variability by 30% in concurrent workloads.",
      "Implemented monitoring with Datadog and Splunk, reducing downtime by 20% with proactive anomaly detection.",
      "Optimized queries on Oracle DB and Cassandra, improving query performance and reducing latency by 35%.",
      "Packaged and deployed microservices with Podman and Helm, improving Kubernetes deployment stability by 25%.",
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
    name: "Sharleen Krater",
    designation: "Director, AS Programs",
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
