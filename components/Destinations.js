import Section from "./Section";
import { destinations } from "@/data/mock";

// Swap the gradient for a photo by adding an <img> inside the [data-zoom] div.
export default function Destinations() {
  return (
    <Section id="destinations" title="Popular destinations this season" intro="Where our travellers are heading right now.">
      <div className="grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {destinations.map((d) => (
          <article key={d.name} data-reveal data-hover className={`relative overflow-hidden rounded-2xl text-white ${d.span}`}>
            <div data-zoom className={`absolute inset-0 bg-gradient-to-br ${d.gradient}`} />
            <span className="absolute right-5 top-4 text-5xl">{d.icon}</span>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5">
              <h3 className="font-display text-2xl font-bold">{d.name}</h3>
              <p className="text-sm text-white/85">{d.note}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
