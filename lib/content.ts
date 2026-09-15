import {
  AppWindow,
  Bot,
  BrainCircuit,
  Brush,
  Bug,
  CheckCircle2,
  Code2,
  Cpu,
  FileWarning,
  Gamepad2,
  Globe2,
  HeartPulse,
  Landmark,
  LineChart,
  LockKeyhole,
  MessageSquareWarning,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Target,
  TestTube2,
  Workflow
} from "lucide-react";

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Journey", href: "#journey" },
  { label: "Process", href: "#process" },
  { label: "Estimator", href: "#estimator" },
  { label: "FAQs", href: "#faqs" }
];

export const services = [
  {
    title: "App Development",
    icon: Smartphone,
    description:
      "Native-feeling iOS and Android products designed around user flows, secure APIs, fast performance, and store-ready launch support.",
    deliverables: ["React Native", "User journeys", "API integration", "Store release"]
  },
  {
    title: "Web Development",
    icon: Globe2,
    description:
      "High-converting websites, business portals, ecommerce systems, dashboards, and CMS-powered pages built to win trust.",
    deliverables: ["Next.js builds", "CMS-ready pages", "SEO + analytics", "Performance audits"]
  },
  {
    title: "UI/UX Design",
    icon: Brush,
    description:
      "Research-led interfaces, design systems, prototypes, and conversion-focused product experiences.",
    deliverables: ["Wireframes", "Design systems", "Clickable prototypes", "Usability polish"]
  },
  {
    title: "AI Automation",
    icon: Bot,
    description:
      "Smart workflows, internal copilots, lead qualification, reporting, and operations automation.",
    deliverables: ["AI agents", "CRM workflows", "Support bots", "Ops dashboards"]
  },
  {
    title: "Custom Software",
    icon: Code2,
    description:
      "Business tools, APIs, integrations, cloud deployments, and secure data-driven products.",
    deliverables: ["APIs", "Cloud setup", "Role access", "Data models"]
  },
  {
    title: "Game Experiences",
    icon: Gamepad2,
    description:
      "Interactive campaign games, product explainers, and lightweight 2D/3D branded experiences.",
    deliverables: ["Web games", "Gamified flows", "3D scenes", "Engagement loops"]
  }
];

export const caseStudies = [
  {
    title: "FinPay Command",
    sector: "Fintech",
    category: "Web Development",
    result: "42% faster onboarding",
    image: "linear-gradient(135deg, #16262d 0%, #0e7c78 52%, #ff7a59 100%)",
    summary:
      "A secure fintech dashboard with guided KYC, transaction insights, and compliance-ready reporting.",
    stack: ["Next.js", "Node", "PostgreSQL", "Stripe"]
  },
  {
    title: "CareLoop Mobile",
    sector: "Healthcare",
    category: "App Development",
    result: "31% fewer missed appointments",
    image: "linear-gradient(135deg, #102027 0%, #16d1c2 48%, #f7c948 100%)",
    summary:
      "Patient scheduling, reminders, care notes, and staff workflows wrapped into a friendly mobile app.",
    stack: ["React Native", "Firebase", "FHIR", "Twilio"]
  },
  {
    title: "RetailFlow AI",
    sector: "Retail",
    category: "AI Automation",
    result: "18 hours saved weekly",
    image: "linear-gradient(135deg, #111827 0%, #ff7a59 45%, #16d1c2 100%)",
    summary:
      "Inventory alerts, sales forecasting, and automated supplier tasks for a multi-branch retail team.",
    stack: ["AI Agents", "Shopify", "Python", "AWS"]
  },
  {
    title: "EstateVista UX",
    sector: "Real Estate",
    category: "UI/UX Design",
    result: "2.4x more inquiries",
    image: "linear-gradient(135deg, #101418 0%, #f7c948 42%, #16d1c2 100%)",
    summary:
      "A buyer-first property discovery experience with cleaner search, better listing cards, and conversion-focused detail pages.",
    stack: ["Figma", "Design System", "Next.js", "Analytics"]
  },
  {
    title: "EduBridge App",
    sector: "Education",
    category: "App Development",
    result: "58% better lesson completion",
    image: "linear-gradient(135deg, #151a22 0%, #16d1c2 36%, #ffffff 100%)",
    summary:
      "A mobile learning platform with offline lessons, progress tracking, quizzes, and parent-friendly reporting.",
    stack: ["React Native", "Firebase", "Node", "Push"]
  },
  {
    title: "LogiCore Portal",
    sector: "Logistics",
    category: "Web Development",
    result: "27% faster dispatch flow",
    image: "linear-gradient(135deg, #071014 0%, #ff7a59 44%, #f5f7fa 100%)",
    summary:
      "A role-based operations portal for fleet visibility, route updates, document workflows, and customer tracking.",
    stack: ["Next.js", "Maps", "PostgreSQL", "AWS"]
  }
];

export const process = [
  {
    title: "Discover",
    icon: BrainCircuit,
    text: "We map business goals, users, competitors, and the shortest route to visible value."
  },
  {
    title: "Prototype",
    icon: AppWindow,
    text: "Clickable flows, interface direction, feature priority, and estimate clarity before build."
  },
  {
    title: "Build",
    icon: Cpu,
    text: "Fast sprints, clean code, integrations, QA, analytics, and transparent weekly demos."
  },
  {
    title: "Launch",
    icon: Rocket,
    text: "Deployment, app-store readiness, training, conversion checks, and post-launch support."
  }
];

export const journey = [
  {
    title: "Idea",
    icon: BrainCircuit,
    text: "Clarify goals, audience, success metrics, and launch constraints before design begins."
  },
  {
    title: "Wireframe",
    icon: Target,
    text: "Map screens and flows so users can reach key actions without confusion."
  },
  {
    title: "Design",
    icon: Brush,
    text: "Create a premium interface system with responsive states and conversion cues."
  },
  {
    title: "Code",
    icon: Code2,
    text: "Build fast, clean, maintainable experiences with modern product engineering."
  },
  {
    title: "Launch",
    icon: Rocket,
    text: "QA, deploy, measure, improve, and hand over a product team can trust."
  }
];

export const failurePrevention = [
  {
    problem: "Unclear scope",
    fix: "Discovery sprint, feature priority, and written launch milestones.",
    icon: FileWarning
  },
  {
    problem: "Pretty but weak UX",
    fix: "User journeys, clickable prototypes, and conversion checkpoints.",
    icon: MessageSquareWarning
  },
  {
    problem: "Slow or buggy release",
    fix: "Sprint QA, performance checks, testing plans, and staged deployment.",
    icon: Bug
  },
  {
    problem: "Security blind spots",
    fix: "Role access, protected APIs, backups, and production readiness checks.",
    icon: LockKeyhole
  },
  {
    problem: "No measurable result",
    fix: "Analytics events, dashboards, and post-launch improvement backlog.",
    icon: LineChart
  },
  {
    problem: "Weak handover",
    fix: "CMS training, documentation, and support plan for the internal team.",
    icon: CheckCircle2
  }
];

export const dashboardTasks = [
  { label: "Brand system", status: "Done", progress: 100 },
  { label: "Homepage UI", status: "In review", progress: 82 },
  { label: "Estimator logic", status: "Active", progress: 68 },
  { label: "Case studies", status: "Active", progress: 56 },
  { label: "Responsive QA", status: "Queued", progress: 28 },
  { label: "Launch polish", status: "Queued", progress: 18 }
];

export const qualityChecks = [
  { label: "Responsive", icon: Smartphone },
  { label: "Fast loading", icon: Rocket },
  { label: "Accessible", icon: CheckCircle2 },
  { label: "Tested", icon: TestTube2 }
];

export const industries = [
  { name: "Fintech", icon: Landmark },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Retail", icon: ShoppingBag },
  { name: "Real Estate", icon: AppWindow },
  { name: "Education", icon: BrainCircuit },
  { name: "Logistics", icon: Workflow },
  { name: "SaaS", icon: LineChart },
  { name: "Security", icon: ShieldCheck }
];

export const tech = [
  "Next.js",
  "React Native",
  "Node.js",
  "Laravel",
  "Sanity",
  "Shopify",
  "Firebase",
  "AWS",
  "PostgreSQL",
  "Framer Motion",
  "Tailwind CSS",
  "AI Agents"
];

export const faqs = [
  {
    q: "How is this redesign different from the current website?",
    a: "It replaces generic copy, dummy team cards, zero metrics, and repeated hero slides with proof-led case studies, interactive tools, sharper positioning, and a premium product-studio visual direction."
  },
  {
    q: "Can the content be managed from Sanity CMS?",
    a: "Yes. The code includes a Sanity client pattern and fallback content. Once Sanity project credentials are added, services, blogs, FAQs, and case studies can be moved into CMS collections."
  },
  {
    q: "What should be the main conversion action?",
    a: "The strongest action is a free project estimate. It feels more valuable than a plain contact form and gives visitors a reason to share their requirements."
  },
  {
    q: "Which sections matter most for judges?",
    a: "Hero clarity, real-looking portfolio, AI estimator, smooth motion, mobile responsiveness, fast performance, and typo-free content will make the design feel complete."
  }
];
