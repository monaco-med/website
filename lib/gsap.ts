"use client";

/**
 * Central GSAP entry point. Import `gsap`/`ScrollTrigger` from here (not
 * directly from the `gsap` package) so the ScrollTrigger plugin is always
 * registered exactly once before use.
 *
 * The `window` check guards against registering the plugin during
 * server-side rendering, where GSAP's DOM/ScrollTrigger APIs don't apply.
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
