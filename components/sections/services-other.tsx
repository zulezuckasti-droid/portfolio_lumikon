import { FadeIn } from "@/components/motion/fade-in";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { servicesPage } from "@/content/site";

/**
 * Ostale usluge na stranici Usluge (PRD §4, §8):
 * editorijalni redovi sa brojevima — ne generična 3-kolona mreža.
 */
export function ServicesOther() {
  const { otherServices } = servicesPage;

  return (
    <section
      className="relative isolate bg-secondary/25"
      aria-labelledby="other-services-heading"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-[-5%] top-0 h-[18rem] w-[26rem] rounded-full bg-[radial-gradient(closest-side,rgba(245,158,11,0.06),transparent)] blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
        <FadeIn className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-7 rounded-full bg-primary/65" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/60">
              {otherServices.eyebrow}
            </p>
          </div>

          <h2
            id="other-services-heading"
            className="mt-6 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {otherServices.title}
          </h2>

          <p className="mt-4 text-pretty text-base leading-7 text-muted-foreground">
            {otherServices.subtitle}
          </p>
        </FadeIn>

        <StaggerGroup as="ol" className="mt-14 space-y-5" role="list">
          {otherServices.items.map((service, index) => (
            <StaggerItem as="li" key={service.title}>
            <article className="group rounded-2xl border border-border bg-card p-6 transition-colors duration-200 hover:border-border/80 hover:bg-secondary/20 sm:p-8">
                <div className="grid gap-6 lg:grid-cols-[auto_1fr_auto] lg:items-start lg:gap-10">
                  {/* Broj */}
                  <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary/75">
                      {String(index + 2).padStart(2, "0")}
                    </span>
                    <span aria-hidden className="hidden h-px w-6 bg-primary/45 lg:block" />
                  </div>

                  {/* Sadržaj */}
                  <div className="min-w-0">
                    <h3 className="text-[17px] font-semibold tracking-tight text-foreground sm:text-xl">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-foreground/70">
                      {service.when}
                    </p>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                      {service.description}
                    </p>
                  </div>

                  {/* Tačke */}
                  <ul className="flex flex-wrap gap-2 lg:max-w-[14rem] lg:flex-col lg:gap-2.5" role="list">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="inline-flex items-center gap-2 rounded-lg border border-border/80 bg-background/80 px-3 py-1.5 text-[12px] text-muted-foreground lg:w-full"
                      >
                        <span aria-hidden className="h-px w-2.5 shrink-0 rounded-full bg-primary/50" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
