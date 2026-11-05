"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { searchTabs, tabOrder } from "@/data/mock";

const initialValues = (tab) =>
  Object.fromEntries(
    searchTabs[tab].fields.map((f) => [f.name, f.default ?? (f.type === "select" ? f.options[0] : "")])
  );
const pkr = (n) => "PKR " + n.toLocaleString("en-US");
const inputClass =
  "w-full rounded-lg border border-ink/15 bg-white px-3 py-3 text-sm focus:border-sea focus:outline-none focus:ring-2 focus:ring-saffron";

export default function SearchPanel() {
  const [tab, setTab] = useState("flights");
  const [values, setValues] = useState(() => initialValues("flights"));
  const [results, setResults] = useState(null);
  const [picked, setPicked] = useState(null);

  const switchTab = (t) => {
    setTab(t);
    setValues(initialValues(t));
    setResults(null);
    setPicked(null);
  };

  // Service cards fire this event to open the matching tab.
  useEffect(() => {
    const onSelect = (e) => switchTab(e.detail);
    window.addEventListener("select-tab", onSelect);
    return () => window.removeEventListener("select-tab", onSelect);
  }, []);

  // Animate results in after a search (motion that answers the user's action).
  useEffect(() => {
    if (results?.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.fromTo(".result-item", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.08 });
    }
  }, [results]);

  const submit = (e) => {
    e.preventDefault();
    setPicked(null);
    setResults(searchTabs[tab].run(values));
  };

  const current = searchTabs[tab];

  return (
    <div data-reveal className="mx-auto max-w-6xl rounded-2xl bg-white p-5 shadow-xl ring-1 ring-ink/5 sm:p-8">
      <div role="tablist" className="mb-6 flex gap-1 overflow-x-auto border-b border-ink/10">
        {tabOrder.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            onClick={() => switchTab(t)}
            className={`-mb-px whitespace-nowrap border-b-2 px-4 py-3 text-sm font-semibold transition ${
              tab === t ? "border-saffron text-ink" : "border-transparent text-ink/50 hover:text-ink"
            }`}
          >
            {searchTabs[t].label}
          </button>
        ))}
      </div>

      <form onSubmit={submit} className="flex flex-wrap items-end gap-4">
        {current.fields.map((f) => (
          <label key={f.name} className="min-w-[150px] flex-1 text-sm font-medium">
            {f.label}
            {f.type === "select" ? (
              <select
                className={`${inputClass} mt-1`}
                value={values[f.name]}
                onChange={(e) => setValues({ ...values, [f.name]: e.target.value })}
              >
                {f.options.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            ) : (
              <input
                className={`${inputClass} mt-1`}
                type={f.type}
                min={f.min}
                max={f.max}
                value={values[f.name]}
                onChange={(e) => setValues({ ...values, [f.name]: e.target.value })}
              />
            )}
          </label>
        ))}
        <button type="submit" className="rounded-lg bg-ink px-7 py-3 text-sm font-semibold text-white transition hover:bg-sea">
          {current.cta}
        </button>
      </form>

      {results && (
        <div className="mt-8" aria-live="polite">
          {results.length === 0 ? (
            <p className="rounded-lg bg-sand p-4 text-sm text-ink/70">{current.empty}</p>
          ) : (
            <>
              <p className="mb-3 text-sm font-semibold">{results.length} option(s) found</p>
              <ul className="grid gap-3 lg:grid-cols-2">
                {results.map((r) => (
                  <li key={r.id} className="result-item flex overflow-hidden rounded-xl border border-ink/10 bg-white">
                    <div className="flex-1 p-4">
                      <p className="font-semibold">{r.title}</p>
                      <p className="mt-1 text-sm text-ink/60">{r.sub}</p>
                      <p className="mt-2 text-xs font-medium text-sea">{r.tag}</p>
                    </div>
                    <div className="flex w-36 flex-col items-center justify-center gap-1 border-l-2 border-dashed border-ink/15 bg-sand p-3 text-center">
                      <p className="font-semibold">{pkr(r.price)}</p>
                      <p className="text-xs text-ink/60">{r.note}</p>
                      <button
                        onClick={() => setPicked(r.id)}
                        className="mt-1 rounded-full bg-saffron px-4 py-1.5 text-xs font-semibold text-ink transition hover:bg-ink hover:text-white"
                      >
                        {picked === r.id ? "Selected" : "Select"}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              {picked && (
                <p className="mt-4 rounded-lg bg-sea/10 p-3 text-sm text-ink">
                  Demo only: nothing is booked and no payment is taken. Send us a message below to continue.
                </p>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
