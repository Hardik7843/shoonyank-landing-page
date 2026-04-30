import Link from "next/link";
import { footerContent } from "../content";

export function Footer() {
  return (
    <footer className="bg-background pt-16 md:pt-24 pb-8 md:pb-12 border-t border-border/40">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-16">
          
          <div className="flex flex-col justify-between max-w-[280px]">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary border border-primary/20 shadow-sm">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </span>
                <span className="font-semibold text-xl text-foreground tracking-tight">
                  Cadence
                </span>
              </div>
              <p className="text-[15px] leading-relaxed text-muted">
                {footerContent.brandText}
              </p>
            </div>
            
            {/* Desktop only - bottom left */}
            <div className="hidden md:flex mt-20 items-center gap-2 text-[13px] text-muted">
              <span>Created by</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-border text-[9px] font-bold text-foreground">
                CN
              </span>
              <span className="font-medium text-foreground">Company Name</span>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 md:gap-32 w-full md:w-auto">
            <div className="flex flex-col">
              <h4 className="mb-6 font-semibold text-[15px] text-foreground">
                Navigation
              </h4>
              <nav className="flex flex-col space-y-4">
                {footerContent.navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-[14px] text-muted transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex flex-col">
              <h4 className="mb-6 font-semibold text-[15px] text-foreground">
                Company Links
              </h4>
              <nav className="flex flex-col space-y-4">
                {footerContent.companyLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-[14px] text-muted transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          
          {/* Mobile only - bottom stack */}
          <div className="flex md:hidden mt-2 pt-8 border-t border-border/40 items-center gap-2 text-[13px] text-muted">
            <span>Created by</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-border text-[9px] font-bold text-foreground">
              CN
            </span>
            <span className="font-medium text-foreground">Company Name</span>
          </div>

        </div>
      </div>
    </footer>
  );
}


