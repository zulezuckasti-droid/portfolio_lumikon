import { FadeIn } from "@/components/motion/fade-in";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { aboutPage } from "@/content/site";

/**
 * Načela Lumikon (PRD §2, §8):
 * numerisana editorijalna lista — vertikalni ritam, bez ikon kartica.
 */
export function AboutPrinciples() {
  const { principles } = aboutPage;

  return (
    <section
      className="relative isolate bg-background"
      aria-labelledby="about-principles-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
        <FadeIn className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-7 rounded-full bg-primary/65" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/60">
              {principles.eyebrow}
            </p>
          </div>

          <h2
            id="about-principles-heading"
            className="mt-6 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {principles.title}
          </h2>

          <p className="mt-4 text-pretty text-base leading-7 text-muted-foreground">
            {principles.subtitle}
          </p>
        </FadeIn>

        <StaggerGroup as="ol" className="mt-14 space-y-0 divide-y divide-border border-y border-border">
          {principles.items.map((item) => (
            <StaggerItem as="li" key={item.number}>
            <div className="grid gap-4 py-8 sm:grid-cols-[5rem_1fr] sm:gap-8 sm:py-10 lg:grid-cols-[6rem_1fr]">
              <span
                aria-hidden
                className="font-mono text-2xl font-semibold tabular-nums text-primary sm:text-3xl"
              >
                {item.number}
              </span>
              <div>
                <h3 className="text-[17px] font-semibold tracking-tight text-foreground sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
