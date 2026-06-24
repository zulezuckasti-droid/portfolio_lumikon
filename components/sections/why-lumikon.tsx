import { whyLumikonSection } from "@/content/site";

/**
 * Zašto Lumikon sekcija početne strane (PRD §6.4, §8):
 * kvalitet dizajna, posvećenost, jasan proces — tri stuba poverenja.
 */
export function WhyLumikon() {
  const icons = [DesignIcon, HeartIcon, RouteIcon];

  return (
    <section
      id="zasto-lumikon"
      className="relative isolate bg-secondary/40"
      aria-labelledby="why-lumikon-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-0 h-[20rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(245,158,11,0.08),transparent)] blur-2xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
            {whyLumikonSection.eyebrow}
          </span>

          <h2
            id="why-lumikon-heading"
            className="mt-6 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {whyLumikonSection.title}
          </h2>

          <p className="mt-4 text-pretty text-lg leading-8 text-muted-foreground">
            {whyLumikonSection.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyLumikonSection.pillars.map((pillar, index) => {
            const Icon = icons[index] ?? DesignIcon;

            return (
              <article
                key={pillar.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="h-5 w-5" />
                </span>

                <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                  {pillar.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground sm:text-base">
                  {pillar.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DesignIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
      className={className}
    >
      <path
        d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"
        strokeLinejoin="round"
      />
      <path d="M5 19h14M8 16h8" strokeLinecap="round" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
      className={className}
    >
      <path
        d="M12 21s-6.5-4.35-9-8.5C1.5 9.5 3.5 6 7 6c2 0 3.5 1.2 5 3 1.5-1.8 3-3 5-3 3.5 0 5.5 3.5 4 6.5-2.5 4.15-9 8.5-9 8.5z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RouteIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
      className={className}
    >
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="6" r="2" />
      <path d="M8 16l4-4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
