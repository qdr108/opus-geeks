"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const INTRO_DURATION = 1050;
const EXIT_DURATION = 280;

export default function SiteIntro() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(false);
      return;
    }

    document.documentElement.classList.add("intro-active");

    const leaveTimer = window.setTimeout(() => setLeaving(true), INTRO_DURATION - EXIT_DURATION);
    const closeTimer = window.setTimeout(() => setVisible(false), INTRO_DURATION);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLeaving(true);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(closeTimer);
      window.removeEventListener("keydown", onKeyDown);
      document.documentElement.classList.remove("intro-active");
    };
  }, []);

  useEffect(() => {
    if (!leaving) return;

    const timer = window.setTimeout(() => setVisible(false), EXIT_DURATION);
    return () => window.clearTimeout(timer);
  }, [leaving]);

  useEffect(() => {
    if (!visible) document.documentElement.classList.remove("intro-active");
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`site-intro ${leaving ? "site-intro-leaving" : ""}`}
      role="dialog"
      aria-label="Opus Geeks introduction"
      aria-modal="true"
      onClick={() => setLeaving(true)}
    >
      <div className="site-intro-content">
        <div className="site-intro-logo">
          <Image src="/images/opus-logo.png" alt="Opus Geeks" fill priority sizes="220px" className="object-contain" />
        </div>
        <p className="site-intro-brand">OPUSGEEKS</p>
        <div className="site-intro-line" aria-hidden="true"><span /></div>
        <p className="site-intro-label">Digital Product Studio</p>
      </div>
      <button className="site-intro-skip" type="button" onClick={() => setLeaving(true)}>
        Skip intro
      </button>
    </div>
  );
}
