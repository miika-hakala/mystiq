# DEC-004 — frontend stack selection

**status:** accepted
**date:** 2026-02-24

## context

MystiQ requires:

- web-first architecture
- native-ready foundation
- strong PWA support
- fast launch performance (field mode usage)
- lightweight, responsive UI
- high developer velocity for MVP iteration

The stack must support both:

- sofa mode (deep analysis workflows)
- field mode (fast, mobile-first interactions)

## decision

MystiQ adopts **SvelteKit + PWA-first architecture** as the primary frontend/platform stack.

## rationale

SvelteKit provides:

- excellent performance characteristics
- native-feeling UX via PWA
- minimal runtime overhead
- clean routing and state handling
- fast MVP development
- easy path to native wrapping (Capacitor/Tauri/etc.)

Compared to alternatives:

- **Next.js** — heavier, unnecessary complexity for MVP
- **React SPA** — more boilerplate, slower iteration
- **Flutter/Web** — suboptimal fit for web SaaS UX

SvelteKit best aligns with MystiQ's lean MVP strategy, performance needs, and future native expansion path.

## consequences

Positive:

- faster MVP delivery
- better field performance
- clean web → native transition path
- lower complexity vs heavier frameworks

Tradeoffs:

- smaller ecosystem vs React/Next (acceptable for MVP scope)
- requires SvelteKit familiarity (acceptable)

This decision locks MystiQ's frontend direction unless superseded by a future DEC.
