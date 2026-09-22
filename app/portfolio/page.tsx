"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronDown, Code2, Component, Menu, Smartphone, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const projects = [
  { title: "Digital Commerce Experience", category: "Web Development", industry: "Retail", image: "/images/portfolio-1.png" },
  { title: "Service Operations Platform", category: "Web Development", industry: "Business", image: "/images/portfolio-2.png" },
  { title: "Healthcare Product Journey", category: "UI/UX Design", industry: "Healthcare", image: "/images/portfolio-3.png" },
  { title: "Aviation Brand Platform", category: "Web Development", industry: "Aviation", image: "/images/portfolio-4.png" },
  { title: "Restaurant Service App", category: "App Development", industry: "Hospitality", image: "/images/portfolio-5.png" },
  { title: "Customer Booking Flow", category: "App Development", industry: "Services", image: "/images/portfolio-6.png" },
  { title: "Mobile Product System", category: "UI/UX Design", industry: "Technology", image: "/images/portfolio-7.png" },
  { title: "On-demand Experience", category: "App Development", industry: "Marketplace", image: "/images/portfolio-8.png" }
];

const filters = ["All", "Web Development", "App Development", "UI/UX Design"];

export default function PortfolioPage() {
  const [active, setActive] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 28, mass: 0.25 });
  const visible = active === "All" ? projects : projects.filter((project) => project.category === active);

  return (
    <main id="top" className="min-h-screen bg-[#F0F2F5] text-[#1C1E21]">
      <motion.div style={{ scaleX: progress }} className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-[#1877F2]" />
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-[#1C1E21]/10 bg-white pt-24">
        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(24,119,242,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(24,119,242,.07)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="section-shell relative grid min-h-[570px] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#1877F2]"><Sparkles className="h-4 w-4" />Selected work · measurable impact</p>
            <h1 className="mt-6 max-w-3xl text-balance text-5xl font-semibold leading-[1.02] md:text-7xl">Explore our <span className="text-[#1877F2]">case studies.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#1C1E21]/60">Explore real-world projects where Opus Geeks partnered with clients to overcome challenges through strategic insight, creative solutions, and dependable digital execution.</p>
            <div className="mt-9 flex flex-wrap gap-3"><a href="#work" className="inline-flex items-center gap-3 rounded-full bg-[#1877F2] px-6 py-4 font-semibold text-white shadow-[0_14px_35px_rgba(24,119,242,.25)]">View our work <ArrowRight className="h-5 w-5" /></a><Link href="/#contact" className="rounded-full border border-[#1C1E21]/15 bg-white px-6 py-4 font-semibold">Start a project</Link></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative h-[420px]">
            <motion.div initial={{ opacity: 0, x: -20, rotate: -3 }} animate={{ opacity: 1, x: 0, rotate: -2 }} transition={{ duration: 0.75 }} className="absolute left-0 top-6 h-[300px] w-[52%] overflow-hidden rounded-2xl border-4 border-white bg-[#DDE8F7] shadow-2xl"><Image src="/images/portfolio-1.png" alt="Opus Geeks website project" fill priority className="object-cover" /></motion.div>
            <motion.div initial={{ opacity: 0, x: 20, rotate: 4 }} animate={{ opacity: 1, x: 0, rotate: 2 }} transition={{ delay: 0.12, duration: 0.75 }} className="absolute right-0 top-20 h-[300px] w-[52%] overflow-hidden rounded-2xl border-4 border-white bg-[#DDE8F7] shadow-2xl"><Image src="/images/portfolio-5.png" alt="Opus Geeks mobile project" fill priority className="object-cover" /></motion.div>
            <div className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-xl border border-[#1877F2]/15 bg-white px-5 py-4 shadow-xl"><p className="text-xs uppercase tracking-[.18em] text-[#1877F2]">Portfolio index</p><p className="mt-1 whitespace-nowrap font-semibold">Web · Mobile · Product Design</p></div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-[#1C1E21]/10 bg-[#F0F2F5] py-16 md:py-24">
        <div className="section-shell grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="text-sm font-semibold uppercase tracking-[.2em] text-[#1877F2]">Software mastery</p><h2 className="mt-4 text-balance text-4xl font-semibold md:text-6xl">Ideas transformed into useful products.</h2></div><p className="max-w-2xl text-lg leading-8 text-[#1C1E21]/60">Our portfolio reflects the expertise, creativity, and innovation behind our software solutions, built with modern technology and focused strategic thinking.</p></div>
      </section>

      <section id="work" className="scroll-mt-28 bg-white py-20 md:py-28">
        <div className="section-shell">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between"><div><p className="text-sm font-semibold uppercase tracking-[.2em] text-[#1877F2]">Project archive</p><h2 className="mt-4 text-4xl font-semibold md:text-6xl">Work across every screen.</h2></div><div className="flex max-w-full gap-2 overflow-x-auto pb-1" role="tablist">{filters.map((filter)=><button key={filter} onClick={()=>setActive(filter)} className={`whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold transition ${active===filter?'bg-[#1877F2] text-white shadow-lg':'border border-[#1C1E21]/10 bg-[#F0F2F5] text-[#1C1E21]/60 hover:text-[#1877F2]'}`}>{filter}</button>)}</div></div>
          <motion.div layout className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">{visible.map((project,index)=><motion.article layout initial={{opacity:0,y:24,scale:.97}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,scale:.96}} transition={{duration:.4,delay:index*.035}} key={project.title} className={`group overflow-hidden rounded-2xl border border-[#1C1E21]/10 bg-[#F0F2F5] ${index===0&&active==='All'?'md:col-span-2':''}`}>
              <div className={`relative overflow-hidden bg-[#DDE8F7] ${index===0&&active==='All'?'aspect-[2/1]':'aspect-[6/5]'}`}><Image src={project.image} alt={`${project.title} case study mockup`} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"/><span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#1877F2] backdrop-blur">{project.category}</span><span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1C1E21] shadow-lg transition group-hover:-translate-y-1 group-hover:bg-[#1877F2] group-hover:text-white"><ArrowUpRight className="h-5 w-5"/></span></div>
              <div className="p-5"><p className="text-xs uppercase tracking-[.16em] text-[#1C1E21]/45">{project.industry} · Case 0{index+1}</p><h3 className="mt-2 text-xl font-semibold">{project.title}</h3></div>
            </motion.article>)}</AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#1877F2] py-16 text-white md:py-20"><div className="section-shell grid gap-8 md:grid-cols-3"><div className="md:col-span-2"><p className="text-sm uppercase tracking-[.2em] text-white/65">Your next case study</p><h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold md:text-6xl">Let&apos;s build something worth showing.</h2></div><div className="flex items-end md:justify-end"><Link href="/#contact" className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 font-semibold text-[#1877F2]">Start a conversation <ArrowRight className="h-5 w-5"/></Link></div></div></section>
      <SiteFooter />
    </main>
  );
}

function PortfolioHeader({menuOpen,setMenuOpen}:{menuOpen:boolean;setMenuOpen:(value:boolean)=>void}) {
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-[#1C1E21]/10 bg-white/95 shadow-sm backdrop-blur-xl"><div className="section-shell flex h-24 items-center justify-between"><Link href="/" className="relative h-16 w-40"><Image src="/images/opus-logo.png" alt="Opus Geeks" fill className="object-contain object-left"/><span className="absolute inset-x-0 bottom-0 text-center text-[11px] tracking-[.24em]">OPUSGEEKS</span></Link><nav className="hidden items-center gap-7 text-sm lg:flex"><Link href="/">Home</Link><div className="group relative"><button className="flex items-center gap-1">Services <ChevronDown className="h-4 w-4"/></button><div className="invisible absolute left-1/2 top-8 w-56 -translate-x-1/2 translate-y-2 rounded-xl border bg-white p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"><Link href="/app-development" className="block rounded-lg px-3 py-2 hover:bg-[#F0F2F5]">App Development</Link><Link href="/web-development" className="block rounded-lg px-3 py-2 hover:bg-[#F0F2F5]">Web Development</Link><Link href="/ux-ui-design" className="block rounded-lg px-3 py-2 hover:bg-[#F0F2F5]">UX/UI Design</Link></div></div><Link href="/portfolio" className="font-semibold text-[#1877F2]">Portfolio</Link><Link href="/blogs">Blogs</Link><Link href="/about">About</Link><Link href="/#contact">Contact Us</Link><Link href="/faqs">FAQs</Link></nav><Link href="/#contact" className="hidden rounded-full bg-[#1C1E21] px-6 py-3 font-semibold text-white lg:block">Get Started</Link><button onClick={()=>setMenuOpen(!menuOpen)} className="flex h-11 w-11 items-center justify-center rounded-full border lg:hidden">{menuOpen?<X/>:<Menu/>}</button></div>{menuOpen?<nav className="section-shell space-y-1 pb-5"><Link className="block rounded-xl px-4 py-3" href="/">Home</Link><Link className="block rounded-xl px-4 py-3" href="/app-development">App Development</Link><Link className="block rounded-xl px-4 py-3" href="/web-development">Web Development</Link><Link className="block rounded-xl px-4 py-3" href="/ux-ui-design">UX/UI Design</Link><Link className="block rounded-xl bg-[#E7F3FF] px-4 py-3 font-semibold text-[#1877F2]" href="/portfolio">Portfolio</Link></nav>:null}</header>;
}

function PortfolioFooter(){return <footer className="border-t border-[#1C1E21]/10 bg-white py-12"><div className="section-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between"><div><div className="relative h-16 w-44"><Image src="/images/opus-logo.png" alt="" fill className="object-contain object-left"/></div><p className="mt-3 text-sm text-[#1C1E21]/50">Digital products shaped by design and dependable engineering.</p></div><div className="flex flex-wrap gap-5 text-sm text-[#1C1E21]/55"><Link href="/app-development">App Development</Link><Link href="/web-development">Web Development</Link><Link href="/ux-ui-design">UX/UI Design</Link><a href="mailto:contact@opusgeeks.com">contact@opusgeeks.com</a><a href="#top" aria-label="Back to top" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white"><ArrowUpRight/></a></div></div></footer>}
