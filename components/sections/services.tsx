import Link from "next/link";

import { FadeIn } from "@/components/motion/fade-in";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { primaryCta, services, servicesSection } from "@/content/site";

/**
 * Usluge sekcija početne strane (PRD §6.3, §4, §8):
 * kompaktan pregled — flagship istaknut levim amber stripe-om,
 * ostalo na upit, charcoal CTA.
 */
export function Services() {
  const flagship = services.find((s) => s.flagship);
  const compact = services.filter((s) => !s.flagship);

  return (
    <section
      id="usluge"
      className="relative isolate bg-background"
      aria-labelledby="services-heading"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-8%] top-1/4 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(closest-side,rgba(245,158,11,0.07),transparent)] blur-3xl" />
        <div className="absolute right-[-5%] bottom-0 h-[18rem] w-[26rem] rounded-full bg-[radial-gradient(closest-side,rgba(212,160,23,0.06),transparent)] blur-2xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
        <FadeIn className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-5 rounded-full bg-primary/55" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/60">
              {servicesSection.eyebrow}
            </p>
            <span aria-hidden className="h-px w-5 rounded-full bg-primary/55" />
          </div>

          <h2
            id="services-heading"
            className="mt-6 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {servicesSection.title}
          </h2>

          <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            {servicesSection.subtitle}
          </p>
        </FadeIn>

        <div className="mt-14 space-y-5">
          {flagship ? (
            <FadeIn>
            <article className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <div
                aria-hidden
                className="absolute bottom-0 left-0 top-0 w-[3px] rounded-l-2xl bg-gradient-to-b from-primary/80 via-primary/50 to-transparent"
              />

              <div className="relative pl-4 sm:pl-5">
                <div className="flex items-center gap-2.5">
                  <span aria-hidden className="h-px w-4 rounded-full bg-primary/65" />
                  <p className="text-[10.5px] font-semibold uppercase tracking-[0.13em] text-primary/80">
                    {servicesSection.flagshipLabel}
                  </p>
                </div>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {flagship.title}
                </h3>

                <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                  {flagship.description}
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-muted-foreground/70">
                    {servicesSection.onRequestLabel} — prilagođavamo obim i budžet vašem projektu.
                  </p>

                  <Link
                    href={servicesSection.cta.href}
                    className="inline-flex h-10 shrink-0 items-center rounded-lg bg-foreground px-5 text-[13px] font-semibold text-background transition-opacity duration-200 hover:opacity-85"
                  >
                    {servicesSection.cta.label}
                  </Link>
                </div>
              </div>
            </article>
            </FadeIn>
          ) : null}

          <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {compact.map((service) => (
              <StaggerItem key={service.title}>
              <article
                className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors duration-200 hover:border-border/80 hover:bg-secondary/20"
              >
                <span aria-hidden className="h-px w-6 rounded-full bg-primary/50" />

                <h3 className="mt-5 text-[15px] font-semibold tracking-tight text-foreground">
                  {service.title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
                  {service.description}
                </p>

                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground/50">
                  {servicesSection.onRequestLabel}
                </p>
              </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <FadeIn delay={0.05}>
        <p className="mx-auto mt-9 max-w-2xl text-center text-sm leading-6 text-muted-foreground/70">
          {servicesSection.extras.description}
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href={primaryCta.href}
            className="group inline-flex items-center gap-2 text-[13.5px] font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            {primaryCta.label}
            <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
      className={className}
    >
      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
