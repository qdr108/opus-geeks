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

const stats = [
  ["40+", "Happy Clients"],
  ["540+", "Projects Completed"],
  ["300+", "Dedicated Members"],
  ["25+", "Awards Won"]
];

const caseStudies = [
  { title: "Product Experience 01", type: "Interface design", image: "/images/ux-case-1.png" },
  { title: "Product Experience 02", type: "Mobile UX", image: "/images/ux-case-2.png" },
  { title: "Product Experience 03", type: "Design system", image: "/images/ux-case-3.png" },
  { title: "Product Experience 04", type: "Brand experience", image: "/images/ux-case-4.png" }
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

export default function UxUiDesignPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
        <div className="pointer-events-none absolute right-[-12%] top-20 h-[680px] w-[680px] rounded-full border border-[#1877F2]/20" />
        <div className="pointer-events-none absolute right-[-5%] top-40 h-[480px] w-[480px] rounded-full border border-[#d2a95d]/30" />

        <div className="section-shell relative grid min-h-[650px] items-center gap-12 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:py-20">
          <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.08 }}>
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

          <motion.div initial={{ opacity: 0, scale: 0.92, x: 40 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto h-[480px] w-full max-w-[610px] [perspective:1200px] md:h-[590px]">
            <div className="absolute inset-x-8 bottom-8 h-24 rounded-full bg-[#1877F2]/20 blur-3xl" />
            <motion.div initial={{ opacity: 0, y: 18, rotateY: -2 }} animate={{ opacity: 1, y: 0, rotateY: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-x-3 top-8 overflow-hidden rounded-2xl border border-[#1C1E21]/15 bg-white shadow-[0_35px_70px_rgba(28,30,33,0.2)] md:inset-x-0 md:top-14">
              <div className="flex h-12 items-center justify-between border-b border-[#1C1E21]/10 bg-[#F7F8FA] px-4"><div className="flex items-center gap-2"><PenTool className="h-4 w-4 text-[#1877F2]"/><b className="text-xs">Opus Design Lab</b></div><span className="rounded-md bg-[#E7F3FF] px-2 py-1 text-[10px] font-semibold text-[#1877F2]">Prototype · Live</span></div>
              <div className="grid h-[375px] grid-cols-[64px_1fr] bg-[#F0F2F5] md:h-[430px] md:grid-cols-[84px_1fr]"><aside className="space-y-3 border-r border-[#1C1E21]/10 bg-white p-3">{[LayoutTemplate, Component, Palette, PenTool].map((Icon,index)=><motion.div key={index} whileHover={{scale:1.08}} className={`flex h-10 items-center justify-center rounded-lg ${index===1?'bg-[#1877F2] text-white':'bg-[#F0F2F5] text-[#1C1E21]/45'}`}><Icon className="h-4 w-4"/></motion.div>)}</aside><div className="relative overflow-hidden p-4 md:p-6"><div className="flex items-center justify-between"><div><p className="text-[10px] uppercase tracking-[0.18em] text-[#1877F2]">Checkout redesign</p><h3 className="mt-1 text-lg font-semibold md:text-2xl">Design system workspace</h3></div><div className="flex -space-x-2">{["A","M","S"].map((item,index)=><span key={item} className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#1877F2] text-[9px] font-bold text-white" style={{opacity:1-index*.16}}>{item}</span>)}</div></div><div className="mt-5 grid grid-cols-[1.2fr_.8fr] gap-3"><div className="rounded-xl bg-white p-4 shadow-sm"><div className="h-20 rounded-lg bg-[#1877F2] p-3 text-white"><div className="h-2 w-1/2 rounded bg-white/80"/><div className="mt-3 h-2 w-3/4 rounded bg-white/35"/><div className="mt-2 h-2 w-2/3 rounded bg-white/35"/></div><div className="mt-3 grid grid-cols-2 gap-2"><div className="h-20 rounded-lg bg-[#E7F3FF]"/><div className="h-20 rounded-lg bg-[#F0F2F5]"/></div></div><div className="space-y-3"><div className="rounded-xl bg-white p-3 shadow-sm"><p className="text-[9px] text-[#1C1E21]/45">Components</p><b className="mt-1 block text-xl text-[#1877F2]">48</b></div><div className="rounded-xl bg-white p-3 shadow-sm"><p className="text-[9px] text-[#1C1E21]/45">Accessibility</p><b className="mt-1 block text-xl text-[#1877F2]">AA</b></div><div className="flex gap-2 rounded-xl bg-white p-3 shadow-sm">{["#1877F2","#1C1E21","#F0F2F5"].map(color=><i key={color} className="h-6 flex-1 rounded" style={{backgroundColor:color}}/>)}</div></div></div></div></div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.45 }} className="absolute bottom-4 right-0 rounded-xl border border-[#1877F2]/15 bg-white px-5 py-4 shadow-xl"><p className="text-xs uppercase tracking-[0.18em] text-[#1877F2]">Validated flow</p><p className="mt-1 text-sm font-semibold">Research · Prototype · Test</p></motion.div>
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

      <section id="services" className="relative scroll-mt-32 overflow-hidden bg-[#f0f2f5] py-20 md:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(24,119,242,0.14)_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="section-shell">
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1877F2]">Design capabilities</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold md:text-6xl">Design services for every touchpoint.</h2>
            <p className="mt-6 text-lg leading-8 text-[#1C1E21]/55">We intensify the connection between people and interfaces through strategic thinking, clear visual systems, and experiences built around real user needs.</p>
          </div>
          <div className="relative mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article key={service.title} initial={false} whileHover={{ y: -6 }} transition={{ duration: 0.2 }} className="group relative min-h-[330px] overflow-hidden rounded-2xl border border-[#1C1E21]/10 bg-white p-7 shadow-[0_18px_45px_rgba(7,16,20,0.06)] transition hover:border-[#1877F2]/40 hover:shadow-[0_24px_60px_rgba(24,119,242,0.14)]">
                  <span className="absolute right-5 top-5 inline-flex h-10 min-w-12 items-center justify-center rounded-lg border border-[#1877F2]/20 bg-[#E7F3FF] px-2 text-lg font-bold text-[#1877F2] shadow-sm">0{index + 1}</span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1877F2]/10 text-[#1877F2] transition group-hover:-translate-y-1 group-hover:bg-[#1877F2] group-hover:text-white"><Icon className="h-6 w-6" /></div>
                  <h3 className="mt-7 text-xl font-semibold leading-7">{service.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-[#1C1E21]/55">{service.description}</p>
                  <div className="absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-[#1877F2] to-transparent transition-transform duration-300 group-hover:scale-x-100" />
                </motion.article>
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
        <Image src="/images/app-team.png" alt="Opus Geeks product team collaborating" fill sizes="100vw" className="object-cover opacity-[0.06] grayscale" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#F0F2F5_0%,rgba(240,242,245,0.94)_52%,rgba(240,242,245,0.76)_100%)]" />
        <div className="section-shell relative grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1877F2]">Performance at scale</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold md:text-5xl">Metrics that reflect delivery experience.</h2>
            <p className="mt-6 text-lg leading-8 text-[#1C1E21]/60">We focus on the indicators that shape successful experiences: useful research, accessible systems, confident decisions, and lasting customer engagement.</p>
            <button onClick={() => setModalOpen(true)} className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#1877F2] px-6 py-4 font-semibold text-white shadow-[0_12px_30px_rgba(24,119,242,0.2)] transition hover:bg-[#166FE5]">Get a quote <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" /></button>
          </div>
          <div className="grid grid-cols-2 overflow-hidden rounded-2xl border-l border-t border-[#1C1E21]/10 bg-white shadow-[0_16px_44px_rgba(28,30,33,0.08)]">
            {stats.map(([value, label]) => (
              <motion.div key={label} whileHover={{ backgroundColor: "#F0F6FF" }} className="border-b border-r border-[#1C1E21]/10 p-6 md:p-10"><p className="text-4xl font-semibold text-[#1877F2] md:text-6xl">{value}</p><p className="mt-3 text-sm text-[#1C1E21]/55 md:text-base">{label}</p></motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[#1C1E21]/10 bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(85,174,224,0.18),transparent_30%)]" />
        <div className="section-shell grid gap-8 lg:grid-cols-2 lg:items-end">
          <h2 className="relative text-balance text-4xl font-semibold leading-tight md:text-6xl">Our UI/UX development <span className="text-[#1877F2]">case studies.</span></h2>
          <p className="relative text-lg leading-8 text-[#1C1E21]/60">Explore how Opus Geeks transforms digital experiences through stronger engagement, clearer navigation, and design decisions grounded in real customer journeys.</p>
        </div>
        <div className="section-shell mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {caseStudies.map((study, index) => (
            <motion.article key={study.title} initial={false} whileHover={{ y: -6 }} transition={{ duration: 0.2 }} className="group relative aspect-[6/5] overflow-hidden rounded-2xl border border-white/10 bg-[#101a1e] shadow-2xl">
              <Image src={study.image} alt={`${study.title} mobile app case study`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />
              <div className="absolute inset-x-5 top-5 flex items-center justify-between text-xs uppercase tracking-[0.15em] text-white/65"><span>Case 0{index + 1}</span><Smartphone className="h-5 w-5" /></div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-5 pt-16"><p className="text-xs text-teal">{study.type}</p><h3 className="mt-1 text-xl font-semibold">{study.title}</h3></div>
            </motion.article>
          ))}
        </div>
        <div className="relative mt-12 text-center"><button onClick={() => setModalOpen(true)} className="group inline-flex items-center gap-3 rounded-full bg-[#1877F2] px-7 py-4 font-semibold text-white transition hover:bg-[#1C1E21]">Get a quote <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" /></button></div>
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="consultation-title" onMouseDown={(event) => { if (event.target === event.currentTarget) setModalOpen(false); }}>
          <motion.div initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} className="relative max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-white/15 bg-[#0b1b20] p-6 shadow-2xl md:p-9">
            <button onClick={() => setModalOpen(false)} className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:bg-white/10 hover:text-white" aria-label="Close consultation form"><X className="h-5 w-5" /></button>
            {submitted ? (
              <div className="py-16 text-center"><div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal text-ink"><Check className="h-8 w-8" /></div><h2 id="consultation-title" className="mt-6 text-3xl font-semibold">Request received.</h2><p className="mt-3 text-white/60">Thank you. The Opus Geeks team will contact you shortly.</p><button onClick={() => { setModalOpen(false); setSubmitted(false); }} className="mt-8 rounded-full bg-white px-6 py-3 font-semibold text-ink">Done</button></div>
            ) : (
              <><p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Let&apos;s talk</p><h2 id="consultation-title" className="mt-3 pr-10 text-3xl font-semibold md:text-4xl">Book a free consultation</h2><p className="mt-3 text-sm leading-6 text-white/55">Tell us what you are building and our team will help shape the right next step.</p>
              <form onSubmit={submitConsultation} className="mt-7 space-y-4">
                <label className="block"><span className="mb-2 block text-sm text-white/65">Name</span><input required name="name" autoComplete="name" className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 outline-none transition focus:border-teal" /></label>
                <label className="block"><span className="mb-2 block text-sm text-white/65">Email</span><input required type="email" name="email" autoComplete="email" className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 outline-none transition focus:border-teal" /></label>
                <label className="block"><span className="mb-2 block text-sm text-white/65">Phone</span><input required type="tel" name="phone" autoComplete="tel" className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 outline-none transition focus:border-teal" /></label>
                <label className="block"><span className="mb-2 block text-sm text-white/65">Project description</span><textarea required name="description" rows={4} className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 outline-none transition focus:border-teal" /></label>
                <label className="flex cursor-pointer items-start gap-3 text-sm text-white/60"><input required type="checkbox" className="mt-1 h-4 w-4 accent-teal" /><span>I accept the terms and conditions.</span></label>
                <button type="submit" className="group flex w-full items-center justify-center gap-3 rounded-xl bg-teal px-6 py-4 font-semibold text-ink transition hover:bg-white">Submit request <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" /></button>
              </form></>
            )}
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
