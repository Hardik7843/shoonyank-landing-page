import { aboutUsContent } from "../content";

export function AboutUs() {
  return (
    <section id="about" className="bg-muted-background py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {aboutUsContent.whoWeAre.title}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted">
              {aboutUsContent.whoWeAre.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-primary">
                {aboutUsContent.ourApproach.title}
              </h3>
              <ul className="space-y-4">
                {aboutUsContent.ourApproach.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-xs text-primary">
                      {index + 1}
                    </span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="mb-6 text-2xl font-bold text-primary">
                {aboutUsContent.whyUs.title}
              </h3>
              <ul className="space-y-4">
                {aboutUsContent.whyUs.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
