import { FadeIn } from "@/components/motion/fade-in";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { servicesPage } from "@/content/site";

/**
 * Dodatna vrednost (vizuali, copy, automatizacija) — PRD §4, §8.
 * Kompaktna sekcija bez „AI" etikete.
 */
export function ServicesExtras() {
  const { extras } = servicesPage;

  return (
    <section
      className="relative isolate bg-background"
      aria-labelledby="extras-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span aria-hidden className="h-px w-5 rounded-full bg-primary/55" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/60">
              {extras.eyebrow}
            </p>
            <span aria-hidden className="h-px w-5 rounded-full bg-primary/55" />
          </div>

          <h2
            id="extras-heading"
            className="mt-6 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {extras.title}
          </h2>

          <p className="mt-4 text-pretty text-base leading-7 text-muted-foreground">
            {extras.subtitle}
          </p>
        </FadeIn>

        <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {extras.items.map((item) => (
            <StaggerItem key={item.title}>
            <article
              className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors duration-200 hover:border-border/80 hover:bg-secondary/20"
            >
              <span aria-hidden className="h-px w-6 rounded-full bg-primary/50" />
              <h3 className="mt-5 text-[15px] font-semibold tracking-tight text-foreground sm:text-[17px]">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
