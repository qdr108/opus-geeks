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
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blogs", href: "/blogs" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "#contact" },
  { label: "FAQs", href: "#faqs" }
];

export const services = [
  {
    title: "App Development",
    icon: Smartphone,
    description:
      "Mobile app development for businesses that need polished, scalable, and user-friendly iOS and Android experiences from idea to launch.",
    deliverables: ["iOS apps", "Android apps", "Hybrid apps", "API integration", "Store launch", "App support"]
  },
  {
    title: "Web Development",
    icon: Globe2,
    description:
      "Custom website development for brands that need fast, secure, responsive, and conversion-focused digital experiences.",
    deliverables: ["Business websites", "Web apps", "Ecommerce", "Landing pages", "CMS setup", "SEO-ready structure"]
  },
  {
    title: "UI/UX Design",
    icon: Brush,
    description:
      "User interface and user experience design focused on clean journeys, attractive screens, and easy-to-use product flows.",
    deliverables: ["User research", "Wireframes", "Prototypes", "Visual design", "Design systems", "Usability polish"]
  },
  {
    title: "Game Development",
    icon: Gamepad2,
    description:
      "Interactive game and gamified web experiences for brands that want stronger engagement and memorable digital campaigns.",
    deliverables: ["2D games", "Web games", "Gamified flows", "Interactive concepts", "Game UI", "Launch support"]
  },
  {
    title: "Custom Software",
    icon: Code2,
    description:
      "Tailored software systems, dashboards, integrations, and internal tools built around business operations and growth.",
    deliverables: ["Dashboards", "Admin panels", "APIs", "Automation", "Role access", "Cloud setup"]
  },
  {
    title: "Digital Strategy",
    icon: Bot,
    description:
      "Product planning, branding direction, and technical guidance that help companies choose the right path before development starts.",
    deliverables: ["Product planning", "Feature scope", "Brand direction", "Tech consulting", "Roadmaps", "Launch planning"]
  }
];

export const caseStudies = [
  {
    title: "Fintech Product Platform",
    sector: "Fintech",
    category: "Web Development",
    result: "Built for secure digital finance workflows",
    image: "linear-gradient(135deg, #16262d 0%, #0e7c78 52%, #ff7a59 100%)",
    summary:
      "A web platform concept aligned with Opus Geeks' fintech industry focus, covering onboarding, dashboards, payment flows, and reporting.",
    stack: ["Web app", "Dashboard", "Payments", "Security"]
  },
  {
    title: "Healthcare Mobile Experience",
    sector: "Healthcare",
    category: "App Development",
    result: "Designed for patient-friendly access",
    image: "linear-gradient(135deg, #102027 0%, #16d1c2 48%, #f7c948 100%)",
    summary:
      "A healthcare app direction focused on appointment flows, patient communication, reminders, and simple mobile usability.",
    stack: ["Mobile app", "UX flows", "Notifications", "Secure data"]
  },
  {
    title: "Retail Ecommerce System",
    sector: "Retail",
    category: "Web Development",
    result: "Structured for online sales growth",
    image: "linear-gradient(135deg, #111827 0%, #ff7a59 45%, #16d1c2 100%)",
    summary:
      "A retail website and ecommerce direction based on product discovery, checkout clarity, customer trust, and conversion-focused design.",
    stack: ["Ecommerce", "CMS", "Analytics", "Responsive web"]
  },
  {
    title: "Real Estate Listing UX",
    sector: "Real Estate",
    category: "UI/UX Design",
    result: "Built around property discovery",
    image: "linear-gradient(135deg, #101418 0%, #f7c948 42%, #16d1c2 100%)",
    summary:
      "A real estate interface direction with better listing cards, search experience, property detail pages, and inquiry-focused CTAs.",
    stack: ["Figma", "Design System", "Next.js", "Analytics"]
  },
  {
    title: "Brand Website Redesign",
    sector: "Business",
    category: "UI/UX Design",
    result: "Focused on brand image and trust",
    image: "linear-gradient(135deg, #151a22 0%, #16d1c2 36%, #ffffff 100%)",
    summary:
      "A premium website design direction for companies that want stronger credibility, better storytelling, and clearer lead generation.",
    stack: ["UI/UX", "Branding", "Web design", "Lead capture"]
  },
  {
    title: "Interactive Game Experience",
    sector: "Engagement",
    category: "Game Development",
    result: "Made for stronger user engagement",
    image: "linear-gradient(135deg, #071014 0%, #ff7a59 44%, #f5f7fa 100%)",
    summary:
      "A lightweight game or interactive web experience concept for campaigns, product education, and memorable brand interaction.",
    stack: ["Game UI", "Web game", "Animation", "Engagement"]
  }
];

export const process = [
  {
    title: "Branding",
    icon: BrainCircuit,
    text: "We define the digital direction, brand personality, user goals, and the experience your audience should remember."
  },
  {
    title: "Prototype",
    icon: AppWindow,
    text: "We turn ideas into wireframes and clickable flows so the structure is clear before development begins."
  },
  {
    title: "Development",
    icon: Cpu,
    text: "We build responsive websites, apps, and software experiences with clean code, integrations, testing, and launch readiness."
  },
  {
    title: "Launch",
    icon: Rocket,
    text: "We prepare the product for release, review performance, support deployment, and help the brand move forward after launch."
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
    q: "What services does Opus Geeks provide?",
    a: "Opus Geeks provides app development, web development, UI/UX design, game development, custom software, and digital strategy for businesses that need strong digital products."
  },
  {
    q: "Does Opus Geeks work on mobile apps?",
    a: "Yes. The company builds mobile app experiences for iOS and Android, including user flows, interface design, API integration, testing, launch support, and ongoing improvement."
  },
  {
    q: "Can Opus Geeks redesign an existing website?",
    a: "Yes. The team can improve structure, visuals, responsiveness, performance, and conversion flow so an old website feels more modern and business-ready."
  },
  {
    q: "How can clients start a project?",
    a: "Clients can share their project type, goals, features, timeline, and contact details. The website estimator helps turn a vague idea into a clearer project conversation."
  }
];

export const companyCopy = {
  heroEyebrow: "Mobile app, web development, and UI/UX design company",
  heroTitle: "Build digital products that move businesses forward.",
  heroIntro:
    "Opus Geeks helps businesses create high-quality mobile apps, websites, user interfaces, and digital experiences that are designed to look professional, work smoothly, and support growth.",
  aboutTitle: "Where creativity meets technology",
  aboutText:
    "Opus Geeks blends design, development, and digital strategy to help businesses create products that feel modern, useful, and ready for real users. The company focuses on websites, mobile apps, UI/UX design, and engaging digital experiences.",
  vision:
    "To become a trusted digital partner for companies that want beautiful, functional, and scalable technology solutions.",
  mission:
    "To transform ideas into polished digital products through thoughtful design, reliable development, and a process that keeps clients clear and confident.",
  contactEmail: "info@opusgeeks.com",
  contactPhone: "+92 300 0000000",
  location: "Pakistan"
};

export const testimonials = [
  {
    quote:
      "Opus Geeks understood the idea quickly and turned it into a smooth digital experience with a clean design direction.",
    name: "Client Review",
    role: "Mobile app project"
  },
  {
    quote:
      "The team was responsive, professional, and focused on making the website look modern while keeping it easy to use.",
    name: "Client Review",
    role: "Website development"
  },
  {
    quote:
      "Their UI/UX approach helped simplify the product flow and made the interface feel more professional.",
    name: "Client Review",
    role: "UI/UX design"
  },
  {
    quote:
      "A reliable team for digital product work, from planning and design to development and launch support.",
    name: "Client Review",
    role: "Digital product"
  }
];
