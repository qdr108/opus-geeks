"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const MOTION_SELECTOR = [
  "main > section:not(:first-of-type) h2",
  "main > section:not(:first-of-type) article",
  "main > section:not(:first-of-type) form",
  "main > section:not(:first-of-type) aside",
  "main > section:not(:first-of-type) [class*='grid'] > div"
].join(",");

export default function ScrollMotion() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    const candidates = Array.from(
      document.querySelectorAll<HTMLElement>(MOTION_SELECTOR)
    ).filter((element) => {
      const parent = element.parentElement;

      // Keep nested grids from animating the same visual two or three times.
      return !parent?.closest("article, form, aside, [data-motion='reveal']");
    });

    candidates.forEach((element, index) => {
      element.dataset.motion = "reveal";
      element.style.setProperty("--motion-delay", `${(index % 5) * 55}ms`);

      if (element.tagName === "H2") element.dataset.motionKind = "heading";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("motion-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -7% 0px", threshold: 0.08 }
    );

    candidates.forEach((element) => {
      const rect = element.getBoundingClientRect();

      if (rect.top < window.innerHeight * 0.94 && rect.bottom > 0) {
        element.classList.add("motion-visible");
      } else {
        observer.observe(element);
      }
    });

    root.classList.add("motion-enabled");

    return () => {
      observer.disconnect();
      root.classList.remove("motion-enabled");
      candidates.forEach((element) => {
        element.classList.remove("motion-visible");
        delete element.dataset.motion;
        delete element.dataset.motionKind;
        element.style.removeProperty("--motion-delay");
      });
    };
  }, [pathname]);

  return null;
}
