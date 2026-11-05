const services = ["Visa Services", "Flight Tickets", "Hotel Booking", "Car Rental"];
const company = [["About", "#home"], ["Destinations", "#destinations"], ["Reviews", "#reviews"], ["Contact", "#contact"]];

export default function Footer() {
  return (
    <footer className="bg-ink px-5 py-14 text-white/75">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-bold text-white">Safarnama</p>
          <p className="mt-3 max-w-xs">Visas, flights, hotels and cars, arranged by one friendly team in Karachi.</p>
        </div>
        <div>
          <p className="mb-3 font-semibold text-white">Services</p>
          <ul className="space-y-2">{services.map((s) => <li key={s}><a href="#services" className="hover:text-saffron">{s}</a></li>)}</ul>
        </div>
        <div>
          <p className="mb-3 font-semibold text-white">Company</p>
          <ul className="space-y-2">{company.map(([l, h]) => <li key={l}><a href={h} className="hover:text-saffron">{l}</a></li>)}</ul>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-sm">
        © {new Date().getFullYear()} Safarnama Travels. Demo website with mock data.
      </p>
    </footer>
  );
}
