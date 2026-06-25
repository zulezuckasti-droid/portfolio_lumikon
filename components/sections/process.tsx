import { processSection, processSteps } from "@/content/site";

/**
 * Kako radimo (proces) sekcija početne strane (PRD §6.5, §8):
 * četiri koraka — Razgovor → Plan → Dizajn/Izrada → Lansiranje.
 * Tamna sekcija za ritam, editorijalni broj tretman.
 */
export function Process() {
  return (
    <section
      id="proces"
      className="relative isolate bg-ink text-ink-foreground"
      aria-labelledby="process-heading"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-[-5%] top-1/3 h-[22rem] w-[26rem] rounded-full bg-[radial-gradient(closest-side,rgba(245,158,11,0.08),transparent)] blur-3xl" />
        <div className="absolute bottom-0 left-[-8%] h-[16rem] w-[22rem] rounded-full bg-[radial-gradient(closest-side,rgba(212,160,23,0.06),transparent)] blur-2xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-5 rounded-full bg-primary/50" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
              {processSection.eyebrow}
            </p>
            <span aria-hidden className="h-px w-5 rounded-full bg-primary/50" />
          </div>

          <h2
            id="process-heading"
            className="mt-6 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {processSection.title}
          </h2>

          <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-white/50 sm:text-lg">
            {processSection.subtitle}
          </p>
        </div>

        <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {/* Horizontalna linija konektor (desktop) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[18px] hidden h-px bg-gradient-to-r from-transparent via-white/8 to-transparent lg:block"
          />

          {processSteps.map((step, index) => (
            <li key={step.title} className="relative flex flex-col">
              {/* Broj — mali, čist, amber */}
              <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-0">
                <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                  <span className="text-sm font-semibold text-primary">
                    {index + 1}
                  </span>
                </div>

                <div className="lg:mt-5">
                  <h3 className="text-[15px] font-semibold tracking-tight text-white/85">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/45">
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
