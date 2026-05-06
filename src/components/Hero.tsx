import Link from "next/link";
import Image from "next/image";
import { heroContent } from "../content";

export function Hero() {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center px-4 pt-24 pb-16 text-center md:pt-32 md:pb-24">
      <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        {heroContent.headline}
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">
        {heroContent.subtext}
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="#contact"
          className="rounded-md bg-primary px-8 py-3 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {heroContent.ctaPrimary}
        </Link>
        <Link
          href="#contact"
          className="rounded-md border border-border bg-transparent px-8 py-3 text-lg font-semibold transition-colors hover:bg-muted-background"
        >
          {heroContent.ctaSecondary}
        </Link>
      </div>
      <div className="mt-20 w-full max-w-5xl overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
        <Image
          src="/dashboard.png"
          alt="Dashboard Interface"
          width={1200}
          height={800}
          className="w-full object-cover opacity-90 transition-opacity hover:opacity-100"
          priority
        />
      </div>
    </section>
  );
}
