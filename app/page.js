import Animations from "@/components/Animations";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchPanel from "@/components/SearchPanel";
import Services from "@/components/Services";
import Destinations from "@/components/Destinations";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Animations />
      <Navbar />
      <main>
        <Hero />
        <section id="search" className="relative z-10 -mt-24 scroll-mt-20 px-5">
          <SearchPanel />
        </section>
        <Services />
        <Destinations />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
