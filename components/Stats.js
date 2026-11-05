import { stats } from "@/data/mock";

export default function Stats() {
  return (
    <section className="bg-ink px-5 py-16 text-white">
      <dl className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} data-reveal>
            <dd className="font-display text-5xl font-bold text-saffron">
              <span data-counter={s.value} data-suffix={s.suffix}>0</span>
            </dd>
            <dt className="mt-2 text-white/70">{s.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
