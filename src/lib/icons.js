import { SiPython, SiJavascript, SiTypescript, SiCplusplus, SiPhp, SiGnubash, SiGo, SiR, SiReact, SiNextdotjs, SiVite, SiTailwindcss, SiRedux, SiMui, SiHtml5, SiNodedotjs, SiExpress, SiFastapi, SiGraphql, SiMongodb, SiPostgresql, SiRedis, SiPrisma, SiDocker, SiKubernetes, SiGithubactions, SiLinux, SiPytorch, SiLangchain, SiLanggraph, SiHuggingface, SiGit, SiGithub, SiPostman, SiStripe, SiJira, SiFigma, SiLeetcode, SiHackerrank, SiAnthropic, SiOpensourceinitiative, SiTensorflow } from "react-icons/si";
import { DiAws, DiCss3, DiJava, DiDatabase, DiVisualstudio } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import {
  TbBrandOpenai, TbBrandCSharp, TbRobot, TbCpu, TbBrain, TbCode, TbKey, TbCloud, TbApi,
  TbPuzzle, TbUsers, TbBulb, TbNetwork, TbWorld, TbStack2, TbMessageCircle, TbMessages,
  TbSearch, TbWand, TbHierarchy2, TbVector, TbChartBar, TbAdjustments, TbPlug,
  TbCursorText, TbSitemap, TbRefresh, TbDeviceDesktop, TbGraph, TbDatabaseSearch,
  TbBox, TbDeviceMobile, TbBoxMultiple, TbPlugConnected, TbTerminal2, TbRepeat, TbShieldLock, TbBinaryTree,
} from "react-icons/tb";
import { FaFacebook, FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { FaHackerrank, FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FiCalendar } from "react-icons/fi";

export const skillIconMap = {
  Python: { Icon: SiPython, color: "#4B8BBE" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  "C/C++": { Icon: SiCplusplus, color: "#669AD3" },
  Java: { Icon: DiJava, color: "#F89820" },
  SQL: { Icon: DiDatabase, color: "#3B82F6" },
  PHP: { Icon: SiPhp, color: "#777BB4" },
  Bash: { Icon: SiGnubash, color: "#89E051" },
  Go: { Icon: SiGo, color: "#00ADD8" },
  "C#": { Icon: TbBrandCSharp, color: "#9B4F96" },
  R: { Icon: SiR, color: "#276DC3" },
  React: { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, color: "#FFFFFF" },
  Vite: { Icon: SiVite, color: "#646CFF" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
  "Responsive Design": { Icon: TbDeviceMobile, color: "#38BDF8" },
  "Component-Based Architecture": { Icon: TbBoxMultiple, color: "#A855F7" },
  Redux: { Icon: SiRedux, color: "#764ABC" },
  MUI: { Icon: SiMui, color: "#007FFF" },
  HTML5: { Icon: SiHtml5, color: "#E34F26" },
  CSS3: { Icon: DiCss3, color: "#1572B6" },
  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  "Express.js": { Icon: SiExpress, color: "#FFFFFF" },
  FastAPI: { Icon: SiFastapi, color: "#009688" },
  "REST API": { Icon: TbApi, color: "#3B82F6" },
  GraphQL: { Icon: SiGraphql, color: "#E10098" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  PostgreSQL: { Icon: SiPostgresql, color: "#336791" },
  WebSockets: { Icon: TbPlugConnected, color: "#4479A1" },
  Redis: { Icon: SiRedis, color: "#DC382D" },
  "Prisma ORM": { Icon: SiPrisma, color: "#2D3748" },
  Microservices: { Icon: TbStack2, color: "#0EA5E9" },
  "Authentication & Authorization": { Icon: TbShieldLock, color: "#10B981" },
  AWS: { Icon: DiAws, color: "#FF9900" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  Kubernetes: { Icon: SiKubernetes, color: "#326CE5" },
  "GitHub Actions": { Icon: SiGithubactions, color: "#2088FF" },
  "CI/CD Pipelines": { Icon: TbRepeat, color: "#3B82F6" },
  "Infrastructure as Code": { Icon: TbTerminal2, color: "#6366F1" },
  Linux: { Icon: SiLinux, color: "#FCC624" },
  "Cloud Architecture": { Icon: TbCloud, color: "#4285F4" },
  "Container Orchestration": { Icon: TbStack2, color: "#06B6D4" },
  "Machine Learning": { Icon: TbCpu, color: "#8B5CF6" },
  "Deep Learning": { Icon: SiTensorflow, color: "#6366F1" },
  PyTorch: { Icon: SiPytorch, color: "#EE4C2C" },
  LangChain: { Icon: SiLangchain, color: "#1C3C3C" },
  LangGraph: { Icon: SiLanggraph, color: "#00C7B7" },
  "Hugging Face Transformers": { Icon: SiHuggingface, color: "#FFD21E" },
  "Large Language Models": { Icon: TbMessages, color: "#EC4899" },
  "RAG Pipelines": { Icon: TbDatabaseSearch, color: "#3B82F6" },
  "Prompt Engineering": { Icon: TbWand, color: "#14B8A6" },
  "AI Agents": { Icon: TbRobot, color: "#10B981" },
  "Multi-Agent Systems": { Icon: TbHierarchy2, color: "#22C55E" },
  Embeddings: { Icon: TbVector, color: "#A855F7" },
  "Model Evaluation": { Icon: TbChartBar, color: "#F59E0B" },
  "Fine-Tuning": { Icon: TbAdjustments, color: "#EF4444" },
  "OpenAI APIs": { Icon: TbBrandOpenai, color: "#10A37F" },
  "Anthropic APIs": { Icon: SiAnthropic, color: "#D97757" },
  Git: { Icon: SiGit, color: "#F05032" },
  GitHub: { Icon: SiGithub, color: "#FFFFFF" },
  "VS Code": { Icon: VscVscode, color: "#007ACC" },
  Postman: { Icon: SiPostman, color: "#FF6C37" },
  Stripe: { Icon: SiStripe, color: "#635BFF" },
  Jira: { Icon: SiJira, color: "#0052CC" },
  Figma: { Icon: SiFigma, color: "#F24E1E" },
  "MCP Protocol": { Icon: TbPlug, color: "#4F46E5" },
  "Claude Code": { Icon: SiAnthropic, color: "#D97757" },
  "Cursor AI": { Icon: TbCursorText, color: "#8B5CF6" },
  "Data Structures & Algorithms": { Icon: TbBinaryTree, color: "#2563EB" },
  "Object-Oriented Programming": { Icon: TbBox, color: "#7C3AED" },
  "Computer Networks": { Icon: TbNetwork, color: "#0EA5E9" },
  "Operating Systems": { Icon: TbDeviceDesktop, color: "#F97316" },
  "Software Engineering": { Icon: TbCode, color: "#22C55E" },
  "Database Management Systems": { Icon: DiDatabase, color: "#0891B2" },
  "System Design": { Icon: TbSitemap, color: "#EC4899" },
  "Distributed Systems": { Icon: TbWorld, color: "#8B5CF6" },
  Leadership: { Icon: TbUsers, color: "#F59E0B" },
  "Problem Solving": { Icon: TbPuzzle, color: "#2563EB" },
  Communication: { Icon: TbMessageCircle, color: "#10B981" },
  Teamwork: { Icon: TbUsers, color: "#8B5CF6" },
  "Critical Thinking": { Icon: TbBulb, color: "#EAB308" },
  Adaptability: { Icon: TbRefresh, color: "#EC4899" },
  "Full-Stack Development": { Icon: TbStack2, color: "#2563EB" },
  "AI Engineering": { Icon: TbBrain, color: "#8B5CF6" },
  "LLMs & RAG": { Icon: TbMessages, color: "#10B981" },
  "Open Source": { Icon: SiOpensourceinitiative, color: "#F97316" },
  "Cloud & DevOps": { Icon: TbCloud, color: "#0EA5E9" },
};

export function getSkillIcon(name) {
  return skillIconMap[name] ?? (name.startsWith("AWS") ? { Icon: DiAws, color: "#FF9900" } : undefined);
}

export const brandIcons = {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaHackerrank,
  FaStackOverflow,
  FaXTwitter,
};

export const contactIcons = {
  MdOutlineEmail,
  FiCalendar,
  FiGithub: FaGithub,
};

export function getContactIcon(name) {
  return contactIcons[name] ?? MdOutlineEmail;
}

export const socialIconMap = {
  facebook: FaFacebook,
  github: FaGithub,
  linkedin: FaLinkedin,
  hackerrank: FaHackerrank,
  stackoverflow: FaStackOverflow,
  x: FaXTwitter,
  twitter: FaXTwitter,
};

export { SiGithub, SiLeetcode, SiHackerrank, TbBrandOpenai };
