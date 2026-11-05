// Reusable section wrapper: consistent spacing, heading and scroll-reveal.
export default function Section({ id, title, intro, dark = false, children }) {
  return (
    <section id={id} className={`scroll-mt-16 px-5 py-20 sm:py-24 ${dark ? "bg-ink text-white" : ""}`}>
      <div className="mx-auto max-w-6xl">
        <div data-reveal className="mb-12 max-w-2xl">
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
          {intro && <p className={`mt-3 text-lg ${dark ? "text-white/70" : "text-ink/70"}`}>{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
