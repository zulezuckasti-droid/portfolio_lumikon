import { whyLumikonSection } from "@/content/site";

/**
 * Zašto Lumikon sekcija početne strane (PRD §6.4, §8):
 * kvalitet dizajna, posvećenost, jasan proces — tri stuba poverenja.
 * Svetla sekcija sa suptilnom blagom pozadinom za ritam posle Usluga.
 */
export function WhyLumikon() {
  const icons = [DesignIcon, HeartIcon, RouteIcon];

  return (
    <section
      id="zasto-lumikon"
      className="relative isolate bg-secondary/25"
      aria-labelledby="why-lumikon-heading"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[20rem] w-[30rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(245,158,11,0.07),transparent)] blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-5 rounded-full bg-primary/55" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/60">
              {whyLumikonSection.eyebrow}
            </p>
            <span aria-hidden className="h-px w-5 rounded-full bg-primary/55" />
          </div>

          <h2
            id="why-lumikon-heading"
            className="mt-6 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {whyLumikonSection.title}
          </h2>

          <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            {whyLumikonSection.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyLumikonSection.pillars.map((pillar, index) => {
            const Icon = icons[index] ?? DesignIcon;

            return (
              <article
                key={pillar.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 sm:p-7"
              >
                {/* Ikona bez teškog amber kruga — samo line + ikona */}
                <div className="flex items-center gap-3">
                  <span aria-hidden className="h-px w-5 rounded-full bg-primary/60" />
                  <Icon className="h-4 w-4 text-primary/80" />
                </div>

                <h3 className="mt-5 text-[17px] font-semibold tracking-tight text-foreground">
                  {pillar.title}
                </h3>

                <p className="mt-2.5 flex-1 text-sm leading-7 text-muted-foreground">
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
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden className={className}>
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" strokeLinejoin="round" />
      <path d="M5 19h14" strokeLinecap="round" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden className={className}>
      <path d="M12 21s-6.5-4.35-9-8.5C1.5 9.5 3.5 6 7 6c2 0 3.5 1.2 5 3 1.5-1.8 3-3 5-3 3.5 0 5.5 3.5 4 6.5-2.5 4.15-9 8.5-9 8.5z" strokeLinejoin="round" />
    </svg>
  );
}

function RouteIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden className={className}>
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="6" r="2" />
      <path d="M8 16l4-4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
