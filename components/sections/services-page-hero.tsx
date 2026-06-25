import Link from "next/link";

import { FadeIn } from "@/components/motion/fade-in";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { primaryCta, servicesPage } from "@/content/site";

/**
 * Hero stranice Usluge (PRD §8): editorijalni layout levo,
 * direktan ton, charcoal CTA.
 */
export function ServicesPageHero() {
  const { hero } = servicesPage;

  return (
    <section className="relative isolate overflow-hidden bg-background">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[5%] top-[-10%] h-[28rem] w-[24rem] rounded-full bg-[radial-gradient(closest-side,rgba(245,158,11,0.08),transparent)] blur-3xl" />
        <div className="absolute bottom-[-8%] left-[-6%] h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(closest-side,rgba(212,160,23,0.06),transparent)] blur-2xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20">
        <StaggerGroup when="mount" className="max-w-2xl">
          <StaggerItem>
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-7 rounded-full bg-primary/65" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/60">
                {hero.eyebrow}
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
              {hero.titleStart}{" "}
              <span className="text-primary">{hero.titleAccent}</span>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
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
              <a
                href="#glavna-usluga"
                className="group inline-flex items-center gap-2 text-[13.5px] font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                Detalji o izradi sajtova
                <ArrowDownIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
              </a>
            </div>
          </StaggerItem>

          <StaggerItem>
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
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}

function ArrowDownIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
      className={className}
    >
      <path d="M8 3v10M4 9l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
