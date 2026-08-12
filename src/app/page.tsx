import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Benchmarks } from "../components/Benchmarks";
import { Services } from "../components/Services";
import { Tracks } from "../components/Tracks";
import { Process } from "../components/Process";
import { WhyUs } from "../components/WhyUs";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { ScrollObserver } from "../components/ScrollObserver";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-paper font-sans text-ink-2">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Benchmarks />
        <Services />
        <Tracks />
        <Process />
        <WhyUs />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
      <ScrollObserver />
    </div>
  );
}
