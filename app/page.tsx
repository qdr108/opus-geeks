"use client";

import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  ChevronDown,
  ChevronRight,
  Circle,
  Facebook,
  Linkedin,
  MapPin,
  Mail,
  Menu,
  MessageCircle,
  MousePointer2,
  Moon,
  Phone,
  Sparkles,
  Star,
  Sun,
  ArrowUp,
  X
} from "lucide-react";
import { useMemo, useState } from "react";
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
  tech,
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

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceIndex, setServiceIndex] = useState(0);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["CMS", "Dashboard", "Analytics"]);
  const [budgetIndex, setBudgetIndex] = useState(1);
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [portfolioFilter, setPortfolioFilter] = useState("All");
  const [sliderValue, setSliderValue] = useState(54);
  const { scrollYProgress } = useScroll();
  const smoothScrollProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  const filteredCaseStudies = useMemo(
    () => (portfolioFilter === "All" ? caseStudies : caseStudies.filter((study) => study.category === portfolioFilter)),
    [portfolioFilter]
  );
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

  function toggleFeature(feature: string) {
    setSelectedFeatures((current) =>
      current.includes(feature) ? current.filter((item) => item !== feature) : [...current, feature]
    );
  }

  return (
    <main className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${shellClass}`}>
      <motion.div className="fixed inset-x-0 top-0 z-[80] h-[3px] origin-left bg-gradient-to-r from-teal via-[#62a5ff] to-coral" style={{ scaleX: smoothScrollProgress }} />
      <div className={`pointer-events-none absolute inset-0 z-0 noise ${theme === "dark" ? "opacity-12" : "opacity-5"}`} />
      <SiteHeader />

      <section id="home" className={`relative z-10 scroll-mt-28 overflow-hidden pt-32 ${theme === "dark" ? "bg-[#18191a]" : "bg-[#f0f2f5]"}`}>
        <div className="animated-grid pointer-events-none absolute inset-0 opacity-25" />
        <div className="section-shell relative grid min-h-[760px] items-center gap-12 py-16 lg:grid-cols-[0.88fr_1.12fr] lg:py-20">
          <motion.div
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.08 }}
            className="relative z-10 max-w-2xl"
          >
            <motion.div variants={fadeUp} className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm backdrop-blur ${theme === "dark" ? "border-white/15 bg-white/10 text-white/80" : "border-ink/10 bg-white/80 text-ink/65 shadow-sm"}`}>
              <Sparkles className="h-4 w-4 text-teal" />
              {companyCopy.heroEyebrow}
            </motion.div>
            <motion.h1 variants={fadeUp} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className={`text-balance text-5xl font-semibold leading-[0.98] tracking-normal md:text-6xl xl:text-7xl ${theme === "dark" ? "text-white" : "text-ink"}`}>
              Build digital products that <span className="text-teal">move business forward.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className={`mt-6 max-w-2xl text-lg leading-8 md:text-xl ${theme === "dark" ? "text-white/72" : "text-ink/70"}`}>
              {companyCopy.heroIntro}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <motion.a whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }} href="#estimator" className="shine group inline-flex items-center justify-center gap-2 rounded-full bg-teal px-6 py-4 font-semibold text-white shadow-[0_14px_34px_rgba(24,119,242,0.24)] transition hover:bg-[#166fe5]">
                Get free estimate
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </motion.a>
              <motion.a whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} href="/portfolio" className={`inline-flex items-center justify-center gap-2 rounded-full border px-6 py-4 font-semibold backdrop-blur transition ${theme === "dark" ? "border-white/15 bg-white/10 text-white hover:border-white/35" : "border-ink/15 bg-white text-ink shadow-sm hover:border-teal/40"}`}>
                See case studies
              </motion.a>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {[
                ["80+", "Projects"],
                ["12", "Industries"],
                ["4.9/5", "Client rating"]
              ].map(([value, label]) => (
                <motion.div key={label} whileHover={{ y: -6, scale: 1.02 }} className={`rounded-2xl border p-4 backdrop-blur ${theme === "dark" ? "glass" : "border-ink/10 bg-white/85 shadow-sm"}`}>
                  <div className={`text-2xl font-semibold ${theme === "dark" ? "text-white" : "text-ink"}`}>{value}</div>
                  <div className={`mt-1 text-sm ${theme === "dark" ? "text-white/55" : "text-ink/55"}`}>{label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 42, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.18, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[720px]"
          >
            <div className="absolute -inset-8 rounded-full bg-teal/10 blur-3xl" />
            <div className={`relative overflow-hidden rounded-[28px] border p-2 shadow-[0_32px_80px_rgba(15,23,42,0.22)] ${theme === "dark" ? "border-white/15 bg-white/10" : "border-white bg-white"}`}>
              <div className="flex h-10 items-center gap-2 px-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className={`ml-3 h-5 flex-1 rounded-md ${theme === "dark" ? "bg-white/10" : "bg-[#f0f2f5]"}`} />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-[#09151d]">
                <Image
                  src="/images/opus-hero-command-center.png"
                  alt="Opus Geeks digital product engineering workspace"
                  fill
                  priority
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(2,10,16,0.82)_100%)]" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#53d6ca]">Product engineering studio</p>
                    <p className="mt-2 text-xl font-semibold sm:text-2xl">Strategy. Design. Development.</p>
                  </div>
                  <div className="hidden rounded-xl border border-white/15 bg-black/35 px-4 py-3 text-right sm:block">
                    <p className="text-2xl font-semibold">80+</p>
                    <p className="text-xs text-white/65">products delivered</p>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.45 }}
              className="absolute -bottom-5 right-4 rounded-2xl border border-white/80 bg-white px-5 py-4 shadow-xl sm:right-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Built for growth</p>
              <p className="mt-1 font-semibold text-ink">Web · Mobile · UI/UX</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <LogoTicker theme={theme} />

      <Section id="services" eyebrow="Services" title="Services built for modern businesses." intro="Opus Geeks focuses on mobile app development, website development, UI/UX design, game development, and custom digital solutions for growing brands." theme={theme}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.button
                key={service.title}
                initial="hidden"
                whileInView="show"
                whileHover={{ y: -10, scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                transition={{ delay: index * 0.05 }}
                onClick={() => setServiceIndex(index)}
                className={`premium-border group relative overflow-hidden rounded-3xl border p-6 text-left transition ${serviceIndex === index ? "border-teal bg-teal/10 shadow-glow" : theme === "dark" ? "border-white/10 bg-white/[0.04] hover:border-white/25" : "border-ink/10 bg-white hover:border-ink/25"}`}
              >
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-teal ${theme === "dark" ? "bg-white/10" : "bg-ink/[0.04]"}`}>
                  <motion.span whileHover={{ rotate: -8, scale: 1.08 }}>
                    <Icon className="h-6 w-6" />
                  </motion.span>
                </div>
                <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-ink"}`}>{service.title}</h3>
                <p className={`mt-3 min-h-24 text-sm leading-6 ${theme === "dark" ? "text-white/62" : "text-ink/62"}`}>{service.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.deliverables.map((item) => (
                    <span key={item} className={`rounded-full px-3 py-1 text-xs ${theme === "dark" ? "bg-white/8 text-white/70" : "bg-ink/[0.04] text-ink/70"}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.button>
            );
          })}
        </div>
      </Section>

      <Section id="work" eyebrow="Portfolio" title="Digital work across apps, websites, design, and interactive experiences." intro="The existing Opus Geeks portfolio groups work by service category. This version turns those categories into clearer case-study style cards until real project screenshots and results are available." theme={theme}>
        <div className="mb-6 flex flex-wrap gap-2">
          {["All", "App Development", "Web Development", "UI/UX Design", "Game Development"].map((filter) => (
            <button
              key={filter}
              onClick={() => setPortfolioFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                portfolioFilter === filter
                  ? "border-teal bg-teal text-white"
                  : theme === "dark"
                    ? "border-white/10 bg-white/[0.04] text-white/65"
                    : "border-ink/10 bg-white text-ink/65"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {filteredCaseStudies.map((study, index) => (
            <motion.article
              key={study.title}
              initial="hidden"
              whileInView="show"
              whileHover={{ y: -8 }}
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              transition={{ delay: index * 0.08 }}
              className={`premium-border group relative overflow-hidden rounded-3xl border transition hover:-translate-y-1 ${theme === "dark" ? "border-white/10 bg-white/[0.04]" : "border-ink/10 bg-white"}`}
            >
              <div className="relative h-56 overflow-hidden" style={{ background: study.image }}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.26),transparent_28%),linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.24))]" />
                <div className="absolute inset-5 rounded-3xl border border-white/24 bg-black/24 p-5 backdrop-blur-md transition duration-500 group-hover:scale-[1.03]">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white">{study.sector}</span>
                    <motion.span whileHover={{ rotate: 8, scale: 1.08 }} className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink shadow-lg">
                      <MousePointer2 className="h-4 w-4" />
                    </motion.span>
                  </div>
                  <div className="min-h-24">
                    <div className="text-xs font-bold uppercase tracking-[0.18em] text-white/65">Opus Geeks Case Study</div>
                    <h3 className="mt-2 max-w-xs text-2xl font-semibold leading-tight text-white">{study.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-5 text-white/72">{study.result}</p>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-2">
                    {study.stack.slice(0, 3).map((item) => (
                      <motion.div
                        key={item}
                        whileHover={{ y: -4 }}
                        className="rounded-2xl bg-white/18 p-3 text-xs font-semibold text-white shadow-sm"
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3 text-sm font-semibold text-teal">{study.result}</div>
                <h3 className={`text-2xl font-semibold ${theme === "dark" ? "text-white" : "text-ink"}`}>{study.title}</h3>
                <p className={`mt-3 text-sm leading-6 ${theme === "dark" ? "text-white/62" : "text-ink/62"}`}>{study.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {study.stack.map((item) => (
                    <span key={item} className={`rounded-full border px-3 py-1 text-xs ${theme === "dark" ? "border-white/10 text-white/65" : "border-ink/10 text-ink/65"}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <BeforeAfter sliderValue={sliderValue} setSliderValue={setSliderValue} theme={theme} />

      <Journey theme={theme} />

      <FailurePrevention theme={theme} />

      <ProjectDashboard theme={theme} />

      <CeoMessage theme={theme} />

      <Section id="process" eyebrow="Process" title="From branding to prototype, development, and launch." intro="The Opus Geeks process is presented as a clear path that helps clients understand how an idea becomes a polished digital product." theme={theme}>
        <div className="relative grid gap-4 lg:grid-cols-4">
          {process.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                transition={{ delay: index * 0.08 }}
                className={`rounded-3xl border p-6 backdrop-blur ${theme === "dark" ? "glass" : "border-ink/10 bg-white"}`}
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

      <Section id="industries" eyebrow="Industries" title="Experience across business-critical industries." intro="Opus Geeks highlights fintech, healthcare, retail, real estate, and other sectors where clean digital experiences can create measurable value." theme={theme}>
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

      <Section id="faqs" eyebrow="FAQs" title="Questions answered before the contact form." intro="Useful answers help visitors understand what Opus Geeks offers and how to start a project conversation." theme={theme}>
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
    <section id={id} className="relative z-10 scroll-mt-32 py-20 md:py-28">
      <div className="section-shell">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="mb-10 max-w-3xl">
          <span className="mb-4 inline-flex rounded-full border border-teal/30 bg-teal/10 px-3 py-1 text-sm font-semibold text-teal">{eyebrow}</span>
          <h2 className={`text-balance text-3xl font-semibold md:text-5xl ${theme === "dark" ? "text-white" : "text-ink"}`}>{title}</h2>
          <p className={`mt-5 text-base leading-7 md:text-lg ${theme === "dark" ? "text-white/62" : "text-ink/62"}`}>{intro}</p>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.18, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="mt-6 h-px w-32 origin-left bg-gradient-to-r from-teal to-transparent" />
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function LogoTicker({ theme }: { theme: "dark" | "light" }) {
  return (
    <section className={`relative z-10 border-y py-5 ${theme === "dark" ? "border-white/10 bg-white/[0.03]" : "border-ink/10 bg-white/70"}`}>
      <div className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r ${theme === "dark" ? "from-ink" : "from-white"} to-transparent`} />
      <div className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l ${theme === "dark" ? "from-ink" : "from-white"} to-transparent`} />
      <div className="flex overflow-hidden">
        <div className="flex min-w-max animate-ticker gap-4 px-2">
          {[...tech, ...tech].map((item, index) => (
            <span key={`${item}-${index}`} className={`rounded-full border px-5 py-2 text-sm font-semibold shadow-sm ${theme === "dark" ? "border-white/10 bg-white/[0.04] text-white/70" : "border-ink/10 bg-white text-ink/65"}`}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
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
    <section className="relative z-10 py-20 md:py-28">
      <div className="section-shell grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="mb-4 inline-flex rounded-full border border-coral/30 bg-coral/10 px-3 py-1 text-sm font-semibold text-coral">Before / After</span>
          <h2 className={`text-balance text-3xl font-semibold md:text-5xl ${theme === "dark" ? "text-white" : "text-ink"}`}>Show the gap between a template site and a serious growth website.</h2>
          <p className={`mt-5 text-lg leading-8 ${theme === "dark" ? "text-white/62" : "text-ink/62"}`}>
            A comparison slider instantly proves the redesign strategy: better hierarchy, stronger trust, cleaner copy, real case studies, and clear CTAs.
          </p>
        </div>
        <div className={`rounded-[32px] border p-4 ${theme === "dark" ? "border-white/10 bg-white/[0.04]" : "border-ink/10 bg-white"}`}>
          <div className="relative h-[420px] overflow-hidden rounded-[24px] bg-ink">
            <div className="absolute inset-0 p-5">
              <div className="mb-5 text-sm font-semibold text-white/45">Before</div>
              <div className="space-y-3">
                <div className="h-16 rounded-2xl bg-white/10" />
                <div className="h-8 w-3/5 rounded-full bg-white/10" />
                <div className="grid grid-cols-2 gap-3 pt-5">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="h-20 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                      <div className="h-3 w-1/2 rounded bg-white/15" />
                      <div className="mt-3 h-2 w-full rounded bg-white/10" />
                      <div className="mt-2 h-2 w-2/3 rounded bg-white/10" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}>
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#1877f2_0%,#1C1E21_52%,#42b72a_100%)] p-5">
                <div className="mb-5 flex items-center justify-between text-sm font-semibold text-white">
                  <span>After</span>
                  <span className="rounded-full bg-white/15 px-3 py-1">Premium product lab</span>
                </div>
                <div className="rounded-3xl bg-black/25 p-5 backdrop-blur">
                  <div className="h-6 w-4/5 rounded-full bg-white/80" />
                  <div className="mt-4 h-3 w-2/3 rounded-full bg-white/40" />
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {["Estimator", "Case studies", "Hiring"].map((item) => (
                      <div key={item} className="rounded-2xl bg-white/15 p-3">
                        <Circle className="mb-4 h-4 w-4 fill-teal text-teal" />
                        <div className="text-xs font-semibold text-white">{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/15 p-4 text-white">
                    <div className="text-2xl font-semibold">42%</div>
                    <div className="text-xs text-white/70">faster lead clarity</div>
                  </div>
                  <div className="rounded-2xl bg-white/15 p-4 text-white">
                    <div className="text-2xl font-semibold">4 goals</div>
                    <div className="text-xs text-white/70">sales, hiring, brand, global</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 w-1 bg-white shadow-glow" style={{ left: `${sliderValue}%` }} />
          </div>
          <input
            aria-label="Before after slider"
            type="range"
            min="18"
            max="82"
            value={sliderValue}
            onChange={(event) => setSliderValue(Number(event.target.value))}
            className="mt-5 w-full accent-teal"
          />
        </div>
      </div>
    </section>
  );
}

function Journey({ theme }: { theme: "dark" | "light" }) {
  return (
    <section id="journey" className="relative z-10 py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-12 max-w-3xl">
          <span className="mb-4 inline-flex rounded-full border border-teal/30 bg-teal/10 px-3 py-1 text-sm font-semibold text-teal">Interactive journey</span>
          <h2 className={`text-balance text-3xl font-semibold md:text-5xl ${theme === "dark" ? "text-white" : "text-ink"}`}>Idea to wireframe to design to code to launch.</h2>
          <p className={`mt-5 text-lg leading-8 ${theme === "dark" ? "text-white/62" : "text-ink/62"}`}>This scroll story helps visitors understand how Opus Geeks turns raw ideas into shipped products.</p>
        </div>
        <div className="relative grid gap-4 lg:grid-cols-5">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-6 hidden h-px w-full origin-left bg-gradient-to-r from-teal via-coral to-teal lg:block"
          />
          {journey.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.12 }}
                className={`premium-border relative rounded-3xl border p-5 ${theme === "dark" ? "border-white/10 bg-white/[0.04]" : "border-ink/10 bg-white"}`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <motion.div whileHover={{ scale: 1.08 }} className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal text-white shadow-[0_0_28px_rgba(24, 119, 242,0.22)]">
                    <Icon className="h-6 w-6" />
                  </motion.div>
                  <span className={`text-sm font-semibold ${theme === "dark" ? "text-white/35" : "text-ink/35"}`}>0{index + 1}</span>
                </div>
                <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-ink"}`}>{step.title}</h3>
                <p className={`mt-3 text-sm leading-6 ${theme === "dark" ? "text-white/62" : "text-ink/62"}`}>{step.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FailurePrevention({ theme }: { theme: "dark" | "light" }) {
  return (
    <Section id="failures" eyebrow="Risk control" title="Why projects fail, and how Opus Geeks prevents it." intro="This section makes the company look experienced because it names the problems clients already fear." theme={theme}>
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
    <section id="about" className="relative z-10 scroll-mt-32 py-20 md:py-28">
      <div className={`section-shell overflow-hidden rounded-[36px] border ${theme === "dark" ? "border-white/10 bg-white/[0.04]" : "border-ink/10 bg-white"}`}>
        <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
          <div className="min-h-80 bg-[linear-gradient(135deg,#1877f2_0%,#1C1E21_55%,#42b72a_100%)] p-8">
            <div className="flex h-full flex-col justify-between rounded-[28px] border border-white/15 bg-black/20 p-6 backdrop-blur">
              <button className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-ink" aria-label="CEO video placeholder">
                <ArrowRight className="h-7 w-7" />
              </button>
              <div>
                <div className="text-sm font-semibold text-teal">About Opus Geeks</div>
                <div className="mt-2 text-2xl font-semibold text-white">{companyCopy.aboutTitle}</div>
              </div>
            </div>
          </div>
          <div className="p-8 md:p-10">
            <span className="mb-4 inline-flex rounded-full border border-teal/30 bg-teal/10 px-3 py-1 text-sm font-semibold text-teal">About</span>
            <h2 className={`text-balance text-3xl font-semibold md:text-5xl ${theme === "dark" ? "text-white" : "text-ink"}`}>{companyCopy.aboutTitle}</h2>
            <p className={`mt-5 text-lg leading-8 ${theme === "dark" ? "text-white/62" : "text-ink/62"}`}>
              {companyCopy.aboutText}
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                ["Vision", companyCopy.vision],
                ["Mission", companyCopy.mission]
              ].map(([label, value]) => (
                <div key={label} className={`rounded-2xl border p-4 ${theme === "dark" ? "border-white/10 bg-white/[0.04]" : "border-ink/10 bg-ink/[0.03]"}`}>
                  <div className="text-sm font-semibold text-teal">{label}</div>
                  <p className={`mt-2 text-sm leading-6 ${theme === "dark" ? "text-white/62" : "text-ink/62"}`}>{value}</p>
                </div>
              ))}
            </div>
          </div>
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
    <section id="estimator" className="relative z-10 py-20 md:py-28">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="mb-4 inline-flex rounded-full border border-coral/30 bg-coral/10 px-3 py-1 text-sm font-semibold text-coral">AI-style estimator</span>
          <h2 className={`text-balance text-3xl font-semibold md:text-5xl ${theme === "dark" ? "text-white" : "text-ink"}`}>A contact form is fine. A project estimator wins attention.</h2>
          <p className={`mt-5 text-lg leading-8 ${theme === "dark" ? "text-white/62" : "text-ink/62"}`}>
            This interactive tool makes the site feel useful immediately. Visitors get a realistic starting range and Opus Geeks receives warmer leads.
          </p>
          <div className={`mt-8 rounded-3xl border p-5 ${theme === "dark" ? "border-white/10 bg-white/[0.04]" : "border-ink/10 bg-white"}`}>
            <div className={`flex items-center gap-3 ${theme === "dark" ? "text-white/75" : "text-ink/75"}`}>
              <MessageCircle className="h-5 w-5 text-teal" />
              "I need an app with payments and dashboard" becomes a scoped conversation, not a blank inquiry.
            </div>
          </div>
        </div>
        <div className={`rounded-[32px] border p-5 md:p-7 shadow-coral ${theme === "dark" ? "glass" : "border-ink/10 bg-white"}`}>
          <div className="grid gap-5">
            <div>
              <div className={`mb-3 text-sm font-semibold ${theme === "dark" ? "text-white/75" : "text-ink/75"}`}>1. Choose project type</div>
              <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                {services.slice(0, 6).map((service, index) => (
                  <button key={service.title} onClick={() => setServiceIndex(index)} className={`rounded-2xl border px-3 py-3 text-sm font-medium transition ${serviceIndex === index ? "border-teal bg-teal text-white" : theme === "dark" ? "border-white/10 bg-white/[0.04] text-white/65 hover:border-white/30" : "border-ink/10 bg-ink/[0.03] text-ink/65 hover:border-ink/30"}`}>
                    {service.title}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className={`mb-3 text-sm font-semibold ${theme === "dark" ? "text-white/75" : "text-ink/75"}`}>2. Select features</div>
              <div className="flex flex-wrap gap-2">
                {featureOptions.map((feature) => (
                  <button key={feature} onClick={() => toggleFeature(feature)} className={`rounded-full border px-4 py-2 text-sm transition ${selectedFeatures.includes(feature) ? "border-coral bg-coral text-ink" : theme === "dark" ? "border-white/10 bg-white/[0.04] text-white/65" : "border-ink/10 bg-ink/[0.03] text-ink/65"}`}>
                    {feature}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className={`mb-3 text-sm font-semibold ${theme === "dark" ? "text-white/75" : "text-ink/75"}`}>3. Pick ambition level</div>
              <div className="grid gap-2 md:grid-cols-3">
                {budgets.map((budget, index) => (
                  <button key={budget.label} onClick={() => setBudgetIndex(index)} className={`rounded-2xl border p-4 text-left transition ${budgetIndex === index ? "border-teal bg-teal text-white" : theme === "dark" ? "border-white/10 bg-white/[0.04] text-white/65" : "border-ink/10 bg-ink/[0.03] text-ink/65"}`}>
                    <div className="font-semibold">{budget.label}</div>
                    <div className="mt-1 text-xs opacity-70">{budget.timeline}</div>
                  </button>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-ink p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm text-white/55">Estimated range</div>
                  <div className="mt-1 text-3xl font-semibold text-white">
                    ${estimate.low.toLocaleString()} - ${estimate.high.toLocaleString()}
                  </div>
                  <div className="mt-2 text-sm text-white/55">Timeline: {estimate.timeline}</div>
                </div>
                <CalendarCheck className="hidden h-12 w-12 text-teal sm:block" />
              </div>
              <a href={`mailto:${companyCopy.contactEmail}?subject=Project estimate request`} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal px-5 py-4 font-semibold text-ink transition hover:bg-white">
                Send my estimate
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials({ theme }: { theme: "dark" | "light" }) {
  return (
    <section className="relative z-10 py-20 md:py-28">
      <div className="section-shell grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="mb-4 inline-flex rounded-full border border-teal/30 bg-teal/10 px-3 py-1 text-sm font-semibold text-teal">Client voice</span>
          <h2 className={`text-balance text-3xl font-semibold md:text-5xl ${theme === "dark" ? "text-white" : "text-ink"}`}>What clients expect from Opus Geeks.</h2>
          <p className={`mt-5 text-lg leading-8 ${theme === "dark" ? "text-white/62" : "text-ink/62"}`}>The original site includes client-review sections. This version keeps the proof section focused on trust, communication, design quality, and reliable delivery.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {testimonialItems.map((item) => (
            <div key={item.quote} className={`rounded-3xl border p-6 ${theme === "dark" ? "border-white/10 bg-white/[0.04]" : "border-ink/10 bg-white"}`}>
              <div className="mb-5 flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className={`text-lg leading-7 ${theme === "dark" ? "text-white/82" : "text-ink/82"}`}>{item.quote}</p>
              <p className="mt-5 text-sm font-semibold text-teal">{item.name} - {item.role}</p>
            </div>
          ))}
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
