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
  CareSync,
  DevBoard,
  BiasMap,
  ThreadMirror,
  Chess,
  AgilePilot,
  SynapseSupply,
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
    name: "SynapseSupply",
    description:
      "Built an agentic supply chain platform that forecasts demand, evaluates supplier risk, and autonomously negotiates blockchain-backed contracts. Deployed AI-driven workflows that reduced manual intervention and improved procurement reliability; secured 3rd place at the SilverSide Hackathon.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "CrewAI",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
      {
        name: "Blockchain",
        color: "green-text-gradient",
      },
      {
        name: "AI Agent",
        color: "pink-text-gradient",
      },
    ],
    image: SynapseSupply,
  },
  {
    name: "CareSync",
    description:
      "Developed an AI surgical workflow assistant with RAG and LoRA fine-tuning for accurate, context-specific procedure recommendations. Delivered a React + Tailwind UI for seamless doctor–AI interaction; ranked in the top 5 at the Commure Hackathon.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "RAG",
        color: "pink-text-gradient",
      },
      {
        name: "LoRA",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "AI Agent",
        color: "blue-text-gradient",
      },
    ],
    image: CareSync,
  },
  {
    name: "AgilePilot",
    description:
      "Designed a full-stack project management tool. Developed scalable RESTful APIs using Node.js, Express, and efficient PostgreSQL queries.",
    tags: [
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Postman",
        color: "pink-text-gradient",
      },
    ],
    image: AgilePilot,
  },
  {
    name: "Multiplayer Chess with AI Bot",
    description:
      "Built real-time multiplayer chess with Django Channels for instant gameplay updates via WebSockets. Containerized and deployed app on Google Cloud using Docker, PostgreSQL, and load balancing. Created customizable AI opponents with varying difficulty for diverse user experience.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "GCP",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "WebSockets",
        color: "green-text-gradient",
      },
      {
        name: "Redis",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: Chess,
  },
  {
    name: "ThreadMirror",
    description:
      "Converts Reddit threads into narrated podcasts using AI-driven text-to-speech and LLM rewriting. Generates context-driven backgrounds, reactions, and summaries based on thread tone. Queues automated audio generation; enables user subscriptions to preferred subreddits.",
    tags: [
      {
        name: "AI",
        color: "blue-text-gradient",
      },
      {
        name: "Text-to-Speech",
        color: "green-text-gradient",
      },
      {
        name: "LLM",
        color: "pink-text-gradient",
      },
    ],
    image: ThreadMirror,
  },
  {
    name: "BiasMap",
    description:
      "Scrapes and analyzes headlines using NLP, mapping media biases visually across political spectrums. Allows event framing comparison across outlets through interactive, clickable heatmap visualizations. Full-stack app built on Django backend, SQLite database, and newspaper3k for web scraping.",
    tags: [
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "NLP",
        color: "blue-text-gradient",
      },
      {
        name: "SQLite",
        color: "pink-text-gradient",
      },
      {
        name: "newspaper3k",
        color: "green-text-gradient",
      },
    ],
    image: BiasMap,
  },
  {
    name: "DevBoard",
    description:
      "Animates GitHub repository histories, visualizing commits, contributor activity, and code growth. Creates interactive issue/PR bubbles and commit bursts, exportable as timeline videos. Built with Next.js frontend, Chart.js visuals, Node backend; integrates Git logs and GitHub APIs.",
    tags: [
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
      {
        name: "Chart.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "GitHub API",
        color: "blue-text-gradient",
      },
    ],
    image: DevBoard,
  },
];

export { services, technologies, experiences, testimonials, projects };
