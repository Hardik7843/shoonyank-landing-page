"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navigation } from "../content";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-6 z-50 flex flex-col items-center px-4 pointer-events-none">
      <div className="pointer-events-auto flex w-full max-w-4xl items-center justify-between rounded-full border border-border/40 bg-background/70 px-6 py-3 backdrop-blur-xl shadow-lg shadow-black/20">
        <div className="flex items-center">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 group"
          >
            <div className="relative flex h-12 w-24 items-center justify-center overflow-hidden rounded-sm transition-transform group-hover:scale-105">
              <Image
                src="/logoCropped.png"
                alt="Cadence Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-all hover:bg-muted-background hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-foreground hover:bg-muted-background md:hidden"
            aria-label="Toggle Menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <Link
            href="#contact"
            className="hidden md:block rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background transition-transform hover:scale-105 active:scale-95 shadow-md"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="pointer-events-auto absolute top-[calc(100%+12px)] flex w-full max-w-[calc(100%-2rem)] flex-col overflow-hidden rounded-2xl border border-border/40 bg-background/95 backdrop-blur-2xl shadow-xl shadow-black/40 md:hidden">
          <nav className="flex flex-col p-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-muted-background hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 border-t border-border/40 pt-4 px-2">
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex w-full items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.02] active:scale-95 shadow-md"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
