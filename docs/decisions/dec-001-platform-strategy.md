# DEC-001 — platform strategy

**status:** accepted
**date:** 2025-02-24

## context

MystiQ needs to work both at home (sofa mode) and in the field (quick mode on phone). Users expect app-like behavior on mobile: fast launch, home screen icon, offline basics.

Options considered:

1. **native apps (ios + android)** — best UX, but high dev cost, app store gatekeeping, slower iteration
2. **web app only** — fastest to build, but lacks native feel, no home screen presence
3. **pwa (chosen)** — web tech with native-like install, offline support, single codebase; can wrap later

## decision

Build MystiQ as a web-first Progressive Web App (PWA), with architecture that supports wrapping as a native app later.

## rationale

- PWA gives 80% of native UX at 20% of the cost
- single codebase for all platforms during MVP
- installable on both ios and android home screens
- offline service worker covers field use basics
- easy to wrap with Capacitor/TWA later for app store distribution (phase 3)
- no app store review delays during rapid MVP iteration

Tradeoffs accepted:

- some native APIs unavailable (push notifications limited on ios, no NFC)
- ios PWA support still has quirks
- app store presence deferred to phase 3 (less discoverability initially)

## consequences

- tech stack must be web-native
- must invest in service worker and offline strategy early
- native wrapper (phase 3) should be planned in architecture but not built yet
