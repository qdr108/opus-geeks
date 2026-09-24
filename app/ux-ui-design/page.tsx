"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  Component,
  Check,
  ChevronDown,
  Facebook,
  LayoutTemplate,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Palette,
  PenTool,
  ShieldCheck,
  Smartphone,
  Sparkles,
  X
} from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const services = [
  {
    title: "Website Design",
    icon: LayoutTemplate,
    description: "We create visually striking, user-friendly websites that balance aesthetics and functionality, leave a lasting impression, and help your business drive meaningful results."
  },
  {
    title: "Mobile Apps Design",
    icon: Smartphone,
    description: "Opus Geeks crafts mobile app experiences that combine thoughtful visual design with seamless functionality, optimized for user engagement and satisfaction."
  },
  {
    title: "UX/UI Design",
    icon: Component,
    description: "Our UX/UI work prioritizes user satisfaction and engagement through intuitive interfaces and seamless experiences that keep audiences captivated and connected."
  },
  {
    title: "Branding",
    icon: Palette,
    description: "From identity and logo direction to brand messaging, we create memorable systems that resonate with your audience and stand apart in competitive markets."
  }
];

const serviceDeliverables = [
  ["Responsive page system", "Conversion journey", "Developer-ready handoff"],
  ["Native interaction flows", "Clickable prototype", "Platform UI specification"],
  ["Research synthesis", "Reusable component system", "Accessibility review"],
  ["Visual identity direction", "Brand application system", "Launch-ready guidelines"]
];

const stats = [
  ["01", "Product Research", "Find the behavior, friction, and commercial context behind the brief.", "Research synthesis"],
  ["02", "Interaction Design", "Turn critical journeys into clear flows, states, and responsive prototypes.", "Validated prototype"],
  ["03", "Design Systems", "Create reusable foundations that keep product teams fast and consistent.", "Component library"],
  ["04", "Usability Review", "Test the experience against real tasks before expensive engineering begins.", "Prioritized findings"]
];

const caseStudies = [
  { title: "Strategy Experience", type: "Interface direction", image: "/images/ux-case-1-hd.jpg", outcome: "A structured digital narrative that turns complex capability into a clear product story." },
  { title: "Travel Companion", type: "Mobile experience", image: "/images/ux-case-2-hd.jpg", outcome: "A calm, task-focused journey designed for confidence while moving between places." },
  { title: "Care Platform", type: "Design system", image: "/images/ux-case-3-hd.jpg", outcome: "A modular healthcare system built for clarity, accessibility, and consistent delivery." },
  { title: "Connected Home", type: "Product interface", image: "/images/ux-case-4-hd.jpg", outcome: "An approachable control system that makes complex home technology feel effortless." }
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

export default function UxUiDesignPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeCase, setActiveCase] = useState(0);
  const [flippedService, setFlippedService] = useState<number | null>(null);

  const featuredCase = caseStudies[activeCase];

  useEffect(() => {
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  function submitConsultation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#f0f2f5] text-[#1C1E21]">
      <SiteHeader />

      <section className="relative min-h-[780px] overflow-hidden border-b border-[#1C1E21]/10 pt-28 lg:min-h-[860px]">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,#f8fbfd_0%,#edf6fa_58%,#dceef6_100%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(24,119,242,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(24,119,242,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="pointer-events-none absolute right-[-12%] top-20 hidden h-[680px] w-[680px] rounded-full border border-[#1877F2]/20 md:block" />
        <div className="pointer-events-none absolute right-[-5%] top-40 hidden h-[480px] w-[480px] rounded-full border border-[#1C1E21]/10 md:block" />

        <div className="section-shell relative grid min-h-[650px] items-center gap-12 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:py-20">
          <motion.div initial={false} animate="show" transition={{ staggerChildren: 0.08 }}>
            <motion.p variants={reveal} className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#1877F2]">
              <Sparkles className="h-4 w-4" /> Experience design &amp; brand systems
            </motion.p>
            <motion.h1 variants={reveal} className="text-balance text-5xl font-semibold leading-[1.02] md:text-7xl">
              Visionary UI/UX built to <span className="text-[#1877F2]">feel effortless.</span>
            </motion.h1>
            <motion.p variants={reveal} className="mt-7 max-w-xl text-lg leading-8 text-[#1C1E21]/65">
              Opus Geeks creates intuitive interfaces and engaging experiences that shape your brand&apos;s story, captivate your audience, and make every interaction feel natural.
            </motion.p>
            <motion.div variants={reveal} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => setModalOpen(true)} className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#1877F2] px-6 py-4 font-semibold text-white shadow-[0_16px_40px_rgba(24,119,242,0.25)] transition hover:bg-[#1C1E21]">
                Get a quote <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>
              <a href="#services" className="inline-flex items-center justify-center rounded-full border border-[#1C1E21]/15 bg-white/50 px-6 py-4 font-semibold text-[#1C1E21]/80 transition hover:border-[#1877F2] hover:text-[#1877F2]">Explore capabilities</a>
            </motion.div>
            <motion.div variants={reveal} className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[#1C1E21]/55">
              {["UX research", "Interactive prototypes", "Scalable design systems"].map((item) => (
                <span key={item} className="flex items-center gap-2"><Check className="h-4 w-4 text-[#1877F2]" />{item}</span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div initial={false} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto h-[480px] w-full max-w-[610px] [perspective:1200px] md:h-[590px]">
            <div className="absolute inset-x-8 bottom-8 h-24 rounded-full bg-[#1877F2]/20 blur-3xl" />
            <motion.div initial={false} animate={{ opacity: 1, y: 0, rotateY: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-x-3 top-8 overflow-hidden rounded-2xl border border-[#1C1E21]/15 bg-white shadow-[0_35px_70px_rgba(28,30,33,0.2)] md:inset-x-0 md:top-14">
              <div className="flex h-12 items-center justify-between border-b border-[#1C1E21]/10 bg-[#F7F8FA] px-4"><div className="flex items-center gap-2"><PenTool className="h-4 w-4 text-[#1877F2]"/><b className="text-xs">Opus Design Lab</b></div><span className="rounded-md bg-[#E7F3FF] px-2 py-1 text-[10px] font-semibold text-[#1877F2]">Prototype · Live</span></div>
              <div className="grid h-[375px] grid-cols-[64px_1fr] bg-[#F0F2F5] md:h-[430px] md:grid-cols-[84px_1fr]"><aside className="space-y-3 border-r border-[#1C1E21]/10 bg-white p-3">{[LayoutTemplate, Component, Palette, PenTool].map((Icon,index)=><motion.div key={index} whileHover={{scale:1.08}} className={`flex h-10 items-center justify-center rounded-lg ${index===1?'bg-[#1877F2] text-white':'bg-[#F0F2F5] text-[#1C1E21]/45'}`}><Icon className="h-4 w-4"/></motion.div>)}</aside><div className="relative overflow-hidden p-4 md:p-6"><div className="flex items-center justify-between"><div><p className="text-[10px] uppercase tracking-[0.18em] text-[#1877F2]">Checkout redesign</p><h3 className="mt-1 text-lg font-semibold md:text-2xl">Design system workspace</h3></div><div className="flex -space-x-2">{["A","M","S"].map((item,index)=><span key={item} className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#1877F2] text-[9px] font-bold text-white" style={{opacity:1-index*.16}}>{item}</span>)}</div></div><div className="mt-5 grid grid-cols-[1.2fr_.8fr] gap-3"><div className="rounded-xl bg-white p-4 shadow-sm"><div className="h-20 rounded-lg bg-[#1877F2] p-3 text-white"><div className="h-2 w-1/2 rounded bg-white/80"/><div className="mt-3 h-2 w-3/4 rounded bg-white/35"/><div className="mt-2 h-2 w-2/3 rounded bg-white/35"/></div><div className="mt-3 grid grid-cols-2 gap-2"><div className="h-20 rounded-lg bg-[#E7F3FF]"/><div className="h-20 rounded-lg bg-[#F0F2F5]"/></div></div><div className="space-y-3"><div className="rounded-xl bg-white p-3 shadow-sm"><p className="text-[9px] text-[#1C1E21]/45">Components</p><b className="mt-1 block text-xl text-[#1877F2]">48</b></div><div className="rounded-xl bg-white p-3 shadow-sm"><p className="text-[9px] text-[#1C1E21]/45">Accessibility</p><b className="mt-1 block text-xl text-[#1877F2]">AA</b></div><div className="flex gap-2 rounded-xl bg-white p-3 shadow-sm">{["#1877F2","#1C1E21","#F0F2F5"].map(color=><i key={color} className="h-6 flex-1 rounded" style={{backgroundColor:color}}/>)}</div></div></div></div></div>
            </motion.div>
            <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.45 }} className="absolute bottom-4 right-0 rounded-xl border border-[#1877F2]/15 bg-white px-5 py-4 shadow-xl"><p className="text-xs uppercase tracking-[0.18em] text-[#1877F2]">Validated flow</p><p className="mt-1 text-sm font-semibold">Research · Prototype · Test</p></motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-[#1C1E21]/10 bg-white py-16 md:py-20">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-[linear-gradient(135deg,transparent,rgba(24,119,242,0.1))]" />
        <div className="section-shell grid gap-8 lg:grid-cols-2 lg:items-center">
          <h2 className="text-balance text-4xl font-semibold leading-tight md:text-6xl">Futuristic <span className="text-[#1877F2]">user experience</span> &amp; development.</h2>
          <p className="border-l border-[#1877F2]/40 pl-6 text-lg leading-8 text-[#1C1E21]/60">Embrace the future with cutting-edge experience design. We make collaboration between people and interfaces more intensive, engaging, productive, and seamless.</p>
        </div>
      </section>

      <section id="services" className="relative scroll-mt-32 overflow-hidden border-y border-[#1C1E21]/10 bg-[#F0F2F5] py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(28,30,33,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(28,30,33,.055)_1px,transparent_1px)] [background-size:80px_80px]" />
        <div className="section-shell relative grid gap-14 lg:grid-cols-[.36fr_.64fr] lg:items-start xl:gap-20">
          <div className="lg:sticky lg:top-32">
            <div className="flex items-center gap-4"><span className="h-px w-10 bg-[#1877F2]" /><p className="text-xs font-semibold uppercase tracking-[.2em] text-[#1877F2]">Experience design practice</p></div>
            <h2 className="mt-6 max-w-xl text-balance text-4xl font-semibold leading-[1.02] md:text-6xl">Four disciplines. <span className="font-display font-normal italic text-[#1877F2]">One coherent experience.</span></h2>
            <p className="mt-6 max-w-md text-base leading-7 text-[#1C1E21]/56">Each capability connects user insight, interface craft, and a production-ready handoff. Flip a card to inspect what the engagement delivers.</p>
            <div className="mt-10 border-y border-[#1C1E21]/12 py-5"><div className="flex items-center justify-between"><span className="text-[10px] font-semibold uppercase tracking-[.16em] text-[#1C1E21]/38">Interaction</span><span className="text-xs font-semibold text-[#1877F2]">Hover / Tap to flip</span></div></div>
            <button onClick={() => setModalOpen(true)} className="group mt-8 inline-flex min-h-14 items-center justify-between gap-10 bg-[#1C1E21] px-6 font-semibold text-white transition hover:bg-[#1877F2]">Shape your experience <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></button>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service,index)=>{const Icon=service.icon;return(
              <button type="button" key={service.title} aria-label={`${flippedService===index?"Hide":"Show"} ${service.title} deliverables`} aria-pressed={flippedService===index} onClick={()=>setFlippedService(flippedService===index?null:index)} className="group h-[340px] text-left [perspective:1400px] focus:outline-none">
                <span className={`relative block h-full w-full transition-transform duration-700 [transform-style:preserve-3d] [transition-timing-function:cubic-bezier(.22,1,.36,1)] motion-reduce:transition-none lg:group-hover:[transform:rotateY(180deg)] lg:group-focus-visible:[transform:rotateY(180deg)] ${flippedService===index?"[transform:rotateY(180deg)]":""}`}>
                  <span className="absolute inset-0 flex flex-col overflow-hidden border border-[#1C1E21]/12 bg-white p-6 shadow-[0_20px_55px_rgba(28,30,33,.06)] [backface-visibility:hidden] md:p-7">
                    <span className="absolute -right-3 -top-8 font-display text-[9rem] leading-none text-[#1C1E21]/[.035]">{String(index+1).padStart(2,"0")}</span>
                    <span className="relative flex items-start justify-between border-b border-[#1C1E21]/10 pb-5"><span className="grid h-11 w-11 place-items-center border border-[#1877F2]/24 text-[#1877F2]"><Icon className="h-5 w-5" /></span><span className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#1C1E21]/35">Discipline {String(index+1).padStart(2,"0")}</span></span>
                    <span className="relative flex flex-1 flex-col pt-7"><span className="text-2xl font-semibold leading-tight">{service.title}</span><span className="mt-4 line-clamp-4 text-sm leading-6 text-[#1C1E21]/54">{service.description}</span><span className="mt-auto flex items-center justify-between border-t border-[#1C1E21]/10 pt-5 text-[10px] font-semibold uppercase tracking-[.16em] text-[#1877F2]"><span>Inspect deliverables</span><ArrowRight className="h-4 w-4" /></span></span>
                  </span>
                  <span className="absolute inset-0 flex flex-col overflow-hidden bg-[#1C1E21] p-6 text-white [backface-visibility:hidden] [transform:rotateY(180deg)] md:p-7">
                    <span className="absolute -right-3 -top-8 font-display text-[9rem] leading-none text-white/[.035]">{String(index+1).padStart(2,"0")}</span>
                    <span className="relative flex items-center justify-between border-b border-white/15 pb-5"><span className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#78B7FF]">Engagement output</span><Icon className="h-5 w-5 text-white/48" /></span>
                    <span className="relative mt-7 text-2xl font-semibold">{service.title}</span><span className="relative mt-7 space-y-4">{serviceDeliverables[index].map(item=><span key={item} className="flex items-center gap-3 text-sm text-white/72"><Check className="h-4 w-4 shrink-0 text-[#1877F2]" />{item}</span>)}</span>
                    <span className="relative mt-auto flex items-center justify-between border-t border-white/15 pt-5 text-[10px] font-semibold uppercase tracking-[.16em] text-white/52"><span>Tap to return</span><ArrowRight className="h-4 w-4 -rotate-180" /></span>
                  </span>
                </span>
              </button>);})}
          </div>
        </div>
      </section>

      <section className="border-y border-[#1C1E21]/10 bg-white py-20 text-[#1C1E21] md:py-24">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1877F2]">How we build</p><h2 className="mt-4 text-balance text-4xl font-semibold md:text-5xl">A product process with momentum.</h2><p className="mt-5 max-w-md text-base leading-7 text-[#1C1E21]/55">A transparent four-stage workflow keeps every decision visible and every milestone moving forward.</p></div>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-[#1C1E21]/10 bg-[#1C1E21]/10 shadow-[0_16px_44px_rgba(28,30,33,0.08)] sm:grid-cols-2">
              {["Discover the opportunity", "Prototype the experience", "Engineer the product", "Launch and improve"].map((step, index) => (
                <motion.div key={step} initial={false} whileHover={{ backgroundColor: "#F0F6FF" }} transition={{ duration: 0.2 }} className="bg-white p-6 md:p-8"><span className="text-sm font-semibold text-[#1877F2]">0{index + 1}</span><h3 className="mt-5 text-xl font-semibold">{step}</h3><p className="mt-3 text-sm leading-6 text-[#1C1E21]/55">Clear decisions, visible progress, and quality checks keep every stage aligned with the product goal.</p></motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[#1C1E21]/10 bg-[#F0F2F5] py-20 text-[#1C1E21] md:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(28,30,33,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(28,30,33,.045)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="section-shell relative">
          <div className="grid gap-8 border-b border-[#1C1E21]/15 pb-10 lg:grid-cols-[1fr_.8fr] lg:items-end">
            <div><div className="flex items-center gap-4"><span className="h-px w-10 bg-[#1877F2]" /><p className="text-xs font-semibold uppercase tracking-[.2em] text-[#1877F2]">Design evidence / 01-04</p></div><h2 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.03] md:text-6xl">Every design decision <span className="font-display font-normal italic text-[#1877F2]">earns its place.</span></h2></div>
            <div className="lg:justify-self-end"><p className="max-w-xl text-base leading-7 text-[#1C1E21]/58 md:text-lg md:leading-8">We replace subjective preference with research, prototypes, reusable systems, and evidence teams can act on.</p><button onClick={() => setModalOpen(true)} className="group mt-6 inline-flex items-center gap-3 font-semibold">Discuss your product <span className="grid h-10 w-10 place-items-center border border-[#1C1E21]/18 transition group-hover:border-[#1877F2] group-hover:bg-[#1877F2] group-hover:text-white"><ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></span></button></div>
          </div>

          <div className="grid border-b border-[#1C1E21]/15 lg:grid-cols-2">
            {stats.map(([value, label, description, output], index) => (
              <motion.article key={label} initial={false} whileHover="active" className={`group relative grid gap-5 border-t border-[#1C1E21]/15 py-8 sm:grid-cols-[76px_1fr] sm:gap-7 lg:min-h-[270px] lg:p-9 ${index % 2 === 0 ? "lg:border-r" : ""} ${index < 2 ? "lg:border-t-0" : ""}`}>
                <motion.span variants={{ active: { y: -4 } }} transition={{ duration: 0.22 }} className="font-display text-5xl leading-none text-[#1C1E21]/16 transition-colors group-hover:text-[#1877F2] md:text-6xl">{value}</motion.span>
                <div className="flex min-w-0 flex-col"><p className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#1877F2]">Discipline</p><h3 className="mt-3 text-2xl font-semibold">{label}</h3><p className="mt-4 max-w-lg text-sm leading-6 text-[#1C1E21]/55">{description}</p><div className="mt-auto pt-7"><span className="block border-t border-[#1C1E21]/12 pt-4 text-[9px] font-semibold uppercase tracking-[.18em] text-[#1C1E21]/38">Evidence produced</span><strong className="mt-2 block text-sm font-semibold">{output}</strong></div></div>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#1877F2] transition-all duration-500 group-hover:w-full" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[#1C1E21]/10 bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(28,30,33,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(28,30,33,.045)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="section-shell relative">
          <div className="grid gap-8 border-b border-[#1C1E21]/12 pb-10 lg:grid-cols-[1fr_.8fr] lg:items-end"><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-[#1877F2]">Selected experience systems / 01-04</p><h2 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.02] md:text-6xl">Interfaces shaped around <span className="font-display font-normal italic text-[#1877F2]">real human decisions.</span></h2></div><p className="max-w-xl text-base leading-7 text-[#1C1E21]/58 lg:justify-self-end md:text-lg md:leading-8">Explore product experiences where research, interaction design, and visual systems work as one coherent whole.</p></div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[1.25fr_.75fr]">
            <motion.article key={featuredCase.title} initial={false} animate={{ opacity: 1 }} className="group relative min-h-[520px] overflow-hidden bg-[#1C1E21] sm:min-h-[650px] lg:min-h-[760px]">
              <Image src={featuredCase.image} alt={`${featuredCase.title} UX case study`} fill sizes="(max-width:1024px) 100vw, 62vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1E21] via-transparent to-transparent" />
              <div className="absolute inset-x-5 top-5 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[.2em] text-white/75 sm:inset-x-7 sm:top-7"><span>Featured experience / {String(activeCase + 1).padStart(2,"0")}</span><span className="grid h-10 w-10 place-items-center border border-white/25"><Smartphone className="h-4 w-4" /></span></div>
              <div className="absolute inset-x-5 bottom-5 border-t border-white/25 pt-5 text-white sm:inset-x-7 sm:bottom-7 sm:grid sm:grid-cols-[1fr_1fr] sm:items-end sm:gap-8 sm:pt-7"><div><p className="text-xs font-semibold uppercase tracking-[.16em] text-[#78B7FF]">{featuredCase.type}</p><h3 className="mt-2 text-3xl font-semibold sm:text-4xl">{featuredCase.title}</h3></div><p className="mt-4 max-w-md text-sm leading-6 text-white/72 sm:mt-0">{featuredCase.outcome}</p></div>
            </motion.article>

            <div className="grid gap-px border border-[#1C1E21]/12 bg-[#1C1E21]/12">
              {caseStudies.map((study, index) => (
                <button key={study.title} onClick={() => setActiveCase(index)} aria-pressed={activeCase === index} className={`group grid min-h-[150px] grid-cols-[82px_1fr_auto] items-center gap-4 bg-white p-4 text-left outline-none transition sm:grid-cols-[120px_1fr_auto] sm:p-5 ${activeCase === index ? "bg-[#E7F3FF]" : "hover:bg-[#F0F2F5]"}`}>
                  <span className="relative aspect-square overflow-hidden bg-[#F0F2F5]"><Image src={study.image} alt="" fill sizes="120px" className="object-cover transition-transform duration-500 group-hover:scale-105" /></span>
                  <span className="min-w-0"><span className="block text-[9px] font-semibold uppercase tracking-[.16em] text-[#1877F2]">0{index + 1} / {study.type}</span><strong className="mt-2 block text-lg leading-tight">{study.title}</strong></span>
                  <span className={`grid h-9 w-9 place-items-center border transition ${activeCase === index ? "border-[#1877F2] bg-[#1877F2] text-white" : "border-[#1C1E21]/15 group-hover:border-[#1877F2]"}`}><ArrowRight className="h-4 w-4" /></span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-5 border-t border-[#1C1E21]/12 pt-8 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-xl text-sm leading-6 text-[#1C1E21]/52">Need a product experience users understand without explanation? Start with the decisions that matter most.</p><button onClick={() => setModalOpen(true)} className="group inline-flex items-center gap-3 self-start font-semibold">Discuss your experience <span className="grid h-11 w-11 place-items-center bg-[#1877F2] text-white transition group-hover:bg-[#1C1E21]"><ArrowRight className="h-4 w-4" /></span></button></div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#e5f2f8] py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(24,119,242,0.16)_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="section-shell grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="relative"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1877F2]">Design with confidence</p><h2 className="mt-4 text-balance text-4xl font-semibold md:text-6xl">Ready to make every interaction count?</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-[#1C1E21]/55">Discover how Opus Geeks can simplify your design process, strengthen your brand, and turn complex journeys into polished, intuitive experiences.</p></div>
          <div className="relative flex lg:justify-end"><button onClick={() => setModalOpen(true)} className="group inline-flex items-center gap-3 rounded-full bg-[#1C1E21] px-7 py-4 font-semibold text-white transition hover:bg-[#1877F2]">Book a free consultation <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" /></button></div>
        </div>
      </section>

      <SiteFooter />
      <a href="#top" aria-label="Back to top" className="fixed bottom-5 right-5 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-[#1877F2] text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#1C1E21]"><ArrowUp className="h-5 w-5" /></a>

      {modalOpen ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1C1E21]/72 p-3 backdrop-blur-[3px] sm:p-6" role="dialog" aria-modal="true" aria-labelledby="consultation-title" onMouseDown={(event) => { if (event.target === event.currentTarget) setModalOpen(false); }}>
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.985 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }} className="relative max-h-[94vh] w-full max-w-[680px] overflow-y-auto border border-[#1C1E21]/12 bg-white text-[#1C1E21] shadow-[0_32px_100px_rgba(0,0,0,.28)]">
            <div className="flex items-center justify-between border-b border-[#1C1E21]/10 px-5 py-4 md:px-8"><div className="flex items-center gap-3"><span className="h-2 w-2 bg-[#1877F2]" /><span className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#1C1E21]/48">Design project enquiry / OG</span></div><button onClick={() => setModalOpen(false)} className="grid h-10 w-10 place-items-center border border-[#1C1E21]/12 text-[#1C1E21]/55 transition hover:border-[#1C1E21] hover:bg-[#1C1E21] hover:text-white" aria-label="Close consultation form"><X className="h-5 w-5" /></button></div>
            <div className="p-5 md:p-8">
            {submitted ? (
              <div className="py-12 text-center"><div className="mx-auto grid h-16 w-16 place-items-center bg-[#1877F2] text-white"><Check className="h-8 w-8" /></div><h2 id="consultation-title" className="mt-6 text-3xl font-semibold">Request received.</h2><p className="mt-3 text-[#1C1E21]/55">Thank you. The Opus Geeks team will contact you shortly.</p><button onClick={() => { setModalOpen(false); setSubmitted(false); }} className="mt-8 bg-[#1C1E21] px-7 py-3 font-semibold text-white transition hover:bg-[#1877F2]">Done</button></div>
            ) : (
              <><p className="text-xs font-semibold uppercase tracking-[.2em] text-[#1877F2]">Start with clarity</p><h2 id="consultation-title" className="mt-3 max-w-lg text-balance text-3xl font-semibold leading-tight md:text-4xl">Shape a better product experience.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-[#1C1E21]/55">Share the audience, product challenge, and desired outcome. We&apos;ll recommend a practical design next step.</p>
              <form onSubmit={submitConsultation} className="mt-7 grid gap-4 sm:grid-cols-2">
                <label className="block"><span className="mb-2 block text-xs font-semibold text-[#1C1E21]/65">Full name</span><input required name="name" autoComplete="name" className="h-12 w-full border border-[#1C1E21]/14 bg-[#F0F2F5] px-4 outline-none transition focus:border-[#1877F2] focus:bg-white" /></label>
                <label className="block"><span className="mb-2 block text-xs font-semibold text-[#1C1E21]/65">Work email</span><input required type="email" name="email" autoComplete="email" className="h-12 w-full border border-[#1C1E21]/14 bg-[#F0F2F5] px-4 outline-none transition focus:border-[#1877F2] focus:bg-white" /></label>
                <label className="block sm:col-span-2"><span className="mb-2 block text-xs font-semibold text-[#1C1E21]/65">Phone number</span><input required type="tel" name="phone" autoComplete="tel" className="h-12 w-full border border-[#1C1E21]/14 bg-[#F0F2F5] px-4 outline-none transition focus:border-[#1877F2] focus:bg-white" /></label>
                <label className="block sm:col-span-2"><span className="mb-2 block text-xs font-semibold text-[#1C1E21]/65">Project brief</span><textarea required name="description" rows={3} placeholder="Product, audience, design challenge, and ideal timeline" className="w-full resize-none border border-[#1C1E21]/14 bg-[#F0F2F5] px-4 py-3 text-sm outline-none transition placeholder:text-[#1C1E21]/32 focus:border-[#1877F2] focus:bg-white" /></label>
                <label className="flex cursor-pointer items-start gap-3 text-xs leading-5 text-[#1C1E21]/52 sm:col-span-2"><input required type="checkbox" className="mt-0.5 h-4 w-4 shrink-0 accent-[#1877F2]" /><span>I agree to be contacted about this project.</span></label>
                <button type="submit" className="group flex min-h-14 items-center justify-between bg-[#1877F2] px-6 font-semibold text-white transition hover:bg-[#1C1E21] sm:col-span-2">Submit request <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></button>
              </form></>
            )}
            </div>
          </motion.div>
        </div>
      ) : null}
    </main>
  );
}

function ServiceHeader({ menuOpen, setMenuOpen, openModal }: { menuOpen: boolean; setMenuOpen: (open: boolean) => void; openModal: () => void }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#1C1E21]/10 bg-white/[0.94] text-[#1C1E21] shadow-[0_8px_30px_rgba(7,16,20,0.08)] backdrop-blur-xl">
      <div className="section-shell flex h-24 items-center justify-between gap-5">
        <Link href="/" className="relative h-16 w-40 shrink-0" aria-label="Opus Geeks home"><Image src="/images/opus-logo.png" alt="" fill className="object-contain object-left" /><span className="absolute inset-x-0 bottom-0 text-center text-[11px] font-medium tracking-[0.24em] text-[#1C1E21]">OPUSGEEKS</span></Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          <Link href="/" className="text-sm text-[#1C1E21]/60 transition hover:text-[#1877F2]">Home</Link>
          <div className="group relative"><button className="flex items-center gap-1.5 py-9 text-sm font-semibold text-[#1877F2]">Services <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" /></button><div className="invisible absolute left-1/2 top-[82px] w-60 -translate-x-1/2 translate-y-2 rounded-2xl border border-[#1C1E21]/10 bg-white p-2 opacity-0 shadow-2xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"><Link href="/app-development" className="block rounded-xl px-4 py-3 text-sm text-[#1C1E21]/60 hover:bg-[#1C1E21]/5 hover:text-[#1C1E21]">App Development</Link><Link href="/web-development" className="block rounded-xl px-4 py-3 text-sm text-[#1C1E21]/60 hover:bg-[#1C1E21]/5 hover:text-[#1C1E21]">Web Development</Link><Link href="/ux-ui-design" className="block rounded-xl bg-[#1877F2]/10 px-4 py-3 text-sm font-semibold text-[#1877F2]">UX/UI Design</Link></div></div>
          <Link href="/portfolio" className="text-sm text-[#1C1E21]/60 transition hover:text-[#1877F2]">Portfolio</Link><Link href="/blogs" className="text-sm text-[#1C1E21]/60 transition hover:text-[#1877F2]">Blogs</Link><Link href="/about" className="text-sm text-[#1C1E21]/60 transition hover:text-[#1877F2]">About</Link><Link href="/#contact" className="text-sm text-[#1C1E21]/60 transition hover:text-[#1877F2]">Contact Us</Link><Link href="/faqs" className="text-sm text-[#1C1E21]/60 transition hover:text-[#1877F2]">FAQs</Link>
        </nav>
        <button onClick={openModal} className="hidden items-center gap-3 rounded-full bg-[#1C1E21] px-6 py-3 font-semibold text-white transition hover:bg-[#1877F2] lg:flex">Get Started <ArrowRight className="h-5 w-5" /></button>
        <button onClick={() => setMenuOpen(!menuOpen)} className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1C1E21]/15 lg:hidden" aria-label="Toggle navigation">{menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
      </div>
      {menuOpen ? <div className="section-shell pb-5 lg:hidden"><nav className="rounded-2xl border border-[#1C1E21]/10 bg-white p-3 shadow-xl"><Link onClick={() => setMenuOpen(false)} href="/" className="block rounded-xl px-4 py-3 text-[#1C1E21]/70">Home</Link><Link onClick={() => setMenuOpen(false)} href="/app-development" className="block rounded-xl px-4 py-3 text-[#1C1E21]/70">App Development</Link><Link onClick={() => setMenuOpen(false)} href="/web-development" className="block rounded-xl px-4 py-3 text-[#1C1E21]/70">Web Development</Link><Link onClick={() => setMenuOpen(false)} href="/ux-ui-design" className="block rounded-xl bg-[#1877F2]/10 px-4 py-3 font-semibold text-[#1877F2]">UX/UI Design</Link><Link onClick={() => setMenuOpen(false)} href="/portfolio" className="block rounded-xl px-4 py-3 text-[#1C1E21]/70">Portfolio</Link><button onClick={() => { setMenuOpen(false); openModal(); }} className="mt-2 flex w-full items-center justify-between rounded-xl bg-[#1877F2] px-4 py-3 font-semibold text-white">Get Started <ArrowRight className="h-4 w-4" /></button></nav></div> : null}
    </header>
  );
}

function ServiceFooter() {
  return (
    <footer className="relative border-t border-[#1C1E21]/10 bg-white py-14 text-[#1C1E21]">
      <div className="section-shell grid gap-10 md:grid-cols-[1.3fr_0.7fr_1fr]">
        <div><Link href="/" className="relative block h-20 w-52"><Image src="/images/opus-logo.png" alt="" fill className="object-contain object-left" /><span className="absolute inset-x-0 bottom-0 text-center text-xs font-medium tracking-[0.24em]">OPUSGEEKS</span></Link><p className="mt-4 max-w-sm text-sm leading-6 text-[#1C1E21]/55">Digital products shaped by clear thinking, thoughtful design, and dependable engineering.</p><div className="mt-6 flex gap-3">{[<Linkedin key="in" className="h-4 w-4" />, <span key="x">X</span>, <Facebook key="fb" className="h-4 w-4" />].map((icon, index) => <a key={index} href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1C1E21]/15 text-[#1C1E21]/65 transition hover:border-teal hover:bg-teal hover:text-white">{icon}</a>)}</div></div>
        <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Explore</p><nav className="mt-5 space-y-3 text-sm text-[#1C1E21]/55"><Link className="block hover:text-teal" href="/portfolio">Portfolio</Link><Link className="block hover:text-teal" href="/about">About</Link><Link className="block hover:text-teal" href="/faqs">FAQs</Link><Link className="block hover:text-teal" href="/blogs">Blogs</Link></nav></div>
        <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Contact</p><div className="mt-5 space-y-3 text-sm text-[#1C1E21]/55"><a href="mailto:contact@opusgeeks.com" className="flex gap-3 hover:text-teal"><Mail className="h-4 w-4 text-teal" />contact@opusgeeks.com</a><a href="tel:+13466904693" className="flex gap-3 hover:text-teal"><Phone className="h-4 w-4 text-teal" />+1 (346) 690-4693</a><p className="flex gap-3 leading-6"><MapPin className="mt-1 h-4 w-4 shrink-0 text-teal" />Karachi, Pakistan · Pembroke Pines, USA</p></div></div>
      </div>
      <div className="section-shell mt-10 border-t border-[#1C1E21]/10 pt-6 text-sm text-[#1C1E21]/40">© 2025 Opus Geeks. All rights reserved.</div>
    </footer>
  );
}
