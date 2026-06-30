"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks, primaryCta } from "@/content/site";
import { easeOut } from "@/lib/motion";

const panelTransition = { duration: 0.38, ease: easeOut };
const itemTransition = { duration: 0.32, ease: easeOut };

const panelVariants = {
  hidden: { opacity: 0, y: -14 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: itemTransition },
};

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const menuPanel = (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          key="mobile-menu-panel"
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Navigacija"
          initial={prefersReducedMotion ? false : "hidden"}
          animate="visible"
          exit="exit"
          variants={prefersReducedMotion ? undefined : panelVariants}
          transition={panelTransition}
          className="fixed inset-x-0 bottom-0 top-[68px] z-40 flex flex-col overflow-y-auto bg-background shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)] md:hidden"
        >
          <motion.nav
            className="flex flex-col px-5 pb-10 pt-8 sm:px-6"
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            variants={prefersReducedMotion ? undefined : listVariants}
          >
            <motion.ul className="space-y-1" role="list" variants={listVariants}>
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  variants={prefersReducedMotion ? undefined : itemVariants}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 py-3.5 text-[17px] font-medium text-foreground/75 transition-colors hover:text-foreground"
                  >
                    <span
                      aria-hidden
                      className="h-px w-4 shrink-0 rounded-full bg-primary/55"
                    />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="mt-8 border-t border-border/60 pt-7"
              variants={prefersReducedMotion ? undefined : itemVariants}
            >
              <Link
                href={primaryCta.href}
                onClick={() => setIsOpen(false)}
                className="inline-flex h-11 items-center rounded-xl bg-foreground px-6 text-[13.5px] font-semibold text-background shadow-sm transition-opacity duration-200 hover:opacity-85"
              >
                {primaryCta.label}
              </Link>
            </motion.div>
          </motion.nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );

  return (
    <>
      <button
        type="button"
        aria-label={isOpen ? "Zatvori meni" : "Otvori meni"}
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        onClick={() => setIsOpen((v) => !v)}
        className="relative z-[60] flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-foreground/80 transition-colors hover:bg-secondary md:hidden"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="close"
              initial={prefersReducedMotion ? false : { opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, rotate: 90 }}
              transition={{ duration: 0.22, ease: easeOut }}
              className="flex items-center justify-center"
            >
              <XIcon />
            </motion.span>
          ) : (
            <motion.span
              key="menu"
              initial={prefersReducedMotion ? false : { opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, rotate: -90 }}
              transition={{ duration: 0.22, ease: easeOut }}
              className="flex items-center justify-center"
            >
              <MenuIcon />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      {mounted ? createPortal(menuPanel, document.body) : null}
    </>
  );
}

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden
      className="h-5 w-5"
    >
      <path d="M3 5h14M3 10h14M3 15h14" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden
      className="h-5 w-5"
    >
      <path d="M4 4l12 12M16 4L4 16" />
    </svg>
  );
}
