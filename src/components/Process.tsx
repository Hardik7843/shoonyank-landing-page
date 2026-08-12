import { processContent } from "../content";

export function Process() {
  return (
    <section className="py-24 bg-ink text-white" id="process">
      <div className="wrap">
        {/* Section Head */}
        <div className="max-w-[640px] mb-14 reveal">
          <div className="font-mono text-[12px] tracking-[0.14em] uppercase text-[#7FC7AB] flex items-center gap-[10px] mb-3.5 before:content-[''] before:w-[18px] before:h-[1px] before:bg-[#7FC7AB] before:inline-block">
            {processContent.eyebrow}
          </div>
          <h2 className="font-display font-semibold text-[clamp(26px,3.4vw,38px)] text-white leading-[1.15] tracking-tight">
            {processContent.headline}
          </h2>
          <p className="text-[#AEB5C0] text-base mt-3.5 leading-relaxed">
            {processContent.subtext}
          </p>
        </div>

        {/* Process Steps Row */}
        <div className="flex gap-0 overflow-x-auto pb-2 reveal scrollbar-none">
          {processContent.steps.map((step) => (
            <div
              key={step.step}
              className="proc-step-line last:after:hidden relative flex-1 min-w-[170px] pr-[22px]"
            >
              <div className="w-[34px] h-[34px] rounded-full border border-white/30 flex items-center justify-center font-mono text-[13px] text-[#7FC7AB] mb-4.5 bg-ink relative z-10">
                {step.step}
              </div>
              <h4 className="font-display font-semibold text-[15.5px] text-white mb-2">
                {step.title}
              </h4>
              <p className="text-[13.5px] leading-relaxed text-[#9FA6B2]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
