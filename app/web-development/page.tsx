"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  Check,
  ChevronDown,
  Cloud,
  Code2,
  Database,
  Facebook,
  Gauge,
  Globe2,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  ShoppingBag,
  Workflow,
  X
} from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const services = [
  {
    title: "Ecommerce",
    icon: ShoppingBag,
    description: "Opus Geeks crafts robust, scalable ecommerce solutions with intuitive interfaces and seamless payment integrations, designed to drive sales and improve customer satisfaction."
  },
  {
    title: "Shopify",
    icon: ShoppingBag,
    description: "Our Shopify experts build high-converting online stores with custom themes and app integrations that provide customers with a seamless shopping experience."
  },
  {
    title: "API Development",
    icon: Code2,
    description: "We design secure, scalable, efficient APIs that enable seamless communication between software systems and extend the functionality of your applications."
  },
  {
    title: "Static Hosting",
    icon: Cloud,
    description: "Reliable and scalable static hosting keeps your website fast, secure, and available with low latency and infrastructure that grows with your business."
  },
  {
    title: "Web Analytics",
    icon: Gauge,
    description: "Track traffic, interactions, conversions, and customer behavior to make informed decisions and optimize your website for maximum effectiveness."
  },
  {
    title: "WordPress",
    icon: Globe2,
    description: "From focused blogs to complex corporate websites, our custom WordPress solutions are user-friendly, manageable, and tailored to your requirements."
  },
  {
    title: "CMS",
    icon: Database,
    description: "Custom CMS development and integrations with platforms such as WordPress and Drupal make content management easier and improve team productivity."
  },
  {
    title: "DevOps",
    icon: Workflow,
    description: "Continuous integration, deployment, automated testing, and monitoring improve collaboration, accelerate delivery, and protect application reliability."
  },
  {
    title: "Web Security",
    icon: ShieldCheck,
    description: "SSL, firewalls, intrusion detection, and practical security controls protect your website, customer data, and business reputation from evolving threats."
  },
  {
    title: "Database",
    icon: Database,
    description: "Our database experts design and manage relational and NoSQL solutions that organize, store, and retrieve data efficiently as your business scales."
  }
];

const serviceDeliverables = [
  ["Storefront architecture", "Checkout integration", "Conversion QA"],
  ["Custom theme system", "App integrations", "Launch optimization"],
  ["API architecture", "Secure authentication", "Technical documentation"],
  ["Edge deployment", "CDN configuration", "Uptime monitoring"],
  ["Event tracking", "Conversion dashboards", "Insight reporting"],
  ["Custom publishing", "Editorial workflows", "Performance tuning"],
  ["Content modeling", "Role permissions", "System integrations"],
  ["CI/CD pipelines", "Automated testing", "Release monitoring"],
  ["Security review", "Access controls", "Production hardening"],
  ["Data architecture", "Query optimization", "Backup strategy"]
];

const stats = [
  ["01", "Product Strategy", "Align the audience, commercial goal, content model, and release priorities before production begins.", "Approved product brief"],
  ["02", "System Design", "Turn journeys into a responsive interface system with clear states, reusable patterns, and measurable actions.", "Validated experience system"],
  ["03", "Engineering", "Build the platform with integration, accessibility, performance, and maintainability treated as requirements.", "Production-ready release"],
  ["04", "Release Support", "Ship through controlled QA, monitoring, documentation, and a prioritized improvement backlog.", "Measured launch handoff"]
];

const caseStudies = [
  { title: "US Maxim Nail Supply", type: "Commerce platform", image: "/images/web-case-1-hd.jpg", outcome: "A premium storefront built around product discovery and conversion." },
  { title: "Sky Cleaning", type: "Service platform", image: "/images/web-case-2-hd.jpg", outcome: "A clearer path from local search to a qualified booking." },
  { title: "QHCS", type: "Healthcare platform", image: "/images/web-case-3-hd.jpg", outcome: "A credible digital front door for a specialist healthcare team." },
  { title: "XU Stream Aviation", type: "Corporate platform", image: "/images/web-case-4-hd.jpg", outcome: "A focused brand experience for a high-trust aviation service." }
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

export default function WebDevelopmentPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [flippedService, setFlippedService] = useState<number | null>(null);
  const [activeCase, setActiveCase] = useState(0);

  const featuredCase = caseStudies[activeCase];
  const supportingCases = caseStudies
    .map((study, index) => ({ ...study, originalIndex: index }))
    .filter((study) => study.originalIndex !== activeCase);

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

      <section className="relative overflow-hidden border-b border-[#1C1E21]/10 bg-white pt-24">
        <div className="grid min-h-[720px] lg:grid-cols-[.92fr_1.08fr]">
          <div className="relative flex items-center border-b border-[#1C1E21]/10 px-5 py-16 sm:px-8 lg:border-b-0 lg:border-r lg:px-[max(3rem,calc((100vw-min(100vw-2.5rem,1920px))/2))] lg:py-20">
            <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(28,30,33,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(28,30,33,.055)_1px,transparent_1px)] [background-size:72px_72px]" />
            <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.08 }} className="relative max-w-[700px]">
              <motion.div variants={reveal} className="mb-8 flex items-center gap-4"><span className="grid h-10 w-10 place-items-center border border-[#1877F2] text-xs font-bold text-[#1877F2]">02</span><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1877F2]">Web product engineering</p><p className="mt-1 text-xs text-[#1C1E21]/42">Commerce / Platforms / Growth</p></div></motion.div>
              <motion.h1 variants={reveal} className="max-w-[680px] text-balance text-[clamp(3.25rem,5.2vw,5.8rem)] font-semibold leading-[.96]">Web products engineered to <span className="font-display font-normal italic text-[#1877F2]">perform in public.</span></motion.h1>
              <motion.p variants={reveal} className="mt-7 max-w-[590px] text-base leading-7 text-[#1C1E21]/60 md:text-lg md:leading-8">We design and engineer high-stakes websites, commerce experiences, and platforms that stay fast, clear, and dependable as the business grows.</motion.p>
              <motion.div variants={reveal} className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button onClick={() => setModalOpen(true)} className="group inline-flex min-h-14 items-center justify-between gap-10 bg-[#1877F2] px-6 font-semibold text-white transition hover:bg-[#1C1E21] sm:min-w-[210px]">Start a web project <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></button>
                <a href="#services" className="inline-flex min-h-14 items-center justify-center border border-[#1C1E21]/15 px-6 font-semibold text-[#1C1E21]/72 transition hover:border-[#1C1E21] hover:text-[#1C1E21]">Explore capabilities</a>
              </motion.div>
              <motion.div variants={reveal} className="mt-10 grid border-y border-[#1C1E21]/10 sm:grid-cols-3">{["Responsive systems", "Commerce ready", "Measured releases"].map((item, index) => <div key={item} className="flex min-h-16 items-center gap-3 border-b border-[#1C1E21]/10 py-3 last:border-b-0 sm:border-b-0 sm:border-r sm:px-4 sm:first:pl-0 sm:last:border-r-0"><span className="text-[10px] font-semibold text-[#1877F2]">0{index + 1}</span><span className="text-xs font-medium text-[#1C1E21]/58">{item}</span></div>)}</motion.div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} className="relative min-h-[540px] overflow-hidden bg-[#F0F2F5] lg:min-h-[720px]">
            <Image src="/images/portfolio-retail-system.jpg" alt="Responsive ecommerce website presented across desktop, tablet, and mobile" fill priority quality={95} sizes="(max-width: 1023px) 100vw, 54vw" className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,30,33,.05),transparent_55%,rgba(28,30,33,.55))]" />
            <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-white/35 bg-white/10 px-5 py-4 text-[10px] font-semibold uppercase tracking-[.18em] text-[#1C1E21]/70 backdrop-blur-sm md:px-7"><span>Featured build / Commerce</span><span>Responsive by design</span></div>
            <div className="absolute bottom-0 left-0 right-0 grid bg-[#1C1E21]/88 text-white backdrop-blur-md sm:grid-cols-[1fr_auto]">
              <div className="border-b border-white/15 px-5 py-5 sm:border-b-0 sm:border-r md:px-7"><p className="text-[10px] font-semibold uppercase tracking-[.18em] text-white/52">Experience system</p><p className="mt-2 text-lg font-semibold">Discovery → Product → Checkout</p></div>
              <div className="flex items-center gap-6 px-5 py-5 md:px-7"><span className="text-sm text-white/62">Desktop · Tablet · Mobile</span><ArrowRight className="h-5 w-5 text-[#1877F2]" /></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-[#1C1E21]/10 bg-white py-16 md:py-20">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-[linear-gradient(135deg,transparent,rgba(24,119,242,0.1))]" />
        <div className="section-shell grid gap-8 lg:grid-cols-2 lg:items-center">
          <h2 className="text-balance text-4xl font-semibold leading-tight md:text-6xl">Customized <span className="text-[#1877F2]">software &amp; website</span> development.</h2>
          <p className="border-l border-[#1877F2]/40 pl-6 text-lg leading-8 text-[#1C1E21]/60">Opus Geeks is your trusted partner for customized software and website solutions. We help businesses streamline operations, enhance user experiences, and achieve their objectives with precision and efficiency.</p>
        </div>
      </section>

      <section id="services" className="relative scroll-mt-32 overflow-hidden border-y border-[#1C1E21]/10 bg-[#F0F2F5] py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(28,30,33,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(28,30,33,.055)_1px,transparent_1px)] [background-size:80px_80px]" />
        <div className="section-shell relative grid gap-14 lg:grid-cols-[.34fr_.66fr] lg:items-start xl:gap-20">
          <div className="lg:sticky lg:top-32">
            <div className="flex items-center gap-4"><span className="h-px w-10 bg-[#1877F2]" /><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1877F2]">Web capability system</p></div>
            <h2 className="mt-6 max-w-xl text-balance text-4xl font-semibold leading-[1.02] md:text-6xl">One web practice. <span className="font-display font-normal italic text-[#1877F2]">Ten specialist tracks.</span></h2>
            <p className="mt-6 max-w-md text-base leading-7 text-[#1C1E21]/56">Select a capability to inspect the production scope behind it. Every track connects strategy, implementation, and launch accountability.</p>
            <div className="mt-10 border-y border-[#1C1E21]/12 py-5"><div className="flex items-center justify-between"><span className="text-[10px] font-semibold uppercase tracking-[.16em] text-[#1C1E21]/38">Interaction</span><span className="text-xs font-semibold text-[#1877F2]">Hover / Tap to flip</span></div></div>
            <button onClick={() => setModalOpen(true)} className="group mt-8 inline-flex min-h-14 items-center justify-between gap-10 bg-[#1C1E21] px-6 font-semibold text-white transition hover:bg-[#1877F2]">Shape your web stack <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></button>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <button
                  type="button"
                  key={service.title}
                  aria-label={`${flippedService === index ? "Hide" : "Show"} ${service.title} deliverables`}
                  aria-pressed={flippedService === index}
                  onClick={() => setFlippedService(flippedService === index ? null : index)}
                  className="group h-[300px] text-left [perspective:1400px] focus:outline-none"
                >
                  <span className={`relative block h-full w-full transition-transform duration-700 [transform-style:preserve-3d] [transition-timing-function:cubic-bezier(.22,1,.36,1)] motion-reduce:transition-none lg:group-hover:[transform:rotateY(180deg)] lg:group-focus-visible:[transform:rotateY(180deg)] ${flippedService === index ? "[transform:rotateY(180deg)]" : ""}`}>
                    <span className="absolute inset-0 flex flex-col overflow-hidden border border-[#1C1E21]/12 bg-white p-6 shadow-[0_20px_55px_rgba(28,30,33,.06)] [backface-visibility:hidden] md:p-7">
                      <span className="absolute -right-3 -top-8 font-display text-[9rem] leading-none text-[#1C1E21]/[.035]">{String(index + 1).padStart(2, "0")}</span>
                      <span className="relative flex items-start justify-between border-b border-[#1C1E21]/10 pb-5">
                        <span className="grid h-10 w-10 place-items-center border border-[#1877F2]/24 text-[#1877F2]"><Icon className="h-[18px] w-[18px]" /></span>
                        <span className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#1C1E21]/35">Capability {String(index + 1).padStart(2, "0")}</span>
                      </span>
                      <span className="relative flex flex-1 flex-col pt-7">
                        <span className="text-2xl font-semibold leading-tight text-[#1C1E21]">{service.title}</span>
                        <span className="mt-4 line-clamp-3 max-w-md text-sm leading-6 text-[#1C1E21]/54">{service.description}</span>
                        <span className="mt-auto flex items-center justify-between border-t border-[#1C1E21]/10 pt-5 text-[10px] font-semibold uppercase tracking-[.16em] text-[#1877F2]"><span>View deliverables</span><ArrowRight className="h-4 w-4" /></span>
                      </span>
                    </span>

                    <span className="absolute inset-0 flex flex-col overflow-hidden bg-[#1C1E21] p-6 text-white [backface-visibility:hidden] [transform:rotateY(180deg)] md:p-7">
                      <span className="absolute right-[-18px] top-[-34px] font-display text-[9rem] leading-none text-white/[.035]">{String(index + 1).padStart(2, "0")}</span>
                      <span className="relative flex items-center justify-between border-b border-white/15 pb-5"><span className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#1877F2]">Engagement scope</span><Icon className="h-5 w-5 text-white/48" /></span>
                      <span className="relative mt-7 text-2xl font-semibold">{service.title}</span>
                      <span className="relative mt-7 space-y-4">
                        {serviceDeliverables[index].map((item) => <span key={item} className="flex items-center gap-3 text-sm text-white/72"><Check className="h-4 w-4 shrink-0 text-[#1877F2]" />{item}</span>)}
                      </span>
                      <span className="relative mt-auto flex items-center justify-between border-t border-white/15 pt-5 text-[10px] font-semibold uppercase tracking-[.16em] text-white/52"><span>Tap to return</span><ArrowRight className="h-4 w-4 -rotate-180" /></span>
                    </span>
                  </span>
                </button>
              );
            })}
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
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(90deg,transparent_49.9%,rgba(28,30,33,.07)_50%,transparent_50.1%)] [background-size:25%_100%]" />
        <div className="section-shell relative">
          <div className="grid gap-8 border-b border-[#1C1E21]/15 pb-12 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <div>
              <div className="flex items-center gap-4"><span className="h-px w-10 bg-[#1877F2]" /><p className="text-xs font-semibold uppercase tracking-[.2em] text-[#1877F2]">Delivery architecture</p></div>
              <h2 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[1.02] md:text-6xl">Four disciplines. <span className="font-display font-normal italic text-[#1877F2]">One accountable system.</span></h2>
            </div>
            <div className="lg:justify-self-end"><p className="max-w-xl text-base leading-7 text-[#1C1E21]/58 md:text-lg md:leading-8">Every stage resolves a different business risk and produces a concrete handoff for the next discipline.</p><button onClick={() => setModalOpen(true)} className="group mt-6 inline-flex items-center gap-3 font-semibold text-[#1C1E21]">Discuss your delivery plan <span className="grid h-10 w-10 place-items-center border border-[#1C1E21]/18 transition group-hover:border-[#1877F2] group-hover:bg-[#1877F2] group-hover:text-white"><ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></span></button></div>
          </div>

          <div className="border-b border-[#1C1E21]/15">
            {stats.map(([value, label, description, output]) => (
              <motion.article key={label} initial={false} whileHover="hover" className="group grid gap-5 border-t border-[#1C1E21]/15 py-7 first:border-t-0 md:grid-cols-[90px_220px_1fr_220px] md:items-center md:gap-8 md:py-9">
                <motion.span variants={{ hover: { x: 6 } }} transition={{ duration: 0.25 }} className="font-display text-5xl leading-none text-[#1C1E21]/18 transition-colors group-hover:text-[#1877F2] md:text-6xl">{value}</motion.span>
                <h3 className="text-xl font-semibold md:text-2xl">{label}</h3>
                <p className="max-w-2xl text-sm leading-6 text-[#1C1E21]/55">{description}</p>
                <div className="border-l border-[#1C1E21]/15 pl-5"><span className="block text-[9px] font-semibold uppercase tracking-[.18em] text-[#1877F2]">Stage output</span><span className="mt-2 block text-sm font-semibold">{output}</span></div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[#1C1E21]/10 bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(28,30,33,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(28,30,33,.045)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="section-shell relative">
          <div className="grid gap-8 border-b border-[#1C1E21]/12 pb-10 lg:grid-cols-[1fr_.8fr] lg:items-end">
            <div><p className="text-xs font-semibold uppercase tracking-[.2em] text-[#1877F2]">Selected web systems / 01-04</p><h2 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.02] md:text-6xl">Built for the moment <span className="font-display font-normal italic text-[#1877F2]">the business grows.</span></h2></div>
            <p className="max-w-xl text-base leading-7 text-[#1C1E21]/58 lg:justify-self-end md:text-lg md:leading-8">Four different industries. One shared standard: a clear customer journey, credible product presentation, and a platform ready to perform.</p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[1.22fr_.78fr]">
            <motion.article key={featuredCase.title} initial={{ opacity: 0.88 }} animate={{ opacity: 1 }} transition={{ duration: 0.28 }} className="group relative min-h-[520px] overflow-hidden bg-[#1C1E21] sm:min-h-[620px] lg:min-h-[760px]">
              <Image src={featuredCase.image} alt={`${featuredCase.title} web development case study`} fill priority={false} sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1E21] via-[#1C1E21]/5 to-transparent" />
              <div className="absolute inset-x-5 top-5 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[.2em] text-white/70 sm:inset-x-7 sm:top-7"><span>Featured case / {String(activeCase + 1).padStart(2, "0")}</span><span className="grid h-10 w-10 place-items-center border border-white/25"><Globe2 className="h-4 w-4" /></span></div>
              <div className="absolute inset-x-5 bottom-5 border-t border-white/25 pt-5 text-white sm:inset-x-7 sm:bottom-7 sm:grid sm:grid-cols-[1fr_1fr] sm:items-end sm:gap-8 sm:pt-7">
                <div><p className="text-xs font-semibold uppercase tracking-[.16em] text-[#78B7FF]">{featuredCase.type}</p><h3 className="mt-2 text-3xl font-semibold sm:text-4xl">{featuredCase.title}</h3></div>
                <p className="mt-4 max-w-md text-sm leading-6 text-white/70 sm:mt-0">{featuredCase.outcome}</p>
              </div>
            </motion.article>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {supportingCases.map((study, index) => (
                <motion.article key={study.title} initial={{ opacity: 0.75, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25, delay: index * 0.04 }} onClick={() => setActiveCase(study.originalIndex)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setActiveCase(study.originalIndex); } }} role="button" tabIndex={0} aria-label={`Feature ${study.title}`} className={`group grid min-h-[300px] cursor-pointer overflow-hidden border border-[#1C1E21]/12 bg-[#F0F2F5] outline-none transition-colors hover:border-[#1877F2] focus-visible:border-[#1877F2] focus-visible:ring-2 focus-visible:ring-[#1877F2]/25 lg:min-h-0 lg:grid-cols-[1.08fr_.92fr] ${index === 2 ? "sm:col-span-2 lg:col-span-1" : "sm:col-span-1"}`}>
                  <div className="relative min-h-[250px] overflow-hidden lg:min-h-0">
                    <Image src={study.image} alt={`${study.title} web development case study`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 32vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
                    <span className="absolute left-4 top-4 bg-white/92 px-3 py-2 text-[9px] font-semibold uppercase tracking-[.18em] text-[#1C1E21]">Case {String(study.originalIndex + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="flex flex-col justify-between p-5 sm:p-6">
                    <div><p className="text-[10px] font-semibold uppercase tracking-[.16em] text-[#1877F2]">{study.type}</p><h3 className="mt-2 text-xl font-semibold leading-tight">{study.title}</h3><p className="mt-3 text-sm leading-6 text-[#1C1E21]/55">{study.outcome}</p></div>
                    <span className="mt-6 grid h-10 w-10 place-items-center border border-[#1C1E21]/15 transition-colors group-hover:border-[#1877F2] group-hover:bg-[#1877F2] group-hover:text-white"><ArrowRight className="h-4 w-4" /></span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-5 border-t border-[#1C1E21]/12 pt-8 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-xl text-sm leading-6 text-[#1C1E21]/52">Planning a commerce, service, healthcare, or corporate platform? Start with a useful scope, not a sales pitch.</p><button onClick={() => setModalOpen(true)} className="group inline-flex items-center gap-3 self-start font-semibold text-[#1C1E21]">Discuss your project <span className="grid h-11 w-11 place-items-center bg-[#1877F2] text-white transition group-hover:bg-[#1C1E21]"><ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></span></button></div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#e5f2f8] py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(24,119,242,0.16)_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="section-shell grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="relative"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1877F2]">Build with confidence</p><h2 className="mt-4 text-balance text-4xl font-semibold md:text-6xl">Ready to turn your website into a growth engine?</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-[#1C1E21]/55">Discover how Opus Geeks can simplify your web delivery process and help your team move from strategy to a polished, measurable, launch-ready product.</p></div>
          <div className="relative flex lg:justify-end"><button onClick={() => setModalOpen(true)} className="group inline-flex items-center gap-3 rounded-full bg-[#1C1E21] px-7 py-4 font-semibold text-white transition hover:bg-[#1877F2]">Book a free consultation <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" /></button></div>
        </div>
      </section>

      <SiteFooter />
      <a href="#top" aria-label="Back to top" className="fixed bottom-5 right-5 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-[#1877F2] text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#1C1E21]"><ArrowUp className="h-5 w-5" /></a>

      {modalOpen ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1C1E21]/72 p-3 backdrop-blur-[3px] sm:p-6" role="dialog" aria-modal="true" aria-labelledby="consultation-title" onMouseDown={(event) => { if (event.target === event.currentTarget) setModalOpen(false); }}>
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.985 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }} className="relative max-h-[94vh] w-full max-w-[680px] overflow-y-auto border border-[#1C1E21]/12 bg-white text-[#1C1E21] shadow-[0_32px_100px_rgba(0,0,0,.28)]">
            <div className="flex items-center justify-between border-b border-[#1C1E21]/10 px-5 py-4 md:px-8">
              <div className="flex items-center gap-3"><span className="h-2 w-2 bg-[#1877F2]" /><span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1C1E21]/48">Web project enquiry / OG</span></div>
              <button onClick={() => setModalOpen(false)} className="grid h-10 w-10 place-items-center border border-[#1C1E21]/12 text-[#1C1E21]/55 transition hover:border-[#1C1E21] hover:bg-[#1C1E21] hover:text-white" aria-label="Close consultation form"><X className="h-5 w-5" /></button>
            </div>
            <div className="p-5 md:p-8">
            {submitted ? (
              <div className="py-12 text-center"><div className="mx-auto grid h-16 w-16 place-items-center bg-[#1877F2] text-white"><Check className="h-8 w-8" /></div><h2 id="consultation-title" className="mt-6 text-3xl font-semibold">Request received.</h2><p className="mt-3 text-[#1C1E21]/55">Thank you. The Opus Geeks team will contact you shortly.</p><button onClick={() => { setModalOpen(false); setSubmitted(false); }} className="mt-8 bg-[#1C1E21] px-7 py-3 font-semibold text-white transition hover:bg-[#1877F2]">Done</button></div>
            ) : (
              <><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1877F2]">Start with clarity</p><h2 id="consultation-title" className="mt-3 max-w-lg text-balance text-3xl font-semibold leading-tight md:text-4xl">Tell us what you&apos;re building.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-[#1C1E21]/55">Share the essentials. We&apos;ll review the scope and recommend a practical next step within one business day.</p>
              <form onSubmit={submitConsultation} className="mt-7 grid gap-4 sm:grid-cols-2">
                <label className="block"><span className="mb-2 block text-xs font-semibold text-[#1C1E21]/65">Full name</span><input required name="name" autoComplete="name" className="h-12 w-full border border-[#1C1E21]/14 bg-[#F0F2F5] px-4 outline-none transition focus:border-[#1877F2] focus:bg-white" /></label>
                <label className="block"><span className="mb-2 block text-xs font-semibold text-[#1C1E21]/65">Work email</span><input required type="email" name="email" autoComplete="email" className="h-12 w-full border border-[#1C1E21]/14 bg-[#F0F2F5] px-4 outline-none transition focus:border-[#1877F2] focus:bg-white" /></label>
                <label className="block sm:col-span-2"><span className="mb-2 block text-xs font-semibold text-[#1C1E21]/65">Phone number</span><input required type="tel" name="phone" autoComplete="tel" className="h-12 w-full border border-[#1C1E21]/14 bg-[#F0F2F5] px-4 outline-none transition focus:border-[#1877F2] focus:bg-white" /></label>
                <label className="block sm:col-span-2"><span className="mb-2 block text-xs font-semibold text-[#1C1E21]/65">Project brief</span><textarea required name="description" rows={3} placeholder="Website type, audience, goals, and ideal timeline" className="w-full resize-none border border-[#1C1E21]/14 bg-[#F0F2F5] px-4 py-3 text-sm outline-none transition placeholder:text-[#1C1E21]/32 focus:border-[#1877F2] focus:bg-white" /></label>
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
          <div className="group relative"><button className="flex items-center gap-1.5 py-9 text-sm font-semibold text-[#1877F2]">Services <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" /></button><div className="invisible absolute left-1/2 top-[82px] w-60 -translate-x-1/2 translate-y-2 rounded-2xl border border-[#1C1E21]/10 bg-white p-2 opacity-0 shadow-2xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"><Link href="/app-development" className="block rounded-xl px-4 py-3 text-sm text-[#1C1E21]/60 hover:bg-[#1C1E21]/5 hover:text-[#1C1E21]">App Development</Link><Link href="/web-development" className="block rounded-xl bg-[#1877F2]/10 px-4 py-3 text-sm font-semibold text-[#1877F2]">Web Development</Link><Link href="/ux-ui-design" className="block rounded-xl px-4 py-3 text-sm text-[#1C1E21]/60 hover:bg-[#1C1E21]/5 hover:text-[#1C1E21]">UX/UI Design</Link></div></div>
          <Link href="/portfolio" className="text-sm text-[#1C1E21]/60 transition hover:text-[#1877F2]">Portfolio</Link><Link href="/blogs" className="text-sm text-[#1C1E21]/60 transition hover:text-[#1877F2]">Blogs</Link><Link href="/about" className="text-sm text-[#1C1E21]/60 transition hover:text-[#1877F2]">About</Link><Link href="/#contact" className="text-sm text-[#1C1E21]/60 transition hover:text-[#1877F2]">Contact Us</Link><Link href="/faqs" className="text-sm text-[#1C1E21]/60 transition hover:text-[#1877F2]">FAQs</Link>
        </nav>
        <button onClick={openModal} className="hidden items-center gap-3 rounded-full bg-[#1C1E21] px-6 py-3 font-semibold text-white transition hover:bg-[#1877F2] lg:flex">Get Started <ArrowRight className="h-5 w-5" /></button>
        <button onClick={() => setMenuOpen(!menuOpen)} className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1C1E21]/15 lg:hidden" aria-label="Toggle navigation">{menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
      </div>
      {menuOpen ? <div className="section-shell pb-5 lg:hidden"><nav className="rounded-2xl border border-[#1C1E21]/10 bg-white p-3 shadow-xl"><Link onClick={() => setMenuOpen(false)} href="/" className="block rounded-xl px-4 py-3 text-[#1C1E21]/70">Home</Link><Link onClick={() => setMenuOpen(false)} href="/app-development" className="block rounded-xl px-4 py-3 text-[#1C1E21]/70">App Development</Link><Link onClick={() => setMenuOpen(false)} href="/web-development" className="block rounded-xl bg-[#1877F2]/10 px-4 py-3 font-semibold text-[#1877F2]">Web Development</Link><Link onClick={() => setMenuOpen(false)} href="/ux-ui-design" className="block rounded-xl px-4 py-3 text-[#1C1E21]/70">UX/UI Design</Link><Link onClick={() => setMenuOpen(false)} href="/portfolio" className="block rounded-xl px-4 py-3 text-[#1C1E21]/70">Portfolio</Link><button onClick={() => { setMenuOpen(false); openModal(); }} className="mt-2 flex w-full items-center justify-between rounded-xl bg-[#1877F2] px-4 py-3 font-semibold text-white">Get Started <ArrowRight className="h-4 w-4" /></button></nav></div> : null}
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
