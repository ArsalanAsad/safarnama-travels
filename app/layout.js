import "./globals.css";
import { Sora, DM_Sans } from "next/font/google";

const display = Sora({ subsets: ["latin"], variable: "--font-display" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: "Safarnama Travels | Visas, Flights, Hotels and Car Rental",
  description:
    "Plan your whole trip in one place: visa services, flight tickets, hotel booking and car rental.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-sand font-sans text-ink antialiased">
        <noscript>
          <style>{"[data-hero],[data-stamp],[data-reveal]{opacity:1}"}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
