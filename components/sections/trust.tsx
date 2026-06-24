import { testimonials, trustSection } from "@/content/site";

/**
 * Poverenje sekcija početne strane (PRD §6.6, §8):
 * snažna izjava o kvalitetu; testimonijali sakriveni dok nema sadržaja.
 */
export function Trust() {
  const hasTestimonials = testimonials.length > 0;

  return (
    <section
      id="poverenje"
      className="relative isolate bg-background"
      aria-labelledby="trust-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[-5%] bottom-0 h-[20rem] w-[28rem] rounded-full bg-[radial-gradient(closest-side,rgba(212,160,23,0.1),transparent)] blur-2xl" />
        <div className="absolute right-[-10%] top-1/4 h-[18rem] w-[24rem] rounded-full bg-[radial-gradient(closest-side,rgba(245,158,11,0.08),transparent)] blur-2xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/70 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
            {trustSection.eyebrow}
          </span>

          <figure className="mt-10">
            <blockquote>
              <p
                id="trust-heading"
                className="text-balance text-2xl font-semibold leading-snug tracking-tight text-foreground sm:text-3xl lg:text-4xl"
              >
                „{trustSection.statement}"
              </p>
            </blockquote>

            <figcaption className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg">
              {trustSection.supporting}
            </figcaption>
          </figure>
        </div>

        {hasTestimonials ? (
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <figure
                key={item.author}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <blockquote className="text-sm leading-7 text-muted-foreground">
                  „{item.quote}"
                </blockquote>
                <figcaption className="mt-4">
                  <p className="font-medium text-foreground">{item.author}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
