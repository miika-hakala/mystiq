# DEC-001: Platform Strategy

**Status:** Accepted
**Date:** 2025-02-24

## Decision

Build MystiQ as a web-first Progressive Web App (PWA), with architecture that supports wrapping as a native app later.

## Context

MystiQ needs to work both at home (sofa mode) and in the field (quick mode on phone). Users expect app-like behavior on mobile: fast launch, home screen icon, offline basics.

## Options Considered

1. **Native apps (iOS + Android)** — Best UX, but high dev cost, app store gatekeeping, slower iteration
2. **Web app only** — Fastest to build, but lacks native feel, no home screen presence
3. **PWA (chosen)** — Web tech with native-like install, offline support, single codebase; can wrap later

## Rationale

- PWA gives 80% of native UX at 20% of the cost
- Single codebase for all platforms during MVP
- Installable on both iOS and Android home screens
- Offline service worker covers field use basics
- Easy to wrap with Capacitor/TWA later for app store distribution (Phase 2)
- No app store review delays during rapid MVP iteration

## Tradeoffs

- Some native APIs unavailable (push notifications limited on iOS, no NFC, etc.)
- iOS PWA support is improving but still has quirks
- App store presence deferred to Phase 2 (less discoverability initially)

## Consequences

- Tech stack should be web-native (likely React/Next.js or similar)
- Must invest in service worker and offline strategy early
- Native wrapper (Phase 2) should be planned in architecture but not built yet
