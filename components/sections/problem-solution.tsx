import { problemSolution } from "@/content/site";

/**
 * Problem / Rešenje sekcija početne strane (PRD §6.2, §8):
 * bol klijenta (zastareo/nepostojeći sajt) → kako Lumikon rešava.
 * Kontrastna tamna sekcija (ink) za vizuelni ritam posle Hero-a.
 */
export function ProblemSolution() {
  return (
    <section className="relative isolate bg-ink text-ink-foreground">
      {/* Suptilni amber glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 h-[20rem] w-[36rem] -translate-x-1/2 translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(245,158,11,0.12),transparent)] blur-2xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
            {problemSolution.eyebrow}
          </span>

          <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {problemSolution.title}
          </h2>

          <p className="mt-4 text-pretty text-lg leading-8 text-white/60">
            {problemSolution.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-6">
          {/* Problem */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              {problemSolution.problem.label}
            </h3>

            <ul className="mt-6 space-y-5">
              {problemSolution.problem.items.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-destructive/15 text-destructive">
                    <XIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-medium text-white/90">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-white/50">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Rešenje */}
          <div className="relative rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-white/[0.04] to-transparent p-6 sm:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[radial-gradient(closest-side,rgba(245,158,11,0.2),transparent)] blur-xl"
            />

            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              {problemSolution.solution.label}
            </h3>

            <ul className="mt-6 space-y-5">
              {problemSolution.solution.items.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-medium text-white/90">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-white/50">
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

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.2 7.3a1 1 0 0 1-1.42.005l-3.5-3.5a1 1 0 1 1 1.414-1.414l2.79 2.79 6.494-6.59a1 1 0 0 1 1.416-.006Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
