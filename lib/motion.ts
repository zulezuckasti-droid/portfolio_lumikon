import type { Transition, Variants } from "framer-motion";

/** Premium ease-out — blago, bez „bounce“ efekta */
export const easeOut = [0.22, 1, 0.36, 1] as const;

export const motionTransition: Transition = {
  duration: 0.55,
  ease: easeOut,
};

export const motionTransitionSlow: Transition = {
  duration: 0.7,
  ease: easeOut,
};

export const motionViewport = {
  once: true,
  amount: 0.15,
  margin: "-40px 0px -40px 0px",
} as const;

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeRightVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.04,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: motionTransition,
  },
};
