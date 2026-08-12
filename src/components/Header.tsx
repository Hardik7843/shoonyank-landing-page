"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navigation } from "../content";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-ink/96 border-b border-white/8 backdrop-blur-md">
      <nav className="flex items-center justify-between px-8 py-[12px] max-w-[1140px] mx-auto">
        <Link
          href="#"
          onClick={() => setIsMobileMenuOpen(false)}
          className="flex items-center gap-2.5 font-display font-semibold text-[19px] text-white hover:opacity-90 transition-opacity"
        >
          <div className="relative flex h-16 w-32 items-center justify-center overflow-hidden rounded-sm">
            <Image
              src="/logoCropped.png"
              alt="Shoonyank Logo"
              fill
              className="object-contain filter"
              priority
            />
          </div>
          {/* <span className="font-display tracking-tight">Shoonyank</span> */}
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-[#B8BFC9] text-sm hover:text-white transition-colors duration-150"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="inline-block font-mono text-[13px] font-medium text-white bg-rust border border-rust px-[18px] py-2.25 rounded-custom hover:opacity-88 hover:-translate-y-[1px] transition duration-150 cursor-pointer"
          >
            Start a project
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex md:hidden text-white text-2xl focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/8 bg-ink/96 backdrop-blur-md px-8 py-4 space-y-4">
          <ul className="flex flex-col gap-4 list-none">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-[#B8BFC9] text-sm hover:text-white transition-colors py-1"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-2 border-t border-white/8">
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center font-mono text-[13px] font-medium text-white bg-rust border border-rust px-4 py-2.5 rounded-custom hover:opacity-88 hover:-translate-y-[1px] transition duration-150 cursor-pointer"
            >
              Start a project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
