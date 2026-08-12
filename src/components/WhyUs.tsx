import { whyUsContent } from "../content";

export function WhyUs() {
  return (
    <section className="py-24 bg-paper" id="why-us">
      <div className="wrap">
        {/* Section Head */}
        <div className="max-w-[640px] mb-14 reveal">
          <div className="font-mono text-[12px] tracking-[0.14em] uppercase text-rust flex items-center gap-[10px] mb-3.5 before:content-[''] before:w-[18px] before:h-[1px] before:bg-rust before:inline-block">
            {whyUsContent.eyebrow}
          </div>
          <h2 className="font-display font-semibold text-[clamp(26px,3.4vw,38px)] text-ink-2 leading-[1.15] tracking-tight">
            {whyUsContent.headline}
          </h2>
        </div>

        {/* Why Us split grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-[60px] items-start">
          {/* Why list */}
          <ul className="list-none reveal">
            {whyUsContent.items.map((item) => (
              <li
                key={item.title}
                className="py-[22px] border-t border-line-soft flex gap-4 last:border-b last:border-line-soft"
              >
                <span className="font-mono text-xs text-rust shrink-0 pt-0.5">
                  →
                </span>
                <div>
                  <h4 className="font-display font-semibold text-[16.5px] text-ink-2 mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-[14.5px] leading-relaxed text-ink-soft">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-[1px] bg-line border border-line reveal">
            {whyUsContent.stats.map((stat, i) => (
              <div key={i} className="bg-white px-[22px] py-7">
                <div className="font-display font-semibold text-[32px] text-ink-2 leading-[1]">
                  {stat.value}
                </div>
                <div className="text-[13px] text-ink-soft mt-1.5 leading-relaxed">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
