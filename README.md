# Safarnama Travels

A modern, fully responsive travel agency website built with **Next.js (App Router)**, **Tailwind CSS** and **GSAP**. It offers four services: **Visa Services, Flight Ticket Booking, Hotel Booking and Car Rental**. There is no backend; all searches run on mock data.

**Live demo:** [https://safarnama-travels.vercel.app/)]*

## Features

- Responsive layout for mobile, tablet and desktop, with a collapsible mobile menu
- Tabbed search panel (Flights, Hotels, Car rental, Visa) with working forms and mock results
- Service cards that open the matching search tab
- Popular destinations grid, stats counters, testimonials, contact form and footer
- GSAP animations: hero entrance, rotating stamp, scroll reveals, animated counters, card hover effects and search-result transitions
- `prefers-reduced-motion` respected (animations are skipped)
- Reusable components and all content kept in one data file

## Tech stack

| Tool | Purpose |
| --- | --- |
| Next.js 14 (App Router) | Framework and routing |
| Tailwind CSS 3 | Styling |
| GSAP 3 + ScrollTrigger | Animations |

## Getting started

Requirements: **Node.js 18.17 or newer** and npm.

```bash
git clone https://github.com/<your-username>/safarnama-travels.git
cd safarnama-travels
npm install
npm run dev
```

Open http://localhost:3000.

Production build:

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.js        Root layout, fonts, metadata
  page.js          Page composition
  globals.css      Tailwind layers and base styles
components/
  Animations.js    All GSAP logic (hero, reveals, counters, hover)
  Navbar.js  Hero.js  SearchPanel.js  Services.js  Destinations.js
  Stats.js  Testimonials.js  Contact.js  Footer.js
  Section.js       Reusable section wrapper
data/
  mock.js          Mock flights, hotels, cars, visas and page content
```

## How the animations work

Elements marked with these attributes are picked up by `components/Animations.js`:

- `data-hero` and `data-stamp`: hero entrance timeline
- `data-reveal`: fade and slide in on scroll (ScrollTrigger)
- `data-counter` and `data-suffix`: number counts up when visible
- `data-hover` and `data-zoom`: card lift and background zoom on hover

## Customising

- Edit routes, prices, hotels, cars and visas in `data/mock.js`.
- Change colours and fonts in `tailwind.config.js` and `app/layout.js`.
- Replace a destination gradient with a photo by adding an `<img>` inside the `data-zoom` element in `components/Destinations.js`.

## Deploying to Vercel

1. Push this repository to GitHub.
2. Go to https://vercel.com/new and import the repository.
3. Keep the default settings (Framework: Next.js) and click **Deploy**.

## Notes

All names, prices, reviews and contact details are placeholders. Booking and contact forms are demos and send nothing.
