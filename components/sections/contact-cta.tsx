import { ContactForm } from "@/components/sections/contact-form";
import { contactSection, site } from "@/content/site";

/**
 * Kontakt / CTA sekcija početne strane (PRD §6.7, §7, §8):
 * on-site forma (Ime, Email, Poruka) + email notifikacija preko Resend-a.
 */
export function ContactCta() {
  return (
    <section
      id="kontakt"
      className="relative isolate border-t border-border bg-secondary/30"
      aria-labelledby="contact-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-0 h-[24rem] w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(245,158,11,0.12),transparent)] blur-2xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
              {contactSection.eyebrow}
            </span>

            <h2
              id="contact-heading"
              className="mt-6 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {contactSection.title}
            </h2>

            <p className="mt-4 text-pretty text-lg leading-8 text-muted-foreground">
              {contactSection.subtitle}
            </p>

            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-medium text-foreground">
              <ShieldIcon className="h-4 w-4 shrink-0 text-primary" />
              {contactSection.reassurance}
            </p>

            <div className="mt-8 space-y-3 text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Email: </span>
                <a
                  href={`mailto:${site.email}`}
                  className="underline-offset-4 hover:text-foreground hover:underline"
                >
                  {site.email}
                </a>
              </p>
              <p className="text-xs leading-6">
                Cene i rokove dogovaramo individualno — svaki projekat je
                drugačiji.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
      className={className}
    >
      <path
        d="M12 3l7 3v6c0 4.5-3.2 8.7-7 9-3.8-.3-7-4.5-7-9V6l7-3z"
        strokeLinejoin="round"
      />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
