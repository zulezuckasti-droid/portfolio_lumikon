import Link from "next/link";

import { Button } from "@/components/ui/button";
import { hero, primaryCta, secondaryCta } from "@/content/site";

/**
 * Hero sekcija početne strane (PRD §6.1, §8):
 * snažan value-prop naslov + primarni CTA, svetla tema, amber akcenat,
 * suptilni gradijenti i mockup sajta (bez stock fotki).
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Suptilni amber/zlatni gradijent glow (PRD §8) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[-10%] h-[28rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(245,158,11,0.18),transparent)] blur-2xl" />
        <div className="absolute right-[-10%] top-1/3 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(closest-side,rgba(212,160,23,0.14),transparent)] blur-2xl" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/70 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
          {hero.eyebrow}
        </span>

        <h1 className="mt-8 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {hero.title}
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-muted-foreground">
          {hero.subtitle}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="h-12 px-7 font-semibold shadow-sm">
            <Link href={primaryCta.href}>{primaryCta.label}</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-7 font-semibold">
            <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
          </Button>
        </div>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {hero.highlights.map((item) => (
            <li key={item} className="inline-flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-primary" />
              {item}
            </li>
          ))}
        </ul>

        {/* Mockup sajta — čist CSS browser prozor (PRD §8: mockup + gradijenti) */}
        <div className="mt-16 w-full max-w-4xl">
          <BrowserMockup />
        </div>
      </div>
    </section>
  );
}

function BrowserMockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xl shadow-black/5">
      {/* Traka prozora */}
      <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-destructive/70" aria-hidden />
        <span className="h-3 w-3 rounded-full bg-primary/80" aria-hidden />
        <span className="h-3 w-3 rounded-full bg-muted-foreground/40" aria-hidden />
        <span className="ml-3 hidden flex-1 rounded-md bg-background/80 px-3 py-1 text-left text-xs text-muted-foreground sm:block">
          lumikon.rs
        </span>
      </div>

      {/* Sadržaj — apstraktan layout sajta */}
      <div className="grid gap-6 p-6 sm:grid-cols-5 sm:p-8">
        <div className="flex flex-col gap-4 text-left sm:col-span-3">
          <div className="h-7 w-3/4 rounded-md bg-gradient-to-r from-primary/70 to-brand-gold/60" />
          <div className="h-4 w-full rounded bg-muted" />
          <div className="h-4 w-5/6 rounded bg-muted" />
          <div className="mt-2 flex gap-3">
            <div className="h-9 w-28 rounded-lg bg-primary/90" />
            <div className="h-9 w-28 rounded-lg border border-border bg-background" />
          </div>
        </div>
        <div className="relative hidden sm:col-span-2 sm:block">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/15 via-accent to-background" />
          <div className="absolute bottom-4 left-4 right-4 space-y-2">
            <div className="h-3 w-2/3 rounded bg-background/70" />
            <div className="h-3 w-1/2 rounded bg-background/60" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:col-span-5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="rounded-lg border border-border bg-secondary/40 p-4"
            >
              <div className="h-6 w-6 rounded-md bg-primary/80" />
              <div className="mt-3 h-3 w-3/4 rounded bg-muted" />
              <div className="mt-2 h-3 w-1/2 rounded bg-muted" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.2 7.3a1 1 0 0 1-1.42.005l-3.5-3.5a1 1 0 1 1 1.414-1.414l2.79 2.79 6.494-6.59a1 1 0 0 1 1.416-.006Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
