"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import type { ReactNode } from "react";

import {
  fadeInVariants,
  fadeRightVariants,
  fadeUpVariants,
  motionTransition,
  motionTransitionSlow,
  motionViewport,
} from "@/lib/motion";

type FadeInProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children?: ReactNode;
  /** Kada animacija počinje — pri učitavanju (hero) ili na scroll */
  when?: "mount" | "scroll";
  /** Blagi pomak pri ulazu */
  direction?: "up" | "right" | "none";
  /** Kašnjenje u sekundama */
  delay?: number;
  /** Sporija animacija za veće blokove */
  slow?: boolean;
};

const directionVariants: Record<
  NonNullable<FadeInProps["direction"]>,
  Variants
> = {
  up: fadeUpVariants,
  right: fadeRightVariants,
  none: fadeInVariants,
};

export function FadeIn({
  children,
  className,
  when = "scroll",
  direction = "up",
  delay = 0,
  slow = false,
  ...props
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();
  const variants = directionVariants[direction];
  const transition = slow ? motionTransitionSlow : motionTransition;

  if (prefersReducedMotion) {
    return (
      <div className={className} {...(props as React.ComponentProps<"div">)}>
        {children}
      </div>
    );
  }

  const motionProps =
    when === "mount"
      ? {
          initial: "hidden",
          animate: "visible",
        }
      : {
          initial: "hidden",
          whileInView: "visible",
          viewport: motionViewport,
        };

  return (
    <motion.div
      className={className}
      variants={variants}
      transition={{ ...transition, delay }}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.div>
  );
}
