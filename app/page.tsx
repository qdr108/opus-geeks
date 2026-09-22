"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Linkedin,
  MapPin,
  Mail,
  Menu,
  Moon,
  Phone,
  Quote,
  Star,
  Sun,
  ArrowUp,
  X
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import {
  caseStudies,
  companyCopy,
  dashboardTasks,
  failurePrevention,
  faqs,
  industries,
  journey,
  navItems,
  process,
  qualityChecks,
  services,
  testimonials as testimonialItems
} from "@/lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

const budgets = [
  { label: "Starter", value: 3500, timeline: "3-5 weeks" },
  { label: "Growth", value: 8500, timeline: "6-9 weeks" },
  { label: "Scale", value: 18000, timeline: "10-14 weeks" }
];

const featureOptions = ["CMS", "Payments", "AI Bot", "Dashboard", "Mobile App", "Analytics"];

const journeyOutputs = [
  { label: "Product brief approved", metric: "Goals aligned", accent: "bg-[#1877F2]" },
  { label: "User flow validated", metric: "Paths confirmed", accent: "bg-[#1877F2]" },
  { label: "Design system approved", metric: "UI signed off", accent: "bg-[#1877F2]" },
  { label: "Build ready for QA", metric: "Tests passing", accent: "bg-[#1877F2]" },
  { label: "Release live and monitored", metric: "Launch verified", accent: "bg-[#42B72A]" }
];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceIndex, setServiceIndex] = useState(0);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["CMS", "Dashboard", "Analytics"]);
  const [budgetIndex, setBudgetIndex] = useState(1);
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [portfolioFilter, setPortfolioFilter] = useState("All");
  const [activeWorkIndex, setActiveWorkIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState(54);
  const filteredCaseStudies = useMemo(
    () => (portfolioFilter === "All" ? caseStudies : caseStudies.filter((study) => study.category === portfolioFilter)),
    [portfolioFilter]
  );
  const activeCaseStudy = filteredCaseStudies[activeWorkIndex] ?? filteredCaseStudies[0];

  useEffect(() => {
    const preloadPortfolio = () => {
      caseStudies.slice(1).forEach((study) => {
        const image = new window.Image();
        image.src = study.image;
        void image.decode?.().catch(() => undefined);
      });
    };
    const idleId = window.requestIdleCallback?.(preloadPortfolio, { timeout: 1800 });
    const timeoutId = idleId === undefined ? window.setTimeout(preloadPortfolio, 700) : undefined;
    return () => {
      if (idleId !== undefined) window.cancelIdleCallback?.(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);
  const shellClass =
    theme === "dark"
      ? "bg-ink text-cloud"
      : "bg-[#f0f2f5] text-ink [color-scheme:light]";

  const estimate = useMemo(() => {
    const base = budgets[budgetIndex].value;
    const featureCost = selectedFeatures.length * 950;
    const serviceMultiplier = serviceIndex === 1 ? 1.25 : serviceIndex === 3 ? 1.18 : 1;
    const total = Math.round((base + featureCost) * serviceMultiplier);
    return {
      low: total,
      high: Math.round(total * 1.35),
      timeline: budgets[budgetIndex].timeline
    };
  }, [budgetIndex, selectedFeatures.length, serviceIndex]);
  const activeService = services[serviceIndex];
  const ActiveServiceIcon = activeService.icon;

  function toggleFeature(feature: string) {
    setSelectedFeatures((current) =>
      current.includes(feature) ? current.filter((item) => item !== feature) : [...current, feature]
    );
  }

  function moveWork(direction: number) {
    setActiveWorkIndex((current) => (current + direction + filteredCaseStudies.length) % filteredCaseStudies.length);
  }

  return (
    <main className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${shellClass}`}>
      <div className={`pointer-events-none absolute inset-0 z-0 noise ${theme === "dark" ? "opacity-12" : "opacity-5"}`} />
      <SiteHeader />

      <section id="home" className={`relative z-10 min-h-[820px] scroll-mt-28 overflow-hidden pt-24 ${theme === "dark" ? "bg-[#18191a]" : "bg-[#f7f9fc]"}`}>
        <motion.div
          initial={{ opacity: 0, scale: 1.035 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-0 bottom-0 top-24"
        >
          <Image
            src="/images/opus-hero-command-center.png"
            alt="Opus Geeks digital product engineering workspace"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[68%_center] lg:object-right"
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 top-24 bg-[linear-gradient(180deg,#f7f9fc_0%,rgba(247,249,252,.98)_54%,rgba(247,249,252,.62)_73%,rgba(247,249,252,.12)_100%)] lg:bg-[linear-gradient(90deg,#f7f9fc_0%,#f7f9fc_43%,rgba(247,249,252,.97)_50%,rgba(247,249,252,.3)_60%,transparent_69%)]" />
        <div className="animated-grid pointer-events-none absolute inset-0 opacity-20 [mask-image:linear-gradient(90deg,black,transparent_62%)]" />
        <div className="section-shell relative flex min-h-[720px] items-center py-14 md:py-20">
          <motion.div
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.08 }}
            className="relative z-10 w-full max-w-[720px]"
          >
            <motion.div variants={fadeUp} className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.18em] text-teal">
              <span className="h-px w-10 bg-teal" />
              {companyCopy.heroEyebrow}
            </motion.div>
            <motion.h1 variants={fadeUp} transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }} className={`text-balance text-5xl font-semibold leading-[.94] tracking-normal md:text-7xl xl:text-[82px] ${theme === "dark" ? "text-white" : "text-ink"}`}>
              Build digital products<br className="hidden md:block" /> that move business <span className="relative inline-block text-teal">forward.<span className="absolute -bottom-2 left-0 h-[3px] w-full origin-left bg-teal/30" /></span>
            </motion.h1>
            <motion.p variants={fadeUp} className={`mt-8 max-w-xl text-base leading-7 md:text-lg md:leading-8 ${theme === "dark" ? "text-white/72" : "text-ink/65"}`}>
              {companyCopy.heroIntro}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <motion.a whileHover={{ y: -3, scale: 1.01 }} whileTap={{ scale: 0.98 }} href="#estimator" className="shine group inline-flex items-center justify-center gap-2 rounded-lg bg-teal px-6 py-4 font-semibold text-white shadow-[0_14px_34px_rgba(24,119,242,0.24)] transition hover:bg-[#166fe5]">
                Get free estimate
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </motion.a>
              <Link href="/portfolio" className={`inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-4 font-semibold backdrop-blur transition hover:-translate-y-1 ${theme === "dark" ? "border-white/15 bg-white/10 text-white hover:border-white/35" : "border-ink/15 bg-white text-ink shadow-sm hover:border-teal/40"}`}>
                See case studies
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-12 grid max-w-2xl grid-cols-3 border-y border-ink/10 bg-white/45 backdrop-blur-sm">
              {[
                ["80+", "Projects"],
                ["12", "Industries"],
                ["4.9/5", "Client rating"]
              ].map(([value, label], index) => (
                <motion.div key={label} whileHover={{ x: 4 }} className={`py-4 ${index ? "border-l border-ink/10 pl-5 sm:pl-7" : "pr-4"}`}>
                  <div className={`text-xl font-semibold md:text-2xl ${theme === "dark" ? "text-white" : "text-ink"}`}>{value}</div>
                  <div className={`mt-1 text-xs uppercase tracking-[.12em] ${theme === "dark" ? "text-white/55" : "text-ink/45"}`}>{label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute right-[7%] top-36 hidden items-center gap-3 text-white/75 xl:flex">
          <span className="grid h-9 w-9 place-items-center border border-white/30 text-xs font-semibold">01</span>
          <span className="text-[10px] font-semibold uppercase tracking-[.2em]">Digital product engineering</span>
        </div>
        <motion.div initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .7, duration: .5 }} className="absolute bottom-10 right-8 hidden items-center gap-3 text-white lg:flex">
          <span className="h-px w-12 bg-white/60" /><span className="text-xs font-semibold uppercase tracking-[.2em]">Strategy · Design · Engineering</span>
        </motion.div>
      </section>

      <ServiceRail theme={theme} />

      <Section id="services" eyebrow="Capabilities" title="One product team, from strategy to scale." intro="Senior product thinking, thoughtful design, and dependable engineering brought together to launch digital experiences that perform." theme={theme}>
        <div className={`grid overflow-hidden border shadow-[0_24px_70px_rgba(28,30,33,.07)] lg:grid-cols-[0.72fr_1.28fr] ${theme === "dark" ? "border-white/12 bg-white/[0.025]" : "border-ink/10 bg-white"}`}>
          <div className={`p-3 sm:p-5 lg:border-r lg:p-7 ${theme === "dark" ? "border-white/10" : "border-ink/10"}`}>
            <p className={`px-3 pb-4 pt-2 text-[11px] font-semibold uppercase tracking-[0.18em] ${theme === "dark" ? "text-white/38" : "text-ink/38"}`}>Select a capability</p>
            <div className="grid grid-cols-2 gap-1 lg:grid-cols-1">
              {services.map((service, index) => {
                const Icon = service.icon;
                const selected = serviceIndex === index;
                return (
                  <button
                    key={service.title}
                    type="button"
                    onClick={() => setServiceIndex(index)}
                    aria-pressed={selected}
                    className={`group flex min-h-[76px] items-center gap-3 px-3 py-3 text-left transition-colors duration-200 sm:gap-4 sm:px-4 ${selected ? "bg-[#E7F3FF] text-[#1877F2]" : theme === "dark" ? "text-white/68 hover:bg-white/[0.05] hover:text-white" : "text-ink/66 hover:bg-[#F0F2F5] hover:text-ink"}`}
                  >
                    <span className={`hidden text-[10px] font-semibold tracking-[0.14em] sm:block ${selected ? "text-[#1877F2]" : "opacity-45"}`}>{String(index + 1).padStart(2, "0")}</span>
                    <Icon className="h-5 w-5 shrink-0" strokeWidth={1.8} />
                    <span className="min-w-0 flex-1 text-sm font-semibold leading-5 sm:text-base">{service.title}</span>
                    <ChevronRight className={`hidden h-4 w-4 shrink-0 transition-transform sm:block ${selected ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`} />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden bg-[#F7F9FC] p-7 text-ink sm:p-10 lg:p-14">
            <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(24,119,242,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(24,119,242,.07)_1px,transparent_1px)] [background-size:48px_48px]" />
            <span className="pointer-events-none absolute -right-3 -top-12 text-[180px] font-semibold leading-none text-[#1877F2]/[0.055] sm:text-[240px]">{String(serviceIndex + 1).padStart(2, "0")}</span>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                className="relative z-10 flex h-full flex-col"
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="flex h-14 w-14 items-center justify-center bg-[#E7F3FF] text-[#1877F2]">
                    <ActiveServiceIcon className="h-7 w-7" strokeWidth={1.7} />
                  </span>
                  <span className="text-xs font-semibold tracking-[0.18em] text-ink/38">{String(serviceIndex + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}</span>
                </div>
                <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-[#1877F2]">Selected capability</p>
                <h3 className="mt-3 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">{activeService.title}</h3>
                <p className="mt-6 max-w-2xl text-base leading-7 text-ink/60 sm:text-lg sm:leading-8">{activeService.description}</p>
                <div className="mt-9 grid grid-cols-2 border-y border-ink/12 sm:grid-cols-3">
                  {activeService.deliverables.map((item, index) => (
                    <span key={item} className={`flex min-h-16 items-center gap-2 border-ink/10 py-3 text-sm font-medium text-ink/72 ${index % 2 ? "border-l pl-4 sm:border-l-0 sm:pl-0" : "pr-3"} ${index % 3 ? "sm:border-l sm:pl-4" : "sm:pr-3"}`}>
                      <Check className="h-4 w-4 shrink-0 text-[#1877F2]" />{item}
                    </span>
                  ))}
                </div>
                <a href="#estimator" className="group mt-auto inline-flex w-fit items-center gap-3 pt-9 font-semibold text-ink">
                  Plan this project <span className="flex h-10 w-10 items-center justify-center bg-[#1877F2] text-white transition-transform group-hover:translate-x-1"><ArrowRight className="h-5 w-5" /></span>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Section>

      <Section id="work" eyebrow="Selected work" title="Digital products designed around business outcomes." intro="Explore product directions across fintech, healthcare, commerce, and emerging platforms, each shaped around a distinct customer and growth challenge." theme={theme}>
        <div className="mb-8 flex w-fit max-w-full flex-wrap gap-1" role="group" aria-label="Filter case studies">
          {["All", "App Development", "Web Development", "UI/UX Design", "Game Development"].map((filter) => (
            <button
              key={filter}
              onClick={() => { setPortfolioFilter(filter); setActiveWorkIndex(0); }}
              className={`border px-4 py-3 text-sm font-semibold transition-colors sm:px-5 ${
                portfolioFilter === filter
                  ? "border-[#1877F2] bg-[#1877F2] text-white"
                  : theme === "dark"
                    ? "border-white/10 bg-white/[0.025] text-white/60 hover:bg-white/[0.06] hover:text-white"
                    : "border-ink/10 bg-white text-ink/55 hover:bg-[#F0F2F5] hover:text-ink"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className={`overflow-hidden rounded-lg border ${theme === "dark" ? "border-white/10 bg-[#18191a]" : "border-ink/10 bg-white"}`}>
            <article className="grid lg:grid-cols-[1.35fr_.65fr]">
              <div className="group relative flex min-h-[430px] items-center justify-center overflow-hidden bg-[#E9EDF2] px-6 py-20 sm:min-h-[560px] sm:px-10 lg:min-h-[680px]">
                <div className="pointer-events-none absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(28,30,33,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(28,30,33,.08)_1px,transparent_1px)] [background-size:52px_52px]" />
                <span className="pointer-events-none absolute -bottom-12 -left-3 text-[170px] font-semibold leading-none text-ink/[0.045] sm:text-[230px]">{String(activeWorkIndex + 1).padStart(2, "0")}</span>
                <Image
                  src={activeCaseStudy.image}
                  alt={`${activeCaseStudy.title} project mockup`}
                  width={1586}
                  height={992}
                  priority
                  unoptimized
                  sizes="(max-width: 1024px) 90vw, 760px"
                  className="relative z-10 h-auto w-[calc(100%_-_1rem)] max-w-[760px] rounded-lg shadow-[0_28px_70px_rgba(28,30,33,.22)] transition-transform duration-500 ease-out group-hover:-translate-y-1"
                />
                <div className="absolute left-5 top-5 z-20 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] sm:left-7 sm:top-7 sm:gap-3 sm:text-[11px] sm:tracking-[0.16em]">
                  <span className="bg-ink px-3 py-2 text-white">{activeCaseStudy.sector}</span>
                  <span className="border border-ink/15 bg-white px-3 py-2 text-ink">{activeCaseStudy.category}</span>
                </div>
                <p className="absolute bottom-6 left-6 right-6 z-20 border-l-2 border-[#1877F2] bg-white/90 px-4 py-3 text-sm font-medium leading-6 text-ink shadow-sm sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-lg">{activeCaseStudy.result}</p>
              </div>

              <div className={`flex min-h-[500px] flex-col p-6 sm:p-9 lg:min-h-[680px] lg:p-10 ${theme === "dark" ? "text-white" : "text-ink"}`}>
                <div className="flex items-center justify-between border-b border-current/10 pb-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1877F2]">Featured case study</span>
                  <span className="text-xs font-semibold tracking-[0.16em] opacity-40">{String(activeWorkIndex + 1).padStart(2, "0")} / {String(filteredCaseStudies.length).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-10 text-3xl font-semibold leading-tight sm:text-4xl">{activeCaseStudy.title}</h3>
                <p className={`mt-6 text-base leading-7 ${theme === "dark" ? "text-white/60" : "text-ink/60"}`}>{activeCaseStudy.summary}</p>
                <div className="mt-9 border-y border-current/10 py-2">
                  {activeCaseStudy.stack.map((item, index) => (
                    <div key={item} className="flex items-center justify-between border-b border-current/10 py-3 text-sm last:border-b-0">
                      <span className="opacity-50">{String(index + 1).padStart(2, "0")}</span><span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto flex items-end justify-between gap-5 pt-10">
                  <Link href="/portfolio" className="group inline-flex items-center gap-3 font-semibold text-[#1877F2]">View full portfolio <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></Link>
                  <div className="flex">
                    <button type="button" onClick={() => moveWork(-1)} aria-label="Previous project" className="flex h-12 w-12 items-center justify-center border border-ink/15 transition hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white"><ChevronLeft className="h-5 w-5" /></button>
                    <button type="button" onClick={() => moveWork(1)} aria-label="Next project" className="flex h-12 w-12 items-center justify-center border-y border-r border-ink/15 transition hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white"><ChevronRight className="h-5 w-5" /></button>
                  </div>
                </div>
              </div>
            </article>
        </div>
      </Section>

      <BeforeAfter sliderValue={sliderValue} setSliderValue={setSliderValue} theme={theme} />

      <Journey theme={theme} />

      <FailurePrevention theme={theme} />

      <ProjectDashboard theme={theme} />

      <CeoMessage theme={theme} />

      <Section id="process" eyebrow="Delivery model" title="A clear path from first decision to launch." intro="Every engagement moves through focused discovery, rapid validation, disciplined engineering, and measurable post-launch improvement." theme={theme}>
        <div className="relative grid gap-4 lg:grid-cols-4">
          {process.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={false}
                transition={{ duration: 0.2 }}
                className={`rounded-2xl border p-6 ${theme === "dark" ? "border-white/10 bg-white/[0.04]" : "border-ink/10 bg-white"}`}
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-coral/15 text-coral">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-4xl font-semibold text-white/15">0{index + 1}</span>
                </div>
                <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-ink"}`}>{step.title}</h3>
                <p className={`mt-3 text-sm leading-6 ${theme === "dark" ? "text-white/62" : "text-ink/62"}`}>{step.text}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      <Estimator
        selectedFeatures={selectedFeatures}
        budgetIndex={budgetIndex}
        serviceIndex={serviceIndex}
        estimate={estimate}
        theme={theme}
        setBudgetIndex={setBudgetIndex}
        setServiceIndex={setServiceIndex}
        toggleFeature={toggleFeature}
      />

      <Section id="industries" eyebrow="Industry depth" title="Context matters as much as clean code." intro="Our teams bring product judgment to regulated, transaction-heavy, and customer-facing industries where clarity and reliability directly affect growth." theme={theme}>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div key={industry.name} className={`group flex items-center gap-3 rounded-2xl border p-4 transition hover:border-teal/60 hover:bg-teal/10 ${theme === "dark" ? "border-white/10 bg-white/[0.04]" : "border-ink/10 bg-white"}`}>
                <Icon className="h-5 w-5 text-teal" />
                <span className={`font-medium ${theme === "dark" ? "text-white/82" : "text-ink/82"}`}>{industry.name}</span>
              </div>
            );
          })}
        </div>
      </Section>

      <Testimonials theme={theme} />

      <Section id="faqs" eyebrow="FAQs" title="The practical details, answered clearly." intro="What to expect from scope and collaboration through delivery, launch, and ongoing product support." theme={theme}>
        <div className="grid gap-4 lg:grid-cols-2">
          {faqs.map((item) => (
            <div key={item.q} className={`rounded-3xl border p-6 ${theme === "dark" ? "border-white/10 bg-white/[0.04]" : "border-ink/10 bg-white"}`}>
              <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-ink"}`}>{item.q}</h3>
              <p className={`mt-3 text-sm leading-6 ${theme === "dark" ? "text-white/62" : "text-ink/62"}`}>{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <FinalCta theme={theme} />
      <SiteFooter />
    </main>
  );
}

const serviceNavItems = [
  { label: "App Development", href: "/app-development" },
  { label: "Web Development", href: "/web-development" },
  { label: "UX/UI Design", href: "/ux-ui-design" }
];

function Header({
  mobileOpen,
  setMobileOpen,
  theme,
  setTheme
}: {
  mobileOpen: boolean;
  setMobileOpen: (value: boolean) => void;
  theme: "dark" | "light";
  setTheme: (value: "dark" | "light") => void;
}) {
  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl ${theme === "dark" ? "border-white/10 bg-ink/88" : "border-ink/10 bg-white/90"}`}>
      <div className="section-shell flex h-24 items-center justify-between gap-4 xl:h-28">
        <a href="#home" className="group flex shrink-0 items-center" aria-label="Opus Geeks home">
          <span className="relative flex h-16 w-40 items-center transition duration-300 group-hover:scale-[1.03] xl:w-44">
            <Image src="/images/opus-logo.png" alt="Opus Geeks logo" fill className="object-contain object-left" />
            {theme === "light" ? <span className="absolute inset-x-0 bottom-0 text-center text-[11px] font-medium tracking-[0.24em] text-ink">OPUSGEEKS</span> : null}
          </span>
        </a>
        <nav className="hidden items-center gap-5 lg:flex xl:gap-8" aria-label="Main navigation">
          <a href="#home" className="text-sm font-semibold text-teal transition hover:text-[#166fe5]">Home</a>
          <div className="group relative">
            <a href="#services" className={`flex items-center gap-1.5 py-9 text-sm font-medium transition xl:py-10 ${theme === "dark" ? "text-white/72 hover:text-white" : "text-ink/72 hover:text-ink"}`}>
              Services
              <ChevronDown className="h-4 w-4 transition duration-200 group-hover:rotate-180" />
            </a>
            <div className={`invisible absolute left-1/2 top-[calc(100%-8px)] w-64 -translate-x-1/2 translate-y-2 rounded-2xl border p-2 opacity-0 shadow-2xl transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ${theme === "dark" ? "border-white/10 bg-[#0b171b]" : "border-ink/10 bg-white"}`}>
              {serviceNavItems.map((item) => (
                <a key={item.label} href={item.href} className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm transition ${theme === "dark" ? "text-white/72 hover:bg-white/10 hover:text-white" : "text-ink/72 hover:bg-ink/5 hover:text-ink"}`}>
                  {item.label}
                  <ChevronRight className="h-4 w-4 text-teal" />
                </a>
              ))}
            </div>
          </div>
          {navItems.slice(1).map((item) => (
            <a key={item.label} href={item.href} className={`whitespace-nowrap text-sm font-medium transition ${theme === "dark" ? "text-white/72 hover:text-white" : "text-ink/72 hover:text-ink"}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden shrink-0 lg:flex">
          <a href="#contact" className={`group inline-flex items-center gap-4 rounded-full border-8 px-7 py-3 text-base font-semibold transition ${theme === "dark" ? "border-white/10 bg-white text-ink hover:border-teal/25" : "border-ink/10 bg-ink text-white hover:border-teal/30"}`}>
            Get Started
            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </a>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className={`inline-flex h-11 w-11 items-center justify-center rounded-full border lg:hidden ${theme === "dark" ? "border-white/10" : "border-ink/10"}`} aria-label="Toggle menu">
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {mobileOpen ? (
        <div className="section-shell pb-5 lg:hidden">
          <div className={`rounded-3xl border p-4 ${theme === "dark" ? "border-white/10 bg-white/[0.04]" : "border-ink/10 bg-white"}`}>
            <a onClick={() => setMobileOpen(false)} href="#home" className="block rounded-2xl bg-teal/10 px-4 py-3 font-semibold text-teal">Home</a>
            <div className={`my-2 rounded-2xl px-2 py-2 ${theme === "dark" ? "bg-white/[0.04]" : "bg-ink/[0.03]"}`}>
              <a onClick={() => setMobileOpen(false)} href="#services" className={`block px-2 py-2 font-semibold ${theme === "dark" ? "text-white" : "text-ink"}`}>Services</a>
              {serviceNavItems.map((item) => (
                <a key={item.label} onClick={() => setMobileOpen(false)} href={item.href} className={`block rounded-xl px-3 py-2 text-sm ${theme === "dark" ? "text-white/62 hover:bg-white/5" : "text-ink/62 hover:bg-ink/5"}`}>
                  {item.label}
                </a>
              ))}
            </div>
            {navItems.slice(1).map((item) => (
              <a key={item.href} onClick={() => setMobileOpen(false)} href={item.href} className={`block rounded-2xl px-4 py-3 ${theme === "dark" ? "text-white/75" : "text-ink/75"}`}>
                {item.label}
              </a>
            ))}
            <a onClick={() => setMobileOpen(false)} href="#contact" className="mt-2 flex w-full items-center justify-between rounded-2xl bg-teal px-4 py-3 font-semibold text-white">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  theme
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
  theme: "dark" | "light";
}) {
  return (
    <section id={id} className="relative z-10 scroll-mt-32 border-b border-ink/[0.06] py-16 md:py-20">
      <div className="section-shell">
        <div className="mb-10 grid gap-4 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <span className="mb-4 inline-flex text-xs font-semibold uppercase tracking-[0.2em] text-teal">{eyebrow}</span>
            <h2 className={`text-balance text-3xl font-semibold leading-tight md:text-5xl ${theme === "dark" ? "text-white" : "text-ink"}`}>{title}</h2>
          </div>
          <p className={`max-w-2xl text-base leading-7 lg:justify-self-end lg:text-lg ${theme === "dark" ? "text-white/62" : "text-ink/62"}`}>{intro}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

function ServiceRail({ theme }: { theme: "dark" | "light" }) {
  const featuredServices = [
    {
      number: "01",
      title: "App Development",
      detail: "Native and cross-platform products",
      href: "/app-development"
    },
    {
      number: "02",
      title: "Web Development",
      detail: "Fast, scalable digital platforms",
      href: "/web-development"
    },
    {
      number: "03",
      title: "UX/UI Design",
      detail: "Clear interfaces built around users",
      href: "/ux-ui-design"
    }
  ];

  return (
    <nav aria-label="Featured services" className={`relative z-10 border-y ${theme === "dark" ? "border-white/10 bg-[#18191a]" : "border-ink/10 bg-white"}`}>
      <div className="section-shell grid md:grid-cols-3">
        {featuredServices.map((service, index) => (
          <Link
            key={service.title}
            href={service.href}
            className={`group flex min-h-32 items-center gap-5 py-6 transition-colors duration-300 md:px-7 ${index ? "border-t md:border-l md:border-t-0" : ""} ${theme === "dark" ? "border-white/10 hover:bg-white/[0.04]" : "border-ink/10 hover:bg-[#f7f9fc]"}`}
          >
            <span className="text-xs font-semibold tracking-[0.16em] text-teal">{service.number}</span>
            <span className="min-w-0 flex-1">
              <span className={`block text-lg font-semibold ${theme === "dark" ? "text-white" : "text-ink"}`}>{service.title}</span>
              <span className={`mt-1 block text-sm ${theme === "dark" ? "text-white/55" : "text-ink/55"}`}>{service.detail}</span>
            </span>
            <ArrowRight className="h-5 w-5 shrink-0 text-teal transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        ))}
      </div>
    </nav>
  );
}

function BeforeAfter({
  sliderValue,
  setSliderValue,
  theme
}: {
  sliderValue: number;
  setSliderValue: (value: number) => void;
  theme: "dark" | "light";
}) {
  return (
    <section className={`relative z-10 border-y py-20 md:py-24 ${theme === "dark" ? "border-white/10 bg-[#202124]" : "border-ink/10 bg-white"}`}>
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.76fr_1.24fr]">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <span className="mb-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-teal">
            <span className="h-2 w-2 rounded-full bg-[#42b72a]" />
            Design transformation
          </span>
          <h2 className={`text-balance text-4xl font-semibold leading-tight md:text-5xl ${theme === "dark" ? "text-white" : "text-ink"}`}>
            From overlooked to <span className="text-teal">built to convert.</span>
          </h2>
          <p className={`mt-5 max-w-xl text-lg leading-8 ${theme === "dark" ? "text-white/62" : "text-ink/62"}`}>
            Drag the divider to see how clearer positioning, stronger proof and intentional calls to action turn a generic website into a sales asset.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[["2.4x", "More enquiries"], ["42%", "Clearer journey"], ["1.8s", "Load target"]].map(([value, label]) => (
              <div key={label} className={`border-l-2 border-teal pl-3 ${theme === "dark" ? "text-white" : "text-ink"}`}>
                <p className="text-2xl font-semibold">{value}</p>
                <p className={`mt-1 text-xs leading-5 ${theme === "dark" ? "text-white/50" : "text-ink/50"}`}>{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
          <div className={`overflow-hidden rounded-[24px] border shadow-[0_24px_70px_rgba(15,23,42,0.14)] ${theme === "dark" ? "border-white/10 bg-[#18191a]" : "border-ink/10 bg-[#f7f8fa]"}`}>
            <div className={`flex h-12 items-center gap-2 border-b px-4 ${theme === "dark" ? "border-white/10" : "border-ink/10"}`}>
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <div className={`ml-3 flex h-7 flex-1 items-center rounded-md px-3 text-[11px] ${theme === "dark" ? "bg-white/[0.06] text-white/35" : "bg-white text-ink/40"}`}>opusgeeks.com / growth-experience</div>
            </div>
            <div className="relative aspect-[16/10] min-h-[360px] overflow-hidden bg-[#e9edf3]">
              <div className="absolute inset-0 bg-[#e5e7eb] p-6 text-[#6b7280] sm:p-8">
                <div className="flex items-center justify-between border-b border-black/10 pb-5">
                  <span className="text-lg font-bold text-[#9ca3af]">YOUR LOGO</span>
                  <div className="flex gap-4 text-xs"><span>Home</span><span>Services</span><span>Contact</span></div>
                </div>
                <div className="mx-auto max-w-md py-12 text-center">
                  <p className="text-3xl font-semibold text-[#6b7280] sm:text-4xl">Welcome to our website</p>
                  <p className="mx-auto mt-4 max-w-sm text-sm leading-6">We provide digital solutions for all types of businesses. Contact us to learn more.</p>
                  <span className="mt-7 inline-flex rounded bg-[#9ca3af] px-5 py-2 text-xs font-semibold text-white">LEARN MORE</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {["Quality", "Innovation", "Support"].map((item) => <div key={item} className="rounded border border-black/10 bg-white/35 p-4 text-center text-xs font-semibold">{item}</div>)}
                </div>
                <span className="absolute bottom-4 right-5 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">Before</span>
              </div>

              <div className="absolute inset-0 overflow-hidden bg-[#071419] text-white" style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}>
                <div className="absolute inset-0 p-6 sm:p-8">
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <span className="flex items-center gap-2 text-sm font-semibold"><span className="grid h-7 w-7 place-items-center rounded bg-teal text-xs text-white">OG</span> OPUS GEEKS</span>
                    <div className="flex items-center gap-4 text-xs text-white/55"><span>Expertise</span><span>Work</span><span className="rounded-full bg-teal px-4 py-2 font-semibold text-white">Start a project</span></div>
                  </div>
                  <div className="grid grid-cols-[1.05fr_0.95fr] items-center gap-8 py-9">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#53d6ca]">Digital product studio</p>
                      <p className="mt-4 text-4xl font-semibold leading-tight">Products engineered for real growth.</p>
                      <p className="mt-4 max-w-sm text-sm leading-6 text-white/55">Strategy, design and engineering aligned around measurable business outcomes.</p>
                      <div className="mt-6 flex gap-3"><span className="rounded-full bg-teal px-5 py-2 text-xs font-semibold">Get an estimate</span><span className="rounded-full border border-white/15 px-5 py-2 text-xs">View work</span></div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                      <div className="flex items-end gap-2">
                        {[42, 64, 52, 82, 70, 96].map((height, index) => <span key={index} className="flex-1 rounded-t bg-teal" style={{ height }} />)}
                      </div>
                      <div className="mt-5 flex justify-between border-t border-white/10 pt-4"><span className="text-xs text-white/40">Conversion growth</span><span className="text-lg font-semibold text-[#53d6ca]">+38.4%</span></div>
                    </div>
                  </div>
                </div>
                <span className="absolute bottom-4 left-5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink">After</span>
              </div>

              <div className="pointer-events-none absolute inset-y-0 z-20 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.12)]" style={{ left: `${sliderValue}%` }}>
                <span className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-white bg-teal text-sm font-bold text-white shadow-xl">↔</span>
              </div>
              <input aria-label="Compare the original and redesigned website" type="range" min="0" max="100" value={sliderValue} onChange={(event) => setSliderValue(Number(event.target.value))} className="comparison-range absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0" />
            </div>
          </div>
          <p className={`mt-4 text-center text-xs font-medium ${theme === "dark" ? "text-white/40" : "text-ink/40"}`}>Drag anywhere across the preview to compare</p>
        </motion.div>
      </div>
    </section>
  );
}

function Journey({ theme }: { theme: "dark" | "light" }) {
  const [activeStage, setActiveStage] = useState(0);
  const activeStep = journey[activeStage];
  const activeOutput = journeyOutputs[activeStage];
  const ActiveIcon = activeStep.icon;

  function moveStage(direction: number) {
    setActiveStage((current) => (current + direction + journey.length) % journey.length);
  }

  return (
    <section id="journey" className="relative z-10 scroll-mt-24 border-y border-ink/10 bg-[#F7F9FC] py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-12 grid items-end gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[.2em] text-[#1877F2]">Delivery system</span>
            <h2 className="mt-4 max-w-2xl text-balance text-4xl font-semibold leading-[1.04] text-ink md:text-6xl">One product vision. Five controlled stages.</h2>
          </div>
          <div className="border-l-2 border-[#1877F2] pl-6 lg:mb-1">
            <p className="max-w-xl text-base leading-7 text-ink/62 md:text-lg md:leading-8">From first decision to production release, every phase has a clear purpose, visible output, and accountable handoff.</p>
          </div>
        </div>

        <div className="overflow-hidden border border-ink/10 bg-white shadow-[0_28px_80px_rgba(28,30,33,.08)]">
          <div className="grid lg:grid-cols-[280px_1fr]">
            <div className="border-b border-ink/10 bg-[#EEF2F7] p-3 lg:border-b-0 lg:border-r lg:p-5">
              <p className="px-3 pb-3 pt-2 text-[10px] font-semibold uppercase tracking-[.2em] text-ink/38">Product roadmap</p>
              <div className="grid grid-cols-5 gap-1 lg:grid-cols-1">
                {journey.map((step, index) => {
                  const Icon = step.icon;
                  const selected = activeStage === index;
                  return (
                    <button
                      key={step.title}
                      type="button"
                      onClick={() => setActiveStage(index)}
                      aria-pressed={selected}
                      className={`group flex min-h-16 items-center justify-center gap-3 px-2 py-3 text-left transition-colors duration-200 lg:justify-start lg:px-3 ${selected ? "bg-[#1877F2] text-white" : "text-ink/58 hover:bg-white hover:text-ink"}`}
                    >
                      <span className={`hidden text-[10px] font-semibold tracking-[.16em] sm:block ${selected ? "text-white/65" : "text-ink/30"}`}>{String(index + 1).padStart(2, "0")}</span>
                      <Icon className="h-5 w-5 shrink-0" strokeWidth={1.7} />
                      <span className="hidden flex-1 text-sm font-semibold lg:block">{step.title}</span>
                      <ChevronRight className={`hidden h-4 w-4 transition-transform lg:block ${selected ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid min-h-[570px] md:grid-cols-[.92fr_1.08fr]">
              <div className="flex flex-col border-b border-ink/10 p-7 sm:p-10 md:border-b-0 md:border-r lg:p-12">
                <div className="flex items-start justify-between gap-6">
                  <span className="flex h-14 w-14 items-center justify-center bg-[#E7F3FF] text-[#1877F2]"><ActiveIcon className="h-7 w-7" strokeWidth={1.7} /></span>
                  <span className="text-xs font-semibold tracking-[.18em] text-ink/35">{String(activeStage + 1).padStart(2, "0")} / {String(journey.length).padStart(2, "0")}</span>
                </div>
                <motion.div key={activeStep.title} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .22, ease: "easeOut" }}>
                  <p className="mt-12 text-xs font-semibold uppercase tracking-[.2em] text-[#1877F2]">Current phase</p>
                  <h3 className="mt-3 text-4xl font-semibold leading-tight text-ink sm:text-5xl">{activeStep.title}</h3>
                  <p className="mt-6 text-base leading-7 text-ink/62 sm:text-lg sm:leading-8">{activeStep.text}</p>
                </motion.div>
                <div className="mt-auto flex items-center justify-between border-t border-ink/10 pt-7">
                  <span className="text-xs font-semibold uppercase tracking-[.16em] text-ink/38">Stage control</span>
                  <div className="flex">
                    <button type="button" onClick={() => moveStage(-1)} aria-label="Previous stage" className="flex h-11 w-11 items-center justify-center border border-ink/15 text-ink transition-colors hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white"><ChevronLeft className="h-5 w-5" /></button>
                    <button type="button" onClick={() => moveStage(1)} aria-label="Next stage" className="flex h-11 w-11 items-center justify-center border-y border-r border-ink/15 bg-[#1877F2] text-white transition-colors hover:bg-[#166FE5]"><ChevronRight className="h-5 w-5" /></button>
                  </div>
                </div>
              </div>

              <div className="relative flex min-h-[440px] items-center justify-center overflow-hidden bg-[#E8EDF4] p-6 sm:p-10">
                <div className="pointer-events-none absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(24,119,242,.09)_1px,transparent_1px),linear-gradient(90deg,rgba(24,119,242,.09)_1px,transparent_1px)] [background-size:48px_48px]" />
                <span className="pointer-events-none absolute -bottom-10 -right-2 text-[190px] font-semibold leading-none text-[#1877F2]/[.055] sm:text-[250px]">{String(activeStage + 1).padStart(2, "0")}</span>
                <div className="relative z-10 w-full max-w-[500px] border border-ink/10 bg-white p-4 shadow-[0_28px_70px_rgba(28,30,33,.15)] sm:p-5">
                  <div className="flex items-center gap-2 border-b border-ink/10 pb-4"><span className="h-2.5 w-2.5 rounded-full bg-[#1877F2]" /><span className="h-2.5 w-2.5 rounded-full bg-[#AAB2BD]" /><span className="h-2.5 w-2.5 rounded-full bg-[#D8DDE5]" /><span className="ml-3 h-7 flex-1 bg-[#F0F2F5]" /></div>
                  <div className="grid min-h-[300px] grid-cols-[72px_1fr] pt-4">
                    <div className="border-r border-ink/10 pr-3"><span className="block h-9 bg-[#1877F2]" /><span className="mt-3 block h-2 bg-ink/10" /><span className="mt-3 block h-2 bg-ink/10" /><span className="mt-3 block h-2 bg-ink/10" /></div>
                    <div className="pl-4">
                      <div className="flex items-center justify-between"><span className="h-3 w-28 bg-ink/80" /><span className="h-8 w-8 bg-[#E7F3FF]" /></div>
                      <div className="mt-6 grid grid-cols-3 gap-3">{[0,1,2].map((item) => <span key={item} className={`h-16 transition-colors duration-200 ${item === activeStage % 3 ? activeOutput.accent : "bg-[#F0F2F5]"}`} />)}</div>
                      <div className="mt-5 h-24 border border-ink/10 p-3"><div className="flex h-full items-end gap-2">{[35,58,46,76,64,92].map((height, index) => <span key={index} className={`flex-1 transition-[height,background-color] duration-300 ${activeOutput.accent}`} style={{ height: `${Math.max(18, height - activeStage * 4 + index * 2)}%` }} />)}</div></div>
                      <div className="mt-4 flex items-center gap-3"><span className="h-9 flex-1 bg-[#1C1E21]" /><span className="h-9 w-20 border border-ink/12" /></div>
                    </div>
                  </div>
                </div>
                <motion.div key={activeOutput.label} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .2 }} className="absolute bottom-5 left-5 z-20 border-l-2 border-[#1877F2] bg-white px-4 py-3 sm:bottom-8 sm:left-8">
                  <span className="block text-[10px] font-semibold uppercase tracking-[.16em] text-[#1877F2]">{activeOutput.metric}</span>
                  <span className="mt-1 block text-xs font-semibold uppercase tracking-[.12em] text-ink">{activeOutput.label}</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FailurePrevention({ theme }: { theme: "dark" | "light" }) {
  return (
    <Section id="failures" eyebrow="Risk control" title="The risks are predictable. Our process addresses them early." intro="Clear ownership, validated scope, frequent demonstrations, and quality gates keep delivery aligned before small issues become expensive ones." theme={theme}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {failurePrevention.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.problem} className={`rounded-3xl border p-6 ${theme === "dark" ? "border-white/10 bg-white/[0.04]" : "border-ink/10 bg-white"}`}>
              <Icon className="mb-5 h-7 w-7 text-coral" />
              <h3 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-ink"}`}>{item.problem}</h3>
              <p className={`mt-3 text-sm leading-6 ${theme === "dark" ? "text-white/62" : "text-ink/62"}`}>{item.fix}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function ProjectDashboard({ theme }: { theme: "dark" | "light" }) {
  return (
    <section className="relative z-10 py-20 md:py-28">
      <div className="section-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className={`rounded-[32px] border p-5 ${theme === "dark" ? "border-white/10 bg-white/[0.04]" : "border-ink/10 bg-white"}`}>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className={`text-2xl font-semibold ${theme === "dark" ? "text-white" : "text-ink"}`}>Project progress dashboard</h2>
              <p className={`mt-1 text-sm ${theme === "dark" ? "text-white/55" : "text-ink/55"}`}>A visual trust signal for international clients.</p>
            </div>
            <span className="rounded-full bg-teal px-3 py-1 text-sm font-semibold text-ink">Week 2 / 10</span>
          </div>
          <div className="space-y-3">
            {dashboardTasks.map((task) => (
              <div key={task.label} className={`rounded-2xl p-4 ${theme === "dark" ? "bg-white/[0.05]" : "bg-ink/[0.035]"}`}>
                <div className="mb-3 flex justify-between gap-3">
                  <span className={`font-medium ${theme === "dark" ? "text-white" : "text-ink"}`}>{task.label}</span>
                  <span className="text-sm font-semibold text-teal">{task.status}</span>
                </div>
                <div className={`h-2 overflow-hidden rounded-full ${theme === "dark" ? "bg-white/10" : "bg-ink/10"}`}>
                  <div className="h-full rounded-full bg-coral" style={{ width: `${task.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="self-center">
          <span className="mb-4 inline-flex rounded-full border border-coral/30 bg-coral/10 px-3 py-1 text-sm font-semibold text-coral">Transparent delivery</span>
          <h2 className={`text-balance text-3xl font-semibold md:text-5xl ${theme === "dark" ? "text-white" : "text-ink"}`}>Make the website feel like the company already runs mature projects.</h2>
          <p className={`mt-5 text-lg leading-8 ${theme === "dark" ? "text-white/62" : "text-ink/62"}`}>
            A mini dashboard suggests weekly demos, clear milestones, QA discipline, and a team clients can trust remotely.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {qualityChecks.map((check) => {
              const Icon = check.icon;
              return (
                <div key={check.label} className={`flex items-center gap-3 rounded-2xl border p-4 ${theme === "dark" ? "border-white/10 bg-white/[0.04]" : "border-ink/10 bg-white"}`}>
                  <Icon className="h-5 w-5 text-teal" />
                  <span className={`text-sm font-semibold ${theme === "dark" ? "text-white/75" : "text-ink/75"}`}>{check.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function CeoMessage({ theme }: { theme: "dark" | "light" }) {
  return (
    <section id="about" className={`relative z-10 scroll-mt-32 border-y py-16 md:py-20 ${theme === "dark" ? "border-white/10 bg-[#202124]" : "border-ink/[0.06] bg-white"}`}>
      <div className="section-shell grid overflow-hidden rounded-3xl border border-ink/10 bg-[#f0f2f5] lg:grid-cols-[0.92fr_1.08fr]">
        <Link href="/about" className="group relative min-h-[430px] overflow-hidden bg-[#0b1820]" aria-label="Read the Opus Geeks story">
          <Image src="/images/about-story.png" alt="Opus Geeks team collaborating on digital products" fill sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.03]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071419] via-[#071419]/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-7 md:p-9">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6ee7dc]">Inside Opus Geeks</p>
              <p className="mt-2 max-w-sm text-2xl font-semibold text-white">The people and principles behind the products.</p>
            </div>
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-ink shadow-xl transition duration-300 group-hover:-rotate-12 group-hover:bg-teal group-hover:text-white">
              <ArrowRight className="h-6 w-6" />
            </span>
          </div>
        </Link>
        <div className={`p-8 md:p-12 ${theme === "dark" ? "bg-[#18191a]" : "bg-white"}`}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">About the studio</span>
          <h2 className={`mt-5 text-balance text-3xl font-semibold leading-tight md:text-5xl ${theme === "dark" ? "text-white" : "text-ink"}`}>{companyCopy.aboutTitle}</h2>
          <p className={`mt-5 text-lg leading-8 ${theme === "dark" ? "text-white/62" : "text-ink/62"}`}>{companyCopy.aboutText}</p>
          <div className={`mt-8 divide-y border-y ${theme === "dark" ? "divide-white/10 border-white/10" : "divide-ink/10 border-ink/10"}`}>
            {[["01", "Vision", companyCopy.vision], ["02", "Mission", companyCopy.mission]].map(([number, label, value]) => (
              <div key={label} className="grid gap-3 py-5 sm:grid-cols-[44px_90px_1fr] sm:items-start">
                <span className="text-sm font-semibold text-teal">{number}</span>
                <span className={`font-semibold ${theme === "dark" ? "text-white" : "text-ink"}`}>{label}</span>
                <p className={`text-sm leading-6 ${theme === "dark" ? "text-white/58" : "text-ink/58"}`}>{value}</p>
              </div>
            ))}
          </div>
          <Link href="/about" className={`mt-7 inline-flex items-center gap-3 font-semibold transition hover:gap-5 ${theme === "dark" ? "text-white" : "text-ink"}`}>
            Discover our story <ArrowRight className="h-5 w-5 text-teal" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Estimator({
  selectedFeatures,
  budgetIndex,
  serviceIndex,
  estimate,
  theme,
  setBudgetIndex,
  setServiceIndex,
  toggleFeature
}: {
  selectedFeatures: string[];
  budgetIndex: number;
  serviceIndex: number;
  estimate: { low: number; high: number; timeline: string };
  theme: "dark" | "light";
  setBudgetIndex: (index: number) => void;
  setServiceIndex: (index: number) => void;
  toggleFeature: (feature: string) => void;
}) {
  return (
    <section id="estimator" className={`relative z-10 border-y py-16 md:py-20 ${theme === "dark" ? "border-white/10 bg-[#202124]" : "border-ink/[0.06] bg-white"}`}>
      <div className="section-shell">
        <div className="mb-10 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Project configurator</span>
            <h2 className={`mt-4 text-balance text-4xl font-semibold leading-tight md:text-5xl ${theme === "dark" ? "text-white" : "text-ink"}`}>Shape your product. Get a starting range.</h2>
          </div>
          <p className={`max-w-2xl text-lg leading-8 lg:justify-self-end ${theme === "dark" ? "text-white/62" : "text-ink/62"}`}>Choose the product, capabilities, and delivery ambition. Your estimate updates instantly and gives our team a useful starting brief.</p>
        </div>

        <div className={`overflow-hidden rounded-3xl border ${theme === "dark" ? "border-white/10 bg-[#18191a]" : "border-ink/10 bg-[#f7f8fa]"}`}>
          <div className={`flex flex-wrap items-center justify-between gap-4 border-b px-6 py-4 ${theme === "dark" ? "border-white/10" : "border-ink/10"}`}>
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-teal text-sm font-semibold text-white">OG</span>
              <div><p className={`text-sm font-semibold ${theme === "dark" ? "text-white" : "text-ink"}`}>Scope builder</p><p className={`text-xs ${theme === "dark" ? "text-white/45" : "text-ink/45"}`}>Three quick decisions</p></div>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-teal"><span className="h-2 w-2 rounded-full bg-[#42b72a]" /> Live estimate</div>
          </div>

          <div className="grid lg:grid-cols-[1fr_360px]">
            <div className={`grid gap-8 p-6 md:p-8 ${theme === "dark" ? "lg:border-r lg:border-white/10" : "lg:border-r lg:border-ink/10"}`}>
            <div>
              <div className="mb-4 flex items-center gap-3"><span className="grid h-7 w-7 place-items-center rounded-full bg-teal text-xs font-semibold text-white">1</span><span className={`font-semibold ${theme === "dark" ? "text-white" : "text-ink"}`}>What are we building?</span></div>
              <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                {services.slice(0, 6).map((service, index) => (
                  <button key={service.title} onClick={() => setServiceIndex(index)} className={`flex min-h-14 items-center justify-between rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${serviceIndex === index ? "border-teal bg-teal/10 text-teal" : theme === "dark" ? "border-white/10 bg-white/[0.03] text-white/65 hover:border-white/30" : "border-ink/10 bg-white text-ink/65 hover:border-teal/40"}`}>
                    {service.title}
                    {serviceIndex === index ? <Check className="h-4 w-4" /> : null}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="mb-4 flex items-center gap-3"><span className="grid h-7 w-7 place-items-center rounded-full bg-teal text-xs font-semibold text-white">2</span><span className={`font-semibold ${theme === "dark" ? "text-white" : "text-ink"}`}>Add key capabilities</span></div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {featureOptions.map((feature) => (
                  <button key={feature} onClick={() => toggleFeature(feature)} className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm transition ${selectedFeatures.includes(feature) ? "border-teal bg-teal/10 font-semibold text-teal" : theme === "dark" ? "border-white/10 text-white/60" : "border-ink/10 bg-white text-ink/60"}`}>
                    <span className={`grid h-5 w-5 place-items-center rounded border ${selectedFeatures.includes(feature) ? "border-teal bg-teal text-white" : "border-current/25"}`}>{selectedFeatures.includes(feature) ? <Check className="h-3.5 w-3.5" /> : null}</span>{feature}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="mb-4 flex items-center gap-3"><span className="grid h-7 w-7 place-items-center rounded-full bg-teal text-xs font-semibold text-white">3</span><span className={`font-semibold ${theme === "dark" ? "text-white" : "text-ink"}`}>Choose delivery depth</span></div>
              <div className="grid gap-2 md:grid-cols-3">
                {budgets.map((budget, index) => (
                  <button key={budget.label} onClick={() => setBudgetIndex(index)} className={`rounded-xl border p-4 text-left transition ${budgetIndex === index ? "border-teal bg-teal text-white shadow-[0_10px_25px_rgba(24,119,242,0.18)]" : theme === "dark" ? "border-white/10 bg-white/[0.03] text-white/65" : "border-ink/10 bg-white text-ink/65"}`}>
                    <div className="font-semibold">{budget.label}</div>
                    <div className="mt-1 text-xs opacity-70">{budget.timeline}</div>
                  </button>
                ))}
              </div>
            </div>
            </div>

            <aside className="flex flex-col justify-between bg-ink p-7 text-white md:p-8">
              <div>
                <div className="flex items-center justify-between"><span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Working estimate</span><CalendarCheck className="h-6 w-6 text-[#58a6ff]" /></div>
                <p className="mt-8 text-sm text-white/55">Investment range</p>
                <p className="mt-2 text-3xl font-semibold leading-tight">${estimate.low.toLocaleString()}<span className="text-white/30"> – </span>${estimate.high.toLocaleString()}</p>
                <div className="mt-7 grid grid-cols-2 gap-3 border-y border-white/10 py-5">
                  <div><p className="text-xs text-white/40">Timeline</p><p className="mt-1 text-sm font-semibold">{estimate.timeline}</p></div>
                  <div><p className="text-xs text-white/40">Features</p><p className="mt-1 text-sm font-semibold">{selectedFeatures.length} selected</p></div>
                </div>
                <p className="mt-6 text-sm leading-6 text-white/50">This is an initial planning range. Final scope follows a short discovery call.</p>
              </div>
              <a href={`mailto:${companyCopy.contactEmail}?subject=Project estimate request`} className="group mt-10 inline-flex w-full items-center justify-between rounded-xl bg-teal px-5 py-4 font-semibold text-white transition hover:bg-[#166fe5]">
                Discuss this estimate <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials({ theme }: { theme: "dark" | "light" }) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const active = testimonialItems[activeTestimonial];

  return (
    <section className={`relative z-10 overflow-hidden border-y py-20 md:py-28 ${theme === "dark" ? "border-white/10 bg-[#18191a]" : "border-ink/10 bg-white"}`}>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-[linear-gradient(135deg,transparent_45%,rgba(24,119,242,.055)_45%,rgba(24,119,242,.055)_46%,transparent_46%)] bg-[length:32px_32px]" />
      <div className="section-shell relative">
        <div className="mb-12">
          <div>
            <span className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.2em] text-teal"><span className="h-px w-8 bg-teal" /> Client voices</span>
            <h2 className={`max-w-4xl text-balance text-4xl font-semibold leading-[1.03] md:text-6xl ${theme === "dark" ? "text-white" : "text-ink"}`}>Listen From Our <span className="text-teal">Clients</span></h2>
          </div>
        </div>

        <div className={`overflow-hidden border ${theme === "dark" ? "border-white/10" : "border-ink/10"}`}>
          <div className="grid lg:grid-cols-[1.25fr_.75fr]">
            <div className="relative flex min-h-[420px] flex-col justify-between overflow-hidden bg-teal p-7 text-white md:p-12 lg:min-h-[500px]">
              <div className="pointer-events-none absolute -right-16 -top-24 text-[260px] font-black leading-none text-white/[.065]">“</div>
              <div className="relative flex items-center justify-between">
                <Quote className="h-9 w-9" strokeWidth={1.5} />
                <div className="flex gap-1 text-white/85" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="relative my-10"
                >
                  <blockquote className="max-w-3xl text-balance text-2xl font-medium leading-[1.35] md:text-4xl">“{active.quote}”</blockquote>
                  <div className="mt-9 flex items-center gap-4 border-t border-white/25 pt-6">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-white font-semibold text-teal">{String(activeTestimonial + 1).padStart(2, "0")}</span>
                    <div><p className="font-semibold">{active.name}</p><p className="mt-1 text-sm text-white/68">Client testimonial</p></div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <p className="relative text-xs font-semibold uppercase tracking-[.2em] text-white/60">Opus Geeks · Client experience</p>
            </div>

            <div className={`max-h-[500px] overflow-y-auto ${theme === "dark" ? "bg-[#202122]" : "bg-white"}`}>
              {testimonialItems.map((item, index) => (
                <button
                  key={item.quote}
                  type="button"
                  onClick={() => setActiveTestimonial(index)}
                  className={`group flex min-h-[105px] w-full items-center gap-5 border-b px-6 text-left transition last:border-b-0 md:px-8 ${theme === "dark" ? "border-white/10" : "border-ink/10"} ${activeTestimonial === index ? theme === "dark" ? "bg-white/[.07]" : "bg-[#e7f3ff]" : theme === "dark" ? "hover:bg-white/[.04]" : "hover:bg-[#f7f9fc]"}`}
                >
                  <span className={`text-xs font-semibold ${activeTestimonial === index ? "text-teal" : theme === "dark" ? "text-white/30" : "text-ink/30"}`}>{String(index + 1).padStart(2, "0")}</span>
                  <span className="min-w-0 flex-1"><span className={`block font-semibold ${theme === "dark" ? "text-white" : "text-ink"}`}>{item.name}</span><span className={`mt-1 block text-sm ${theme === "dark" ? "text-white/45" : "text-ink/45"}`}>Read testimonial</span></span>
                  <ArrowRight className={`h-5 w-5 transition group-hover:translate-x-1 ${activeTestimonial === index ? "text-teal" : theme === "dark" ? "text-white/25" : "text-ink/25"}`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta({ theme }: { theme: "dark" | "light" }) {
  return (
    <section id="contact" className="relative z-10 scroll-mt-32 pb-10 md:pb-16">
      <div className={`section-shell overflow-hidden rounded-[36px] border p-8 md:p-12 ${theme === "dark" ? "border-white/10 bg-white/[0.05]" : "border-ink/10 bg-white"}`}>
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <h2 className={`text-balance text-3xl font-semibold md:text-5xl ${theme === "dark" ? "text-white" : "text-ink"}`}>Ready to build your next digital product?</h2>
            <p className={`mt-5 max-w-2xl text-lg leading-8 ${theme === "dark" ? "text-white/62" : "text-ink/62"}`}>
              {companyCopy.aboutText}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a href="#estimator" className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-6 py-4 font-semibold text-ink transition hover:bg-white">
              Estimate a project
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href={`mailto:${companyCopy.contactEmail}`} className={`inline-flex items-center justify-center gap-2 rounded-full border px-6 py-4 font-semibold transition ${theme === "dark" ? "border-white/15 text-white hover:border-white/40" : "border-ink/15 text-ink hover:border-ink/40"}`}>
              Contact team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const quickLinks = [
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "#about" },
    { label: "FAQs", href: "#faqs" },
    { label: "Blogs", href: "#blogs" }
  ];

  return (
    <footer className="relative z-10 overflow-hidden border-t border-ink/10 bg-white text-ink">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal to-transparent" />
      <div className="pointer-events-none absolute right-[-8rem] top-[-10rem] h-80 w-80 rounded-full border-[56px] border-[#1877F2]/10" />
      <div className="pointer-events-none absolute bottom-20 left-0 h-px w-full bg-gradient-to-r from-transparent via-ink/10 to-transparent" />

      <div className="section-shell relative pt-14 md:pt-20">
        <div className="grid gap-12 border-b border-ink/10 pb-14 lg:grid-cols-[1.2fr_2fr] lg:gap-20 lg:pb-20">
          <div className="lg:border-r lg:border-ink/10 lg:pr-16">
            <a href="#home" className="relative block h-24 w-56" aria-label="Opus Geeks home">
              <Image src="/images/opus-logo.png" alt="Opus Geeks" fill className="object-contain object-left" />
              <span className="absolute inset-x-0 bottom-0 text-center text-xs font-medium tracking-[0.24em] text-ink">OPUSGEEKS</span>
            </a>
            <p className="mt-5 max-w-sm text-base leading-7 text-ink/60">
              Digital products shaped by clear thinking, thoughtful design, and dependable engineering.
            </p>
            <a href="mailto:contact@opusgeeks.com" className="group mt-8 inline-flex items-center gap-3 border-b border-teal/60 pb-2 text-lg font-medium transition hover:border-ink">
              Start a conversation
              <ArrowRight className="h-5 w-5 text-teal transition group-hover:translate-x-1" />
            </a>
            <div className="mt-10 flex gap-3">
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/company/opusgeeks", icon: <Linkedin className="h-5 w-5" /> },
                { label: "X", href: "https://x.com/opusgeeks?s=21", icon: <span className="text-lg">X</span> },
                { label: "Facebook", href: "https://www.facebook.com/people/Opus-Geeks/100083553187361/", icon: <Facebook className="h-5 w-5" /> }
              ].map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`Opus Geeks on ${social.label}`} className="group flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink/70 transition hover:-translate-y-1 hover:border-teal hover:bg-teal hover:text-white">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-[0.75fr_0.9fr_1.5fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Explore</p>
              <nav className="mt-6 flex flex-col gap-4" aria-label="Footer navigation">
                {quickLinks.map((item) => (
                  <a key={item.label} href={item.href} className="group flex w-fit items-center gap-2 text-sm text-ink/60 transition hover:text-teal">
                    <span className="h-px w-0 bg-teal transition-all group-hover:w-4" />
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">Services</p>
              <nav className="mt-6 flex flex-col gap-4" aria-label="Services navigation">
                {serviceNavItems.map((item) => (
                  <a key={item.label} href={item.href} className="group flex w-fit items-center gap-2 text-sm text-ink/60 transition hover:text-teal">
                    <span className="h-px w-0 bg-coral transition-all group-hover:w-4" />
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="sm:col-span-2 xl:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#55aee0]">Connect</p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-1">
                <div>
                  <p className="mb-3 text-sm font-semibold text-ink">Karachi studio</p>
                  <a href="mailto:contact@opusgeeks.com" className="mb-3 flex items-start gap-3 text-sm text-ink/60 transition hover:text-teal">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                    <span className="break-all">contact@opusgeeks.com</span>
                  </a>
                  <a href="tel:+13466904693" className="mb-3 flex items-start gap-3 text-sm text-ink/60 transition hover:text-teal">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                    <span>+1 (346) 690-4693</span>
                  </a>
                  <p className="flex items-start gap-3 text-sm leading-6 text-ink/60">
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-teal" />
                    <span>Block 22, Street Gulshan Karachi, Sindh Pakistan</span>
                  </p>
                </div>
                <div className="border-ink/10 sm:border-l sm:pl-6 xl:border-l-0 xl:border-t xl:pl-0 xl:pt-5">
                  <p className="mb-3 text-sm font-semibold text-ink">USA headquarters</p>
                  <p className="flex items-start gap-3 text-sm leading-6 text-ink/60">
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#55aee0]" />
                    <span>8903 Pines Blvd 217 153, Pembroke Pines, FL 33024, USA</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 py-7 text-sm text-ink/50 md:flex-row md:items-center md:justify-between">
          <p>© 2025 Opus Geeks. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-3 pr-14">
            <a href="#" className="transition hover:text-teal">Terms &amp; Conditions</a>
            <a href="#" className="transition hover:text-teal">Privacy Policy</a>
          </div>
        </div>
      </div>

      <a href="#home" aria-label="Back to top" className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-teal text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#166fe5] md:bottom-6 md:right-7">
        <ArrowUp className="h-5 w-5" />
      </a>
    </footer>
  );
}
