"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2, ChevronDown, GraduationCap, HeartPulse, Landmark, Lightbulb, Menu, Radio, ShieldCheck, Sparkles, Users, X, Zap } from "lucide-react";
import { useState } from "react";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const principles = [
  { label: "Our Vision", icon: Lightbulb, copy: "To revolutionize the digital landscape through creativity, innovation, and steady expertise, crafting experiences that leave a lasting impact." },
  { label: "Our Values", icon: ShieldCheck, copy: "Integrity, excellence, collaboration, and client-centricity guide every decision. We value transparency, teamwork, and exceeding expectations." },
  { label: "Our Mission", icon: Zap, copy: "To empower businesses through technology and creativity, delivering innovative solutions that drive success and shape the digital future." }
];

const industries = [
  { name: "Government", icon: Landmark, challenge: "Modernize public services without losing trust, accessibility, or operational control.", response: "Citizen portals, service workflows, and secure internal platforms.", outcome: "Clearer access. Faster decisions. Accountable delivery.", capabilities: ["Service design", "Secure platforms", "Accessible UX"] },
  { name: "Telecom & Media", icon: Radio, challenge: "Turn complex subscriptions and high-volume customer journeys into simple digital experiences.", response: "Self-service products, content platforms, and support ecosystems.", outcome: "Lower friction. Stronger retention. Better visibility.", capabilities: ["Customer portals", "Data products", "Content systems"] },
  { name: "Professional Services", icon: Users, challenge: "Replace fragmented processes with tools that protect expertise and accelerate client work.", response: "Operational software, client workspaces, and automation systems.", outcome: "Less admin. Better collaboration. Scalable delivery.", capabilities: ["Workflow design", "Client platforms", "Automation"] },
  { name: "Healthcare", icon: HeartPulse, challenge: "Create calm, compliant experiences around information that is personal and time-sensitive.", response: "Patient journeys, clinical dashboards, and connected care products.", outcome: "Safer access. Clearer pathways. Human-centered care.", capabilities: ["Patient UX", "Care platforms", "Data clarity"] },
  { name: "Oil & Gas", icon: Building2, challenge: "Make critical field and operational data useful wherever teams need to act.", response: "Field tools, monitoring dashboards, and reporting systems.", outcome: "Sharper oversight. Safer work. Faster response.", capabilities: ["Field products", "Dashboards", "System integration"] },
  { name: "Energy & Utilities", icon: Zap, challenge: "Connect infrastructure, teams, and customers across complex service networks.", response: "Customer portals, asset tools, and real-time operations software.", outcome: "Reliable service. Visible operations. Smarter demand.", capabilities: ["Operations UX", "Asset systems", "Customer tools"] },
  { name: "Education", icon: GraduationCap, challenge: "Support different learners and administrators without adding another layer of complexity.", response: "Learning products, faculty tools, and student service platforms.", outcome: "Better access. Active learning. Simpler administration.", capabilities: ["Learning UX", "Student portals", "Admin systems"] },
  { name: "Finance & Banking", icon: Landmark, challenge: "Balance speed and clarity with the confidence expected from financial products.", response: "Transaction journeys, reporting tools, and trusted digital services.", outcome: "Confident action. Lower friction. Built-in trust.", capabilities: ["Fintech UX", "Data products", "Secure journeys"] },
  { name: "Construction", icon: Building2, challenge: "Keep field activity, commercial decisions, and delivery teams working from one truth.", response: "Project controls, field applications, and stakeholder portals.", outcome: "Visible progress. Fewer gaps. Tighter delivery.", capabilities: ["Field workflows", "Project controls", "Reporting"] },
  { name: "Manufacturing", icon: Building2, challenge: "Translate operational complexity into systems teams can use under real production pressure.", response: "Production tools, quality workflows, and performance dashboards.", outcome: "Less downtime. Better quality. Connected operations.", capabilities: ["Production UX", "Quality systems", "Analytics"] }
];

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const selectedIndustry = industries[activeIndustry];
  const SelectedIndustryIcon = selectedIndustry.icon;
  return <main className="min-h-screen bg-[#F0F2F5] text-[#1C1E21]">
    <SiteHeader/>

    <section className="relative overflow-hidden border-b border-[#1C1E21]/10 bg-white pt-24">
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(24,119,242,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(24,119,242,.07)_1px,transparent_1px)] [background-size:64px_64px]"/>
      <div className="section-shell relative py-10 md:py-16">
        <div className="grid overflow-hidden border border-[#1C1E21]/12 bg-white lg:min-h-[650px] lg:grid-cols-[.92fr_1.08fr]">
          <motion.div initial={false} animate={{opacity:1,y:0}} className="relative z-10 flex flex-col justify-between p-7 md:p-12 lg:p-14">
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.2em] text-[#1877F2]"><Sparkles className="h-4 w-4"/>Independent digital product studio</p>
              <h1 className="mt-8 max-w-2xl text-balance text-5xl font-semibold leading-[.98] md:text-7xl">Clarity before code. <span className="text-[#1877F2]">Judgment before noise.</span></h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-[#1C1E21]/62 md:text-lg md:leading-8">Opus Geeks puts product strategy, design, and engineering around one table, so every decision moves the same idea forward.</p>
              <div className="mt-9 flex flex-wrap gap-3"><Link href="/#contact" className="inline-flex items-center gap-3 bg-[#1877F2] px-6 py-4 font-semibold text-white">Work with us <ArrowRight className="h-5 w-5"/></Link><Link href="/portfolio" className="border border-[#1C1E21]/15 bg-white px-6 py-4 font-semibold">Explore our work</Link></div>
            </div>
            <div className="mt-12 grid grid-cols-3 border-t border-[#1C1E21]/12 pt-6">{[["01","Think"],["02","Shape"],["03","Ship"]].map(([value,label])=><div key={label} className="border-r border-[#1C1E21]/10 pr-3 last:border-r-0 last:pl-4 sm:px-4 sm:first:pl-0"><b className="text-sm text-[#1877F2]">{value}</b><span className="mt-2 block text-sm font-semibold">{label}</span></div>)}</div>
          </motion.div>
          <motion.div initial={false} animate={{opacity:1}} className="relative min-h-[440px] overflow-hidden bg-[#DDECF8] lg:min-h-full">
            <Image src="/images/about-team-hd.png" alt="A product team collaborating in the studio" fill priority quality={95} sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-[#071B28]/85 via-transparent to-transparent"/>
            <div className="absolute inset-x-0 bottom-0 grid gap-6 p-7 text-white sm:grid-cols-[1fr_auto] sm:items-end md:p-10">
              <div><p className="text-xs font-semibold uppercase tracking-[.2em] text-[#78B8FF]">One accountable team</p><p className="mt-3 max-w-md text-xl font-semibold leading-7 md:text-2xl">From first question to a product people can rely on.</p></div>
              <div className="border-l border-white/30 pl-5"><span className="block text-3xl font-semibold">03</span><span className="mt-1 block text-xs uppercase tracking-[.18em] text-white/65">Disciplines, one outcome</span></div>
            </div>
            <div className="absolute right-0 top-0 bg-[#1877F2] px-5 py-4 text-xs font-semibold uppercase tracking-[.18em] text-white">Karachi · Florida</div>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="bg-[#F0F2F5] py-20 md:py-28"><div className="section-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><div><p className="text-sm font-semibold uppercase tracking-[.2em] text-[#1877F2]">Expertise</p><h2 className="mt-4 text-balance text-4xl font-semibold md:text-6xl">It&apos;s been years in the making.</h2></div><div className="rounded-2xl border border-[#1C1E21]/10 bg-white p-7 shadow-[0_18px_50px_rgba(28,30,33,.07)] md:p-10"><p className="text-lg leading-8 text-[#1C1E21]/65">With collective experience spanning years, our team has sharpened its skills across technology and creativity. From web development and digital marketing to graphic design and artificial intelligence, we stay immersed in an ever-evolving landscape of innovation.</p><div className="mt-8 flex flex-wrap gap-2">{["Product strategy","Web platforms","Mobile apps","UI/UX systems","AI solutions"].map(item=><span key={item} className="rounded-full bg-[#E7F3FF] px-4 py-2 text-sm font-semibold text-[#1877F2]">{item}</span>)}</div></div></div></section>

    <section className="bg-white py-20 md:py-28"><div className="section-shell"><div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[.2em] text-[#1877F2]">What guides us</p><h2 className="mt-4 text-balance text-4xl font-semibold md:text-6xl">Clear principles behind every product.</h2></div><div className="mt-12 grid overflow-hidden rounded-2xl border border-[#1C1E21]/10 lg:grid-cols-3">{principles.map((item)=>{const Icon=item.icon;return <motion.article initial={false} key={item.label} className="border-b border-[#1C1E21]/10 p-7 last:border-0 lg:border-b-0 lg:border-r lg:last:border-r-0 md:p-9"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E7F3FF] text-[#1877F2]"><Icon className="h-6 w-6"/></div><h3 className="mt-7 text-2xl font-semibold">{item.label}</h3><p className="mt-4 leading-7 text-[#1C1E21]/55">{item.copy}</p></motion.article>})}</div></div></section>

    <section className="border-y border-[#1C1E21]/10 bg-[#F0F2F5] py-20 md:py-28"><div className="section-shell"><div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-end"><div><p className="text-sm font-semibold uppercase tracking-[.2em] text-[#1877F2]">Sector intelligence</p><h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold md:text-6xl">Different pressures. One way of thinking clearly.</h2></div><p className="max-w-xl text-lg leading-8 text-[#1C1E21]/60 lg:justify-self-end">We learn the operating reality first, then shape the right product around it. Select a sector to see how that thinking changes.</p></div>
      <div className="mt-12 grid overflow-hidden border border-[#1C1E21]/12 bg-white lg:grid-cols-[.82fr_1.18fr]">
        <div className="grid grid-cols-2 border-b border-[#1C1E21]/10 lg:grid-cols-1 lg:border-b-0 lg:border-r">
          {industries.map((industry,index)=>{const Icon=industry.icon;const active=index===activeIndustry;return <button type="button" aria-pressed={active} onClick={()=>setActiveIndustry(index)} key={industry.name} className={`group flex min-h-16 items-center gap-3 border-b border-[#1C1E21]/10 px-4 text-left transition-colors last:border-b-0 sm:px-6 ${active?"bg-[#1877F2] text-white":"bg-white hover:bg-[#E7F3FF]"}`}><span className={`text-xs font-semibold ${active?"text-white/65":"text-[#1877F2]"}`}>{String(index+1).padStart(2,"0")}</span><Icon className={`hidden h-5 w-5 shrink-0 sm:block ${active?"text-white":"text-[#1877F2]"}`}/><span className="text-sm font-semibold leading-tight">{industry.name}</span><ArrowRight className={`ml-auto hidden h-4 w-4 transition-transform sm:block ${active?"translate-x-0 opacity-100":"-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`}/></button>})}
        </div>
        <div className="relative min-h-[560px] overflow-hidden bg-[#091B27] p-7 text-white md:p-10 lg:p-14">
          <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:56px_56px]"/>
          <div className="absolute -right-10 -top-16 text-[16rem] font-semibold leading-none text-white/[.035]">{String(activeIndustry+1).padStart(2,"0")}</div>
          <motion.div key={selectedIndustry.name} initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:.28}} className="relative flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-white/15 pb-6"><span className="text-xs font-semibold uppercase tracking-[.2em] text-[#78B8FF]">Active sector / {String(activeIndustry+1).padStart(2,"0")}</span><SelectedIndustryIcon className="h-7 w-7 text-[#78B8FF]"/></div>
            <h3 className="mt-10 max-w-xl text-4xl font-semibold leading-tight md:text-5xl">{selectedIndustry.name}</h3>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/68">{selectedIndustry.challenge}</p>
            <div className="mt-10 grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2"><div className="bg-[#091B27] p-6"><span className="text-xs uppercase tracking-[.18em] text-[#78B8FF]">Product response</span><p className="mt-4 leading-7 text-white/78">{selectedIndustry.response}</p></div><div className="bg-[#091B27] p-6"><span className="text-xs uppercase tracking-[.18em] text-[#78B8FF]">Designed outcome</span><p className="mt-4 leading-7 text-white/78">{selectedIndustry.outcome}</p></div></div>
            <div className="mt-auto pt-10"><p className="text-xs uppercase tracking-[.18em] text-white/45">Relevant capabilities</p><div className="mt-4 flex flex-wrap gap-2">{selectedIndustry.capabilities.map(item=><span key={item} className="border border-white/20 px-4 py-2 text-sm text-white/80">{item}</span>)}</div></div>
          </motion.div>
        </div>
      </div>
    </div></section>

    <section className="bg-[#1877F2] py-16 text-white"><div className="section-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between"><div><p className="text-sm uppercase tracking-[.2em] text-white/65">Shape what comes next</p><h2 className="mt-3 max-w-3xl text-balance text-4xl font-semibold md:text-6xl">Let&apos;s build meaningful technology together.</h2></div><Link href="/#contact" className="inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-white px-6 py-4 font-semibold text-[#1877F2]">Start a conversation <ArrowRight className="h-5 w-5"/></Link></div></section>
    <SiteFooter/>
  </main>;
}

function AboutHeader({menuOpen,setMenuOpen}:{menuOpen:boolean;setMenuOpen:(value:boolean)=>void}){return <header className="fixed inset-x-0 top-0 z-50 border-b border-[#1C1E21]/10 bg-white/95 shadow-sm backdrop-blur-xl"><div className="section-shell flex h-24 items-center justify-between"><Link href="/" className="relative h-16 w-40"><Image src="/images/opus-logo.png" alt="Opus Geeks" fill className="object-contain object-left"/><span className="absolute inset-x-0 bottom-0 text-center text-[11px] tracking-[.24em]">OPUSGEEKS</span></Link><nav className="hidden items-center gap-7 text-sm lg:flex"><Link href="/">Home</Link><div className="group relative"><button className="flex items-center gap-1">Services <ChevronDown className="h-4 w-4"/></button><div className="invisible absolute left-1/2 top-8 w-56 -translate-x-1/2 translate-y-2 rounded-xl border bg-white p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"><Link href="/app-development" className="block rounded-lg px-3 py-2 hover:bg-[#F0F2F5]">App Development</Link><Link href="/web-development" className="block rounded-lg px-3 py-2 hover:bg-[#F0F2F5]">Web Development</Link><Link href="/ux-ui-design" className="block rounded-lg px-3 py-2 hover:bg-[#F0F2F5]">UX/UI Design</Link></div></div><Link href="/portfolio">Portfolio</Link><Link href="/blogs">Blogs</Link><Link href="/about" className="font-semibold text-[#1877F2]">About</Link><Link href="/#contact">Contact Us</Link><Link href="/faqs">FAQs</Link></nav><Link href="/#contact" className="hidden rounded-full bg-[#1C1E21] px-6 py-3 font-semibold text-white lg:block">Get Started</Link><button onClick={()=>setMenuOpen(!menuOpen)} className="flex h-11 w-11 items-center justify-center rounded-full border lg:hidden">{menuOpen?<X/>:<Menu/>}</button></div>{menuOpen?<nav className="section-shell space-y-1 pb-5"><Link className="block rounded-xl px-4 py-3" href="/">Home</Link><Link className="block rounded-xl px-4 py-3" href="/portfolio">Portfolio</Link><Link className="block rounded-xl px-4 py-3" href="/blogs">Blogs</Link><Link className="block rounded-xl bg-[#E7F3FF] px-4 py-3 font-semibold text-[#1877F2]" href="/about">About</Link><Link className="block rounded-xl px-4 py-3" href="/#contact">Contact Us</Link></nav>:null}</header>}
function AboutFooter(){return <footer className="border-t border-[#1C1E21]/10 bg-white py-12"><div className="section-shell flex flex-col gap-7 md:flex-row md:items-center md:justify-between"><div><div className="relative h-16 w-44"><Image src="/images/opus-logo.png" alt="" fill className="object-contain object-left"/></div><p className="mt-3 text-sm text-[#1C1E21]/50">Creativity, technology, and dependable product delivery.</p></div><div className="flex flex-wrap gap-5 text-sm text-[#1C1E21]/55"><Link href="/portfolio">Portfolio</Link><Link href="/blogs">Blogs</Link><Link href="/app-development">Services</Link><a href="mailto:contact@opusgeeks.com">contact@opusgeeks.com</a></div></div></footer>}
