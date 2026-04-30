import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Problem } from "../components/Problem";
import { WhatWeDo } from "../components/WhatWeDo";
import { AboutUs } from "../components/AboutUs";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <WhatWeDo />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
