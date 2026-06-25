import Link from "next/link";

import { servicesPage } from "@/content/site";

/**
 * Flagship usluga na stranici Usluge (PRD §4, §8):
 * asimetričan 2-koloni layout — narativ levo, deliverables desno.
 */
export function ServicesFlagship() {
  const { flagship } = servicesPage;

  return (
    <section
      id="glavna-usluga"
      className="relative isolate border-t border-border/60 bg-background"
      aria-labelledby="flagship-heading"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-8%] top-1/3 h-[20rem] w-[22rem] rounded-full bg-[radial-gradient(closest-side,rgba(245,158,11,0.07),transparent)] blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16 lg:items-start">
          {/* Leva kolona — narativ */}
          <div>
            <div className="flex items-center gap-2.5">
              <span aria-hidden className="h-px w-4 rounded-full bg-primary/65" />
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.13em] text-primary/80">
                {flagship.label}
              </p>
            </div>

            <h2
              id="flagship-heading"
              className="mt-5 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {flagship.title}
            </h2>

            <p className="mt-4 text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
              {flagship.lead}
            </p>

            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {flagship.body}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <Link
                href={flagship.cta.href}
                className="inline-flex h-11 items-center rounded-xl bg-foreground px-6 text-[13.5px] font-semibold text-background shadow-sm transition-opacity duration-200 hover:opacity-85"
              >
                {flagship.cta.label}
              </Link>
              <p className="text-sm text-muted-foreground/70">{flagship.note}</p>
            </div>
          </div>

          {/* Desna kolona — deliverables */}
          <div className="relative rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div
              aria-hidden
              className="absolute bottom-0 left-0 top-0 w-[3px] rounded-l-2xl bg-gradient-to-b from-primary/80 via-primary/50 to-transparent"
            />

            <div className="relative pl-3 sm:pl-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground/55">
                {flagship.deliverablesLabel}
              </p>

              <ul className="mt-6 space-y-5" role="list">
                {flagship.deliverables.map((item) => (
                  <li key={item.title} className="flex gap-3.5">
                    <span className="mt-[7px] shrink-0">
                      <span aria-hidden className="inline-block h-px w-3.5 rounded-full bg-primary/55" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold leading-6 text-foreground">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
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
