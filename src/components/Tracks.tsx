import Link from "next/link";
import { tracksContent } from "../content";

export function Tracks() {
  return (
    <section className="py-24 bg-paper-2">
      <div className="wrap">
        {/* Section Head */}
        <div className="max-w-[640px] mb-14 reveal">
          <div className="font-mono text-[12px] tracking-[0.14em] uppercase text-rust flex items-center gap-[10px] mb-3.5 before:content-[''] before:w-[18px] before:h-[1px] before:bg-rust before:inline-block">
            {tracksContent.eyebrow}
          </div>
          <h2 className="font-display font-semibold text-[clamp(26px,3.4vw,38px)] text-ink-2 leading-[1.15] tracking-tight">
            {tracksContent.headline}
          </h2>
          <p className="text-ink-soft text-base mt-3.5 leading-relaxed">
            {tracksContent.subtext}
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal">
          {tracksContent.items.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-line rounded-lg p-[30px] md:p-[34px] flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-1.5 gap-3">
                  <h3 className="font-display font-semibold text-[21px] text-ink-2">
                    {item.title}
                  </h3>
                  <span className="font-mono text-xs text-teal bg-teal-light px-2.5 py-1 rounded-[20px] whitespace-nowrap">
                    {item.timeline}
                  </span>
                </div>
                <p className="text-ink-soft text-[14.5px] mt-3.5 mb-5 leading-relaxed">
                  {item.description}
                </p>
                <ul className="list-none text-[14.5px] text-ink-2">
                  {item.deliverables.map((del, i) => (
                    <li
                      key={i}
                      className="py-2 border-t border-line-soft flex gap-2.5 first:border-t-0"
                    >
                      <span className="text-rust shrink-0">—</span>
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Link
                  href={item.ctaHref}
                  className="inline-flex items-center gap-1.5 mt-5.5 text-sm font-semibold text-rust font-mono hover:opacity-85 transition-opacity"
                >
                  {item.ctaText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
