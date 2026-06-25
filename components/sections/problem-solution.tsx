import { problemSolution } from "@/content/site";

/**
 * Problem / Rešenje sekcija početne strane (PRD §6.2, §8):
 * bol klijenta → kako Lumikon rešava.
 * Tamna (ink) sekcija za vizuelni ritam posle Hero-a.
 */
export function ProblemSolution() {
  return (
    <section className="relative isolate bg-ink text-ink-foreground">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 h-[20rem] w-[36rem] -translate-x-1/2 translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(245,158,11,0.09),transparent)] blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
        {/* Eyebrow — centriran, tamna sekcija */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-5 rounded-full bg-primary/50" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">
              {problemSolution.eyebrow}
            </p>
            <span aria-hidden className="h-px w-5 rounded-full bg-primary/50" />
          </div>

          <h2 className="mt-6 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {problemSolution.title}
          </h2>

          <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-white/55 sm:text-lg">
            {problemSolution.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Problem */}
          <div className="rounded-2xl border border-white/8 bg-white/[0.025] p-6 sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/35">
              {problemSolution.problem.label}
            </p>

            <ul className="mt-7 space-y-5">
              {problemSolution.problem.items.map((item) => (
                <li key={item.title} className="flex gap-3.5">
                  <span className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center">
                    <span className="h-[5px] w-[5px] rounded-full bg-destructive/60" aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-medium leading-6 text-white/80">{item.title}</p>
                    <p className="mt-0.5 text-sm leading-6 text-white/40">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Rešenje */}
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
            {/* Tanak amber levi border kao vizuelni akcent */}
            <div aria-hidden className="absolute bottom-0 left-0 top-0 w-[2px] rounded-l-2xl bg-gradient-to-b from-primary/70 via-primary/40 to-transparent" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary/80">
              {problemSolution.solution.label}
            </p>

            <ul className="mt-7 space-y-5">
              {problemSolution.solution.items.map((item) => (
                <li key={item.title} className="flex gap-3.5">
                  <span className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center">
                    <span className="h-[5px] w-[5px] rounded-full bg-primary/70" aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-medium leading-6 text-white/85">{item.title}</p>
                    <p className="mt-0.5 text-sm leading-6 text-white/45">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
