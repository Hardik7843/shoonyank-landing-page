import { benchmarksContent } from "../content";

export function Benchmarks() {
  return (
    <section className="py-24 bg-paper" id="benchmarks">
      <div className="wrap">
        {/* Section Head */}
        <div className="max-w-[640px] mb-14 reveal">
          <div className="font-mono text-[12px] tracking-[0.14em] uppercase text-rust flex items-center gap-[10px] mb-3.5 before:content-[''] before:w-[18px] before:h-[1px] before:bg-rust before:inline-block">
            {benchmarksContent.eyebrow}
          </div>
          <h2 className="font-display font-semibold text-[clamp(26px,3.4vw,38px)] text-ink-2 leading-[1.15] tracking-tight">
            {benchmarksContent.headline}
          </h2>
          <p className="text-ink-soft text-base mt-3.5 leading-relaxed">
            {benchmarksContent.subtext}
          </p>
        </div>

        {/* Benchmarks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-line border border-line reveal">
          {benchmarksContent.items.map((item) => (
            <div key={item.code} className="bm-card bg-paper px-6.5 py-7 relative">
              <span className="font-mono text-xs text-rust tracking-[0.06em] mb-3 block">
                {item.code}
              </span>
              <h3 className="font-display font-semibold text-lg text-ink-2 mb-2.5">
                {item.title}
              </h3>
              <p className="text-[14.5px] leading-relaxed text-ink-soft">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
