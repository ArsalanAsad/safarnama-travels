"use client";
import { useState } from "react";
import Section from "./Section";

const inputClass =
  "mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-3 text-sm focus:border-sea focus:outline-none focus:ring-2 focus:ring-saffron";
const empty = { name: "", email: "", service: "Visa Services", message: "" };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [sentTo, setSentTo] = useState("");
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    // No backend: this is where a real API call would go.
    setSentTo(form.name);
    setForm(empty);
  };

  return (
    <Section id="contact" title="Tell us where you want to go" intro="Send a message and an agent will reply within one working day.">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div data-reveal className="space-y-4 text-ink/80">
          <p><span className="block font-semibold text-ink">Phone</span>+92 300 0000000</p>
          <p><span className="block font-semibold text-ink">Email</span>hello@safarnama.example</p>
          <p><span className="block font-semibold text-ink">Office</span>Shahrah-e-Faisal, Karachi</p>
          <p><span className="block font-semibold text-ink">Hours</span>Monday to Saturday, 10am to 7pm</p>
        </div>

        <form data-reveal onSubmit={submit} className="space-y-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium">Full name
              <input required className={inputClass} value={form.name} onChange={set("name")} />
            </label>
            <label className="text-sm font-medium">Email
              <input required type="email" className={inputClass} value={form.email} onChange={set("email")} />
            </label>
          </div>
          <label className="block text-sm font-medium">Service
            <select className={inputClass} value={form.service} onChange={set("service")}>
              <option>Visa Services</option>
              <option>Flight Tickets</option>
              <option>Hotel Booking</option>
              <option>Car Rental</option>
            </select>
          </label>
          <label className="block text-sm font-medium">Message
            <textarea required rows={4} className={inputClass} value={form.message} onChange={set("message")} />
          </label>
          <button type="submit" className="rounded-full bg-ink px-8 py-3 font-semibold text-white transition hover:bg-sea">Send message</button>
          {sentTo && (
            <p role="status" className="rounded-lg bg-sea/10 p-3 text-sm">
              Thanks, {sentTo}. Your message is in and we will reply within one working day.
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}
