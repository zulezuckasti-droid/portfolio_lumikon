import Link from "next/link";

import { FadeIn } from "@/components/motion/fade-in";
import { servicesPage } from "@/content/site";

/**
 * Završni CTA na stranici Usluge (PRD §7, §8):
 * blaga pozadina, jasna poruka, charcoal dugme.
 */
export function ServicesCta() {
  const { cta } = servicesPage;

  return (
    <section
      className="relative isolate border-t border-border/60 bg-secondary/20"
      aria-labelledby="services-cta-heading"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[18rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(245,158,11,0.07),transparent)] blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span aria-hidden className="h-px w-5 rounded-full bg-primary/55" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/60">
              {cta.eyebrow}
            </p>
            <span aria-hidden className="h-px w-5 rounded-full bg-primary/55" />
          </div>

          <h2
            id="services-cta-heading"
            className="mt-6 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {cta.title}
          </h2>

          <p className="mt-4 text-pretty text-base leading-7 text-muted-foreground">
            {cta.subtitle}
          </p>

          <div className="mt-8 flex flex-col items-center gap-4">
            <Link
              href={cta.primary.href}
              className="inline-flex h-11 items-center rounded-xl bg-foreground px-6 text-[13.5px] font-semibold text-background shadow-sm transition-opacity duration-200 hover:opacity-85"
            >
              {cta.primary.label}
            </Link>

            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-5 rounded-full bg-primary/60" />
              <p className="max-w-md text-sm text-muted-foreground/80">{cta.reassurance}</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
