import { aboutPage } from "@/content/site";

/**
 * Značenje imena Lumikon (PRD §2, §8):
 * tipografski split layout — etimologija brenda, ne generičan „our story“ blok.
 */
export function AboutMeaning() {
  const { meaning } = aboutPage;

  return (
    <section
      className="relative isolate border-t border-border/60 bg-secondary/25"
      aria-labelledby="about-meaning-heading"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-[-6%] top-1/4 h-[20rem] w-[24rem] rounded-full bg-[radial-gradient(closest-side,rgba(245,158,11,0.07),transparent)] blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16 lg:items-start">
          <div>
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-7 rounded-full bg-primary/65" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/60">
                {meaning.eyebrow}
              </p>
            </div>

            <h2
              id="about-meaning-heading"
              className="mt-6 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {meaning.title}
            </h2>

            <p className="mt-4 max-w-md text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
              {meaning.lead}
            </p>
          </div>

          <div className="space-y-4">
            {meaning.parts.map((part) => (
              <article
                key={part.fragment}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors duration-200 hover:border-border/80 hover:bg-secondary/20 sm:p-7"
              >
                <div className="flex items-start gap-5">
                  <p className="shrink-0 font-mono text-3xl font-semibold tracking-tight text-primary/90 sm:text-4xl">
                    {part.fragment}
                  </p>
                  <div className="pt-1.5">
                    <span aria-hidden className="mb-3 inline-block h-px w-6 bg-primary/55" />
                    <p className="text-sm leading-7 text-muted-foreground">
                      {part.gloss}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
