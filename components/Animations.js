"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// One place for all GSAP: hero timeline, scroll reveals, counters, hover effects.
export default function Animations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const counters = gsap.utils.toArray("[data-counter]");
    const format = (el, n) => Math.round(n).toLocaleString("en-US") + (el.dataset.suffix || "");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      counters.forEach((el) => (el.textContent = format(el, Number(el.dataset.counter))));
      return;
    }

    const cleanups = [];
    const ctx = gsap.context(() => {
      // 1. Hero entrance + slowly turning stamp
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .fromTo("[data-hero]", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.15 })
        .fromTo(
          "[data-stamp]",
          { scale: 0.4, rotate: -120, opacity: 0 },
          { scale: 1, rotate: 0, opacity: 1, duration: 1.1, ease: "back.out(1.6)" },
          0.3
        );
      gsap.to("[data-ring]", { rotation: 360, svgOrigin: "100 100", duration: 40, repeat: -1, ease: "none" });

      // 2. Scroll reveals
      ScrollTrigger.batch("[data-reveal]", {
        start: "top 88%",
        once: true,
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out", overwrite: true }
          ),
      });

      // 3. Counters
      counters.forEach((el) => {
        const state = { v: 0 };
        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          once: true,
          onEnter: () =>
            gsap.to(state, {
              v: Number(el.dataset.counter),
              duration: 2,
              ease: "power2.out",
              onUpdate: () => (el.textContent = format(el, state.v)),
            }),
        });
      });

      // 4. Hover effects: lift cards, zoom their background
      gsap.utils.toArray("[data-hover]").forEach((el) => {
        const zoom = el.querySelector("[data-zoom]");
        const enter = () => {
          gsap.to(el, { y: -8, duration: 0.3, ease: "power2.out" });
          if (zoom) gsap.to(zoom, { scale: 1.08, duration: 0.6, ease: "power2.out" });
        };
        const leave = () => {
          gsap.to(el, { y: 0, duration: 0.4, ease: "power2.out" });
          if (zoom) gsap.to(zoom, { scale: 1, duration: 0.6, ease: "power2.out" });
        };
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
        cleanups.push(() => {
          el.removeEventListener("mouseenter", enter);
          el.removeEventListener("mouseleave", leave);
        });
      });
    });

    return () => {
      cleanups.forEach((fn) => fn());
      ctx.revert();
    };
  }, []);

  return null;
}
