# DEC-003 — mvp feature freeze

**status:** accepted
**date:** 2025-02-24

## context

MystiQ needs to ship fast to validate product-market fit. Scope creep is the primary risk to launch. A locked feature set ensures focus and prevents the MVP from becoming a never-shipping feature monster.

## decision

The MVP (phase 1) includes exactly these features. All others are deferred. No scope creep.

Must-haves:

1. **text puzzle analyzer** — accept text input, identify puzzle type (cipher, numeric, coordinate trick, language puzzle, riddle)
2. **cipher/encoding detector** — detect and suggest decodings for: ROT/Caesar, Base64, Morse, Binary, Hex, Atbash, and other common schemes
3. **hint brainstormer** — AI-powered suggestion of solving approaches, patterns, and angles (not solutions)
4. **coordinate sanity checker** — validate coordinate formats, flag missing digits, catch obvious errors
5. **field quick mode UX** — snap/paste → analyze flow; minimal taps; fast PWA launch; outdoor-optimized UI

Explicit won'ts:

- full auto-solve or direct answer generation
- geocaching.com API integration (ToS risk)
- automated logging or cache-interaction features
- social features (sharing, leaderboards, collaborative solving)
- heavy image AI or advanced OCR
- multi-language puzzle support
- user accounts or cloud sync
- native app store builds (deferred to phase 3)

## rationale

- ship fast, learn from real users
- avoid over-building before product-market fit is validated
- each won't-have has a specific reason (risk, cost, or priority)
- scope discipline is the difference between launching and not launching

## consequences

- this freeze holds until MVP ships and initial user feedback is collected
- scope changes require a new DEC record (dec-00x)
- all agents and contributors must check this list before adding features
