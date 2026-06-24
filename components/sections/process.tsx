import { processSection, processSteps } from "@/content/site";

/**
 * Kako radimo (proces) sekcija početne strane (PRD §6.5, §8):
 * četiri koraka — Razgovor → Plan → Dizajn/Izrada → Lansiranje.
 */
export function Process() {
  return (
    <section
      id="proces"
      className="relative isolate bg-ink text-ink-foreground"
      aria-labelledby="process-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute right-[-5%] top-1/4 h-[22rem] w-[28rem] rounded-full bg-[radial-gradient(closest-side,rgba(245,158,11,0.1),transparent)] blur-2xl" />
        <div className="absolute bottom-0 left-[-10%] h-[18rem] w-[24rem] rounded-full bg-[radial-gradient(closest-side,rgba(212,160,23,0.08),transparent)] blur-2xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
            {processSection.eyebrow}
          </span>

          <h2
            id="process-heading"
            className="mt-6 text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {processSection.title}
          </h2>

          <p className="mt-4 text-pretty text-lg leading-8 text-white/60">
            {processSection.subtitle}
          </p>
        </div>

        <ol className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Horizontal connector (desktop) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block"
          />

          {processSteps.map((step, index) => (
            <li key={step.title} className="relative flex flex-col">
              <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-0">
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-primary/30 bg-primary/15 text-lg font-semibold text-primary">
                  {index + 1}
                </span>

                <div className="lg:mt-6">
                  <h3 className="text-lg font-semibold tracking-tight text-white/90">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-white/50 sm:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
