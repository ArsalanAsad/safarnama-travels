// All data is mock data. Replace with a real API later.

export const cities = ["Karachi", "Lahore", "Islamabad", "Dubai", "Istanbul", "London", "Bangkok", "Kuala Lumpur"];

export const services = [
  { id: "visa", tab: "visa", icon: "🛂", title: "Visa Services", text: "Document checks, filing and status updates for 30+ countries.", cta: "Check visa options" },
  { id: "flights", tab: "flights", icon: "✈️", title: "Flight Tickets", text: "Compare fares across airlines and book the seat that suits you.", cta: "Search flights" },
  { id: "hotels", tab: "hotels", icon: "🏨", title: "Hotel Booking", text: "Verified stays from budget rooms to five-star suites.", cta: "Find a hotel" },
  { id: "cars", tab: "cars", icon: "🚗", title: "Car Rental", text: "Self-drive or with a driver, ready at the airport or your door.", cta: "Rent a car" },
];

export const destinations = [
  { name: "Dubai", note: "Flights from PKR 54,000", icon: "🏙️", gradient: "from-amber-400 via-orange-500 to-rose-600", span: "sm:col-span-2 sm:row-span-2" },
  { name: "Istanbul", note: "Flights from PKR 118,000", icon: "🕌", gradient: "from-sky-500 to-indigo-700", span: "" },
  { name: "Bangkok", note: "Flights from PKR 98,000", icon: "🛕", gradient: "from-emerald-400 to-teal-700", span: "" },
  { name: "Kuala Lumpur", note: "Flights from PKR 112,000", icon: "🌆", gradient: "from-fuchsia-500 to-purple-800", span: "" },
  { name: "London", note: "Flights from PKR 185,000", icon: "🎡", gradient: "from-slate-500 to-slate-900", span: "" },
];

export const stats = [
  { value: 12500, suffix: "+", label: "Travellers served" },
  { value: 35, suffix: "+", label: "Countries for visas" },
  { value: 900, suffix: "+", label: "Partner hotels" },
  { value: 24, suffix: "/7", label: "Support on call" },
];

export const testimonials = [
  { name: "Ayesha Khan", city: "Karachi", text: "Our UAE visa came through in four days, and the team checked every document before we paid." },
  { name: "Hamza Raza", city: "Lahore", text: "I booked flights and a hotel for Istanbul in one call. Nothing was missed at the airport." },
  { name: "Sana Malik", city: "Islamabad", text: "The car was waiting at arrival with the child seat we asked for. Smooth from start to finish." },
];

const flights = [
  { id: "f1", airline: "Emirates", from: "Karachi", to: "Dubai", dep: "06:10", arr: "07:35", duration: "2h 25m", price: 62000 },
  { id: "f2", airline: "flydubai", from: "Karachi", to: "Dubai", dep: "14:20", arr: "15:45", duration: "2h 25m", price: 54000 },
  { id: "f3", airline: "PIA", from: "Lahore", to: "Dubai", dep: "09:00", arr: "11:30", duration: "3h 30m", price: 68000 },
  { id: "f4", airline: "Turkish Airlines", from: "Karachi", to: "Istanbul", dep: "03:30", arr: "08:10", duration: "6h 40m", price: 118000 },
  { id: "f5", airline: "Turkish Airlines", from: "Islamabad", to: "Istanbul", dep: "04:45", arr: "09:20", duration: "6h 35m", price: 124000 },
  { id: "f6", airline: "PIA", from: "Islamabad", to: "London", dep: "02:15", arr: "07:30", duration: "8h 15m", price: 210000 },
  { id: "f7", airline: "Thai Airways", from: "Karachi", to: "Bangkok", dep: "23:50", arr: "07:00", duration: "5h 40m", price: 98000 },
  { id: "f8", airline: "Malaysia Airlines", from: "Lahore", to: "Kuala Lumpur", dep: "22:10", arr: "08:00", duration: "6h 50m", price: 112000 },
  { id: "f9", airline: "Emirates", from: "Dubai", to: "Karachi", dep: "09:30", arr: "12:15", duration: "2h 45m", price: 61000 },
  { id: "f10", airline: "Emirates", from: "Dubai", to: "London", dep: "08:15", arr: "12:30", duration: "7h 15m", price: 185000 },
];

const hotels = [
  { id: "h1", name: "Marina Bay Suites", city: "Dubai", stars: 5, price: 42000, perk: "Pool and breakfast included" },
  { id: "h2", name: "Deira Courtyard", city: "Dubai", stars: 3, price: 16000, perk: "Near the metro" },
  { id: "h3", name: "Galata Tower Inn", city: "Istanbul", stars: 4, price: 28000, perk: "Rooftop terrace" },
  { id: "h4", name: "Sultanahmet House", city: "Istanbul", stars: 3, price: 19000, perk: "Walk to the Blue Mosque" },
  { id: "h5", name: "Kensington Lodge", city: "London", stars: 4, price: 52000, perk: "Free Wi-Fi" },
  { id: "h6", name: "Sukhumvit Garden", city: "Bangkok", stars: 4, price: 21000, perk: "Skytrain access" },
  { id: "h7", name: "KLCC View Hotel", city: "Kuala Lumpur", stars: 5, price: 24000, perk: "Twin Towers view" },
  { id: "h8", name: "Clifton Seaview", city: "Karachi", stars: 4, price: 22000, perk: "Sea-facing rooms" },
  { id: "h9", name: "Gulberg Heritage", city: "Lahore", stars: 4, price: 20000, perk: "Airport pickup" },
  { id: "h10", name: "Margalla Retreat", city: "Islamabad", stars: 4, price: 24000, perk: "Hill views" },
];

const cars = [
  { id: "c1", name: "Toyota Yaris", city: "Karachi", type: "Economy", seats: 5, price: 9000 },
  { id: "c2", name: "Toyota Fortuner", city: "Karachi", type: "SUV", seats: 7, price: 28000 },
  { id: "c3", name: "Toyota Hiace", city: "Karachi", type: "Van", seats: 12, price: 22000 },
  { id: "c4", name: "Honda City", city: "Lahore", type: "Economy", seats: 5, price: 10000 },
  { id: "c5", name: "Land Cruiser", city: "Lahore", type: "Luxury", seats: 7, price: 60000 },
  { id: "c6", name: "Toyota Prado", city: "Islamabad", type: "SUV", seats: 7, price: 32000 },
  { id: "c7", name: "Suzuki Cultus", city: "Islamabad", type: "Economy", seats: 4, price: 7000 },
  { id: "c8", name: "Nissan Sunny", city: "Dubai", type: "Economy", seats: 5, price: 8000 },
  { id: "c9", name: "Range Rover Sport", city: "Dubai", type: "Luxury", seats: 5, price: 75000 },
  { id: "c10", name: "Renault Clio", city: "Istanbul", type: "Economy", seats: 5, price: 11000 },
  { id: "c11", name: "Mercedes V-Class", city: "Istanbul", type: "Van", seats: 7, price: 48000 },
];

const visas = [
  { id: "v1", country: "UAE", purpose: "Tourist", time: "3 to 4 working days", valid: "30 days", price: 28000 },
  { id: "v2", country: "UAE", purpose: "Business", time: "5 to 7 working days", valid: "60 days", price: 40000 },
  { id: "v3", country: "Turkey", purpose: "Tourist", time: "2 working days (e-visa)", valid: "30 days", price: 9000 },
  { id: "v4", country: "Thailand", purpose: "Tourist", time: "5 working days", valid: "60 days", price: 15000 },
  { id: "v5", country: "Malaysia", purpose: "Tourist", time: "3 working days (eNTRI)", valid: "15 days", price: 12000 },
  { id: "v6", country: "United Kingdom", purpose: "Tourist", time: "15 working days", valid: "6 months", price: 52000 },
  { id: "v7", country: "United Kingdom", purpose: "Business", time: "15 working days", valid: "6 months", price: 70000 },
  { id: "v8", country: "Schengen", purpose: "Tourist", time: "15 to 20 working days", valid: "90 days", price: 38000 },
];

const visaCountries = [...new Set(visas.map((v) => v.country))];
const carCities = [...new Set(cars.map((c) => c.city))];

export const searchTabs = {
  flights: {
    label: "Flights",
    cta: "Search flights",
    fields: [
      { name: "from", label: "From", type: "select", options: cities },
      { name: "to", label: "To", type: "select", options: cities, default: "Dubai" },
      { name: "date", label: "Departure", type: "date" },
      { name: "pax", label: "Passengers", type: "number", default: 1, min: 1, max: 9 },
    ],
    empty: "No flights on this route yet. Try Karachi to Dubai or Islamabad to London.",
    run: (v) =>
      flights
        .filter((f) => f.from === v.from && f.to === v.to)
        .map((f) => ({
          id: f.id,
          title: `${f.airline}: ${f.from} to ${f.to}`,
          sub: `${f.dep} to ${f.arr}, ${f.duration}`,
          tag: "Economy fare",
          price: f.price * (Number(v.pax) || 1),
          note: `${Number(v.pax) || 1} passenger(s)`,
        })),
  },
  hotels: {
    label: "Hotels",
    cta: "Find hotels",
    fields: [
      { name: "city", label: "City", type: "select", options: cities, default: "Dubai" },
      { name: "checkin", label: "Check-in", type: "date" },
      { name: "checkout", label: "Check-out", type: "date" },
      { name: "stars", label: "Minimum stars", type: "select", options: ["Any", "3", "4", "5"] },
    ],
    empty: "No hotels match these filters. Try a lower star rating or another city.",
    run: (v) =>
      hotels
        .filter((h) => h.city === v.city && (v.stars === "Any" || h.stars >= Number(v.stars)))
        .map((h) => ({
          id: h.id,
          title: h.name,
          sub: `${h.city}, ${h.perk}`,
          tag: `${h.stars}-star hotel`,
          price: h.price,
          note: "per night",
        })),
  },
  cars: {
    label: "Car rental",
    cta: "Find cars",
    fields: [
      { name: "city", label: "Pick-up city", type: "select", options: carCities },
      { name: "type", label: "Car type", type: "select", options: ["Any", "Economy", "SUV", "Luxury", "Van"] },
      { name: "date", label: "Pick-up date", type: "date" },
      { name: "days", label: "Days", type: "number", default: 3, min: 1, max: 30 },
    ],
    empty: "No cars of this type in the selected city. Try Any type.",
    run: (v) =>
      cars
        .filter((c) => c.city === v.city && (v.type === "Any" || c.type === v.type))
        .map((c) => ({
          id: c.id,
          title: c.name,
          sub: `${c.city}, ${c.seats} seats`,
          tag: c.type,
          price: c.price * (Number(v.days) || 1),
          note: `${Number(v.days) || 1} day(s)`,
        })),
  },
  visa: {
    label: "Visa",
    cta: "Check visa options",
    fields: [
      { name: "country", label: "Destination", type: "select", options: visaCountries },
      { name: "purpose", label: "Visa type", type: "select", options: ["Any", "Tourist", "Business"] },
    ],
    empty: "No visa product for this combination. Contact us and we will check for you.",
    run: (v) =>
      visas
        .filter((x) => x.country === v.country && (v.purpose === "Any" || x.purpose === v.purpose))
        .map((x) => ({
          id: x.id,
          title: `${x.country} ${x.purpose.toLowerCase()} visa`,
          sub: `Processing: ${x.time}. Valid for ${x.valid}.`,
          tag: "Documents checked by our team",
          price: x.price,
          note: "service fee",
        })),
  },
};

export const tabOrder = ["flights", "hotels", "cars", "visa"];
