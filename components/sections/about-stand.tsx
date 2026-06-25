import { aboutPage } from "@/content/site";

/**
 * Naš stav — kontrastna tamna sekcija (PRD §2, §8):
 * šta ne radimo vs. šta radimo, bez klasične comparison tabele.
 */
export function AboutStand() {
  const { stand } = aboutPage;
  const [negative, positive] = stand.contrast;

  return (
    <section
      className="relative isolate bg-ink text-ink-foreground"
      aria-labelledby="about-stand-heading"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 right-[-5%] h-[22rem] w-[28rem] rounded-full bg-[radial-gradient(closest-side,rgba(245,158,11,0.09),transparent)] blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-5 rounded-full bg-primary/50" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
              {stand.eyebrow}
            </p>
            <span aria-hidden className="h-px w-5 rounded-full bg-primary/50" />
          </div>

          <h2
            id="about-stand-heading"
            className="mt-6 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {stand.title}
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/8 bg-white/[0.025] p-6 sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/35">
              {negative.label}
            </p>

            <ul className="mt-7 space-y-4" role="list">
              {negative.items.map((item) => (
                <li key={item} className="flex gap-3.5">
                  <span className="mt-[7px] h-px w-3 shrink-0 bg-white/20" aria-hidden />
                  <p className="text-sm leading-6 text-white/45">{item}</p>
                </li>
              ))}
            </ul>
          </article>

          <article className="relative rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
            <div
              aria-hidden
              className="absolute bottom-0 left-0 top-0 w-[2px] rounded-l-2xl bg-gradient-to-b from-primary/70 via-primary/40 to-transparent"
            />

            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary/80">
              {positive.label}
            </p>

            <ul className="mt-7 space-y-4" role="list">
              {positive.items.map((item) => (
                <li key={item} className="flex gap-3.5">
                  <span
                    className="mt-[6px] h-[5px] w-[5px] shrink-0 rounded-full bg-primary/70"
                    aria-hidden
                  />
                  <p className="text-sm leading-6 text-white/80">{item}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
