# DRIP — LANDING PAGE BUILD MASTER PROMPT

You are building the Drip landing page as a real, production-quality website.

The goal is not to make a generic marketing page. The goal is to turn the structure,
interactions, animations, references, and visual direction below into a coherent,
high-end Y2K fashion experience that feels intentional from the first load to the
footer.

---

## 1. PRIMARY INSTRUCTION

Build the landing page described below.

Do not replace the concept with your own website structure.

Do not simplify the important interactions just because a simpler implementation is
easier.

Use the provided references and supplied React components as implementation references.

Use online resources where they materially help achieve the intended result. This may
include open-source libraries, animation techniques, visual references, asset sources,
icons, image/video resources, and documentation.

If a required asset or input genuinely cannot be created or sourced without user input,
ask the user directly for that specific input and then implement it.

DO NOT ASSUME ANYTHING that materially changes the requested experience.

Everything should be editable so the user can change content, assets, colors, animation
timings, cards, links, and other appropriate values later.

---

## 2. PRODUCT CONTEXT

Brand: Drip

Drip is a fashion-first social app, not just a fashion discovery or shopping platform. The core idea is that fashion taste becomes a form of social identity — similar to how Instagram represents your life or Spotify represents your music taste. On Drip, the main content is the complete outfit (“fit”), and users will eventually discover fits, follow people based on their style, post their own OOTDs, save and share outfits, build their wardrobe, create fits, and get AI styling through Taylor.

The landing page is the front door to the product. It should create curiosity,
communicate what Drip is, showcase the beta experience, and drive users toward the
drop / waitlist.

Primary aesthetic:

- Y2K
- Fashion-forward
- Experimental
- Cinematic
- High-energy
- Premium rather than generic SaaS
- Strong typography
- Layered motion
- Editorial / interactive-web feel

The site should feel like a fashion brand's digital world rather than a normal product
landing page.

---

## 3. BRAND TYPOGRAPHY

Use the following typography system:

- Drip logo / wordmark: Molen Surplus
- Display: Microma, weight 400
- Heading: Microma, weight 400
- Body Large: Manrope, weight 500
- Body: Manrope, weight 400
- Caption: Manrope, weight 600
- Price / Data: DM Mono, weight 400

The Drip logo should remain editable and should not be baked into video.

---

## 4. SITE STRUCTURE

The landing page contains:

0. Initial Loading Screen
1. Hero — Frame 1
2. What Are We — Frame 2
3. Clothing Genres — Frame 3
4. Features — Frame 4
5. Questions — Frame 5
6. Pull Up — Frame 6
7. Footer — Frame 7

The transitions between these sections are part of the experience. Do not treat the
sections as isolated blocks.

Scrolling should feel like moving through one continuous visual sequence.

---

# 5. INITIAL LOADING SCREEN

Create an initial loading screen before the main landing page.

The loading state should feel intentional and branded rather than like a generic website
loader.

It should transition naturally into the Hero.

---

# 6. FRAME 1 — HERO

## Structure

HERO
│
├── Background video / visual layer
├── Color treatment
├── Grain / noise layer
├── Drip logo layer
├── ESTD 2077
├── FOR THE VIBE
└── Cursor interaction layer

## References

Use these as visual / interaction references:

- https://bleibtgleich.dev/
- https://landonorris.com/

Inspect the references and recreate the relevant *class of experience* rather than
blindly copying unrelated branding.

Use online resources wherever necessary to achieve the intended visual result.

If the hero requires a specific video or asset that cannot reasonably be sourced or
created, ask the user for that exact asset and then implement it.

## Hero requirements

The hero should combine:

- Cinematic visual background
- Independent HTML typography
- Drip logo
- "ESTD 2077"
- "FOR THE VIBE"
- Grain / texture treatment
- Cursor-reactive interaction
- Strong transition into the next section

Do not permanently bake the hero text into the background video.

The text and logo must remain independently editable and animatable.

## Scroll transition

As the user begins scrolling out of the hero:

- Use a scroll-driven transition.
- A single line of text should load / reveal lazily.
- That transition should lead directly into Frame 2.

---

# 7. FRAME 2 — WHAT ARE WE

Purpose: explain what Drip is and what the product does.

The text should reveal progressively as the user scrolls.

The section should feel alive rather than like a static text block.

Background:

- Aurora-like field
- Multiple colours
- Soft moving colour energy
- Visually connected to the Y2K direction

The text animation itself should be scroll-aware.

---

# 8. FRAME 3 — CLOTHING GENRES

As the user scrolls from Frame 2 into Frame 3:

- Transition into a full-frame fashion genre environment.
- Multiple rows of fashion genre cards should loop horizontally.
- The rows should occupy the majority / entirety of the frame.
- Different rows can move at different speeds / directions to create depth.
- A lazy-loaded central text element should appear:
  "Discover the Multiple genres"

The genre environment should communicate variety and fashion discovery.

## Reference implementation

Use the supplied `ParallaxStripSlider` component below as a reference for the type of
image transition / movement / interaction that should be possible.

Do not assume the sample imagery is the final Drip imagery.

The component can be adapted to fit the Drip visual system.

The implementation must remain editable.

---

# 9. FRAME 4 — FEATURES

As the user scrolls from Frame 3 into Frame 4:

- A mobile phone should flip into the centre.
- The phone should then split / expand into five phone screens.
- Each resulting phone screen showcases one core beta feature.
- The transition should feel like one continuous motion sequence rather than five
  unrelated cards appearing.

## Five beta features

### 1. Scroll (Vibes)

Algorithm decides the fits.

Core positioning:

"ADDICTIVE AS REELS, BUT AESTHETIC AS PINTEREST, WITH WAY LESS ADS"

This is the MAIN experience and should receive the strongest visual emphasis.

### 2. Studio

Users make their own fits.

Reference feeling:

Dress-to-impress / old Barbie-game style creation.

### 3. Colour Theory

Find the colours which go with you.

### 4. Wardrobe

The wardrobe is developed from photos the user uploads into the app.

Those wardrobe items can later be used for:

- fit creation
- saved items

### 5. Social

The social layer includes:

- private accounts
- public accounts
- stories such as OOTD
- customizable profile pages
- viewing other people's profiles

## Reference implementation

Use the supplied `expand-on-hover` / Framer Motion component below as a reference for
the interactive multi-image behaviour.

Adapt it to Drip's actual feature presentation.

Do not treat the sample images or labels as final product content.

---

# 10. FRAME 5 — QUESTIONS

Create a section containing six questions.

When a user clicks a question:

- the answer should expand / appear below the question.
- the interaction should be animated.
- the answer should collapse again when appropriate.

The section should feel integrated into the visual language of the site rather than like
a standard FAQ template.

## Transition requirement

The supplied `ParallaxStripSlider` reference component can also be used as a reference
for the transition between Frame 5 and Frame 6.

Use the same canonical implementation reference already supplied above rather than
creating unnecessary duplicate versions of the component.

---

# 11. FRAME 6 — PULL UP

This is the primary waitlist / notification conversion section.

The frame should ask the user for their email so they can be notified when the app drops
on the App Store and Google Play.

Main card content:

"Pull up!"

Below it:

- Email input
- Working submission interaction

Below the card:

- Coming-soon App Store block
- Coming-soon Google Play block

The interaction must not be fake or dead.

The form should have:

- usable input behaviour
- validation
- clear success state
- clear error state
- editable destination / integration point

---

# 12. FRAME 7 — FOOTER

The footer should NOT look like a standard website footer.

It needs to behave like part of the Drip visual identity.

## Structure

Split the footer vertically into two sections.

### Left section

Display:

"Drip"

Use the Drip logo / Molen Surplus wordmark.

When the logo is clicked:

- cycle through the different Drip logos.
- the logos will be supplied later.

### Right section

The background / visual treatment of this side changes according to the currently
active logo.

Include links / sections such as:

- Socials
- Product page
- Blog page
- Beta testing page
- etc.

Keep the logo states and corresponding background states editable so new logo variants
can be added later.

---

# 13. GLOBAL DESIGN / INTERACTION REQUIREMENTS

The complete page should feel like one system.

Do not make each frame look like it came from a different template.

Maintain:

- Y2K aesthetic
- Keep things warm 
- fashion editorial sensibility
- strong typography
- visual continuity
- layered motion
- smooth section transitions
- intentional whitespace
- cinematic moments
- responsive behaviour

Avoid:

- generic SaaS cards
- generic gradients used without purpose
- dead buttons
- placeholder UI presented as finished functionality
- unrelated component aesthetics
- excessive visual clutter
- motion that exists only for decoration

---

# 14. RESPONSIVE BEHAVIOUR

The experience must work properly on:

- Desktop
- Tablet
- Mobile

Do not simply shrink the desktop version.

Mobile may use a different composition while keeping the same visual identity.

For touch devices:

- replace mouse-only interactions with touch-friendly equivalents.
- do not show a desktop cursor-follow interaction.
- maintain the cinematic nature of the transitions.

Respect reduced-motion preferences.

Performance should be treated as part of the implementation, especially for:

- background video
- large images
- scroll animation
- cursor effects
- repeated animated cards
- mobile devices

---

# 15. TECHNICAL DIRECTION

The implementation should support:

- React
- TypeScript
- Tailwind CSS
- shadcn project structure

Use the appropriate animation tools for the job.

Use GSAP where timeline / scroll / clip-path control is beneficial.

Use Framer Motion where it simplifies component-level motion.

Use Three.js / WebGL only when it genuinely improves the requested experience and is
actually justified.

Do not introduce unnecessary complexity when the same visual effect can be achieved
with CSS, video, GSAP, or normal React rendering.

## Components

Determine the default component and style paths in the project.

If the project uses the shadcn convention, reusable UI components should live in:

`/components/ui`

If the project does not yet use that structure, adapt it cleanly while preserving the
same intent.

Install required dependencies when needed.

---

# 16. ASSETS

Use online resources to achieve the visual result when needed.

For image-based sections, use appropriate fashion imagery rather than generic technology
stock photography.

Do not assume the sample images in the supplied components are the final Drip assets.

Keep asset references easy to replace.

If the user later provides:

- logo variants
- hero video
- fashion images
- screenshots
- product mockups

those should be straightforward to swap into the system.

---

# 17. EDITABILITY

Make the system easy to customize.

Where practical, keep these in clearly editable data/config structures:

- section copy
- CTA labels
- questions and answers
- feature labels
- fashion genres
- image/video sources
- logo variants
- animation timing values
- theme/background values
- footer links

The user should not need to dig through unrelated animation code just to change text or
swap an asset.

---

# 18. FUNCTIONALITY

Every interactive element must work.

This includes:

- scroll interactions
- buttons
- email input
- FAQ expand/collapse
- genre interactions
- feature interactions
- hero cursor behaviour
- footer logo cycling
- footer navigation links
- app-store / play-store placeholder blocks
- responsive menu / navigation behaviour if one is introduced

Do not leave obvious dead interactions.

---

# 19. IMPLEMENTATION WORKFLOW

Before changing the project:

1. Inspect the existing codebase.
2. Determine the existing framework and structure.
3. Identify what already exists.
4. Reuse compatible infrastructure instead of unnecessarily rewriting the project.
5. Identify missing dependencies.
6. Identify missing assets.
7. Implement the landing page section by section.
8. Connect the transitions between sections.
9. Test all interactive states.
10. Test desktop, tablet, and mobile.
11. Test reduced-motion behaviour.
12. Fix visual / interaction bugs before considering the work finished.

Do not blindly overwrite an existing working implementation.

---

# 20. QUESTIONS BEFORE IMPLEMENTATION

Ask the user a question ONLY when the missing information materially blocks the requested
implementation.

Good reasons to ask:

- A required video / image / logo is unavailable and cannot reasonably be sourced.
- A required external integration needs credentials or a destination.
- A specific behaviour is genuinely ambiguous and cannot be inferred without changing
  the intended product.

Do not ask unnecessary questions just to avoid making reasonable implementation
decisions.

---

# 21. DEFINITION OF DONE

The page is complete when:

- all seven frames exist
- the loading screen exists
- transitions between frames feel intentional
- the hero feels cinematic and interactive
- the Y2K aesthetic is consistent
- the supplied references have been meaningfully translated
- the provided reference components have been correctly integrated / adapted
- the main feature experience is visually strong
- the FAQ works
- the waitlist form works
- the footer interaction works
- the page is responsive
- reduced motion is handled
- assets are replaceable
- content is editable
- there are no obvious dead buttons
- there are no obvious broken animations
- the result feels like a real Drip brand website rather than a component demo

---

# 22. SUPPLIED IMPLEMENTATION REFERENCE A — PARALLAX STRIP SLIDER

Use this as the canonical `ParallaxStripSlider` reference for the sections described
above.

Do not change the supplied reference code merely to make it shorter.

```tsx
parallax-strip-slider.tsx
// Built using Hyperiux Vault: https://vault.hyperiux.com
"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

/* Inline stand-in for @gsap/react's useGSAP. Mirrors its default
   `revertOnUpdate: false`: one gsap.context lives for the component's
   lifetime, the callback is re-added when dependencies change, and the
   context is reverted only on unmount. Reverting on every dependency
   change (the naive version) rolls finished tweens back to their start
   state — which is what snapped the progress bar to slide 1 mid-sequence.
   Covers both call shapes used below — plain effect, and one that returns
   its own cleanup. */
function useGSAP(
  callback: () => void | (() => void),
  options?: {
    dependencies?: unknown[];
    scope?: { current: Element | null } | Element | null;
  }
) {
  const deps = options?.dependencies ?? [];
  const scope = options?.scope;
  const ctxRef = useRef<gsap.Context | null>(null);
  const cleanupRef = useRef<(() => void) | undefined>(undefined);

  useLayoutEffect(() => {
    const el =
      scope && typeof scope === "object" && "current" in scope
        ? scope.current
        : (scope as Element | null);
    ctxRef.current = gsap.context(() => {}, el ?? undefined);
    return () => {
      ctxRef.current?.revert();
      ctxRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    if (!ctxRef.current) return;
    cleanupRef.current?.();
    const ret = ctxRef.current.add(callback);
    cleanupRef.current = typeof ret === "function" ? ret : undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText);
}

// Animation timing
const STRIP_COUNT = 10;
const REVEAL_DURATION = 0.5;
const STRIP_STAGGER = 0.04;
const ZOOM_DURATION = 0.9;
const ZOOM_FROM = 1.2;
const AUTOPLAY_INTERVAL = 5000;
const TITLE_CHAR_DURATION = 0.6;
const TITLE_CHAR_STAGGER = 0.04;
const TITLE_CHAR_Y_PERCENT = 100;
const PROGRESS_DURATION = 0.9;

type Slide = {
  src: string;
  title: string;
  chapter?: string;
};

export type ParallaxStripSliderProps = {
  /** Slides to cycle through. Defaults to a built-in sample set. */
  slides?: Slide[];
  className?: string;
  /** Number of vertical strips in the wipe reveal. */
  stripCount?: number;
  /** Duration of each strip's clip-path wipe, in seconds. */
  revealDuration?: number;
  /** Delay between consecutive strips, in seconds. */
  stripStagger?: number;
  /** Starting scale of the incoming image (Ken-Burns zoom). */
  zoomFrom?: number;
  /** Duration of the image zoom settle, in seconds. */
  zoomDuration?: number;
  /** Auto-advance slides on a timer. */
  autoplay?: boolean;
  /** Show the top progress bar. */
  showProgressBar?: boolean;
  /** Show the numeric slide counter. */
  showCounter?: boolean;
  /** Enable the click-to-navigate overlay and its circular cursor (left half = prev, right half = next). */
  showControls?: boolean;
  /** Color of the progress bar fill, caption text, and control borders. */
  accentColor?: string;
  /** Slider background, seen behind the images. */
  backgroundColor?: string;
};

const R2 =
  "https://pub-8abee449136941f5b0a1cd2c014534e9.r2.dev/vault-listing-images/assets-images/strip-paralax-slider";

const DEFAULT_SLIDES: Slide[] = [
  {
    src: `${R2}/img01.png`,
    title: "Fire",
    chapter: "Collection 01",
  },
  {
    src: `${R2}/img02.png`,
    title: "Allure",
    chapter: "Collection 02",
  },
  {
    src: `${R2}/img03.png`,
    title: "Ember",
    chapter: "Collection 03",
  },
];

type TransitionDirection = "next" | "prev";

function prefersReducedMotion() {
  return (
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false
  );
}

export default function ParallaxStripSlider({
  slides = DEFAULT_SLIDES,
  className = "",
  stripCount = STRIP_COUNT,
  revealDuration = REVEAL_DURATION,
  stripStagger = STRIP_STAGGER,
  zoomFrom = ZOOM_FROM,
  zoomDuration = ZOOM_DURATION,
  autoplay = false,
  showProgressBar = true,
  showCounter = true,
  showControls = true,
  accentColor = "#ffffff",
  backgroundColor = "#000000",
}: ParallaxStripSliderProps) {
  const [current, setCurrent] = useState(0);
  const [incoming, setIncoming] = useState<number | null>(null);
  const [caption, setCaption] = useState(0);
  const [direction, setDirection] = useState<TransitionDirection>("next");
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);
  const chapterRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const counterNumRef = useRef<HTMLSpanElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const stripsRef = useRef<HTMLDivElement[]>([]);
  const zoomRef = useRef<HTMLDivElement[]>([]);
  const isAnimating = useRef(false);
  const isFirstCaption = useRef(true);
  const splitRef = useRef<SplitText | null>(null);

  // Circular click-to-navigate cursor.
  const cursorRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const isInside = useRef(false);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  const total = slides.length;

  // Touch vs. mouse decides the layout — not raw width. A narrow but
  // mouse-driven frame (21st preview, split editor) keeps the full desktop
  // experience with the follow cursor; only real touch devices get the
  // stacked layout.
  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    const update = () => setIsCoarsePointer(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Load the display serif once (was a Next <style jsx global> import).
  useEffect(() => {
    const id = "hpx-instrument-serif";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap";
    document.head.appendChild(link);
  }, []);

  const goTo = useCallback(
    (next: number, transitionDirection: TransitionDirection) => {
      if (isAnimating.current || next === current || total < 2) return;
      isAnimating.current = true;
      setDirection(transitionDirection);
      setIncoming(next);
    },
    [current, total]
  );

  const onNext = useCallback(
    () => goTo((current + 1) % total, "next"),
    [current, total, goTo]
  );
  const onPrev = useCallback(
    () => goTo((current - 1 + total) % total, "prev"),
    [current, total, goTo]
  );

  // Auto-advance on a timer; pauses while a transition is mid-flight and when
  // reduced motion is requested.
  useEffect(() => {
    if (!autoplay || total < 2) return;
    if (typeof window !== "undefined" && prefersReducedMotion()) return;
    const id = window.setInterval(() => {
      if (!isAnimating.current) onNext();
    }, AUTOPLAY_INTERVAL);
    return () => window.clearInterval(id);
  }, [autoplay, total, onNext]);

  // Wipe + zoom + progress on slide change.
  useGSAP(
    () => {
      if (incoming === null) return;

      const strips = stripsRef.current.slice(0, stripCount).filter(Boolean);
      const zooms = zoomRef.current.slice(0, stripCount).filter(Boolean);
      if (!strips.length) return;
      const isPrevious = direction === "prev";
      const orderedStrips = isPrevious ? [...strips].reverse() : strips;

      // Reduced motion: swap without the reveal.
      if (prefersReducedMotion()) {
        setCaption(incoming);
        setCurrent(incoming);
        setIncoming(null);
        isAnimating.current = false;
        return;
      }

      const settle = () => {
        setCaption(incoming);
        setCurrent(incoming);
        setIncoming(null);
        isAnimating.current = false;
      };

      const tl = gsap.timeline({ onComplete: settle });

      // Reverse stagger + clip origin when moving backward.
      tl.fromTo(
        orderedStrips,
        { clipPath: isPrevious ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)" },
        {
          clipPath: isPrevious ? "inset(0 0 0 0%)" : "inset(0 0% 0 0)",
          duration: revealDuration,
          ease: "power3.out",
          stagger: stripStagger,
        },
        0
      );

      tl.fromTo(
        zooms,
        { scale: zoomFrom },
        {
          scale: 1,
          duration: zoomDuration,
          ease: "power3.out",
        },
        0
      );

      // Bar slides toward the incoming fill.
      if (progressRef.current) {
        tl.to(
          progressRef.current,
          {
            scaleX: (incoming + 1) / total,
            duration: PROGRESS_DURATION,
            ease: "power3.inOut",
          },
          0
        );
      }

      // Outgoing caption texts fade out under the strips.
      const outgoing = [
        captionRef.current,
        titleRef.current,
        counterRef.current,
      ].filter(Boolean);
      if (outgoing.length) {
        tl.to(
          outgoing,
          {
            autoAlpha: 0,
            y: -2,
            duration: 0.35,
            ease: "power2.in",
          },
          0.15
        );
        tl.add(() => setCaption(incoming), 0.5);
      }
    },
    {
      dependencies: [
        incoming,
        direction,
        stripCount,
        revealDuration,
        stripStagger,
        zoomFrom,
        zoomDuration,
      ],
      scope: rootRef,
    }
  );

  // Revert the split before React commits the new title.
  useLayoutEffect(() => {
    splitRef.current?.revert();
    splitRef.current = null;
  }, [caption]);

  // Incoming caption reveal: title chars, chapter fade, counter number.
  useGSAP(
    () => {
      if (isFirstCaption.current) {
        isFirstCaption.current = false;
        return;
      }
      if (!captionRef.current || !titleRef.current) return;

      // Snap back what the outgoing tween hid.
      gsap.set([captionRef.current, titleRef.current], { autoAlpha: 1, y: 0 });

      if (prefersReducedMotion()) {
        gsap.set(
          [
            chapterRef.current,
            titleRef.current,
            counterRef.current,
            counterNumRef.current,
          ],
          { autoAlpha: 1, y: 0, yPercent: 0 }
        );
        return;
      }

      // Chars only — no line/mask wrappers that shift metrics.
      const split = new SplitText(titleRef.current, { type: "chars" });
      splitRef.current = split;

      const tl = gsap.timeline({
        // Restore plain <h2> once the reveal is done.
        onComplete: () => {
          split.revert();
          if (splitRef.current === split) splitRef.current = null;
        },
      });

      // Title: char stagger up from below the clip.
      tl.from(
        split.chars,
        {
          yPercent: TITLE_CHAR_Y_PERCENT,
          duration: TITLE_CHAR_DURATION,
          ease: "power2.out",
          stagger: TITLE_CHAR_STAGGER,
        },
        0
      );

      // Chapter: fade only.
      if (chapterRef.current) {
        tl.fromTo(
          chapterRef.current,
          { autoAlpha: 0, y: 0 },
          { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" },
          0
        );
      }

      // Counter: fade block, lift just the number.
      if (counterRef.current) {
        tl.fromTo(
          counterRef.current,
          { autoAlpha: 0, y: 0 },
          { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out" },
          0
        );
      }
      if (counterNumRef.current) {
        tl.from(
          counterNumRef.current,
          {
            yPercent: 110,
            duration: 0.55,
            ease: "power3.out",
          },
          0
        );
      }
    },
    { dependencies: [caption], scope: rootRef }
  );

  // Drop the last live split on unmount.
  useGSAP(
    () => () => {
      splitRef.current?.revert();
      splitRef.current = null;
    },
    { scope: rootRef }
  );

  // Circular cursor: smooth follow + arrow that flips with the pointer side.
  useEffect(() => {
    if (!showControls || isCoarsePointer) return;
    const cursor = cursorRef.current;
    const l1 = line1Ref.current;
    const l2 = line2Ref.current;
    if (!cursor || !l1 || !l2) return;

    gsap.set(cursor, { xPercent: -50, yPercent: -50, opacity: 0, scale: 0.6 });
    gsap.set(l1, {
      transformOrigin: "100% 50%",
      xPercent: -50,
      yPercent: -50,
      y: -1.5,
      rotation: 45,
      x: 0,
    });
    gsap.set(l2, {
      transformOrigin: "100% 50%",
      xPercent: -50,
      yPercent: -50,
      y: 1.5,
      rotation: -45,
      x: 0,
    });

    let currentSide: "left" | "right" = "right";
    let rafId: number | null = null;

    const handleMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const target = e.target instanceof Element ? e.target : null;
      const isOverControls = Boolean(
        target?.closest(
          'button, input, textarea, select, a, label, [role="button"], [contenteditable="true"], [class*="remixer-panel"]'
        )
      );

      mouse.current.x = x;
      mouse.current.y = y;

      const rect = rootRef.current?.getBoundingClientRect();
      const isOut =
        !rect ||
        x <= rect.left ||
        y <= rect.top ||
        x >= rect.right ||
        y >= rect.bottom;

      if (isOut || isOverControls) {
        if (isInside.current) {
          isInside.current = false;
          gsap.to(cursor, {
            opacity: 0,
            scale: 0.6,
            duration: 0.25,
            ease: "power3.inOut",
          });
        }
        return;
      }

      if (!isInside.current) {
        pos.current.x = x;
        pos.current.y = y;
        gsap.set(cursor, { x, y });
        gsap.to(cursor, {
          opacity: 1,
          scale: 1,
          duration: 0.25,
          ease: "power3.out",
        });
        isInside.current = true;
      }

      const isLeft = rect ? x < rect.left + rect.width / 2 : false;
      const nextSide = isLeft ? "left" : "right";

      if (nextSide !== currentSide) {
        currentSide = nextSide;
        if (nextSide === "left") {
          gsap.to(l1, {
            rotation: 135,
            x: "-1vw",
            duration: 0.35,
            ease: "power3.inOut",
          });
          gsap.to(l2, {
            rotation: -135,
            x: "-1vw",
            duration: 0.35,
            ease: "power3.inOut",
          });
        } else {
          gsap.to(l1, {
            rotation: 45,
            x: 4,
            duration: 0.35,
            ease: "power3.inOut",
          });
          gsap.to(l2, {
            rotation: -45,
            x: 4,
            duration: 0.35,
            ease: "power3.inOut",
          });
        }
      }
    };

    const render = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.12;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.12;
      gsap.set(cursor, { x: pos.current.x, y: pos.current.y });
      rafId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMove);
    render();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [showControls, isCoarsePointer]);

  const renderStrips = (slide: Slide) => {
    const width = 100 / stripCount;

    return Array.from({ length: stripCount }, (_, i) => (
      <div
        key={i}
        ref={(el) => {
          if (el) stripsRef.current[i] = el;
        }}
        className="absolute inset-y-0 overflow-hidden"
        style={{
          left: `${i * width}%`,
          width: `${width}%`,
          // Cover the seam between neighbours.
          marginLeft: i === 0 ? 0 : "-0.5px",
          paddingLeft: i === 0 ? 0 : "0.5px",
        }}
      >
        {/* Full-width image pulled back by this strip's offset. */}
        <div
          className="absolute inset-y-0"
          style={{
            left: `-${i * 100}%`,
            width: `${stripCount * 100}%`,
          }}
        >
          <div
            ref={(el) => {
              if (el) zoomRef.current[i] = el;
            }}
            className="relative h-full w-full will-change-transform"
          >
            <img
              src={slide.src}
              alt=""
              draggable={false}
              className="absolute inset-0 h-full w-full select-none object-cover"
            />
          </div>
        </div>
      </div>
    ));
  };

  const activeSlide = slides[caption];
  const stacked = isCoarsePointer;

  return (
    <div
      ref={rootRef}
      style={{ backgroundColor }}
      className={`parallax-strip-slider relative h-full w-full overflow-hidden ${className}`}
    >
      {/* Outgoing slide, revealed away underneath. */}
      <div className="absolute inset-0">
        <img
          src={slides[current].src}
          alt={slides[current].title}
          draggable={false}
          className="absolute inset-0 h-full w-full select-none object-cover"
        />
      </div>

      {/* Incoming slide, mounted only during a transition. */}
      {incoming !== null && (
        <div className="absolute inset-0">{renderStrips(slides[incoming])}</div>
      )}

      {/* Click-to-navigate overlay: left half steps back, right half advances. */}
      {showControls && total > 1 && (
        <div
          className="absolute inset-0 z-20"
          style={{ cursor: stacked ? "pointer" : "none" }}
          onClick={(e) => {
            if (isAnimating.current) return;
            const rect = e.currentTarget.getBoundingClientRect();
            const isLeft = e.clientX < rect.left + rect.width / 2;
            if (isLeft) onPrev();
            else onNext();
          }}
        />
      )}

      {/* Top progress bar, floating over the image. */}
      {showProgressBar && (
        <div
          className="pointer-events-none absolute inset-x-6 top-6 z-10 h-px sm:inset-x-10 sm:top-8"
          style={{ backgroundColor: `${accentColor}33` }}
        >
          <div
            ref={progressRef}
            className="h-full w-full origin-left"
            style={{
              transform: `scaleX(${(caption + 1) / total})`,
              backgroundColor: accentColor,
            }}
          />
        </div>
      )}

      {/* Top-left label */}
      <div
        ref={captionRef}
        className="pointer-events-none absolute inset-x-0 top-0 px-6 pt-12 sm:px-10 sm:pt-16"
      >
        <span
          ref={chapterRef}
          className="block text-xs font-medium tracking-wide"
          style={{ color: accentColor }}
        >
          {activeSlide.chapter ??
            `Collection ${String(caption + 1).padStart(2, "0")}`}
        </span>
      </div>

      {/* Bottom bar: three fixed thirds on one line for mouse; stacked column
          with the title + counter grouped for touch. */}
      <div
        className={`absolute inset-x-0 bottom-0 flex px-6 pb-10 sm:px-10 ${
          stacked
            ? "flex-col items-stretch gap-5 pb-24"
            : "items-end"
        }`}
      >
        <h2
          ref={titleRef}
          className={`pointer-events-none flex items-end overflow-hidden text-6xl leading-none sm:text-7xl lg:text-8xl ${
            stacked ? "order-2 w-full" : "w-1/3 shrink-0"
          }`}
          style={{
            fontFamily: '"Instrument Serif", Georgia, serif',
            color: accentColor,
          }}
        >
          {activeSlide.title}
        </h2>

        {/* Middle third keeps its width so the counter stays pinned right. */}
        {!stacked && <div aria-hidden className="w-1/3 shrink-0" />}

        {showCounter && (
          <span
            ref={counterRef}
            className={`pointer-events-none flex shrink-0 items-center text-xs ${
              stacked
                ? "order-1 w-full justify-end"
                : "h-full w-1/3 justify-end py-5"
            }`}
            style={{ color: `${accentColor}b3` }}
          >
            {/* Fixed-width clip so the number can lift in without reflow. */}
            <span className="inline-block w-[2ch] overflow-hidden text-right">
              <span ref={counterNumRef} className="inline-block">
                {String(caption + 1).padStart(2, "0")}
              </span>
            </span>
            <span> / {String(total).padStart(2, "0")}</span>
          </span>
        )}
      </div>

      {/* Circular nav cursor — follows the pointer, arrow flips per side. */}
      {showControls && total > 1 && !isCoarsePointer && (
        <div
          ref={cursorRef}
          className="pointer-events-none fixed left-0 top-0 z-[100]"
        >
          <div
            className="flex size-15 items-center justify-center rounded-full"
            style={{ backgroundColor: accentColor }}
          >
            <div className="relative size-7.5">
              <span
                ref={line1Ref}
                className="absolute left-1/2 top-1/2 h-0.5 w-4"
                style={{ backgroundColor: "#000000" }}
              />
              <span
                ref={line2Ref}
                className="absolute left-1/2 top-1/2 h-0.5 w-4"
                style={{ backgroundColor: "#000000" }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


demo.tsx
"use client";

import ParallaxStripSlider from "@/components/ui/parallax-strip-slider";

export default function ParallaxStripSliderDemo() {
  return (
    <div className="h-screen w-full">
      <ParallaxStripSlider />
    </div>
  );
}

```

---

# 23. SUPPLIED IMPLEMENTATION REFERENCE B — EXPAND ON HOVER

Use this as the reference implementation for the interactive image / feature behaviour
described above.

Do not treat the demo imagery as final Drip content.

```tsx
expand-on-hover.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { cn } from "@/lib/utils";

const Skiper52 = () => {
  const images = [
    {
      src: "https://cdn.21st.dev/assets/mirror/b3/b38b11120084476aaf6ba3bfe8a0cd62837cd3b7f0ebc9dc4dbd01e2415f0542.jpg",
      alt: "Mountain landscape",
      code: "# 23",
    },
    {
      src: "https://cdn.21st.dev/assets/mirror/2c/2ce25185a2e9705e91ccb9de3249f3b04b3806d819c03cf7b123416f1f3cd62b.jpg",
      alt: "Abstract illustration",
      code: "# 23",
    },
    {
      src: "https://cdn.21st.dev/assets/mirror/3b/3b172768c91187c4f9350a4e26babed55625584393674f9109ecd0ddb847cab0.jpg",
      alt: "City skyline at night",
      code: "# 23",
    },
    {
      src: "https://cdn.21st.dev/assets/mirror/0a/0ac670bd21f70d977fea48b0327f07c80dbbe5c05729844853db585a60897944.jpg",
      alt: "Modern architecture",
      code: "# 23",
    },
    {
      src: "https://cdn.21st.dev/assets/mirror/17/17bcd5f4aabe2bc0e73731897b4dcb17b7bf5c48a9995fa36fb8927f439d10ad.jpg",
      alt: "Laptop workspace",
      code: "# 23",
    },
    {
      src: "https://cdn.21st.dev/assets/mirror/7b/7b6cad4f5f9aed24a464d9bb2104aac31bdab6e9d47173db06b6322d79e17119.jpg",
      alt: "Ocean waves",
      code: "# 23",
    },
    {
      src: "https://cdn.21st.dev/assets/mirror/65/654a77994e78900fcecbd9a720c1651e2106691878086fa51b28b7833203afdf.jpg",
      alt: "Forest path",
      code: "# 23",
    },
    {
      src: "https://cdn.21st.dev/assets/mirror/25/25e4b5017e4096963a55d1cb6d0f79d8876fe69e2a4c4f01b587d42e387b4655.jpg",
      alt: "Colorful building",
      code: "# 23",
    },
    {
      src: "https://cdn.21st.dev/assets/mirror/72/72f92301628bced732873f6f31f0687ca8336e90b0629d2805f766c30506cf94.jpg",
      alt: "Sunset view",
      code: "# 23",
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-[#f5f4f3]">
      <HoverExpand_001 className="" images={images} />
    </div>
  );
};

export { Skiper52 };

const HoverExpand_001 = ({
  images,
  className,
}: {
  images: { src: string; alt: string; code: string }[];
  className?: string;
}) => {
  const [activeImage, setActiveImage] = useState<number | null>(1);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("relative w-full max-w-6xl px-5", className)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <div className="flex w-full items-center justify-center gap-1">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-3xl"
              initial={{ width: "2.5rem", height: "20rem" }}
              animate={{
                width: activeImage === index ? "24rem" : "5rem",
                height: activeImage === index ? "24rem" : "24rem",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setActiveImage(index)}
              onHoverStart={() => setActiveImage(index)}
            >
              <AnimatePresence>
                {activeImage === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute h-full w-full bg-gradient-to-t from-black/40 to-transparent"
                  />
                )}
              </AnimatePresence>
              <AnimatePresence>
                {activeImage === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute flex h-full w-full flex-col items-end justify-end p-4"
                  >
                    <p className="text-left text-xs text-white/50">
                      {image.code}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              <img
                src={image.src}
                className="size-full object-cover"
                alt={image.alt}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export { HoverExpand_001 };


demo.tsx
import  { Skiper52 } from "@/components/ui/expand-on-hover";

export default function DemoOne() {
  return < Skiper52/>;
}

```

---

# 24. FINAL EXECUTION RULE

Do the work.

Do not spend the implementation phase replacing the requested concept with an easier
template.

Prioritize fidelity to the requested experience, visual quality, interaction quality,
responsiveness, performance, and editability.

Use the references as technical and visual direction while making the result feel
distinctly like Drip.
