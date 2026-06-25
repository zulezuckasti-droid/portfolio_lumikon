"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";
import type { ReactNode } from "react";
import { createElement } from "react";

import {
  motionViewport,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/lib/motion";

type MotionTag = "div" | "ol" | "ul" | "li";

type StaggerGroupProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children?: ReactNode;
  when?: "mount" | "scroll";
  as?: "div" | "ol" | "ul";
};

export function StaggerGroup({
  children,
  className,
  when = "scroll",
  as = "div",
  ...props
}: StaggerGroupProps) {
  const prefersReducedMotion = useReducedMotion();
  const Component = motion[as];

  if (prefersReducedMotion) {
    return createElement(as, { className, ...props }, children);
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

  const MotionTag = Component as typeof motion.div;

  return (
    <MotionTag
      className={className}
      variants={staggerContainerVariants}
      {...motionProps}
      {...props}
    >
      {children}
    </MotionTag>
  );
}

type StaggerItemProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children?: ReactNode;
  as?: MotionTag;
};

export function StaggerItem({
  children,
  className,
  as = "div",
  ...props
}: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion();
  const Component = motion[as as "div" | "ol" | "ul" | "li"];

  if (prefersReducedMotion) {
    return createElement(as, { className, ...props }, children);
  }

  const MotionTag = Component as typeof motion.div;

  return (
    <MotionTag
      className={className}
      variants={staggerItemVariants}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
