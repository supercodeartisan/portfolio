// =============================================================================
// PORTFOLIO DATA — EDIT THIS FILE TO PERSONALIZE YOUR SITE
// Structure matches the reference design.
// TODO(user): add real project links, EmailJS keys, and certification badges.
// =============================================================================

const NAME = "Art Franco";
const TITLE = "Senior Full Stack Engineer";
const LOCATION = "Angeles, Pampanga, Philippines";
const EMAIL = "artfranco083@gmail.com";
const PHONE = "+63 960 823 9338";
const RESUME_URL = "https://drive.google.com/file/d/1keqyLFo0EPHD-xNKyvrggfaQhwLFQpxQ/view?usp=sharing";

export const profile = {
  name: NAME,
  title: TITLE,
  location: LOCATION,
  contact: {
    email: EMAIL,
    phone: PHONE,
  },
  site: {
    counter_namespace: "portfolio",
    tech_stack: ["Java", "Spring Boot", "React", "React Native", "Next.js", "TypeScript", "Node.js", "Python", "AWS", "Azure", "LangChain", "LangGraph", "Kafka"],
  },
  languages: [
    { name: "English", level: "Native" },
    { name: "Filipino", level: "Native" },
  ],
};

export const roles = [
  "Senior Full Stack Engineer",
  "GenAI Integrations Engineer",
  "Cloud-Native Systems Engineer",
  "Java / Spring Boot Specialist",
  "React & Next.js Developer",
];

export const statistics = {
  experience: "8+",
  companies: "4",
  features: "15+",
  domains: "3",
};

export const statistics_labels = {
  experience: "Years of Experience",
  companies: "Companies",
  features: "Web Features Delivered",
  domains: "Industry Domains",
};

export const social_profiles = [
  { id: 1, name: "LinkedIn", link: "https://www.linkedin.com/in/art-angelo-franco/", icon: "FaLinkedin" },
  { id: 2, name: "Facebook", link: "https://www.facebook.com/profile.php?id=61591538357614", icon: "FaFacebook" },
];

export const about = {
  greeting: "Senior Full Stack Engineer specializing in GenAI integrations and cloud-native systems.",
  current_role:
    "🚀 Senior Software Engineer with 8+ years of experience building web and mobile applications, SaaS platforms, enterprise systems, and AI-powered products across healthcare, fintech, and e-commerce domains.",
  specialization:
    "🎯 Strong expertise in Java/Spring Boot, React, React Native, Next.js, TypeScript, Node.js, and Python, with a focus on microservices architectures, REST APIs, and GraphQL services.",
  education:
    "🎓 Completed a Bachelor of Computer Science (BCS) from STI College, Cavite, Philippines (August 2013 - June 2017).",
  competitive_programming:
    "💡 Specialized in Generative AI integrations including LLMs, RAG pipelines, AI agents, vector search, and intelligent automation workflows, with production deployments on AWS, Docker, Kubernetes, and CI/CD pipelines.",
};

export const professional_experience = [
  {
    id: 1,
    date: "Mar 2024 - May 2026",
    title: "Senior Software Engineer",
    position: "Remote",
    company: "Diffco",
    location: "",
    summary:
      "Built enterprise AI-powered knowledge management platforms and workflow automation systems with Generative AI capabilities including AI assistants, copilots, semantic search, and workflow automation.",
    projects: [
      {
        name: "Enterprise AI Knowledge Platform",
        date: "Mar 2024 - May 2026",
        description: {
          1: "Built enterprise AI-powered knowledge management platforms and workflow automation systems using React/TypeScript, Python, Java/Spring Boot, and cloud technologies.",
          2: "Developed modern frontend experiences for AI-powered applications using React, Next.js, and TypeScript, including conversational UIs, dashboards, workflow builders, and enterprise portals.",
          3: "Integrated Generative AI features using OpenAI APIs, LangChain, LangGraph, and RAG architectures, enabling conversational interfaces, intelligent search, document automation, and knowledge discovery workflows.",
          4: "Introduced event-driven microservices with Node.js, Python, and Kafka, cutting update latency by 80%.",
          5: "Developed backend engines using Python, FastAPI, Java/Spring Boot, and Node.js, implementing REST APIs, GraphQL, microservices architecture, and scalable service layers.",
          6: "Implemented enterprise security using OAuth2, JWT, RBAC, and SSO authentication patterns.",
          7: "Deployed production AI systems using AWS, Docker, Kubernetes, GitHub Actions, and Jenkins, reducing deployment cycles from 45 minutes to under 10 minutes.",
        },
        skills: ["React", "Next.js", "TypeScript", "Python", "Java", "Spring Boot", "FastAPI", "Node.js", "Kafka", "LangChain", "LangGraph", "RAG", "OpenAI", "PostgreSQL", "AWS", "Docker", "Kubernetes", "GitHub Actions", "Jenkins"],
      },
      {
        name: "Integrations, Testing & Queflic MVP",
        date: "2024 - 2026",
        description: {
          1: "Integrated GoHighLevel CRM and automation workflows with web applications using customer pipelines, lead management, automated messaging, and webhooks.",
          2: "Developed unit and integration test suites for migrated services, identifying edge cases, ambiguities, and potential failure modes.",
          3: "Implemented the end-to-end MVP workflow and deployment for Queflic, a social-network-style React Native application integrating Spotify, Google Maps, and Firebase.",
        },
        skills: ["GoHighLevel", "Webhooks", "Unit Testing", "Integration Testing", "React Native", "Spotify", "Google Maps", "Firebase"],
      },
    ],
    internal_contributions: [],
    internal_achievements: [],
  },
  {
    id: 2,
    date: "Apr 2021 - Feb 2024",
    title: "Senior Software Engineer",
    position: "Remote",
    company: "Parkland",
    location: "",
    summary:
      "Built an enterprise fleet management platform supporting refueling, EV charging, and retail operations, plus a franchisee reporting platform that automated monthly reporting.",
    projects: [
      {
        name: "Fleet Management & EV Charging Platform",
        date: "Jan 2023 - Feb 2024",
        description: {
          1: "Built enterprise fleet management platform using Java/Spring Boot, React, SQL Server, and AWS supporting refueling, EV charging, and retail operations.",
          2: "Enabled real-time EV charge point access and management across multiple regions.",
          3: "Crafted React Native fleet management tools allowing customers to track fuel consumption, reducing logistics costs by 18%.",
          4: "Implemented secure MVC portals for B2B clients to manage fleet accounts, invoices, charge sessions, and refueling analytics.",
          5: "Integrated Stripe and PayPal payment flows for B2B mobility services, reducing checkout failures by 28%.",
          6: "Contributed to the AWS cloud migration, enhancing system reliability and scalability.",
        },
        skills: ["Java", "Spring Boot", "React", "React Native", "SQL Server", "AWS", "Azure", "Stripe", "PayPal", "MVC"],
      },
      {
        name: "Franchisee Reporting Automation",
        date: "2023",
        description: {
          1: "Owned franchisee reporting platform built with Node.js, React, Redux Toolkit, and PDFKit, automating manual monthly reporting and saving the corporate finance team 25+ hours/week.",
          2: "Integrated document intelligence using OCR, NLP, Hugging Face Transformers, and LLM-based extraction for automated document classification and information extraction.",
          3: "Formulated Python-based microservices for AI inference and healthcare automation, improving data processing efficiency by 45% while maintaining HIPAA compliance.",
          4: "Established API-driven authentication and payment systems for B2B clients, reducing transaction friction by 40%.",
          5: "Scoped project requirements using Agile and Scrum principles for a mission-critical multi-page application, reducing ad hoc work requests by 16%.",
        },
        skills: ["Node.js", "React", "Redux Toolkit", "PDFKit", "Python", "OCR", "NLP", "Hugging Face", "LLM", "HIPAA", "Microservices", "AWS", "Azure"],
      },
    ],
    internal_contributions: [],
    internal_achievements: [],
  },
  {
    id: 3,
    date: "Oct 2019 - Mar 2021",
    title: "Full Stack Engineer",
    position: "Remote",
    company: "PrizeCart",
    location: "",
    summary:
      "Built Next.js merchant widgets and prize portals while integrating Shopify APIs, Stripe, and Azure.",
    projects: [
      {
        name: "Merchant Prize & Rewards Portal",
        date: "Oct 2019 - Mar 2021",
        description: {
          1: "Produced Next.js pages for merchant widgets and public prize portals, boosting conversion rates by 22%.",
          2: "Developed backend APIs using Java/Spring Boot and Entity Framework Core while integrating Shopify APIs, Stripe, and Azure.",
          3: "Integrated Shopify APIs for automated installation, merchant authentication, and order data sync.",
          4: "Implemented real-time microservices for dealer scoring and CRM complaint analytics, decreasing customer response times by 50%, with unit and integration tests across backend and frontend layers.",
          5: "Developed asynchronous task execution using Celery, RabbitMQ, and Redis, monitored with Flower.",
          6: "Partnered with design teams to enhance the Reveal Prize user flow, improving retention by 35%.",
          7: "Optimized PostgreSQL schemas and queries for prize redemption and billing workflows, reducing report load times by 35%.",
          8: "Deployed production builds with CI/CD pipelines on Azure and implemented observability using Azure Monitor and Azure Application Insights.",
        },
        skills: ["Next.js", "React", "Java", "Spring Boot", "Entity Framework Core", "Shopify API", "Stripe", "Azure", "PostgreSQL", "Celery", "RabbitMQ", "Redis", "Flower", "CI/CD", "Azure Monitor", "Application Insights"],
      },
    ],
    internal_contributions: [],
    internal_achievements: [],
  },
  {
    id: 4,
    date: "Nov 2017 - Sep 2019",
    title: "Full Stack Developer",
    position: "Hybrid",
    company: "ThinkBIT Solutions",
    location: "",
    summary:
      "Developed web application features for client projects using modern frontend practices, REST API integrations, and database-driven functionality.",
    projects: [
      {
        name: "Client Web Applications",
        date: "Nov 2017 - Sep 2019",
        description: {
          1: "Developed 15+ web application features for client projects using JavaScript, HTML, CSS, and modern frontend development practices.",
          2: "Built responsive user interfaces for business applications, improving usability across desktop and mobile browsers.",
          3: "Integrated frontend applications with backend services through REST APIs, connecting user interfaces with application logic and databases.",
          4: "Introduced reactive programming with WebFlux for high-concurrency invoice generation and added targeted regression tests for peak-load failure modes.",
          5: "Developed database-driven functionality using SQL Server, supporting business workflows and application requirements.",
          6: "Supported the delivery of multiple custom software projects across frontend development, API integration, and full-stack application workflows.",
        },
        skills: ["JavaScript", "HTML5", "CSS3", "Java", "Python", "SQL", "SQL Server", "REST API", "WebFlux", "Regression Testing"],
      },
    ],
    internal_contributions: [],
    internal_achievements: [],
  },
];

export const positions_of_responsibility = [];

export const education = [
  {
    id: 1,
    date: "Aug 2013 - Jun 2017",
    title: "Bachelor of Computer Science (BCS)",
    institution: "STI College",
    institutionType: "Private College",
    department: "Computer Science",
    location: "Cavite, Philippines",
    cgpa: null,
    percentage: null,
    display_text: "STI College - Cavite, Philippines",
    achievements: [],
    skills: ["Java", "Software Engineering", "Data Structures & Algorithms", "Computer Networks", "Database Management Systems"],
  },
];

export const skills = {
  languages: ["JavaScript", "TypeScript", "Java", "Python", "SQL"],
  frontend: ["React", "React Native", "Next.js", "Angular", "Jest", "Redux Toolkit", "Tailwind CSS"],
  backend: ["Node.js", "Express.js", "Spring Boot", "FastAPI", "Django", "Flask", "REST API", "GraphQL", "Microservices", "WebFlux"],
  database: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Snowflake", "pgvector"],
  ai_ml: ["LLMs", "GenAI", "OpenAI", "LangChain", "LangGraph", "RAG", "NLP", "Hugging Face", "Vector Embeddings", "Prompt Engineering"],
  integration: ["OAuth2", "JWT", "RBAC", "SSO", "API Gateway", "Stripe", "PayPal", "Shopify API", "Google Maps API", "Firebase", "GoHighLevel", "Elasticsearch", "Algolia"],
  cloud_devops: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "CI/CD", "Azure Monitor", "Application Insights"],
  engineering: ["Git", "Jira", "Confluence", "Agile/Scrum", "TDD", "BDD"],
};

export const languages = skills.languages.map((name) => ({ name }));

export const services = [
  {
    id: 1,
    title: "Full-Stack Engineering",
    list: [
      "Java / Spring Boot & React / Next.js Applications",
      "REST API & GraphQL Services",
      "Microservices Architecture",
      "Web & Mobile (React Native) Development",
      "Scalable SaaS Platforms",
    ],
  },
  {
    id: 2,
    title: "AI Engineering",
    list: [
      "LLM Integrations & AI Assistants",
      "RAG Pipelines & Vector Search",
      "LangChain / LangGraph Agents",
      "Document Intelligence & NLP",
      "Prompt Engineering & Fine-Tuning",
    ],
  },
  {
    id: 3,
    title: "Cloud & DevOps",
    list: [
      "AWS Cloud Architecture",
      "Docker & Kubernetes Orchestration",
      "CI/CD Pipelines (GitHub Actions, Jenkins)",
      "Deployment Automation",
      "Monitoring & Observability",
    ],
  },
  {
    id: 4,
    title: "AI Agents & Automation",
    list: [
      "Autonomous Agent Workflows",
      "Tool-Use & Function Calling",
      "Workflow Automation",
      "Enterprise System Integrations",
      "Intelligent Process Automation",
    ],
  },
  {
    id: 5,
    title: "Machine Learning",
    list: [
      "NLP Pipelines",
      "Vector Embeddings & Semantic Search",
      "Hugging Face Transformers",
      "Model Evaluation",
      "AI Inference Services",
    ],
  },
  {
    id: 6,
    title: "Software Engineering",
    list: [
      "System Design & Architecture",
      "OAuth2, JWT, RBAC, SSO Security",
      "Clean Code & TDD / BDD",
      "Performance Optimization",
      "Technical Documentation",
    ],
  },
  {
    id: 7,
    title: "Open Source & Collaboration",
    list: [
      "Agile / Scrum Delivery",
      "Cross-Functional Collaboration",
      "Code Review & Best Practices",
      "Technical Writing",
      "Mentoring Junior Developers",
    ],
  },
];

const featured = [
  {
    id: 1,
    title: "Enterprise AI & Automation Platform",
    date: "March 2024 - May 2026",
    tools_tech: ["React", "Next.js", "TypeScript", "Java", "Spring Boot", "Python", "FastAPI", "Kafka", "LangChain", "LangGraph", "OpenAI", "AWS", "Kubernetes"],
    features: [
      "Enterprise knowledge management and workflow automation with AI assistants, copilots, and semantic search.",
      "Conversational UIs, dashboards, workflow builders, and enterprise portals built with React, Next.js, and TypeScript.",
      "Generative AI integrations using OpenAI APIs, LangChain, LangGraph, and RAG architectures.",
      "Event-driven Node.js and Python microservices using Kafka, cutting update latency by 80%.",
      "Production deployments on AWS with Docker, Kubernetes, GitHub Actions, and Jenkins, reducing deploy cycles from 45 minutes to under 10 minutes.",
    ],
    live: "https://diffco.us/",
  },
  {
    id: 2,
    title: "Fleet Management & EV Charging Platform",
    date: "April 2021 - February 2024",
    tools_tech: ["Java", "Spring Boot", "React", "React Native", "SQL Server", "AWS", "Azure", "Stripe", "PayPal"],
    features: [
      "Enterprise platform supporting refueling, EV charging, and retail operations.",
      "Real-time EV charge point access and management across multiple regions.",
      "React Native mobile tools for fuel consumption tracking, cutting logistics costs by 18%.",
      "Stripe and PayPal B2B payment flows reducing checkout failures by 28%.",
      "Secure MVC portals for B2B clients to manage fleet accounts, invoices, and analytics.",
      "AWS cloud migration work improving system reliability and scalability.",
    ],
    live: "https://www.parkland.ca/en/",
  },
  {
    id: 3,
    title: "Merchant Prize & Rewards Portal",
    date: "October 2019 - March 2021",
    tools_tech: ["Next.js", "React", "Java", "Spring Boot", "Entity Framework Core", "Shopify API", "Stripe", "Azure", "PostgreSQL", "Celery", "RabbitMQ", "Redis"],
    features: [
      "Next.js merchant widgets and public prize portals boosting conversion rates by 22%.",
      "Shopify API integration for automated installation, merchant authentication, and order synchronization.",
      "Asynchronous task execution with Celery, RabbitMQ, and Redis, monitored with Flower.",
      "PostgreSQL optimization reducing prize redemption and billing report load times by 35%.",
      "Azure CI/CD deployments with Azure Monitor and Azure Application Insights.",
    ],
    live: "https://reveal.prizecart.app/",
  },
  {
    id: 4,
    title: "Queflic Social Platform MVP",
    date: "2024 - 2026",
    tools_tech: ["React Native", "Spotify", "Google Maps", "Firebase"],
    features: [
      "Implemented the end-to-end workflow and deployment of a social-network-style mobile application.",
      "Integrated Spotify, Google Maps, and Firebase services into the React Native MVP.",
    ],
    live: null,
  },
];

const collaborative = [
  {
    id: 5,
    title: "Franchisee Reporting Automation",
    date: "2023",
    tools_tech: ["Node.js", "React", "Redux Toolkit", "PDFKit", "Azure"],
    features: [
      "Automated manual monthly reporting, saving the corporate finance team 25+ hours/week.",
      "Secure MVC portals for B2B clients to manage accounts, invoices, and analytics.",
      "PDF generation and delivery pipelines for franchisee reports.",
    ],
    live: null,
  },
  {
    id: 6,
    title: "Document Intelligence Pipeline",
    date: "April 2021 - February 2024",
    tools_tech: ["Python", "OCR", "NLP", "Hugging Face Transformers", "LLM", "Microservices", "HIPAA"],
    features: [
      "Automated document classification and information extraction using OCR, NLP, and transformers.",
      "LLM-based extraction services integrated into enterprise workflows.",
      "Python-based microservices for AI inference and healthcare automation improving data processing efficiency by 45% while maintaining HIPAA compliance.",
    ],
    live: null,
  },
  {
    id: 7,
    title: "Dealer Scoring & CRM Analytics",
    date: "October 2019 - March 2021",
    tools_tech: ["Node.js", "React", "Java", "Spring Boot", "Celery", "RabbitMQ", "Redis", "Azure"],
    features: [
      "Implemented real-time microservices for dealer scoring and CRM complaint analytics.",
      "Decreased customer response times by 50% with unit and integration tests across backend and frontend layers.",
      "Developed asynchronous processing workflows using Celery, RabbitMQ, and Redis.",
    ],
    live: null,
  },
  {
    id: 8,
    title: "Client Web Applications",
    date: "November 2017 - September 2019",
    tools_tech: ["JavaScript", "HTML5", "CSS3", "Java", "Python", "SQL", "SQL Server", "REST API", "WebFlux"],
    features: [
      "Developed 15+ web application features using JavaScript, HTML, CSS, Java, Python, and SQL.",
      "Built responsive business interfaces for desktop and mobile browsers.",
      "Introduced WebFlux for high-concurrency invoice generation with targeted regression tests.",
      "Integrated frontend applications with backend services through REST APIs and SQL Server.",
    ],
    live: "https://thinkbitsolutions.com/",
  },
];

export const featured_projects = featured;
export const collaborative_projects = collaborative;
export const other_projects = [];
export const community_projects = [];
export const open_source_contributions = [];
export const community_discussions = [];

export const contact_options = [
  { id: 1, icon: "MdOutlineEmail", title: "Email Me", value: EMAIL, link: "mailto:" + EMAIL, message: "Send a Mail" },
  { id: 2, icon: "FiPhone", title: "Call Me", value: PHONE, link: "tel:+639608239338", message: "Call" },
  { id: 3, icon: "FaLinkedin", title: "LinkedIn", value: "Art Angelo Franco", link: "https://www.linkedin.com/in/art-angelo-franco/", message: "Connect" },
];

export const email_config = {
  service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "",
  template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "",
  public_key: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "",
  validation_pattern: "^[\\w.%+-]+@[\\w.-]+\\.[a-zA-Z]{2,}$",
};

export const resume_url = RESUME_URL;

export const navigation = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export const footer_links = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
