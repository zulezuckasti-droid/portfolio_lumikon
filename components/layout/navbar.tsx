import Link from "next/link";

import { MobileMenu } from "@/components/layout/mobile-menu";
import { navLinks, primaryCta, site } from "@/content/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <nav
        aria-label="Glavna navigacija"
        className="mx-auto flex h-[68px] w-full max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8"
      >
        {/* Wordmark — ime + amber tačka kao logos-mark */}
        <Link
          href="/"
          className="group flex items-baseline gap-1 text-[15px] font-semibold tracking-tight text-foreground"
        >
          {site.name}
          <span
            aria-hidden
            className="mb-px h-[5px] w-[5px] shrink-0 translate-y-[-2px] rounded-full bg-primary transition-transform duration-300 group-hover:scale-125"
          />
        </Link>

        {/* Nav links — amber underline na hover umesto promene boje */}
        <ul className="hidden items-center gap-7 md:flex" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative py-1.5 text-[13.5px] font-medium text-muted-foreground/80 transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 h-px w-0 rounded-full bg-primary/60 transition-[width] duration-300 ease-out group-hover:w-full"
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desna strana — CTA uvek vidljiv, hamburger samo na mobilnom */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href={primaryCta.href}
            className="inline-flex h-9 items-center rounded-lg bg-foreground px-4 text-[13px] font-semibold text-background transition-opacity duration-200 hover:opacity-85 sm:px-5"
          >
            {primaryCta.label}
          </Link>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
