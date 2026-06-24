import Link from "next/link";

import { Button } from "@/components/ui/button";
import { primaryCta, services, servicesSection } from "@/content/site";

/**
 * Usluge sekcija početne strane (PRD §6.3, §4, §8):
 * kompaktan pregled — flagship istaknut, ostalo „na upit",
 * suptilna dodatna vrednost (vizuali, copywriting, automatizacija).
 */
export function Services() {
  const flagship = services.find((service) => service.flagship);
  const compactServices = services.filter((service) => !service.flagship);

  return (
    <section
      id="usluge"
      className="relative isolate bg-background"
      aria-labelledby="services-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[-10%] top-1/4 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(closest-side,rgba(245,158,11,0.1),transparent)] blur-2xl" />
        <div className="absolute right-[-5%] bottom-0 h-[18rem] w-[28rem] rounded-full bg-[radial-gradient(closest-side,rgba(212,160,23,0.08),transparent)] blur-2xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/70 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
            {servicesSection.eyebrow}
          </span>

          <h2
            id="services-heading"
            className="mt-6 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {servicesSection.title}
          </h2>

          <p className="mt-4 text-pretty text-lg leading-8 text-muted-foreground">
            {servicesSection.subtitle}
          </p>
        </div>

        <div className="mt-16 space-y-6">
          {flagship ? (
            <article className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-accent/30 p-6 shadow-sm sm:p-8">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[radial-gradient(closest-side,rgba(245,158,11,0.18),transparent)] blur-xl"
              />

              <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                    {servicesSection.flagshipLabel}
                  </span>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {flagship.title}
                  </h3>

                  <p className="mt-3 text-base leading-7 text-muted-foreground sm:text-lg">
                    {flagship.description}
                  </p>
                </div>

                <div className="hidden shrink-0 lg:block">
                  <FlagshipMockup />
                </div>
              </div>

              <div className="relative mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted-foreground">
                  {servicesSection.onRequestLabel} — prilagođavamo obim i budžet vašem projektu.
                </p>

                <Button asChild className="shrink-0 font-semibold shadow-sm">
                  <Link href={servicesSection.cta.href}>
                    {servicesSection.cta.label}
                  </Link>
                </Button>
              </div>
            </article>
          ) : null}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {compactServices.map((service) => (
              <article
                key={service.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/20 hover:bg-secondary/30"
              >
                <ServiceIcon className="h-9 w-9 text-primary" />

                <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
                  {service.title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
                  {service.description}
                </p>

                <p className="mt-4 text-xs font-medium uppercase tracking-wider text-muted-foreground/80">
                  {servicesSection.onRequestLabel}
                </p>
              </article>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-6 text-muted-foreground">
          {servicesSection.extras.description}
        </p>

        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline" size="lg" className="h-12 px-7 font-semibold">
            <Link href={primaryCta.href}>{primaryCta.label}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function FlagshipMockup() {
  return (
    <div className="w-56 overflow-hidden rounded-xl border border-border/80 bg-card shadow-lg shadow-black/5">
      <div className="flex items-center gap-1.5 border-b border-border bg-secondary/60 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-destructive/70" aria-hidden />
        <span className="h-2 w-2 rounded-full bg-primary/80" aria-hidden />
        <span className="h-2 w-2 rounded-full bg-muted-foreground/40" aria-hidden />
      </div>

      <div className="space-y-3 p-4">
        <div className="h-4 w-4/5 rounded bg-gradient-to-r from-primary/70 to-brand-gold/60" />
        <div className="h-2.5 w-full rounded bg-muted" />
        <div className="h-2.5 w-5/6 rounded bg-muted" />
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-md border border-border bg-secondary/50 p-2">
              <div className="h-3 w-3 rounded bg-primary/80" />
              <div className="mt-2 h-1.5 w-full rounded bg-muted" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ServiceIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
      className={className}
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 4V2M16 4V2" strokeLinecap="round" />
    </svg>
  );
}
