"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  /** Animate direct children individually instead of the whole block. */
  stagger?: boolean;
  /** Delay in seconds before the animation starts. */
  delay?: number;
};

/**
 * Wraps its children in a `<div>` that fades/slides into view once when
 * scrolled into the viewport, via GSAP + ScrollTrigger (see `lib/gsap.ts`).
 * This is the site's only scroll-animation primitive — nearly every
 * section/list component renders through it.
 *
 * Respects `prefers-reduced-motion` (skips the animation, content is shown
 * immediately) and animates only once per element (`scrollTrigger.once`).
 * Because it renders a real `<div>` wrapper, `className`/`id`/`style` are
 * forwarded so it can also serve as that div's styling hook (e.g. a grid
 * container that itself needs `display: grid`).
 */
export default function Reveal({ children, className, id, style, stagger, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const targets = stagger ? Array.from(el.children) : el;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          delay,
          ease: "power2.out",
          stagger: stagger ? 0.05 : 0,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [stagger, delay]);

  return (
    <div ref={ref} className={className} id={id} style={style}>
      {children}
    </div>
  );
}
