# Smooth Scroll (Lenis) Integration Prompt

## Objective
Add **smooth scroll with easing** to the IGNITE FITNESS website using the **Lenis** library (formerly `@studio-freight/lenis`, now published as `lenis`). This gives the entire site a buttery "glide" scroll feel instead of the snappy native default — the effect commonly called "smooth scroll" or "smooth scrolling with easing."

---

## Current Stack (verified)
- **Next.js**: 16.2.11 (App Router, Turbopack)
- **React**: 19.2.4
- **Existing scroll libs**: `aos` ^2.3.4 (scroll-reveal animations)
- **Existing components** that touch scroll:
  - `components/AosProvider.tsx` — inits AOS, calls `AOS.refreshHard()` on route change
  - `components/ScrollManager.tsx` — scrolls to top on pathname change
  - `app/layout.tsx` — wraps children in `<ScrollManager />` and `<AosProvider>`
  - `app/globals.css` — has `html { scroll-behavior: smooth; scroll-padding-top: var(--nav-height); }`
  - `components/WelcomeAnimation.tsx` — locks `document.body.style.overflow = 'hidden'` during the intro

These all need to keep working **after** Lenis is installed.

---

## Step 1 — Install Lenis

```bash
npm install lenis
```

The package is now published as `lenis` (the old `@studio-freight/lenis` name is deprecated but still works). Use the new name.

---

## Step 2 — Create a `LenisProvider` component

Create `components/LenisProvider.tsx`. It must be a **client component** (`'use client'`) because it touches `window`, `requestAnimationFrame`, and DOM scroll.

Requirements:
- Instantiate a single `Lenis` instance inside `useEffect` (client-only, guards SSR).
- Use a `requestAnimationFrame` loop to drive `lenis.raf()` each frame. Store the `rafId` and cancel it on cleanup.
- Cleanup: call `lenis.destroy()` and cancel the RAF on unmount.
- Destroy + re-init is **not** needed on route change (Lenis works across route changes in the App Router since it's mounted once in the root layout). Just keep one instance alive for the whole session.

### Recommended config (starter values — tune later)
```ts
new Lenis({
  duration: 1.2,           // seconds — the "glide" length. Higher = more lag/smoothness.
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // exponential ease-out (default Lenis easing)
  smoothWheel: true,        // smooth mouse-wheel
  smoothTouch: false,       // DO NOT smooth touch — it feels laggy on mobile and breaks native momentum. Leave false.
  wheelMultiplier: 1,       // 1 = normal speed; tune if scrolling feels too slow/fast
  touchMultiplier: 1.5,
});
```

### Skeleton
```tsx
'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ /* config above */ });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
```

---

## Step 3 — Mount it in the root layout

In `app/layout.tsx`, wrap the app. **Order matters** — place `LenisProvider` as the outermost client wrapper so every child (Navbar, ScrollManager, AosProvider, pages) lives inside it.

```tsx
<body suppressHydrationWarning>
  <WelcomeAnimationWrapper />
  <LenisProvider>
    <Navbar />
    <ScrollManager />
    <AosProvider>{children}</AosProvider>
    <Footer />
  </LenisProvider>
</body>
```

`WelcomeAnimationWrapper` stays **outside** `LenisProvider` because it locks body overflow and unmounts early — it doesn't need Lenis and shouldn't be affected by it.

---

## Step 4 — Make AOS play nice with Lenis (CRITICAL)

AOS listens to the native `scroll` event to trigger reveals. Lenis still emits native `scroll` events, so AOS **usually works out of the box**. But to be safe and snappy, hook AOS's refresh into Lenis's RAF loop so reveal positions stay accurate during the glide.

Update `components/AosProvider.tsx`:

```tsx
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import AOS from 'aos';

export default function AosProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      disable: false,
    });

    // Lenis emits native scroll events, but refresh AOS positions
    // after the first frame to avoid missed reveals during the glide.
    const id = requestAnimationFrame(() => AOS.refresh());
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(() => AOS.refreshHard());
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return <>{children}</>;
}
```

If reveals ever look delayed/stuttery, the fallback is to call `AOS.refresh()` inside the Lenis RAF loop (throttled to ~every 100ms) instead of relying on the `scroll` event.

---

## Step 5 — Make ScrollManager (scroll-to-top) use Lenis

`components/ScrollManager.tsx` currently calls `window.scrollTo(0, 0)` instantly on route change. With Lenis active, prefer `lenis.scrollTo(0, { immediate: true })` so it jumps instantly rather than animating back to top on every navigation.

Two options:

**Option A — keep it simple (works fine):**
Lenis intercepts `window.scrollTo` transparently in most versions. If the existing `window.scrollTo(0, 0)` already feels instant after install, leave `ScrollManager` unchanged.

**Option B — explicit (recommended if Option A animates weirdly):**
Expose the `lenis` instance via a module-level singleton or React context so `ScrollManager` can call `lenis.scrollTo(0, { immediate: true })`. A lightweight approach:

```ts
// lib/lenisInstance.ts
import type Lenis from 'lenis';
export const lenisRef: { current: Lenis | null } = { current: null };
```
Set `lenisRef.current = lenis` inside `LenisProvider` after creation, then in `ScrollManager`:
```ts
const lenis = lenisRef.current;
if (lenis) lenis.scrollTo(0, { immediate: true });
else window.scrollTo(0, 0);
```

---

## Step 6 — CSS adjustments

In `app/globals.css`, the `html` rule currently has:
```css
html {
  scroll-behavior: smooth;
  scroll-padding-top: var(--nav-height);
}
```

- **Remove or comment out `scroll-behavior: smooth`** — Lenis manages scroll behavior itself; the CSS declaration can fight the JS and cause double-easing / jank.
- **Keep `scroll-padding-top`** — it's still useful for anchor link offset (`#branches`, navbar height). Lenis respects it for programmatic `scrollTo` with `offset`.
- Add `scroll-behavior: auto !important;` on `html` as a fallback override if any inherited smoothness remains.

Keep the existing `::-webkit-scrollbar` styles — Lenis does **not** hide the scrollbar by default, so custom scrollbar styling stays intact.

---

## Step 7 — Anchor links (navbar, footer, "back to top")

The site has in-page anchor usage (e.g. `#branches`, `#footer`, potentially `#hero`). For these to glide smoothly **through Lenis**, intercept clicks on `a[href^="#"]` and call:

```ts
lenis.scrollTo(targetEl, { offset: -80 /* navbar height */ });
```

If you leave native anchor jumps, they'll be **instant** (Lenis doesn't auto-hijack `#hash` clicks unless you wire it up). Implement a small global click handler inside `LenisProvider`:

```ts
const onClick = (e: MouseEvent) => {
  const a = (e.target as HTMLElement)?.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href');
  if (!id || id === '#') return;
  const el = document.querySelector(id);
  if (!el) return;
  e.preventDefault();
  lenis.scrollTo(el as HTMLElement, { offset: -80 });
};
document.addEventListener('click', onClick);
// cleanup: document.removeEventListener('click', onClick);
```

---

## Step 8 — Reduced motion & accessibility

In `app/globals.css` there's already:
```css
@media (prefers-reduced-motion: smooth) { /* scoped to global transitions */ }
```

Add Lenis to the reduced-motion path. Inside `LenisProvider`, detect the media query and either:
- Skip creating Lenis entirely (fall back to native scroll), OR
- Create Lenis with `duration: 0` (instant).

```ts
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReduced) return; // native scroll, no Lenis
```

This respects users who get motion sickness from smooth scroll.

---

## Step 9 — Welcome animation interaction

`components/WelcomeAnimation.tsx` sets `document.body.style.overflow = 'hidden'` during the ~2.75s intro, then clears it. Lenis reads the scroll position from the actual DOM, so while overflow is hidden there's nothing to scroll — this is fine. Just confirm that after the intro unmounts and overflow clears, scrolling resumes via Lenis without needing a manual `lenis.start()`. If scrolling feels stuck after the intro, call `lenis.start()` in the WelcomeAnimation cleanup (expose `lenisRef` as in Step 5).

---

## Step 10 — Verify

After install, test these on desktop AND mobile:

1. **Mouse wheel** — should glide, not snap. Adjust `duration` (1.0–1.5s sweet spot).
2. **Touch scroll (mobile)** — should feel **native** (Lenis with `smoothTouch: false` passthrough). If it feels laggy, ensure `smoothTouch` is `false`.
3. **Keyboard** — Page Up/Down, arrow keys, Space should still work (Lenis handles this).
4. **Navbar links** — navigate between routes; page should jump to top (via ScrollManager), not glide to top.
5. **AOS reveals** — scroll-reveal elements still animate in on scroll.
6. **Anchor links** (`#branches`, footer links) — glide smoothly to the section, offset by navbar height so the heading isn't hidden.
7. **Welcome animation** — plays, locks scroll, then resumes normally after.
8. **`prefers-reduced-motion`** — set it in DevTools → Rendering and confirm scroll falls back to native.
9. **Performance** — DevTools Performance tab: frame rate should stay at 60fps. If drops, lower `duration` or reduce the particle/ember counts in `WelcomeAnimation`.

---

## Step 11 — Tuning knobs (after it works)

| Knob | Where | Effect |
|------|-------|--------|
| `duration` | Lenis config | Glide length. `1.0` = crisp, `1.5` = dreamy, `2.0` = too much. |
| `easing` | Lenis config | Curve shape. Default exponential is good; try `easeOutCubic` for snappier. |
| `wheelMultiplier` | Lenis config | Wheel speed. `1.2` if it feels sluggish. |
| `touchMultiplier` | Lenis config | Touch speed (only matters if `smoothTouch: true`). |
| `offset` | `scrollTo()` calls | Negative = stop above target (navbar clearance). `-80` matches `--nav-height`. |
| `smoothTouch` | Lenis config | Leave `false`. `true` = laggy mobile. Only enable if you want iOS-style smoothing on touch (usually not worth it). |

---

## Files to create / modify (summary)

| File | Action |
|------|--------|
| `package.json` | `npm install lenis` |
| `components/LenisProvider.tsx` | **CREATE** — client component, owns the Lenis instance + RAF loop + anchor click handler + reduced-motion guard |
| `lib/lenisInstance.ts` | **CREATE** (optional) — module singleton if ScrollManager needs direct access |
| `app/layout.tsx` | Wrap app in `<LenisProvider>` (after `<WelcomeAnimationWrapper>`) |
| `components/AosProvider.tsx` | Add a `AOS.refresh()` after init to sync with Lenis RAF |
| `components/ScrollManager.tsx` | Optionally use `lenis.scrollTo(0, { immediate: true })` for route-change jump |
| `app/globals.css` | Remove `scroll-behavior: smooth` from `html` (Lenis handles it); keep `scroll-padding-top` |
| `components/WelcomeAnimation.tsx` | No change unless scroll feels stuck after intro (call `lenis.start()` in cleanup) |

---

## Do NOT
- Do **not** set `smoothTouch: true` — it makes mobile feel laggy and breaks native momentum scrolling.
- Do **not** run two smooth-scroll libs (e.g. Lenis + Locomotive). Pick one.
- Do **not** leave `scroll-behavior: smooth` in CSS alongside Lenis — double easing causes jank.
- Do **not** call `window.scrollTo` for anchor links once Lenis is active — use `lenis.scrollTo()` so it glides.
- Do **not** forget the `prefers-reduced-motion` fallback.
- Do **not** re-init Lenis on every route change — one instance for the whole session.