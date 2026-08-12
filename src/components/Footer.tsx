import Link from "next/link";
import Image from "next/image";
import { footerContent } from "../content";

export function Footer() {
  return (
    <footer className="bg-ink border-t border-white/10 pt-11 pb-7 text-white">
      <div className="wrap">
        <div className="flex justify-between flex-wrap gap-8 mb-8">
          <div>
            <div className="font-display font-semibold text-lg flex items-center gap-2 mb-2.5">
              <div className="relative flex h-20 w-40 items-center justify-center overflow-hidden rounded-sm">
                <Image
                  src="/logoCropped.png"
                  alt="Shoonyank Logo"
                  fill
                  className="object-contain filter"
                />
              </div>
              {/* <span className="font-display tracking-tight">Shoonyank</span> */}
            </div>
            <p className="text-[#8D95A2] text-[13.5px] max-w-[280px] leading-relaxed">
              {footerContent.description}
            </p>
          </div>

          <div className="flex gap-14 flex-wrap">
            <div className="min-w-[100px]">
              <h5 className="font-mono text-xs text-[#7FC7AB] tracking-[0.08em] uppercase mb-3.5">
                Site
              </h5>
              <div className="flex flex-col">
                {footerContent.siteLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-[#AEB5C0] text-[13.5px] py-1.25 hover:text-white transition-colors duration-150"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="min-w-[100px]">
              <h5 className="font-mono text-xs text-[#7FC7AB] tracking-[0.08em] uppercase mb-3.5">
                Company
              </h5>
              <div className="flex flex-col">
                {footerContent.companyLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-[#AEB5C0] text-[13.5px] py-1.25 hover:text-white transition-colors duration-150"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 pt-5.5 flex justify-between flex-wrap gap-2.5 text-[12.5px] text-[#6E7684] font-mono">
          <span>{footerContent.copyright}</span>
          <span>{footerContent.attribution}</span>
        </div>
      </div>
    </footer>
  );
}
