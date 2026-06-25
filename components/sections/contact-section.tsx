import { ContactForm } from "@/components/sections/contact-form";
import { FadeIn } from "@/components/motion/fade-in";
import { contactSection, site } from "@/content/site";

type ContactSectionProps = {
  /** h1 na zasebnoj stranici, h2 na početnoj sekciji */
  headingLevel?: "h1" | "h2";
  id?: string;
  showBorderTop?: boolean;
};

export function ContactSection({
  headingLevel = "h2",
  id,
  showBorderTop = false,
}: ContactSectionProps) {
  const Heading = headingLevel;

  return (
    <section
      id={id}
      className={`relative isolate bg-secondary/20 ${showBorderTop ? "border-t border-border/60" : ""}`}
      aria-labelledby="contact-heading"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[22rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(245,158,11,0.08),transparent)] blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <FadeIn>
          <div>
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-7 rounded-full bg-primary/65" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/60">
                {contactSection.eyebrow}
              </p>
            </div>

            <Heading
              id="contact-heading"
              className="mt-6 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {contactSection.title}
            </Heading>

            <p className="mt-4 max-w-sm text-pretty text-base leading-7 text-muted-foreground">
              {contactSection.subtitle}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span aria-hidden className="h-px w-5 rounded-full bg-primary/60" />
              <p className="text-sm font-medium text-foreground/80">
                {contactSection.reassurance}
              </p>
            </div>

            <div className="mt-8 space-y-4 text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Email: </span>
                <a
                  href={`mailto:${site.email}`}
                  className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  {site.email}
                </a>
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <a
                  href={site.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground/80 underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  Instagram
                </a>
                <span aria-hidden className="h-px w-3.5 bg-primary/55" />
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground/80 underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  LinkedIn
                </a>
              </div>

              <p className="text-xs text-muted-foreground/70">
                {contactSection.pricingNote}
              </p>
            </div>
          </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.08}>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <ContactForm />
          </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
