import Link from "next/link";

import { aboutPage, primaryCta, secondaryCta } from "@/content/site";

/**
 * Hero stranice O nama (PRD §2, §8):
 * asimetričan editorijalni layout — manifestni naslov levo,
 * apstraktna „svetlosna“ kompozicija desno (brend metafora).
 */
export function AboutPageHero() {
  const { hero } = aboutPage;

  return (
    <section className="relative isolate overflow-hidden bg-background">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[3%] top-[-12%] h-[32rem] w-[28rem] rounded-full bg-[radial-gradient(closest-side,rgba(245,158,11,0.09),transparent)] blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-8%] h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(closest-side,rgba(212,160,23,0.05),transparent)] blur-2xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_320px] lg:gap-16 xl:grid-cols-[1fr_360px]">
          <div>
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-7 rounded-full bg-primary/65" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/60">
                {hero.eyebrow}
              </p>
            </div>

            <h1 className="mt-6 max-w-xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
              {hero.titleStart}{" "}
              <span className="text-primary">{hero.titleAccent}</span>
            </h1>

            <p className="mt-5 max-w-lg text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
              {hero.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href={primaryCta.href}
                className="inline-flex h-11 items-center rounded-xl bg-foreground px-6 text-[13.5px] font-semibold text-background shadow-sm transition-opacity duration-200 hover:opacity-85"
              >
                {primaryCta.label}
              </Link>
              <Link
                href={secondaryCta.href}
                className="group inline-flex items-center gap-2 text-[13.5px] font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {secondaryCta.label}
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2" role="list">
              {hero.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[12.5px] text-muted-foreground/75"
                >
                  <span aria-hidden className="inline-block h-px w-3.5 rounded-full bg-primary/55" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Apstraktna svetlosna kompozicija — metafora brenda, ne stock foto */}
          <div className="relative mx-auto w-full max-w-[320px] lg:max-w-none" aria-hidden>
            <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl border border-border/35 bg-card/20" />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(245,158,11,0.12),transparent_55%)]" />
              <div className="relative flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <span className="h-[5px] w-[5px] rounded-full bg-primary" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">
                    lumikon
                  </span>
                </div>
                <p className="text-balance text-2xl font-semibold leading-snug tracking-tight text-foreground">
                  Izvodimo biznise{" "}
                  <span className="text-primary">na svetlo.</span>
                </p>
                <div className="space-y-2">
                  <div className="h-px w-full bg-gradient-to-r from-primary/60 via-primary/25 to-transparent" />
                  <div className="h-px w-3/4 bg-gradient-to-r from-primary/40 to-transparent" />
                  <div className="h-px w-1/2 bg-gradient-to-r from-primary/25 to-transparent" />
                </div>
                <p className="text-xs leading-5 text-muted-foreground/70">
                  Svetlost · jasnoća · premium izrada
                </p>
              </div>
            </div>
          </div>
        </div>
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
