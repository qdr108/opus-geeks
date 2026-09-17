"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  Boxes,
  Check,
  ChevronDown,
  Facebook,
  Gamepad2,
  Glasses,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Watch,
  X
} from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

const services = [
  {
    title: "iOS App Development",
    icon: Smartphone,
    description: "Unlock the full potential of your business with tailored iOS app development. From concept to deployment, we craft intuitive, high-performance applications built for Apple's ecosystem."
  },
  {
    title: "Android App Development",
    icon: Smartphone,
    description: "Reach Android users with flexible, feature-rich applications for smartphones, tablets, and wearable devices, engineered to engage users and support measurable growth."
  },
  {
    title: "AR/VR App Development",
    icon: Glasses,
    description: "Create memorable augmented and virtual reality experiences that move audiences into new worlds, from immersive brand experiences to gaming and education."
  },
  {
    title: "Wearable App Development",
    icon: Watch,
    description: "Extend your brand to smartwatches and fitness trackers with useful, user-friendly applications that keep customers connected wherever they go."
  },
  {
    title: "Native App Development",
    icon: Layers3,
    description: "Build native iOS and Android products that use each platform's capabilities to deliver excellent performance, reliability, and satisfying user experiences."
  },
  {
    title: "Game App Development",
    icon: Gamepad2,
    description: "Combine creativity, technical expertise, and product insight to produce captivating mobile games, from casual experiences to ambitious multiplayer concepts."
  },
  {
    title: "Flutter App Development",
    icon: Boxes,
    description: "Launch beautiful cross-platform applications with a consistent experience across iOS and Android while reducing development time and maintenance overhead."
  },
  {
    title: "Ionic App Development",
    icon: Rocket,
    description: "Create capable cross-platform applications for iOS, Android, and the web from a shared foundation, helping products reach the market faster."
  }
];

const stats = [
  ["40+", "Happy Clients"],
  ["540+", "Projects Completed"],
  ["300+", "Dedicated Members"],
  ["25+", "Awards Won"]
];

const caseStudies = [
  { title: "Restaurant Techs", type: "On-demand services", image: "/images/app-case-1.png" },
  { title: "Le Cavalier Cellars", type: "Mobile commerce", image: "/images/app-case-2.png" },
  { title: "Mind Nourishment", type: "Wellness experience", image: "/images/app-case-3.png" },
  { title: "Wedstimate", type: "Service marketplace", image: "/images/app-case-4.png" }
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

export default function AppDevelopmentPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 110, damping: 28, mass: 0.25 });

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
    <main id="top" className="min-h-screen overflow-hidden bg-[#071014] text-white">
      <motion.div className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-teal via-[#55aee0] to-coral" style={{ scaleX: smoothProgress }} />
      <ServiceHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} openModal={() => setModalOpen(true)} />

      <section className="relative min-h-[780px] overflow-hidden border-b border-white/10 pt-28 lg:min-h-[860px]">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,#071014_0%,#0a252c_58%,#0d3a43_100%)]" />
        <div className="animated-grid pointer-events-none absolute inset-0 opacity-30" />
        <div className="pointer-events-none absolute right-[-12%] top-20 h-[680px] w-[680px] rounded-full border border-teal/15" />
        <div className="pointer-events-none absolute right-[-5%] top-40 h-[480px] w-[480px] rounded-full border border-coral/15" />

        <div className="section-shell relative grid min-h-[650px] items-center gap-12 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:py-20">
          <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.08 }}>
            <motion.p variants={reveal} className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-teal">
              <Sparkles className="h-4 w-4" /> Mobile product engineering
            </motion.p>
            <motion.h1 variants={reveal} className="text-balance text-5xl font-semibold leading-[1.02] md:text-7xl">
              Innovative mobile apps built to <span className="text-teal">move business.</span>
            </motion.h1>
            <motion.p variants={reveal} className="mt-7 max-w-xl text-lg leading-8 text-white/65">
              Are you ready to take your business to the next level? Opus Geeks creates high-performance, user-friendly mobile applications tailored to your goals, audience, and growth plan.
            </motion.p>
            <motion.div variants={reveal} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => setModalOpen(true)} className="group inline-flex items-center justify-center gap-3 rounded-full bg-teal px-6 py-4 font-semibold text-ink transition hover:bg-white">
                Get a quote <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>
              <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-4 font-semibold text-white/80 transition hover:border-white/35 hover:text-white">Explore capabilities</a>
            </motion.div>
            <motion.div variants={reveal} className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/50">
              {["Product strategy", "Native & cross-platform", "Launch support"].map((item) => (
                <span key={item} className="flex items-center gap-2"><Check className="h-4 w-4 text-teal" />{item}</span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9, x: 40 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto h-[480px] w-full max-w-[590px] md:h-[590px]">
            <div className="absolute inset-x-8 bottom-8 h-24 rounded-full bg-[#d2a95d]/20 blur-3xl" />
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0">
              <Image src="/images/app-phones.png" alt="Le Cavalier Cellars mobile application on two phones" fill priority sizes="(max-width: 1024px) 90vw, 46vw" className="object-contain drop-shadow-[0_35px_55px_rgba(0,0,0,0.5)]" />
            </motion.div>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-8 right-0 rounded-2xl border border-white/15 bg-[#0b171b]/95 px-5 py-4 shadow-xl backdrop-blur">
              <p className="text-xs uppercase tracking-[0.18em] text-[#d2a95d]">Featured launch</p>
              <p className="mt-1 text-sm font-semibold">Commerce experience · iOS &amp; Android</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/10 bg-[#0a171b] py-16 md:py-20">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-[linear-gradient(135deg,transparent,rgba(22,209,194,0.08))]" />
        <div className="section-shell grid gap-8 lg:grid-cols-2 lg:items-center">
          <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={reveal} className="text-balance text-4xl font-semibold leading-tight md:text-6xl">Progressive <span className="text-[#55aee0]">mobile application</span> development.</motion.h2>
          <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={reveal} className="border-l border-teal/40 pl-6 text-lg leading-8 text-white/60">We specialize in progressive mobile application development that pushes boundaries and delivers unmatched user experiences. From polished design to advanced functionality, our team turns ambitious product ideas into dependable digital products.</motion.p>
        </div>
      </section>

      <section id="services" className="relative scroll-mt-32 overflow-hidden bg-[#071014] py-20 md:py-28">
        <div className="animated-grid pointer-events-none absolute inset-0 opacity-15" />
        <div className="section-shell">
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Mobile capabilities</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold md:text-6xl">Mobile development services for you.</h2>
            <p className="mt-6 text-lg leading-8 text-white/55">Whether it is iOS, Android, or cross-platform, our team creates secure, user-friendly apps that improve engagement and deliver results.</p>
          </div>
          <div className="relative mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article key={service.title} initial="hidden" whileInView="show" whileHover={{ y: -8 }} viewport={{ once: true, margin: "-60px" }} variants={reveal} transition={{ delay: (index % 4) * 0.05 }} className="premium-border group relative min-h-[330px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-7 transition-colors hover:border-white/20 hover:bg-white/[0.065]">
                  <span className="absolute right-5 top-4 text-5xl font-semibold text-white/[0.035]">0{index + 1}</span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.07] text-teal transition group-hover:-translate-y-1 group-hover:bg-teal group-hover:text-ink"><Icon className="h-6 w-6" /></div>
                  <h3 className="mt-7 text-xl font-semibold leading-7">{service.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-white/55">{service.description}</p>
                  <div className="absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-teal to-transparent transition-transform duration-300 group-hover:scale-x-100" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0b171b] py-20 md:py-24">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">How we build</p><h2 className="mt-4 text-balance text-4xl font-semibold md:text-5xl">A product process with momentum.</h2></div>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {["Discover the opportunity", "Prototype the experience", "Engineer the product", "Launch and improve"].map((step, index) => (
                <motion.div key={step} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="bg-[#0b171b] p-6 md:p-8"><span className="text-sm font-semibold text-teal">0{index + 1}</span><h3 className="mt-5 text-xl font-semibold">{step}</h3><p className="mt-3 text-sm leading-6 text-white/50">Clear decisions, visible progress, and quality checks keep every stage aligned with the product goal.</p></motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0a171b] py-20 md:py-28">
        <Image src="/images/app-team.png" alt="Opus Geeks product team collaborating" fill sizes="100vw" className="object-cover opacity-20" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#071014_0%,rgba(7,16,20,0.92)_45%,rgba(7,16,20,0.72)_100%)]" />
        <div className="section-shell relative grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">Performance at scale</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold md:text-5xl">Metrics that reflect delivery experience.</h2>
            <p className="mt-6 text-lg leading-8 text-white/60">We focus on the indicators that shape successful mobile products: reliable execution, capable teams, lasting partnerships, and consistently high standards.</p>
            <button onClick={() => setModalOpen(true)} className="group mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-4 font-semibold transition hover:border-teal hover:bg-teal hover:text-ink">Get a quote <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" /></button>
          </div>
          <div className="grid grid-cols-2 border-l border-t border-white/10">
            {stats.map(([value, label]) => (
              <div key={label} className="border-b border-r border-white/10 p-6 md:p-10"><p className="text-4xl font-semibold text-teal md:text-6xl">{value}</p><p className="mt-3 text-sm text-white/55 md:text-base">{label}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 bg-[#081418] py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(85,174,224,0.18),transparent_30%)]" />
        <div className="section-shell grid gap-8 lg:grid-cols-2 lg:items-end">
          <h2 className="relative text-balance text-4xl font-semibold leading-tight md:text-6xl">Our mobile application <span className="text-[#55aee0]">case studies.</span></h2>
          <p className="relative text-lg leading-8 text-white/60">Explore selected mobile products across hospitality, retail, wellness, and service marketplaces, designed around real customer journeys.</p>
        </div>
        <div className="section-shell mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {caseStudies.map((study, index) => (
            <motion.article key={study.title} initial="hidden" whileInView="show" whileHover={{ y: -8 }} viewport={{ once: true }} variants={reveal} transition={{ delay: index * 0.06 }} className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#101a1e] shadow-2xl">
              <Image src={study.image} alt={`${study.title} mobile app case study`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />
              <div className="absolute inset-x-5 top-5 flex items-center justify-between text-xs uppercase tracking-[0.15em] text-white/65"><span>Case 0{index + 1}</span><Smartphone className="h-5 w-5" /></div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-5 pt-16"><p className="text-xs text-teal">{study.type}</p><h3 className="mt-1 text-xl font-semibold">{study.title}</h3></div>
            </motion.article>
          ))}
        </div>
        <div className="relative mt-12 text-center"><button onClick={() => setModalOpen(true)} className="group inline-flex items-center gap-3 rounded-full bg-teal px-7 py-4 font-semibold text-ink transition hover:bg-white">Get a quote <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" /></button></div>
      </section>

      <section className="relative overflow-hidden bg-[#0a171b] py-20 md:py-28">
        <div className="animated-grid pointer-events-none absolute inset-0 opacity-15" />
        <div className="section-shell grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="relative"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Build with confidence</p><h2 className="mt-4 text-balance text-4xl font-semibold md:text-6xl">Ready to streamline your mobile product efforts?</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-white/55">Discover how Opus Geeks can simplify your product process and help your team move from idea to a polished, launch-ready application.</p></div>
          <div className="relative flex lg:justify-end"><button onClick={() => setModalOpen(true)} className="group inline-flex items-center gap-3 rounded-full bg-teal px-7 py-4 font-semibold text-ink transition hover:bg-white">Book a free consultation <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" /></button></div>
        </div>
      </section>

      <ServiceFooter />
      <a href="#top" aria-label="Back to top" className="fixed bottom-5 right-5 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-ink/90 text-white shadow-xl backdrop-blur transition hover:-translate-y-1 hover:bg-teal hover:text-ink"><ArrowUp className="h-5 w-5" /></a>

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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[rgba(7,16,20,0.96)] shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl">
      <div className="section-shell flex h-24 items-center justify-between gap-5">
        <Link href="/" className="relative h-16 w-40 shrink-0" aria-label="Opus Geeks home"><Image src="/images/opus-logo.png" alt="Opus Geeks" fill className="object-contain object-left" /></Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          <Link href="/" className="text-sm text-white/65 transition hover:text-white">Home</Link>
          <div className="group relative"><button className="flex items-center gap-1.5 py-9 text-sm font-semibold text-teal">Services <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" /></button><div className="invisible absolute left-1/2 top-[82px] w-60 -translate-x-1/2 translate-y-2 rounded-2xl border border-white/10 bg-[#0b171b] p-2 opacity-0 shadow-2xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"><Link href="/app-development" className="block rounded-xl bg-teal/10 px-4 py-3 text-sm text-teal">App Development</Link><Link href="/#services" className="block rounded-xl px-4 py-3 text-sm text-white/65 hover:bg-white/5 hover:text-white">Web Development</Link><Link href="/#services" className="block rounded-xl px-4 py-3 text-sm text-white/65 hover:bg-white/5 hover:text-white">UX/UI Design</Link></div></div>
          <Link href="/#work" className="text-sm text-white/65 transition hover:text-white">Portfolio</Link><Link href="/#blogs" className="text-sm text-white/65 transition hover:text-white">Blogs</Link><Link href="/#about" className="text-sm text-white/65 transition hover:text-white">About</Link><Link href="/#contact" className="text-sm text-white/65 transition hover:text-white">Contact Us</Link><Link href="/#faqs" className="text-sm text-white/65 transition hover:text-white">FAQs</Link>
        </nav>
        <button onClick={openModal} className="hidden items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-ink transition hover:bg-teal lg:flex">Get Started <ArrowRight className="h-5 w-5" /></button>
        <button onClick={() => setMenuOpen(!menuOpen)} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 lg:hidden" aria-label="Toggle navigation">{menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
      </div>
      {menuOpen ? <div className="section-shell pb-5 lg:hidden"><nav className="rounded-2xl border border-white/10 bg-[#0b171b] p-3"><Link onClick={() => setMenuOpen(false)} href="/" className="block rounded-xl px-4 py-3 text-white/70">Home</Link><Link onClick={() => setMenuOpen(false)} href="/app-development" className="block rounded-xl bg-teal/10 px-4 py-3 font-semibold text-teal">App Development</Link><Link onClick={() => setMenuOpen(false)} href="/#services" className="block rounded-xl px-4 py-3 text-white/70">Web Development</Link><Link onClick={() => setMenuOpen(false)} href="/#services" className="block rounded-xl px-4 py-3 text-white/70">UX/UI Design</Link><Link onClick={() => setMenuOpen(false)} href="/#work" className="block rounded-xl px-4 py-3 text-white/70">Portfolio</Link><button onClick={() => { setMenuOpen(false); openModal(); }} className="mt-2 flex w-full items-center justify-between rounded-xl bg-teal px-4 py-3 font-semibold text-ink">Get Started <ArrowRight className="h-4 w-4" /></button></nav></div> : null}
    </header>
  );
}

function ServiceFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-[#030708] py-14">
      <div className="section-shell grid gap-10 md:grid-cols-[1.3fr_0.7fr_1fr]">
        <div><Link href="/" className="relative block h-20 w-52"><Image src="/images/opus-logo.png" alt="Opus Geeks" fill className="object-contain object-left" /></Link><p className="mt-4 max-w-sm text-sm leading-6 text-white/50">Digital products shaped by clear thinking, thoughtful design, and dependable engineering.</p><div className="mt-6 flex gap-3">{[<Linkedin key="in" className="h-4 w-4" />, <span key="x">X</span>, <Facebook key="fb" className="h-4 w-4" />].map((icon, index) => <a key={index} href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/65 transition hover:border-teal hover:text-teal">{icon}</a>)}</div></div>
        <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Explore</p><nav className="mt-5 space-y-3 text-sm text-white/55"><Link className="block hover:text-white" href="/#work">Portfolio</Link><Link className="block hover:text-white" href="/#about">About</Link><Link className="block hover:text-white" href="/#faqs">FAQs</Link><Link className="block hover:text-white" href="/#blogs">Blogs</Link></nav></div>
        <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-coral">Contact</p><div className="mt-5 space-y-3 text-sm text-white/55"><a href="mailto:contact@opusgeeks.com" className="flex gap-3 hover:text-white"><Mail className="h-4 w-4 text-teal" />contact@opusgeeks.com</a><a href="tel:+13466904693" className="flex gap-3 hover:text-white"><Phone className="h-4 w-4 text-teal" />+1 (346) 690-4693</a><p className="flex gap-3 leading-6"><MapPin className="mt-1 h-4 w-4 shrink-0 text-teal" />Karachi, Pakistan · Pembroke Pines, USA</p></div></div>
      </div>
      <div className="section-shell mt-10 border-t border-white/10 pt-6 text-sm text-white/35">© 2025 Opus Geeks. All rights reserved.</div>
    </footer>
  );
}
