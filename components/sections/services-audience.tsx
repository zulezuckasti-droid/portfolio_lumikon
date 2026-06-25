import { FadeIn } from "@/components/motion/fade-in";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { servicesPage } from "@/content/site";

/**
 * Ciljna publika na stranici Usluge (PRD §3, §8):
 * tamna ink sekcija sa jasnim grupama delatnosti.
 */
export function ServicesAudience() {
  const { audience } = servicesPage;

  return (
    <section
      className="relative isolate bg-ink text-ink-foreground"
      aria-labelledby="audience-heading"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 h-[20rem] w-[32rem] -translate-x-1/2 translate-y-1/3 rounded-full bg-[radial-gradient(closest-side,rgba(245,158,11,0.08),transparent)] blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
        <FadeIn className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-5 rounded-full bg-primary/50" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
              {audience.eyebrow}
            </p>
            <span aria-hidden className="h-px w-5 rounded-full bg-primary/50" />
          </div>

          <h2
            id="audience-heading"
            className="mt-6 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {audience.title}
          </h2>

          <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-white/50">
            {audience.subtitle}
          </p>
        </FadeIn>

        <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2">
          {audience.groups.map((group) => (
            <StaggerItem key={group.title}>
            <article
              className="rounded-2xl border border-white/8 bg-white/[0.025] p-6 sm:p-7"
            >
              <div className="flex items-center gap-3">
                <span aria-hidden className="h-px w-5 rounded-full bg-primary/55" />
                <h3 className="text-[15px] font-semibold tracking-tight text-white/85 sm:text-[17px]">
                  {group.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/45">{group.examples}</p>
            </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
