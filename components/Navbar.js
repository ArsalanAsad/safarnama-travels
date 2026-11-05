"use client";
import { useEffect, useState } from "react";

const links = [
  ["Services", "#services"],
  ["Destinations", "#destinations"],
  ["Reviews", "#reviews"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${solid || open ? "bg-ink/95 shadow-lg backdrop-blur" : ""}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 text-white">
        <a href="#home" className="font-display text-xl font-bold">Safarnama</a>
        <ul className="hidden gap-8 text-sm md:flex">
          {links.map(([label, href]) => (
            <li key={href}><a href={href} className="transition hover:text-saffron">{label}</a></li>
          ))}
        </ul>
        <a href="#search" className="hidden rounded-full bg-saffron px-5 py-2 text-sm font-semibold text-ink transition hover:bg-white md:block">
          Book now
        </a>
        <button className="text-2xl md:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </nav>
      {open && (
        <ul className="px-5 pb-5 text-white md:hidden">
          {[...links, ["Book now", "#search"]].map(([label, href]) => (
            <li key={href}><a href={href} onClick={() => setOpen(false)} className="block py-2.5">{label}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}
