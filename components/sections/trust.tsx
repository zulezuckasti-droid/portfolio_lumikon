import { FadeIn } from "@/components/motion/fade-in";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { testimonials, trustSection } from "@/content/site";

/**
 * Poverenje sekcija početne strane (PRD §6.6, §8):
 * editorijalna izjava o kvalitetu; testimonijali sakriveni dok nema sadržaja.
 */
export function Trust() {
  const hasTestimonials = testimonials.length > 0;

  return (
    <section
      id="poverenje"
      className="relative isolate bg-background"
      aria-labelledby="trust-statement"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-5%] bottom-0 h-[18rem] w-[26rem] rounded-full bg-[radial-gradient(closest-side,rgba(212,160,23,0.07),transparent)] blur-2xl" />
        <div className="absolute right-[-8%] top-1/4 h-[16rem] w-[22rem] rounded-full bg-[radial-gradient(closest-side,rgba(245,158,11,0.06),transparent)] blur-2xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3">
            <span aria-hidden className="h-px w-5 rounded-full bg-primary/55" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/60">
              {trustSection.eyebrow}
            </p>
            <span aria-hidden className="h-px w-5 rounded-full bg-primary/55" />
          </div>

          {/* Amber navodnik + izjava */}
          <figure className="mt-10">
            <div aria-hidden className="text-5xl font-bold leading-none text-primary/25 select-none">
              „
            </div>
            <blockquote className="-mt-2">
              <p
                id="trust-statement"
                className="text-balance text-2xl font-semibold leading-snug tracking-tight text-foreground sm:text-3xl lg:text-[2rem]"
              >
                {trustSection.statement}
              </p>
            </blockquote>

            <figcaption className="mt-6 text-sm leading-7 text-muted-foreground sm:text-base">
              {trustSection.supporting}
            </figcaption>
          </figure>
        </FadeIn>

        {hasTestimonials ? (
          <StaggerGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <StaggerItem key={item.author}>
              <figure
                className="rounded-2xl border border-border bg-card p-6"
              >
                <blockquote className="text-sm leading-7 text-muted-foreground">
                  „{item.quote}"
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span aria-hidden className="h-px w-4 rounded-full bg-primary/50" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.author}</p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </div>
                </figcaption>
              </figure>
              </StaggerItem>
            ))}
          </StaggerGroup>
        ) : null}
      </div>
    </section>
  );
}
