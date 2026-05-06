import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-32 pb-16 relative z-10">
        <div className="relative">
          <h1 className="text-[8rem] sm:text-[12rem] font-bold tracking-tighter text-foreground/5 select-none leading-none">
            404
          </h1>
          <div className="absolute inset-0 flex flex-col items-center justify-center mt-8 sm:mt-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Page not found
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted max-w-md mx-auto">
              Sorry, we couldn&apos;t find the page you&apos;re looking for. It
              might have been moved or doesn&apos;t exist.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/"
                className="rounded-full bg-foreground px-8 py-3 text-sm font-semibold text-background transition-all hover:scale-105 hover:bg-foreground/90 active:scale-95 shadow-md"
              >
                Go back home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
