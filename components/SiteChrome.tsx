"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Facebook, Linkedin, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", close); };
  }, [open]);

  return <header className="fixed inset-x-0 top-0 z-50 border-b border-[#1C1E21]/10 bg-white text-[#1C1E21] shadow-[0_8px_28px_rgba(28,30,33,.05)]">
    <div className="section-shell flex h-24 items-center justify-between gap-5">
      <Link href="/" className="group relative h-16 w-40 shrink-0" aria-label="Opus Geeks home">
        <Image src="/images/opus-logo.png" alt="Opus Geeks" fill sizes="160px" className="object-contain object-left transition-transform duration-300 group-hover:-translate-y-0.5" />
        <span className="absolute inset-x-0 bottom-0 text-center text-[11px] tracking-[.24em]">OPUSGEEKS</span>
      </Link>

      <nav className="hidden items-center gap-7 text-sm xl:flex" aria-label="Main navigation">
        <Link href="/" className={`relative py-9 transition after:absolute after:inset-x-0 after:bottom-6 after:h-px after:origin-left after:bg-[#1877F2] after:transition-transform ${active("/") ? "font-semibold text-[#1877F2] after:scale-x-100" : "text-[#1C1E21]/62 after:scale-x-0 hover:text-[#1C1E21] hover:after:scale-x-100"}`}>Home</Link>
        <div className="group relative">
          <button aria-haspopup="true" className={`flex items-center gap-1.5 py-9 transition ${services.some((item) => active(item.href)) ? "font-semibold text-[#1877F2]" : "text-[#1C1E21]/62 group-hover:text-[#1C1E21]"}`}>Services <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" /></button>
          <div className="invisible absolute left-1/2 top-[82px] w-72 -translate-x-1/2 translate-y-2 overflow-hidden rounded-lg border border-white/70 bg-white/85 p-2 opacity-0 shadow-[0_24px_70px_rgba(28,30,33,.16)] backdrop-blur-2xl transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
            <p className="px-4 pb-2 pt-1 text-[9px] font-semibold uppercase tracking-[.2em] text-[#1C1E21]/35">Capabilities</p>
            {services.map((item, index) => <Link key={item.href} href={item.href} className={`grid grid-cols-[30px_1fr_auto] items-center rounded-md px-4 py-3 transition ${active(item.href) ? "bg-[#E7F3FF] font-semibold text-[#1877F2]" : "text-[#1C1E21]/65 hover:bg-[#F0F2F5] hover:text-[#1C1E21]"}`}><span className="text-[9px] opacity-55">0{index + 1}</span><span>{item.label}</span><ArrowRight className="h-3.5 w-3.5" /></Link>)}
          </div>
        </div>
        {nav.slice(1).map((item) => <Link key={item.href} href={item.href} className={`relative whitespace-nowrap py-9 transition after:absolute after:inset-x-0 after:bottom-6 after:h-px after:origin-left after:bg-[#1877F2] after:transition-transform ${active(item.href) ? "font-semibold text-[#1877F2] after:scale-x-100" : "text-[#1C1E21]/62 after:scale-x-0 hover:text-[#1C1E21] hover:after:scale-x-100"}`}>{item.label}</Link>)}
      </nav>

      <Link href="/contact-us" className="group hidden min-h-14 items-center gap-7 rounded-full bg-[#1C1E21] px-7 font-semibold text-white shadow-[0_14px_34px_rgba(28,30,33,.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1877F2] xl:flex">Get Started <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></Link>
      <button onClick={() => setOpen(!open)} className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1C1E21]/12 bg-white shadow-sm xl:hidden" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}>{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
    </div>

    {open && <nav className="absolute inset-x-0 top-24 h-[calc(100dvh-6rem)] overflow-y-auto border-t border-[#1C1E21]/10 bg-white xl:hidden" aria-label="Mobile navigation"><div className="section-shell py-6">
      <div className="overflow-hidden rounded-lg border border-[#1C1E21]/10 bg-white/75 shadow-[0_20px_60px_rgba(28,30,33,.12)]">
        {nav.slice(0, 1).map((item) => <Link onClick={() => setOpen(false)} key={item.href} href={item.href} className={`flex min-h-14 items-center justify-between border-b border-[#1C1E21]/8 px-5 ${active(item.href) ? "font-semibold text-[#1877F2]" : ""}`}>{item.label}<ArrowRight className="h-4 w-4" /></Link>)}
        <p className="px-5 pb-2 pt-5 text-[10px] font-semibold uppercase tracking-[.18em] text-[#1C1E21]/35">Services</p>
        {services.map((item) => <Link onClick={() => setOpen(false)} key={item.href} href={item.href} className={`flex min-h-14 items-center justify-between border-b border-[#1C1E21]/8 px-5 ${active(item.href) ? "bg-[#E7F3FF] font-semibold text-[#1877F2]" : ""}`}>{item.label}<ArrowRight className="h-4 w-4" /></Link>)}
        {nav.slice(1).map((item) => <Link onClick={() => setOpen(false)} key={item.href} href={item.href} className={`flex min-h-14 items-center justify-between border-b border-[#1C1E21]/8 px-5 last:border-b-0 ${active(item.href) ? "bg-[#E7F3FF] font-semibold text-[#1877F2]" : ""}`}>{item.label}<ArrowRight className="h-4 w-4" /></Link>)}
      </div>
      <Link onClick={() => setOpen(false)} href="/contact-us" className="mt-4 flex min-h-14 items-center justify-between rounded-full bg-[#1C1E21] px-6 font-semibold text-white">Get Started <ArrowRight className="h-5 w-5" /></Link>
    </div></nav>}
  </header>;
}

export function SiteFooter() {
  return <footer className="relative overflow-hidden border-t border-[#1C1E21]/10 bg-[#F0F2F5] text-[#1C1E21]">
    <div className="section-shell">
      <div className="grid border-b border-[#1C1E21]/10 lg:grid-cols-[1fr_340px]">
        <div className="py-14 lg:border-r lg:border-[#1C1E21]/10 lg:py-20 lg:pr-16">
          <div className="flex items-center gap-4"><span className="h-px w-10 bg-[#1877F2]" /><p className="text-xs font-semibold uppercase tracking-[.2em] text-[#1877F2]">Available for ambitious work</p></div>
          <h2 className="mt-6 max-w-5xl text-balance text-4xl font-semibold leading-[1.01] md:text-6xl">Have a product worth building? <span className="font-display font-normal italic text-[#1877F2]">Let&apos;s make it real.</span></h2>
        </div>
        <div className="flex flex-col justify-between py-10 lg:px-9 lg:py-20">
          <div className="flex items-center justify-between border-b border-[#1C1E21]/10 pb-4"><span className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#1C1E21]/40">Project desk</span><span className="h-2 w-2 bg-[#1877F2]" /></div>
          <p className="mt-8 max-w-[260px] text-sm leading-6 text-[#1C1E21]/52 lg:mt-0">From the first conversation to a product people can rely on.</p>
          <Link href="/contact-us" className="group mt-8 flex min-h-16 items-center justify-between bg-[#1877F2] px-6 font-semibold text-white transition duration-300 hover:bg-[#1C1E21] lg:mt-10">Start a project <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></Link>
        </div>
      </div>

      <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.05fr_.65fr_.8fr_1.5fr] lg:gap-12 lg:py-14">
        <div className="lg:border-r lg:border-[#1C1E21]/10 lg:pr-10">
          <Link href="/" className="relative block h-16 w-44" aria-label="Opus Geeks home"><Image src="/images/opus-logo.png" alt="" fill sizes="176px" className="object-contain object-left" /><span className="absolute bottom-0 left-0 w-[120px] bg-[#F0F2F5] py-0.5 text-center text-[10px] tracking-[.22em]">OPUSGEEKS</span></Link>
          <p className="mt-5 max-w-xs text-sm leading-6 text-[#1C1E21]/52">Clear thinking, expressive design, and dependable engineering from first decision to launch.</p>
          <div className="mt-7 flex gap-2">
            <a href="https://www.linkedin.com/company/opusgeeks" target="_blank" rel="noopener noreferrer" aria-label="Opus Geeks on LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-[#1C1E21]/10 text-[#1C1E21]/55 transition hover:-translate-y-1 hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white"><Linkedin className="h-4 w-4" /></a>
            <a href="https://x.com/opusgeeks?s=21" target="_blank" rel="noopener noreferrer" aria-label="Opus Geeks on X" className="grid h-10 w-10 place-items-center rounded-full border border-[#1C1E21]/10 text-sm font-semibold text-[#1C1E21]/55 transition hover:-translate-y-1 hover:bg-[#1C1E21] hover:text-white">X</a>
            <a href="https://www.facebook.com/people/Opus-Geeks/100083553187361/" target="_blank" rel="noopener noreferrer" aria-label="Opus Geeks on Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-[#1C1E21]/10 text-[#1C1E21]/55 transition hover:-translate-y-1 hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>
        <div><p className="text-[11px] font-semibold uppercase tracking-[.18em] text-[#1877F2]">Explore</p><div className="mt-6 space-y-4 text-sm font-medium text-[#1C1E21]/58"><Link className="block transition hover:translate-x-1 hover:text-[#1877F2]" href="/portfolio">Portfolio</Link><Link className="block transition hover:translate-x-1 hover:text-[#1877F2]" href="/blogs">Blogs</Link><Link className="block transition hover:translate-x-1 hover:text-[#1877F2]" href="/about">About</Link><Link className="block transition hover:translate-x-1 hover:text-[#1877F2]" href="/faqs">FAQs</Link></div></div>
        <div><p className="text-[11px] font-semibold uppercase tracking-[.18em] text-[#1877F2]">Services</p><div className="mt-6 space-y-4 text-sm font-medium text-[#1C1E21]/58">{services.map((item) => <Link className="block transition hover:translate-x-1 hover:text-[#1877F2]" href={item.href} key={item.href}>{item.label}</Link>)}</div></div>
        <div>
          <div className="flex items-center justify-between border-b border-[#1C1E21]/10 pb-4"><p className="text-[11px] font-semibold uppercase tracking-[.18em] text-[#1877F2]">Contact</p><span className="text-[10px] font-semibold uppercase tracking-[.14em] text-[#1C1E21]/35">Karachi / Florida</span></div>
          <div className="grid gap-5 pt-5 text-sm text-[#1C1E21]/58 2xl:grid-cols-2">
            <div className="space-y-4"><a href="mailto:contact@opusgeeks.com" className="flex items-center gap-3 transition hover:text-[#1877F2]"><Mail className="h-4 w-4 shrink-0 text-[#1877F2]" />contact@opusgeeks.com</a><a href="tel:+13466904693" className="flex items-center gap-3 transition hover:text-[#1877F2]"><Phone className="h-4 w-4 shrink-0 text-[#1877F2]" />+1 (346) 690-4693</a></div>
            <div className="space-y-4"><a href="https://www.google.com/maps/search/?api=1&query=Gulshan-e-Iqbal+Karachi" target="_blank" rel="noopener noreferrer" className="flex gap-3 leading-6 transition hover:text-[#1877F2]"><MapPin className="mt-1 h-4 w-4 shrink-0 text-[#1877F2]" /><span><strong className="block font-semibold text-[#1C1E21]">Pakistan office</strong>Block 6, Gulshan-e-Iqbal, Karachi</span></a><a href="https://www.google.com/maps/search/?api=1&query=Pembroke+Pines+FL+33024" target="_blank" rel="noopener noreferrer" className="flex gap-3 leading-6 transition hover:text-[#1877F2]"><MapPin className="mt-1 h-4 w-4 shrink-0 text-[#1877F2]" /><span><strong className="block font-semibold text-[#1C1E21]">USA headquarters</strong>Pembroke Pines, FL 33024</span></a></div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 border-t border-[#1C1E21]/10 py-6 text-xs font-medium text-[#1C1E21]/42 sm:grid-cols-[1fr_auto] sm:items-center">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2"><span>© 2026 Opus Geeks. All rights reserved.</span><span className="hidden h-1 w-1 bg-[#1877F2] sm:block" /><span>Karachi · Florida · Working worldwide</span></div>
        <div className="flex gap-6"><Link href="/terms-conditions" className="transition hover:text-[#1877F2]">Terms &amp; Conditions</Link><Link href="/privacy-policy" className="transition hover:text-[#1877F2]">Privacy Policy</Link></div>
      </div>
    </div>
  </footer>;
}
