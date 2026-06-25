import Link from "next/link";

import { FadeIn } from "@/components/motion/fade-in";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { hero, primaryCta, secondaryCta } from "@/content/site";

/**
 * Hero sekcija početne strane (PRD §6.1, §8):
 * Editorijalni 2-koloni layout — tekst levo, dizajn kompozicija desno.
 * Naslov levo-poravnat, "na svetlo." u amber boji kao brend akcenat.
 * CTA dugmad: primarni tamni charcoal, sekundarni text-link sa strelicom.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background">
      {/* Topli ambient glow — suptilniji od prethodnog */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[8%] top-[-8%] h-[30rem] w-[26rem] rounded-full bg-[radial-gradient(closest-side,rgba(245,158,11,0.09),transparent)] blur-3xl" />
        <div className="absolute left-[-8%] bottom-[-5%] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(closest-side,rgba(212,160,23,0.06),transparent)] blur-2xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_360px] lg:gap-14 xl:grid-cols-[1fr_400px] xl:gap-20">

          {/* ── Leva kolona: sadržaj ─────────────────────────────── */}
          <StaggerGroup when="mount" className="flex flex-col">
            <StaggerItem>
              <div className="flex items-center gap-3">
                <span aria-hidden className="h-px w-7 rounded-full bg-primary/70" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/60">
                  {hero.eyebrow}
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <h1 className="mt-6 max-w-lg text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem]">
                {hero.titleStart}{" "}
                <span className="text-primary">{hero.titleAccent}</span>
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="mt-5 max-w-[420px] text-base leading-[1.75] text-muted-foreground sm:text-[16.5px]">
                {hero.subtitle}
              </p>
            </StaggerItem>

            <StaggerItem>
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
            </StaggerItem>

            <StaggerItem>
              <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2" role="list">
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
            </StaggerItem>
          </StaggerGroup>

          {/* ── Desna kolona: dizajn kompozicija ─────────────────── */}
          <FadeIn when="mount" direction="right" delay={0.12} className="relative pb-3 pr-3 lg:block">
            {/* Dubinski slojevi (bez animacije, čist CSS) */}
            <div
              aria-hidden
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-border/40 bg-card/30"
            />
            <div
              aria-hidden
              className="absolute inset-0 translate-x-[6px] translate-y-[6px] rounded-2xl border border-border/60 bg-card/60"
            />

            {/* Glavni kartični okvir */}
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-black/[0.07]">

              {/* Simulacija navigacije */}
              <div className="flex items-center justify-between border-b border-border/60 bg-secondary/40 px-4 py-3">
                <div className="flex items-baseline gap-1">
                  <span className="text-[11px] font-semibold tracking-tight text-foreground/90">
                    Lumikon
                  </span>
                  <span
                    aria-hidden
                    className="mb-px h-[4px] w-[4px] translate-y-[-2px] rounded-full bg-primary"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-muted-foreground/55">Usluge</span>
                  <span className="text-[10px] text-muted-foreground/55">O nama</span>
                  <div className="rounded-md bg-foreground/90 px-2 py-0.5">
                    <span className="text-[9px] font-semibold leading-none text-background/90">
                      Kontakt
                    </span>
                  </div>
                </div>
              </div>

              {/* Hero sadržaj unutar kartice */}
              <div className="px-5 pb-4 pt-5">
                <p className="mb-2.5 text-[8.5px] font-semibold uppercase tracking-[0.13em] text-primary/75">
                  Digitalna agencija · Srbija
                </p>
                <p className="text-[16px] font-semibold leading-[1.3] tracking-tight text-foreground">
                  Moderni veb sajtovi
                </p>
                <p className="text-[16px] font-semibold leading-[1.3] tracking-tight text-foreground">
                  koji donose upite.
                </p>
                {/* Amber separator linija */}
                <div className="my-3 h-px w-8 rounded-full bg-primary/45" />
                {/* Apstraktni tekst redovi */}
                <div className="space-y-[5px]">
                  <div className="h-[5px] w-full rounded-sm bg-muted/65" />
                  <div className="h-[5px] w-[82%] rounded-sm bg-muted/65" />
                </div>
                {/* Mini CTA */}
                <div className="mt-4 flex items-center gap-2">
                  <div className="rounded-lg bg-foreground px-3 py-[7px]">
                    <span className="text-[9.5px] font-semibold leading-none text-background">
                      Kontaktiraj nas
                    </span>
                  </div>
                  <div className="rounded-lg border border-border px-3 py-[7px]">
                    <span className="text-[9.5px] font-medium leading-none text-muted-foreground/70">
                      Pogledaj usluge
                    </span>
                  </div>
                </div>
              </div>

              {/* Separator */}
              <div className="mx-5 border-t border-border/50" />

              {/* Mini grid usluga — amber dot samo za flagship */}
              <div className="grid grid-cols-3 gap-2 bg-secondary/20 p-4">
                {[
                  { label: "Izrada sajtova", flagship: true },
                  { label: "Redizajn", flagship: false },
                  { label: "Landing strane", flagship: false },
                ].map(({ label, flagship }) => (
                  <div
                    key={label}
                    className="rounded-xl border border-border/60 bg-background/90 px-2.5 py-3"
                  >
                    <div
                      className={`h-1.5 w-1.5 rounded-full ${flagship ? "bg-primary" : "bg-muted-foreground/20"}`}
                    />
                    <p className="mt-2.5 text-[8.5px] font-semibold leading-tight text-foreground/65">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

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
