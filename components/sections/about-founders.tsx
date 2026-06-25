import { FadeIn } from "@/components/motion/fade-in";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { aboutPage } from "@/content/site";

/**
 * Osnivači — suptilno, brend-first (PRD §5, §121):
 * uloge bez lica i imena u prvom planu; fokus na direktan kontakt.
 */
export function AboutFounders() {
  const { founders } = aboutPage;

  return (
    <section
      className="relative isolate bg-secondary/25"
      aria-labelledby="about-founders-heading"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-5%] bottom-0 h-[16rem] w-[22rem] rounded-full bg-[radial-gradient(closest-side,rgba(212,160,23,0.06),transparent)] blur-2xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span aria-hidden className="h-px w-5 rounded-full bg-primary/55" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/60">
              {founders.eyebrow}
            </p>
            <span aria-hidden className="h-px w-5 rounded-full bg-primary/55" />
          </div>

          <h2
            id="about-founders-heading"
            className="mt-6 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {founders.title}
          </h2>

          <p className="mt-4 text-pretty text-base leading-7 text-muted-foreground">
            {founders.subtitle}
          </p>
        </FadeIn>

        <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14">
          {founders.roles.map((role) => (
            <StaggerItem key={role.label}>
            <article
              className="relative rounded-2xl border border-border bg-card p-6 sm:p-7"
            >
              <div className="flex items-center gap-3">
                <span aria-hidden className="h-px w-5 rounded-full bg-primary/60" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground/55">
                  Osnivač
                </p>
              </div>

              <h3 className="mt-4 text-[17px] font-semibold tracking-tight text-foreground">
                {role.label}
              </h3>

              <p className="mt-2.5 text-sm leading-7 text-muted-foreground">
                {role.description}
              </p>
            </article>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <FadeIn delay={0.05}>
        <p className="mx-auto mt-10 max-w-lg text-center text-sm leading-6 text-muted-foreground/75">
          <span aria-hidden className="mr-3 inline-block h-px w-5 align-middle bg-primary/45" />
          {founders.note}
        </p>
        </FadeIn>
      </div>
    </section>
  );
}
