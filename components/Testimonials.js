import Section from "./Section";
import { testimonials } from "@/data/mock";

export default function Testimonials() {
  return (
    <Section id="reviews" title="What travellers say after they land">
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.name} data-reveal data-hover className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5">
            <blockquote className="leading-relaxed text-ink/80">“{t.text}”</blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sea font-semibold text-white">{t.name[0]}</span>
              <span>
                <span className="block font-semibold">{t.name}</span>
                <span className="block text-sm text-ink/60">{t.city}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
