"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Facebook, Linkedin, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blogs", href: "/blogs" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "FAQs", href: "/faqs" }
];
const services = [
  { label: "App Development", href: "/app-development" },
  { label: "Web Development", href: "/web-development" },
  { label: "UX/UI Design", href: "/ux-ui-design" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const active = (href: string) => href === "/" ? pathname === "/" : pathname === href;
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-[#1C1E21]/10 bg-white/95 text-[#1C1E21] shadow-[0_8px_30px_rgba(28,30,33,.06)] backdrop-blur-xl">
    <div className="section-shell flex h-24 items-center justify-between gap-5">
      <Link href="/" className="relative h-16 w-40 shrink-0" aria-label="Opus Geeks home"><Image src="/images/opus-logo.png" alt="Opus Geeks" fill className="object-contain object-left"/><span className="absolute inset-x-0 bottom-0 text-center text-[11px] tracking-[.24em]">OPUSGEEKS</span></Link>
      <nav className="hidden items-center gap-6 text-sm lg:flex" aria-label="Main navigation">
        <Link href="/" className={active("/") ? "font-semibold text-[#1877F2]" : "text-[#1C1E21]/65 hover:text-[#1877F2]"}>Home</Link>
        <div className="group relative"><button className={`flex items-center gap-1.5 py-9 ${services.some(item=>active(item.href)) ? "font-semibold text-[#1877F2]" : "text-[#1C1E21]/65"}`}>Services <ChevronDown className="h-4 w-4 transition group-hover:rotate-180"/></button><div className="invisible absolute left-1/2 top-[82px] w-60 -translate-x-1/2 translate-y-2 rounded-xl border border-[#1C1E21]/10 bg-white p-2 opacity-0 shadow-2xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">{services.map(item=><Link key={item.href} href={item.href} className={`block rounded-lg px-4 py-3 transition ${active(item.href)?"bg-[#E7F3FF] font-semibold text-[#1877F2]":"text-[#1C1E21]/65 hover:bg-[#F0F2F5]"}`}>{item.label}</Link>)}</div></div>
        {nav.slice(1).map(item=><Link key={item.href} href={item.href} className={`whitespace-nowrap transition ${active(item.href)?"font-semibold text-[#1877F2]":"text-[#1C1E21]/65 hover:text-[#1877F2]"}`}>{item.label}</Link>)}
      </nav>
      <Link href="/contact-us" className="hidden items-center gap-3 rounded-full bg-[#1C1E21] px-6 py-3 font-semibold text-white transition hover:bg-[#1877F2] lg:flex">Get Started <ArrowRight className="h-5 w-5"/></Link>
      <button onClick={()=>setOpen(!open)} className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1C1E21]/15 lg:hidden" aria-label="Toggle navigation">{open?<X className="h-5 w-5"/>:<Menu className="h-5 w-5"/>}</button>
    </div>
    {open?<nav className="section-shell pb-5 lg:hidden"><div className="rounded-2xl border border-[#1C1E21]/10 bg-white p-3 shadow-xl">{nav.slice(0,1).map(item=><Link onClick={()=>setOpen(false)} key={item.href} href={item.href} className="block rounded-xl px-4 py-3">{item.label}</Link>)}<p className="px-4 pb-1 pt-3 text-xs font-semibold uppercase tracking-[.16em] text-[#1C1E21]/35">Services</p>{services.map(item=><Link onClick={()=>setOpen(false)} key={item.href} href={item.href} className={`block rounded-xl px-4 py-3 ${active(item.href)?"bg-[#E7F3FF] font-semibold text-[#1877F2]":""}`}>{item.label}</Link>)}{nav.slice(1).map(item=><Link onClick={()=>setOpen(false)} key={item.href} href={item.href} className={`block rounded-xl px-4 py-3 ${active(item.href)?"bg-[#E7F3FF] font-semibold text-[#1877F2]":""}`}>{item.label}</Link>)}</div></nav>:null}
  </header>;
}

export function SiteFooter() {
  return <footer className="border-t border-[#1C1E21]/10 bg-white py-14 text-[#1C1E21]"><div className="section-shell grid gap-10 md:grid-cols-[1.2fr_.7fr_.8fr_1.3fr]">
    <div><Link href="/" className="relative block h-20 w-52"><Image src="/images/opus-logo.png" alt="Opus Geeks" fill className="object-contain object-left"/><span className="absolute inset-x-0 bottom-0 text-center text-xs tracking-[.24em]">OPUSGEEKS</span></Link><p className="mt-4 max-w-xs text-sm leading-6 text-[#1C1E21]/55">Digital products shaped by thoughtful design, dependable engineering, and clear business strategy.</p><div className="mt-6 flex gap-2"><a href="https://www.linkedin.com/company/opusgeeks" target="_blank" rel="noopener noreferrer" aria-label="Opus Geeks on LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0F2F5] text-[#1C1E21]/60 transition hover:-translate-y-1 hover:bg-[#1877F2] hover:text-white"><Linkedin className="h-4 w-4"/></a><a href="https://x.com/opusgeeks?s=21" target="_blank" rel="noopener noreferrer" aria-label="Opus Geeks on X" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0F2F5] text-sm font-semibold text-[#1C1E21]/60 transition hover:-translate-y-1 hover:bg-[#1C1E21] hover:text-white">X</a><a href="https://www.facebook.com/people/Opus-Geeks/100083553187361/" target="_blank" rel="noopener noreferrer" aria-label="Opus Geeks on Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0F2F5] text-[#1C1E21]/60 transition hover:-translate-y-1 hover:bg-[#1877F2] hover:text-white"><Facebook className="h-4 w-4"/></a></div></div>
    <div><p className="text-xs font-semibold uppercase tracking-[.18em] text-[#1877F2]">Explore</p><div className="mt-5 space-y-3 text-sm text-[#1C1E21]/55"><Link className="block hover:text-[#1877F2]" href="/portfolio">Portfolio</Link><Link className="block hover:text-[#1877F2]" href="/blogs">Blogs</Link><Link className="block hover:text-[#1877F2]" href="/about">About</Link><Link className="block hover:text-[#1877F2]" href="/faqs">FAQs</Link></div></div>
    <div><p className="text-xs font-semibold uppercase tracking-[.18em] text-[#1877F2]">Services</p><div className="mt-5 space-y-3 text-sm text-[#1C1E21]/55">{services.map(item=><Link className="block hover:text-[#1877F2]" href={item.href} key={item.href}>{item.label}</Link>)}</div></div>
    <div><p className="text-xs font-semibold uppercase tracking-[.18em] text-[#1877F2]">Contact</p><div className="mt-5 space-y-4 text-sm text-[#1C1E21]/55"><a href="mailto:contact@opusgeeks.com" className="flex gap-3 hover:text-[#1877F2]"><Mail className="h-4 w-4 text-[#1877F2]"/>contact@opusgeeks.com</a><a href="tel:+13466904693" className="flex gap-3 hover:text-[#1877F2]"><Phone className="h-4 w-4 text-[#1877F2]"/>+1 (346) 690-4693</a><p className="flex gap-3 leading-6"><MapPin className="mt-1 h-4 w-4 shrink-0 text-[#1877F2]"/>Karachi, Pakistan<br/>Pembroke Pines, Florida, USA</p></div></div>
  </div><div className="section-shell mt-10 flex flex-col gap-2 border-t border-[#1C1E21]/10 pt-6 text-sm text-[#1C1E21]/40 sm:flex-row sm:justify-between"><span>© 2026 Opus Geeks. All rights reserved.</span><span><Link href="/terms-conditions" className="transition hover:text-[#1877F2]">Terms &amp; Conditions</Link> · <Link href="/privacy-policy" className="transition hover:text-[#1877F2]">Privacy Policy</Link></span></div></footer>;
}
