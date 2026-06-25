import { aboutPage } from "@/content/site";

/**
 * Manifest sekcija O nama (PRD §2, §8):
 * editorijalni stack izjava — tamna sekcija, bez klasičnih mission kartica.
 */
export function AboutManifesto() {
  const { manifesto } = aboutPage;

  return (
    <section
      className="relative isolate bg-ink text-ink-foreground"
      aria-labelledby="about-manifesto-heading"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[24rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(245,158,11,0.08),transparent)] blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-7 rounded-full bg-primary/50" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
            {manifesto.eyebrow}
          </p>
        </div>

        <div className="mt-10 lg:mt-14">
          <h2 id="about-manifesto-heading" className="sr-only">
            {manifesto.eyebrow}
          </h2>

          <ul className="space-y-4 sm:space-y-5" role="list">
            {manifesto.lines.map((line, index) => (
              <li
                key={line}
                className="flex items-baseline gap-4 sm:gap-6"
              >
                <span
                  aria-hidden
                  className="shrink-0 font-mono text-[11px] tabular-nums text-primary/60"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-balance text-2xl font-semibold leading-snug tracking-tight sm:text-3xl lg:text-[2rem]">
                  {line}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex items-start gap-4 sm:mt-14 sm:gap-6">
            <span aria-hidden className="mt-2 h-px w-8 shrink-0 bg-primary/45" />
            <p className="max-w-2xl text-pretty text-base leading-7 text-white/50 sm:text-lg">
              {manifesto.closing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
