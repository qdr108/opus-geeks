"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

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
  ["01", "Product Strategy", "Goals, audience, scope, and release priorities aligned before production."],
  ["02", "Platform Design", "Flows and interface systems shaped around real mobile behavior."],
  ["03", "Engineering", "Production-ready builds with integration, testing, and performance discipline."],
  ["04", "Release Support", "Store preparation, launch checks, monitoring, and measured iteration."]
];

const stageOffsets = ["lg:mt-0", "lg:mt-12", "lg:mt-24", "lg:mt-36"];

const caseStudies = [
  { title: "Restaurant Techs", type: "On-demand services", image: "/images/app-case-1-hd.png", detail: "Field service booking" },
  { title: "Le Cavalier Cellars", type: "Mobile commerce", image: "/images/app-case-2-hd.png", detail: "Direct-to-customer retail" },
  { title: "Mind Nourishment", type: "Wellness experience", image: "/images/app-case-3-hd.png", detail: "Guided personal wellbeing" },
  { title: "Wedstimate", type: "Service marketplace", image: "/images/app-case-4-hd.png", detail: "Wedding planning platform" }
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

export default function AppDevelopmentPage() {
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

      <section className="relative overflow-hidden border-b border-[#1C1E21]/10 bg-[#F0F2F5] pt-24 lg:pt-28">
        <div className="pointer-events-none absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(28,30,33,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(28,30,33,0.055)_1px,transparent_1px)] [background-size:80px_80px]" />
        <div className="section-shell relative py-10 md:py-14 lg:py-16">
          <div className="grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
            <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.08 }} className="relative">
              <motion.div variants={reveal} className="mb-8 flex items-center gap-4">
                <span className="grid h-10 w-10 place-items-center border border-[#1877F2] text-xs font-bold text-[#1877F2]">01</span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1877F2]">Mobile product engineering</p>
                  <p className="mt-1 text-xs text-[#1C1E21]/45">Strategy / Design / Development</p>
                </div>
              </motion.div>
              <motion.h1 variants={reveal} className="max-w-[680px] text-balance text-[clamp(3.25rem,5.2vw,5.6rem)] font-semibold leading-[0.98]">
                Innovative mobile apps built to <span className="text-[#1877F2]">move business.</span>
              </motion.h1>
              <motion.p variants={reveal} className="mt-7 max-w-[590px] text-base leading-7 text-[#1C1E21]/62 md:text-lg md:leading-8">
                We turn product strategy, interface design, and mobile engineering into focused iOS and Android experiences built around real customer journeys.
              </motion.p>
              <motion.div variants={reveal} className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button onClick={() => setModalOpen(true)} className="group inline-flex min-h-14 items-center justify-between gap-10 bg-[#1877F2] px-6 font-semibold text-white shadow-[0_14px_32px_rgba(24,119,242,0.2)] transition duration-300 hover:bg-[#1C1E21] sm:min-w-[210px]">
                  Get a quote <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <a href="#services" className="inline-flex min-h-14 items-center justify-center border border-[#1C1E21]/15 bg-white/60 px-6 font-semibold text-[#1C1E21]/75 transition duration-300 hover:border-[#1C1E21] hover:bg-white hover:text-[#1C1E21]">Explore capabilities</a>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto w-full max-w-[690px]">
              <div className="absolute -left-4 top-10 hidden h-[72%] w-px bg-[#1877F2] lg:block" />
              <div className="relative h-[430px] overflow-hidden border border-[#1C1E21]/10 bg-white/48 sm:h-[520px] md:h-[620px]">
                <div className="absolute left-5 top-5 z-10 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1C1E21]/50">
                  <span className="h-2 w-2 bg-[#1877F2]" /> Featured launch
                </div>
                <div className="absolute right-5 top-5 z-10 text-[11px] font-semibold tracking-[0.18em] text-[#1C1E21]/38">OG / 24</div>
                <div className="absolute inset-x-[12%] bottom-[8%] h-[28%] bg-[#1877F2]/8 blur-3xl" />
                <motion.div initial={{ y: 18, scale: 0.97 }} animate={{ y: 0, scale: 1 }} transition={{ delay: 0.16, duration: 0.85, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-5 top-12 md:inset-8 md:top-14">
                  <Image src="/images/app-phones-hd.png" alt="Le Cavalier Cellars mobile application on two phones" fill priority quality={95} sizes="(max-width: 767px) 92vw, (max-width: 1024px) 650px, 48vw" className="object-contain drop-shadow-[0_26px_38px_rgba(28,30,33,0.25)]" />
                </motion.div>
                <div className="absolute bottom-0 left-0 right-0 z-10 grid grid-cols-2 border-t border-[#1C1E21]/10 bg-white/90 backdrop-blur-sm">
                  <div className="border-r border-[#1C1E21]/10 px-5 py-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1C1E21]/42">Platform</p>
                    <p className="mt-1 text-sm font-semibold">iOS + Android</p>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1C1E21]/42">Product</p>
                    <p className="mt-1 text-sm font-semibold">Mobile commerce</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.48, duration: 0.55 }} className="mt-10 grid border-y border-[#1C1E21]/10 bg-white/35 sm:grid-cols-3">
            {["Product strategy", "Native & cross-platform", "Launch support"].map((item, index) => (
              <div key={item} className="flex min-h-16 items-center gap-4 border-b border-[#1C1E21]/10 px-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
                <span className="text-xs font-semibold text-[#1877F2]">0{index + 1}</span>
                <span className="text-sm font-medium text-[#1C1E21]/68">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-[#1C1E21]/10 bg-white py-16 md:py-20">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-[linear-gradient(135deg,transparent,rgba(24,119,242,0.1))]" />
        <div className="section-shell grid gap-8 lg:grid-cols-2 lg:items-center">
          <h2 className="text-balance text-4xl font-semibold leading-tight md:text-6xl">Progressive <span className="text-[#1877F2]">mobile application</span> development.</h2>
          <p className="border-l border-[#1877F2]/40 pl-6 text-lg leading-8 text-[#1C1E21]/60">We specialize in progressive mobile application development that pushes boundaries and delivers unmatched user experiences. From polished design to advanced functionality, our team turns ambitious product ideas into dependable digital products.</p>
        </div>
      </section>

      <section id="services" className="relative scroll-mt-32 overflow-hidden border-y border-[#1C1E21]/10 bg-[#F0F2F5] py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(28,30,33,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(28,30,33,0.055)_1px,transparent_1px)] [background-size:80px_80px]" />
        <div className="section-shell relative">
          <div className="grid gap-8 border-b border-[#1C1E21]/15 pb-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:pb-16">
            <div>
              <div className="flex items-center gap-4"><span className="h-px w-10 bg-[#1877F2]" /><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1877F2]">Mobile capabilities</p></div>
              <h2 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.02] md:text-6xl">One mobile practice.<br /><span className="text-[#1C1E21]/30">Eight specialist tracks.</span></h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end lg:justify-self-end">
              <p className="max-w-xl text-base leading-7 text-[#1C1E21]/58 md:text-lg md:leading-8">From platform-native products to cross-platform systems, each engagement combines product judgment, interface craft, and production engineering.</p>
              <div className="border-l border-[#1C1E21]/15 pl-5"><span className="block text-3xl font-semibold">08</span><span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1C1E21]/40">Disciplines</span></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article key={service.title} initial={false} whileHover="hover" className={`group relative grid min-h-[250px] grid-cols-[42px_1fr] gap-x-4 overflow-hidden border-b border-[#1C1E21]/15 py-8 transition-colors duration-300 hover:bg-white/70 sm:grid-cols-[52px_1fr_auto] sm:gap-x-6 sm:px-6 md:min-h-[280px] md:py-10 ${index % 2 === 0 ? "md:border-r" : "md:pl-10"}`}>
                  <span className="pt-1 text-[10px] font-semibold tracking-[0.16em] text-[#1877F2]">0{index + 1}</span>
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center border border-[#1C1E21]/12 bg-white text-[#1877F2] transition duration-300 group-hover:border-[#1877F2] group-hover:bg-[#1877F2] group-hover:text-white"><Icon className="h-5 w-5" /></div>
                    <h3 className="mt-7 max-w-sm text-2xl font-semibold leading-tight transition-colors group-hover:text-[#1877F2]">{service.title}</h3>
                    <p className="mt-4 max-w-xl text-sm leading-6 text-[#1C1E21]/55">{service.description}</p>
                  </div>
                  <motion.span variants={{ hover: { x: 5 } }} className="hidden h-10 w-10 items-center justify-center self-start border border-[#1C1E21]/12 text-[#1C1E21]/42 transition-colors group-hover:border-[#1877F2] group-hover:text-[#1877F2] sm:flex"><ArrowRight className="h-4 w-4" /></motion.span>
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#1877F2] transition-all duration-500 group-hover:w-full" />
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

      <section className="relative overflow-hidden border-y border-[#1C1E21]/10 bg-[#F0F2F5] py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(90deg,transparent_49.9%,rgba(28,30,33,.07)_50%,transparent_50.1%)] [background-size:25%_100%]" />
        <div className="section-shell relative">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <div>
              <div className="flex items-center gap-4"><span className="h-px w-10 bg-[#1877F2]" /><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1877F2]">From intent to impact</p></div>
              <h2 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[1.02] md:text-6xl">Four decisions between an idea and a dependable release.</h2>
            </div>
            <div className="lg:justify-self-end">
              <p className="max-w-xl text-base leading-7 text-[#1C1E21]/58 md:text-lg md:leading-8">Each stage resolves a different product risk, then hands clear decisions to the next discipline.</p>
              <button onClick={() => setModalOpen(true)} className="group mt-6 inline-flex items-center gap-3 font-semibold text-[#1877F2]">Plan your product <span className="grid h-10 w-10 place-items-center border border-[#1877F2]/35 transition group-hover:bg-[#1877F2] group-hover:text-white"><ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></span></button>
            </div>
          </div>

          <div className="relative mt-16 grid gap-8 lg:min-h-[470px] lg:grid-cols-4 lg:gap-0">
            {stats.map(([value, label, description], index) => (
              <motion.article key={label} initial={false} whileHover={{ y: -5 }} transition={{ duration: 0.22 }} className={`group relative border-l border-[#1C1E21]/15 pl-6 pt-6 lg:min-h-[300px] lg:border-t lg:px-7 lg:pb-8 ${stageOffsets[index]}`}>
                <span className="absolute -left-[5px] -top-[5px] h-[9px] w-[9px] bg-[#1877F2] ring-4 ring-[#F0F2F5]" />
                <div className="flex items-start justify-between">
                  <span className="font-display text-6xl leading-none text-[#1C1E21]/16 transition-colors group-hover:text-[#1877F2] md:text-7xl">{value}</span>
                  <span className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#1C1E21]/35">Stage / {value}</span>
                </div>
                <h3 className="mt-10 text-2xl font-semibold leading-tight">{label}</h3>
                <p className="mt-4 max-w-xs text-sm leading-6 text-[#1C1E21]/52">{description}</p>
                <div className="mt-8 h-px w-12 bg-[#1C1E21]/15 transition-all duration-300 group-hover:w-full group-hover:bg-[#1877F2]" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[#1C1E21]/10 bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[#F0F2F5]" />
        <div className="section-shell relative">
          <div className="grid gap-8 border-b border-[#1C1E21]/12 pb-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <div>
              <div className="flex items-center gap-4"><span className="h-px w-10 bg-[#1877F2]" /><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1877F2]">Selected mobile work</p></div>
              <h2 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[1.02] md:text-6xl">Products designed for <span className="font-display font-normal italic text-[#1877F2]">real-world momentum.</span></h2>
            </div>
            <div className="lg:justify-self-end">
              <p className="max-w-xl text-base leading-7 text-[#1C1E21]/58 md:text-lg md:leading-8">Four distinct markets. One product standard: clear journeys, useful technology, and interfaces built to earn repeat use.</p>
              <p className="mt-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1C1E21]/38"><span className="h-2 w-2 bg-[#1877F2]" /> Drag or swipe to explore</p>
            </div>
          </div>
        </div>

        <div className="relative mt-10 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="mx-auto flex w-max snap-x snap-mandatory gap-4 px-[max(1.25rem,calc((100vw-min(100vw-2.5rem,1920px))/2))] md:gap-6">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.title}
                initial={false}
                whileHover="hover"
                className={`group relative h-[500px] shrink-0 snap-start overflow-hidden bg-[#1C1E21] md:h-[620px] ${index === 1 ? "w-[82vw] sm:w-[560px] lg:w-[680px]" : "w-[78vw] sm:w-[410px] lg:w-[455px]"}`}
              >
                <Image src={study.image} alt={`${study.title} mobile app case study`} fill quality={95} sizes={index === 1 ? "(max-width: 640px) 82vw, 680px" : "(max-width: 640px) 78vw, 455px"} className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.16),transparent_38%,rgba(0,0,0,.78))]" />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-white/20 px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75 md:px-6">
                  <span>OG / Case 0{index + 1}</span>
                  <span>{study.type}</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-7">
                  <div className="mb-5 h-px bg-white/25"><motion.span variants={{ hover: { width: "100%" } }} transition={{ duration: 0.45 }} className="block h-px w-12 bg-[#1877F2]" /></div>
                  <div className="flex items-end justify-between gap-5">
                    <div><p className="text-xs text-white/60">{study.detail}</p><h3 className="mt-2 text-2xl font-semibold md:text-3xl">{study.title}</h3></div>
                    <motion.span variants={{ hover: { x: 4 } }} className="grid h-12 w-12 shrink-0 place-items-center border border-white/35 bg-white text-[#1C1E21]"><ArrowRight className="h-5 w-5" /></motion.span>
                  </div>
                </div>
              </motion.article>
            ))}
            <div className="flex h-[500px] w-[72vw] max-w-[380px] shrink-0 snap-start flex-col justify-between border border-[#1C1E21]/12 bg-[#F0F2F5] p-7 md:h-[620px] md:p-9">
              <span className="font-display text-7xl leading-none text-[#1877F2]">05</span>
              <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1877F2]">Your product next</p><h3 className="mt-5 text-3xl font-semibold leading-tight">Turn the next idea into a product people return to.</h3><button onClick={() => setModalOpen(true)} className="group mt-8 inline-flex items-center gap-3 font-semibold">Start a conversation <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></button></div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#e5f2f8] py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(24,119,242,0.16)_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="section-shell grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="relative"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1877F2]">Build with confidence</p><h2 className="mt-4 text-balance text-4xl font-semibold md:text-6xl">Ready to streamline your mobile product efforts?</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-[#1C1E21]/55">Discover how Opus Geeks can simplify your product process and help your team move from idea to a polished, launch-ready application.</p></div>
          <div className="relative flex lg:justify-end"><button onClick={() => setModalOpen(true)} className="group inline-flex items-center gap-3 rounded-full bg-[#1C1E21] px-7 py-4 font-semibold text-white transition hover:bg-[#1877F2]">Book a free consultation <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" /></button></div>
        </div>
      </section>

      <SiteFooter />
      <a href="#top" aria-label="Back to top" className="fixed bottom-5 right-5 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-[#1877F2] text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#1C1E21]"><ArrowUp className="h-5 w-5" /></a>

      {modalOpen ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1C1E21]/72 p-3 backdrop-blur-[3px] sm:p-6" role="dialog" aria-modal="true" aria-labelledby="consultation-title" onMouseDown={(event) => { if (event.target === event.currentTarget) setModalOpen(false); }}>
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.985 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }} className="relative max-h-[94vh] w-full max-w-[680px] overflow-y-auto border border-[#1C1E21]/12 bg-white text-[#1C1E21] shadow-[0_32px_100px_rgba(0,0,0,.28)]">
            <div className="flex items-center justify-between border-b border-[#1C1E21]/10 px-5 py-4 md:px-8">
              <div className="flex items-center gap-3"><span className="h-2 w-2 bg-[#1877F2]" /><span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1C1E21]/48">Project enquiry / OG</span></div>
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
                <label className="block sm:col-span-2"><span className="mb-2 block text-xs font-semibold text-[#1C1E21]/65">Project brief</span><textarea required name="description" rows={3} placeholder="Product, audience, goals, and ideal timeline" className="w-full resize-none border border-[#1C1E21]/14 bg-[#F0F2F5] px-4 py-3 text-sm outline-none transition placeholder:text-[#1C1E21]/32 focus:border-[#1877F2] focus:bg-white" /></label>
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
          <div className="group relative"><button className="flex items-center gap-1.5 py-9 text-sm font-semibold text-[#1877F2]">Services <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" /></button><div className="invisible absolute left-1/2 top-[82px] w-60 -translate-x-1/2 translate-y-2 rounded-2xl border border-[#1C1E21]/10 bg-white p-2 opacity-0 shadow-2xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"><Link href="/app-development" className="block rounded-xl bg-[#1877F2]/10 px-4 py-3 text-sm text-[#1877F2]">App Development</Link><Link href="/web-development" className="block rounded-xl px-4 py-3 text-sm text-[#1C1E21]/60 hover:bg-[#1C1E21]/5 hover:text-[#1C1E21]">Web Development</Link><Link href="/ux-ui-design" className="block rounded-xl px-4 py-3 text-sm text-[#1C1E21]/60 hover:bg-[#1C1E21]/5 hover:text-[#1C1E21]">UX/UI Design</Link></div></div>
          <Link href="/portfolio" className="text-sm text-[#1C1E21]/60 transition hover:text-[#1877F2]">Portfolio</Link><Link href="/blogs" className="text-sm text-[#1C1E21]/60 transition hover:text-[#1877F2]">Blogs</Link><Link href="/about" className="text-sm text-[#1C1E21]/60 transition hover:text-[#1877F2]">About</Link><Link href="/#contact" className="text-sm text-[#1C1E21]/60 transition hover:text-[#1877F2]">Contact Us</Link><Link href="/faqs" className="text-sm text-[#1C1E21]/60 transition hover:text-[#1877F2]">FAQs</Link>
        </nav>
        <button onClick={openModal} className="hidden items-center gap-3 rounded-full bg-[#1C1E21] px-6 py-3 font-semibold text-white transition hover:bg-[#1877F2] lg:flex">Get Started <ArrowRight className="h-5 w-5" /></button>
        <button onClick={() => setMenuOpen(!menuOpen)} className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1C1E21]/15 lg:hidden" aria-label="Toggle navigation">{menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
      </div>
      {menuOpen ? <div className="section-shell pb-5 lg:hidden"><nav className="rounded-2xl border border-[#1C1E21]/10 bg-white p-3 shadow-xl"><Link onClick={() => setMenuOpen(false)} href="/" className="block rounded-xl px-4 py-3 text-[#1C1E21]/70">Home</Link><Link onClick={() => setMenuOpen(false)} href="/app-development" className="block rounded-xl bg-[#1877F2]/10 px-4 py-3 font-semibold text-[#1877F2]">App Development</Link><Link onClick={() => setMenuOpen(false)} href="/web-development" className="block rounded-xl px-4 py-3 text-[#1C1E21]/70">Web Development</Link><Link onClick={() => setMenuOpen(false)} href="/ux-ui-design" className="block rounded-xl px-4 py-3 text-[#1C1E21]/70">UX/UI Design</Link><Link onClick={() => setMenuOpen(false)} href="/portfolio" className="block rounded-xl px-4 py-3 text-[#1C1E21]/70">Portfolio</Link><button onClick={() => { setMenuOpen(false); openModal(); }} className="mt-2 flex w-full items-center justify-between rounded-xl bg-[#1877F2] px-4 py-3 font-semibold text-white">Get Started <ArrowRight className="h-4 w-4" /></button></nav></div> : null}
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
