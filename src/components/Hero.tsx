import Link from "next/link";
import { heroContent } from "../content";

export function Hero() {
  return (
    <section className="hero-bg text-white pt-[110px] pb-[90px] relative overflow-hidden">
      <div className="wrap relative z-10">
        {/* Status Tag */}
        <div className="inline-flex items-center gap-2 font-mono text-[12px] text-[#9FB8AC] border border-[#9FB8AC]/35 px-3 py-1.5 rounded-[20px] mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4CD98A]" />
          {heroContent.tag}
        </div>

        {/* Headline */}
        <h1 className="font-display font-semibold text-[clamp(34px,5.2vw,58px)] leading-[1.15] tracking-tight max-w-[820px] mb-5.5">
          Software held to <span className="text-rust">engineering standards</span>, not marketing ones.
        </h1>

        {/* Subtext */}
        <p className="text-[18px] text-[#C4CAD3] max-w-[560px] mb-9 leading-relaxed">
          {heroContent.lead}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3.5 flex-wrap mb-14">
          <Link
            href="#contact"
            className="font-mono text-sm font-medium px-6 py-3.25 rounded-custom inline-flex items-center gap-2 transition duration-150 cursor-pointer bg-rust text-white border border-rust hover:opacity-92 hover:-translate-y-[1px]"
          >
            {heroContent.ctaPrimary} →
          </Link>
          <Link
            href="#benchmarks"
            className="font-mono text-sm font-medium px-6 py-3.25 rounded-custom inline-flex items-center gap-2 transition duration-150 cursor-pointer bg-transparent text-white border border-white/25 hover:border-white/55 hover:-translate-y-[1px]"
          >
            {heroContent.ctaSecondary}
          </Link>
        </div>

        {/* Status Strip */}
        <div className="flex flex-wrap gap-0 border-t border-white/12 pt-6.5">
          <span className="font-mono text-[12.5px] text-[#8D95A2] pr-7 mr-7 border-r border-white/12 last:border-r-0 max-sm:border-r-0 max-sm:mr-0 max-sm:pr-0 max-sm:w-full max-sm:pb-2.5">
            SERVICES: <b className="text-[#D6DAE0] font-medium">{heroContent.servicesText}</b>
          </span>
          <span className="font-mono text-[12.5px] text-[#8D95A2] pr-7 mr-7 border-r border-white/12 last:border-r-0 max-sm:border-r-0 max-sm:mr-0 max-sm:pr-0 max-sm:w-full max-sm:pb-2.5">
            DELIVERY: <b className="text-[#D6DAE0] font-medium">{heroContent.deliveryText}</b>
          </span>
          <span className="font-mono text-[12.5px] text-[#8D95A2] pr-7 mr-7 border-r border-white/12 last:border-r-0 max-sm:border-r-0 max-sm:mr-0 max-sm:pr-0 max-sm:w-full max-sm:pb-2.5">
            BASED IN: <b className="text-[#D6DAE0] font-medium">{heroContent.basedInText}</b>
          </span>
        </div>
      </div>
    </section>
  );
}
