"use client";
import Section from "./Section";
import { services } from "@/data/mock";

export default function Services() {
  // Opens the matching search tab, then scrolls up to the search panel.
  const open = (tab) => {
    window.dispatchEvent(new CustomEvent("select-tab", { detail: tab }));
    document.getElementById("search")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section id="services" title="Everything your trip needs, handled by one team" intro="Pick a service to start searching right away.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <article key={s.id} data-reveal data-hover className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5">
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-saffron/20 text-3xl">{s.icon}</span>
            <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 flex-1 text-ink/70">{s.text}</p>
            <button onClick={() => open(s.tab)} className="mt-5 self-start font-semibold text-sea hover:underline">
              {s.cta}
            </button>
          </article>
        ))}
      </div>
    </Section>
  );
}
