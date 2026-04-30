import { problemContent } from "../content";

export function Problem() {
  return (
    <section id="problem" className="bg-muted-background py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {problemContent.headline}
          </h2>
          <ul className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-6 text-left sm:grid-cols-2">
            {problemContent.issues.map((issue, index) => (
              <li key={index} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                <span className="font-medium text-foreground">{issue}</span>
              </li>
            ))}
          </ul>
          <p className="mt-12 text-xl font-medium text-primary">
            {problemContent.conclusion}
          </p>
        </div>
      </div>
    </section>
  );
}
