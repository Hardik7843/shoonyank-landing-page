import { servicesContent } from "../content";

export function Services() {
  return (
    <section className="py-24 bg-ink text-white" id="services">
      <div className="wrap">
        {/* Section Head */}
        <div className="max-w-[640px] mb-14 reveal">
          <div className="font-mono text-[12px] tracking-[0.14em] uppercase text-[#7FC7AB] flex items-center gap-[10px] mb-3.5 before:content-[''] before:w-[18px] before:h-[1px] before:bg-[#7FC7AB] before:inline-block">
            {servicesContent.eyebrow}
          </div>
          <h2 className="font-display font-semibold text-[clamp(26px,3.4vw,38px)] text-white leading-[1.15] tracking-tight">
            {servicesContent.headline}
          </h2>
          <p className="text-[#AEB5C0] text-base mt-3.5 leading-relaxed">
            {servicesContent.subtext}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10 reveal">
          {servicesContent.items.map((item) => (
            <div key={item.num} className="bg-ink px-6.5 py-7.5">
              <div className="font-mono text-xs text-[#7FC7AB] mb-4">
                {item.num}
              </div>
              <h3 className="font-display font-semibold text-lg text-white mb-2.5">
                {item.title}
              </h3>
              <p className="text-[14.5px] leading-relaxed text-[#9FA6B2]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
