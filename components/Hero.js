export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink pb-44 pt-32 text-white">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sea/40 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h1 data-hero className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Visa, flight, hotel and car. One team, one trip.
          </h1>
          <p data-hero className="mt-6 max-w-xl text-lg text-white/75">
            Safarnama Travels from Karachi takes care of your paperwork, tickets, stay and ride, so you only have to pack.
          </p>
          <div data-hero className="mt-8 flex flex-wrap gap-3">
            <a href="#search" className="rounded-full bg-saffron px-7 py-3 font-semibold text-ink transition hover:bg-white">Plan my trip</a>
            <a href="#contact" className="rounded-full border border-white/30 px-7 py-3 font-semibold transition hover:bg-white/10">Talk to an agent</a>
          </div>
        </div>

        {/* Passport-stamp style badge */}
        <div data-stamp className="mx-auto h-64 w-64 sm:h-80 sm:w-80" aria-hidden="true">
          <svg viewBox="0 0 200 200" className="h-full w-full">
            <circle cx="100" cy="100" r="96" fill="none" stroke="#F2B134" strokeWidth="2" strokeDasharray="3 5" />
            <circle cx="100" cy="100" r="58" fill="#F2B134" fillOpacity="0.12" stroke="#F2B134" strokeWidth="1.5" />
            <g data-ring>
              <path id="ringPath" d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0" fill="none" />
              <text fill="#F2B134" fontSize="13" fontWeight="600">
                <textPath href="#ringPath" textLength="470" lengthAdjust="spacing">
                  Visas - Flights - Hotels - Cars - Visas - Flights -
                </textPath>
              </text>
            </g>
            <text x="100" y="118" textAnchor="middle" fontSize="52">✈️</text>
          </svg>
        </div>
      </div>
    </section>
  );
}
