// =============================================================================
// PORTFOLIO DATA — synced to Art Franco resume (Final)
// =============================================================================

const NAME = "Art Franco";
const TITLE = "Senior Software Engineer";
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
    tech_stack: [
      "Python",
      "Java",
      "Spring Boot",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "OpenAI API",
      "LangChain",
      "LlamaIndex",
      "RAG",
      "AWS",
    ],
  },
  languages: [
    { name: "English", level: "Native" },
    { name: "Filipino", level: "Native" },
  ],
};

export const roles = [
  "Senior Software Engineer",
  "LLM Training & Evaluation",
  "LLM Integration & RAG",
  "Full Stack Engineer",
  "AI Agents & Technical Reasoning",
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
  { id: 2, name: "X", link: "https://x.com/ArtFrancoaw2g", icon: "FaXTwitter" },
  { id: 3, name: "Facebook", link: "https://www.facebook.com/profile.php?id=61591538357614", icon: "FaFacebook" },
];

export const about = {
  greeting: "Senior Software Engineer | LLM Training & Evaluation | LLM Integration & RAG",
  current_role:
    "Senior software engineer with nearly 8 years of experience building backend and full-stack applications, integrating AI capabilities, and evaluating complex technical systems.",
  specialization:
    "Combines this AI experience with hands-on engineering across Python, Java, Spring Boot, TypeScript, React, Next.js, Node.js, REST APIs, microservices, relational and NoSQL databases, AWS, and containerized delivery. Experienced in turning product and operational requirements into tested services, integrations, and reliable application workflows.",
  education:
    "Completed a Bachelor of Computer Science (BCS) from STI College, Cavite, Philippines (August 2017 – June 2021).",
  competitive_programming:
    "Recent work has focused on LLM training and annotation, model response and code evaluation, rubric and benchmark development, agent trajectory assessment, LLM API integration, and retrieval-augmented generation (RAG).",
};

export const professional_experience = [
  {
    id: 1,
    date: "Sep 2024 - Sep 2026",
    title: "Senior Software Engineer",
    position: "United States",
    company: "Diffco",
    location: "",
    summary:
      "LLM training and annotation, model response and code evaluation, rubric and benchmark development, agent trajectory assessment, LLM API integration, and retrieval-augmented generation (RAG).",
    projects: [
      {
        name: "LLM Training, Annotation & Evaluation",
        date: "Sep 2024 - Sep 2026",
        description: {
          1: "Evaluated LLM-generated answers, code, and multi-step technical reasoning against task requirements using executable checks, engineering evidence, and domain-specific quality criteria.",
          2: "Developed annotation guidelines, evaluation rubrics, scoring dimensions, and reference solutions for coding, debugging, REST API, database, and system-design tasks, including Python and TypeScript examples.",
          3: "Assessed model outputs for correctness, instruction following, security, edge-case handling, and code quality; reproduced failures through targeted tests and documented actionable root causes.",
          4: "Designed challenging evaluation scenarios covering ambiguous requirements, multi-file code changes, state management, concurrency, data integrity, API behavior, and recovery from failed tool actions.",
          5: "Reviewed AI-agent trajectories across planning, tool selection, execution, intermediate results, and error recovery, validating whether the final implementation met acceptance criteria.",
          6: "Prepared and quality-checked supervised fine-tuning (SFT) and preference-evaluation examples, verifying label accuracy, rationale quality, rubric alignment, and dataset consistency.",
        },
        skills: [
          "LLM Annotation",
          "SFT",
          "Preference Evaluation",
          "Rubric Design",
          "Agent Trajectory Review",
          "Coding Benchmarks",
          "Python",
          "TypeScript",
        ],
      },
      {
        name: "LLM Integration & RAG",
        date: "Sep 2024 - Sep 2026",
        description: {
          1: "Integrated LLM capabilities into backend workflows with Java/Spring Boot, Python, OpenAI APIs, and REST endpoints, adding structured request/response handling, input validation, and application-level error handling.",
          2: "Built retrieval-augmented generation (RAG) pipelines with Python, LangChain, and LlamaIndex, implementing document ingestion, chunking, embeddings, vector retrieval, context assembly, and grounded response generation.",
          3: "Evaluated retrieval quality through relevance checks, context-coverage analysis, grounding tests, and targeted test sets; iterated on prompts, retrieval settings, and response handling to reduce unsupported answers.",
          4: "Deployed production AI systems using AWS, Docker, Kubernetes, GitHub Actions, and Jenkins, reducing deployment cycles from 45 minutes to under 10 minutes.",
        },
        skills: [
          "Java",
          "Spring Boot",
          "Python",
          "OpenAI API",
          "LangChain",
          "LlamaIndex",
          "RAG",
          "AWS",
          "Docker",
          "Kubernetes",
          "GitHub Actions",
          "Jenkins",
        ],
      },
    ],
    internal_contributions: [],
    internal_achievements: [],
  },
  {
    id: 2,
    date: "Nov 2022 - Aug 2024",
    title: "Senior Software Engineer",
    position: "Canada",
    company: "Parkland Corporation",
    location: "",
    summary:
      "Built an enterprise fleet management platform spanning refueling, EV charging, and retail operations across multiple regions.",
    projects: [
      {
        name: "Fleet Management, Reporting & Automation",
        date: "Nov 2022 - Aug 2024",
        description: {
          1: "Built an enterprise fleet management platform spanning refueling, EV charging, and retail operations across multiple regions.",
          2: "The franchisee reporting platform was the most consequential piece of that work — it replaced a manual monthly process and returned more than 25 hours a week to the corporate finance team.",
          3: "Developed mobile tools for tracking fuel consumption, which reduced logistics costs by 18%.",
          4: "Established the B2B authentication and payment system that cut transaction friction by 40%.",
          5: "Worked on document intelligence and healthcare automation services, maintaining HIPAA compliance throughout.",
        },
        skills: [
          "Java",
          "Spring Boot",
          "React",
          "React Native",
          "Node.js",
          "Python",
          "AWS",
          "HIPAA",
          "Document Intelligence",
        ],
      },
    ],
    internal_contributions: [],
    internal_achievements: [],
  },
  {
    id: 3,
    date: "Oct 2021 - Oct 2022",
    title: "Full Stack Engineer",
    position: "Australia",
    company: "Prizecart",
    location: "",
    summary:
      "Worked across the merchant and customer sides of a prize-redemption e-commerce product.",
    projects: [
      {
        name: "Prize-Redemption E-Commerce Product",
        date: "Oct 2021 - Oct 2022",
        description: {
          1: "Worked across the merchant and customer sides of a prize-redemption e-commerce product.",
          2: "Built the merchant widgets and public prize portals, which raised conversion by 22%.",
          3: "Built the real-time services behind dealer scoring and CRM complaint analytics, which halved customer response times.",
          4: "Partnered with design on the “Reveal Prize” flow, a rework that improved retention by 35%.",
        },
        skills: ["Next.js", "React", "CRM", "Real-time Services", "E-Commerce"],
      },
    ],
    internal_contributions: [],
    internal_achievements: [],
  },
  {
    id: 4,
    date: "Nov 2019 - Sep 2021",
    title: "Full Stack Engineer Intern",
    position: "Philippines",
    company: "ThinkBIT Solutions",
    location: "",
    summary:
      "This role gave me my foundation in full-stack delivery — building application features for client projects, connecting frontends to backend APIs, and working directly with the database layer.",
    projects: [
      {
        name: "Client Full-Stack Delivery",
        date: "Nov 2019 - Sep 2021",
        description: {
          1: "This role gave me my foundation in full-stack delivery. I built application features for client projects, connected frontends to backend APIs, and worked directly with the database layer.",
          2: "One project that shaped how I work was introducing reactive programming for high-concurrency invoice generation — I had to identify where it failed under peak load and cover those cases with targeted regression tests.",
          3: "That experience taught me to treat failure modes as part of the design, not something to discover in production.",
        },
        skills: ["JavaScript", "Java", "Python", "SQL", "REST API", "WebFlux", "Regression Testing"],
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
    date: "Aug 2017 - Jun 2021",
    title: "Bachelor of Computer Science (BCS)",
    institution: "STI College",
    institutionType: "Private College",
    department: "Computer Science",
    location: "Cavite, Philippines",
    cgpa: null,
    percentage: null,
    display_text: "STI College - Cavite, Philippines",
    achievements: [],
    skills: [
      "Java",
      "Software Engineering",
      "Data Structures & Algorithms",
      "Computer Networks",
      "Database Management Systems",
    ],
  },
];

export const skills = {
  ai_agents: [
    "Agent workflow evaluation",
    "Tool-use assessment",
    "Agent trajectory review",
    "Planning and execution",
    "Multi-step reasoning",
    "Debugging",
    "Multi-file code changes",
    "Edge-case and adversarial testing",
  ],
  llm_integration_rag: [
    "OpenAI API",
    "LLM application integration",
    "Retrieval-augmented generation (RAG)",
    "LangChain",
    "LlamaIndex",
    "Prompt/context engineering",
    "Embeddings",
    "Vector search",
    "Retrieval evaluation",
    "Grounded generation",
  ],
  ai_training_evaluation: [
    "LLM annotation",
    "SFT data preparation",
    "Preference/ranking evaluation",
    "Frontier-model assessment",
    "Coding benchmarks",
    "Rubric design",
    "Reference answers",
    "Model output validation",
    "Failure analysis",
    "Dataset quality",
  ],
  languages: ["JavaScript/TypeScript", "Java", "Python", "SQL"],
  frontend: ["React", "React Native", "Next.js", "Angular", "Jest", "Redux Toolkit", "Tailwind CSS"],
  backend: [
    "Node.js",
    "Express.js",
    "Spring Boot",
    "FastAPI",
    "Django",
    "Flask",
    "RESTful APIs",
    "Microservices",
    "GraphQL",
  ],
  database: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Snowflake", "pgvector"],
  integration: [
    "OAuth2",
    "JWT",
    "RBAC",
    "SSO",
    "API Gateway",
    "Stripe",
    "PayPal",
    "Shopify API",
    "Google Maps API",
    "Firebase",
    "Elasticsearch",
    "Algolia",
  ],
  cloud_devops: ["AWS", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "CI/CD"],
  engineering: ["Git", "Jira", "Confluence", "Agile/Scrum", "TDD", "BDD"],
};

export const languages = skills.languages.map((name) => ({ name }));

export const services = [
  {
    id: 1,
    title: "LLM Training & Evaluation",
    list: [
      "LLM Annotation & SFT Data Preparation",
      "Preference / Ranking Evaluation",
      "Rubric & Benchmark Development",
      "Model Output Validation & Failure Analysis",
      "Coding Benchmarks & Reference Answers",
    ],
  },
  {
    id: 2,
    title: "LLM Integration & RAG",
    list: [
      "OpenAI API & LLM Application Integration",
      "RAG Pipelines (LangChain, LlamaIndex)",
      "Embeddings, Vector Search & Retrieval Evaluation",
      "Prompt / Context Engineering",
      "Grounded Response Generation",
    ],
  },
  {
    id: 3,
    title: "AI Agents & Technical Reasoning",
    list: [
      "Agent Workflow & Trajectory Evaluation",
      "Tool-Use Assessment",
      "Multi-Step Reasoning Review",
      "Edge-Case & Adversarial Testing",
      "Planning and Execution Validation",
    ],
  },
  {
    id: 4,
    title: "Full-Stack Engineering",
    list: [
      "Java / Spring Boot & React / Next.js Applications",
      "REST API & GraphQL Services",
      "Microservices Architecture",
      "Web & Mobile (React Native) Development",
      "Backend Workflows in Python & Node.js",
    ],
  },
  {
    id: 5,
    title: "Cloud & DevOps",
    list: [
      "AWS Cloud Deployment",
      "Docker & Kubernetes Orchestration",
      "CI/CD Pipelines (GitHub Actions, Jenkins)",
      "Containerized Delivery",
      "Production AI System Deployment",
    ],
  },
  {
    id: 6,
    title: "Software Engineering",
    list: [
      "System Design & Architecture",
      "OAuth2, JWT, RBAC, SSO Security",
      "Clean Code & TDD / BDD",
      "Unit & Integration Testing",
      "Technical Documentation",
    ],
  },
];

const featured = [
  {
    id: 1,
    title: "LLM Training, Annotation & Evaluation",
    date: "September 2024 - September 2026",
    tools_tech: [
      "LLM Annotation",
      "SFT",
      "Preference Evaluation",
      "Rubric Design",
      "Agent Trajectory Review",
      "Coding Benchmarks",
      "Python",
      "TypeScript",
    ],
    features: [
      "Evaluated LLM-generated answers, code, and multi-step technical reasoning against task requirements using executable checks and domain-specific quality criteria.",
      "Developed annotation guidelines, evaluation rubrics, scoring dimensions, and reference solutions for coding, debugging, REST API, database, and system-design tasks.",
      "Assessed model outputs for correctness, instruction following, security, edge-case handling, and code quality.",
      "Reviewed AI-agent trajectories across planning, tool selection, execution, intermediate results, and error recovery.",
      "Prepared and quality-checked SFT and preference-evaluation examples for label accuracy, rationale quality, and rubric alignment.",
    ],
    live: "https://diffco.us/",
  },
  {
    id: 2,
    title: "LLM Integration & RAG Pipelines",
    date: "September 2024 - September 2026",
    tools_tech: [
      "Java",
      "Spring Boot",
      "Python",
      "OpenAI API",
      "LangChain",
      "LlamaIndex",
      "RAG",
      "AWS",
      "Docker",
      "Kubernetes",
    ],
    features: [
      "Integrated LLM capabilities into backend workflows with Java/Spring Boot, Python, OpenAI APIs, and REST endpoints.",
      "Built RAG pipelines with LangChain and LlamaIndex covering ingestion, chunking, embeddings, vector retrieval, and grounded generation.",
      "Evaluated retrieval quality through relevance checks, context-coverage analysis, and grounding tests.",
      "Deployed production AI systems using AWS, Docker, Kubernetes, GitHub Actions, and Jenkins, reducing deployment cycles from 45 minutes to under 10 minutes.",
    ],
    live: "https://diffco.us/",
  },
  {
    id: 3,
    title: "Fleet Management & EV Charging Platform",
    date: "November 2022 - August 2024",
    tools_tech: [
      "Java",
      "Spring Boot",
      "React",
      "React Native",
      "SQL Server",
      "AWS",
      "Kafka",
      "Stripe",
      "PayPal",
    ],
    features: [
      "Enterprise platform supporting refueling, EV charging, and retail operations.",
      "Event-driven microservices with Node.js, Python, and Kafka, cutting update latency by 80%.",
      "React Native fleet tools for fuel consumption tracking, reducing logistics costs by 18%.",
      "Stripe and PayPal B2B payment flows reducing checkout failures by 28%.",
      "Secure MVC portals for B2B clients to manage fleet accounts, invoices, and analytics.",
    ],
    live: "https://www.parkland.ca/en/",
  },
  {
    id: 4,
    title: "Merchant Prize & Rewards Portal",
    date: "October 2021 - October 2022",
    tools_tech: [
      "Next.js",
      "React",
      "Java",
      "Spring Boot",
      "Shopify API",
      "Stripe",
      "Azure",
      "PostgreSQL",
      "Celery",
      "RabbitMQ",
      "Redis",
    ],
    features: [
      "Next.js merchant widgets and public prize portals boosting conversion rates by 22%.",
      "Shopify API integration for automated installation, merchant authentication, and order synchronization.",
      "Asynchronous task execution with Celery, RabbitMQ, and Redis, monitored with Flower.",
      "PostgreSQL optimization reducing prize redemption and billing report load times by 35%.",
      "Azure CI/CD deployments with Azure Monitor and Azure Application Insights.",
    ],
    live: "https://reveal.prizecart.app/",
  },
];

const collaborative = [
  {
    id: 5,
    title: "Queflic Social Platform MVP",
    date: "2024 - 2026",
    tools_tech: ["React Native", "Spotify", "Google Maps", "Firebase"],
    features: [
      "Implemented entire end-to-end workflow and deployment of the Queflic MVP.",
      "Integrated Spotify, Google Maps, and Firebase with React Native for a social-network-style experience.",
    ],
    live: null,
  },
  {
    id: 6,
    title: "Franchisee Reporting Automation",
    date: "November 2022 - August 2024",
    tools_tech: ["Node.js", "React", "Redux Toolkit", "PDFKit"],
    features: [
      "Automated previously manual monthly reporting, saving the corporate finance team 25+ hours/week.",
      "Built with Node.js, React, Redux Toolkit, and PDFKit.",
    ],
    live: null,
  },
  {
    id: 7,
    title: "Document Intelligence Pipeline",
    date: "November 2022 - August 2024",
    tools_tech: ["Python", "OCR", "NLP", "Hugging Face Transformers", "LLM", "Microservices", "HIPAA"],
    features: [
      "Automated document classification and information extraction using OCR, NLP, and Hugging Face Transformers.",
      "LLM-based extraction services integrated into enterprise workflows.",
      "Python microservices for AI inference and healthcare automation improving data processing efficiency by 45% while maintaining HIPAA compliance.",
    ],
    live: null,
  },
  {
    id: 8,
    title: "Dealer Scoring & CRM Analytics",
    date: "October 2021 - October 2022",
    tools_tech: ["Java", "Spring Boot", "Celery", "RabbitMQ", "Redis", "Azure"],
    features: [
      "Implemented real-time microservices for dealer scoring and CRM complaint analytics.",
      "Decreased customer response times by 50% with unit and integration tests across backend and frontend layers.",
      "Developed asynchronous processing workflows using Celery, RabbitMQ, and Redis.",
    ],
    live: null,
  },
  {
    id: 9,
    title: "Client Web Applications",
    date: "November 2019 - September 2021",
    tools_tech: ["JavaScript", "HTML", "CSS", "Java", "Python", "SQL", "SQL Server", "REST API", "WebFlux"],
    features: [
      "Developed web application features using JavaScript, HTML, CSS, Java, Python, and SQL.",
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
  {
    id: 3,
    icon: "FaLinkedin",
    title: "LinkedIn",
    value: "Art Angelo Franco",
    link: "https://www.linkedin.com/in/art-angelo-franco/",
    message: "Connect",
  },
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
