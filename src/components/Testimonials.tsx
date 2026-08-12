import { testimonialsContent } from "../content";

export function Testimonials() {
  return (
    <section className="py-24 bg-paper-2" id="testimonials">
      <div className="wrap">
        {/* Section Head */}
        <div className="max-w-[640px] mb-14 reveal">
          <div className="font-mono text-[12px] tracking-[0.14em] uppercase text-rust flex items-center gap-[10px] mb-3.5 before:content-[''] before:w-[18px] before:h-[1px] before:bg-rust before:inline-block">
            {testimonialsContent.eyebrow}
          </div>
          <h2 className="font-display font-semibold text-[clamp(26px,3.4vw,38px)] text-ink-2 leading-[1.15] tracking-tight">
            {testimonialsContent.headline}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5.5 reveal">
          {testimonialsContent.items.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-line rounded-lg p-6.5"
            >
              <p className="text-[15px] text-ink-2 mb-4.5 leading-relaxed italic">
                {item.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-[38px] h-[38px] rounded-full bg-teal-light text-teal flex items-center justify-center font-mono text-[13px] font-semibold">
                  {item.avatar}
                </div>
                <div>
                  <div className="text-sm font-medium text-ink-2">
                    {item.name}
                  </div>
                  <div className="text-[12.5px] text-ink-soft">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Note */}
        <div className="font-mono text-[12px] text-ink-soft text-center mt-8 border border-dashed border-line p-3.5 rounded-md reveal">
          {testimonialsContent.note}
        </div>
      </div>
    </section>
  );
}
