# DEC-003: MVP Feature Freeze

**Status:** Accepted
**Date:** 2025-02-24

## Decision

The MVP (Phase 1) includes exactly the features listed below. All other features are deferred. No scope creep.

## Must-Haves (MVP)

1. **Text puzzle analyzer** — Accept text input, identify puzzle type (cipher, numeric, coordinate trick, language puzzle, riddle)
2. **Cipher/encoding detector** — Detect and suggest decodings for: ROT/Caesar, Base64, Morse, Binary, Hex, Atbash, and other common schemes
3. **Hint brainstormer** — AI-powered suggestion of solving approaches, patterns, and angles (not solutions)
4. **Coordinate sanity checker** — Validate coordinate formats, flag missing digits, catch obvious errors in coordinate strings
5. **Field Quick Mode UX** — Snap/paste → analyze flow; minimal taps; fast PWA launch; outdoor-optimized UI

## Explicit Won'ts (Not in MVP)

- Full auto-solve or direct answer generation
- Geocaching.com API integration (ToS risk)
- Automated logging or any cache-interaction features
- Social features (sharing, leaderboards, collaborative solving)
- Heavy image AI or advanced OCR
- Multi-language puzzle support
- User accounts or cloud sync
- Native app store builds (deferred to Phase 2)

## Rationale

- Ship fast, learn from real users
- Avoid over-building before product-market fit is validated
- Each won't-have has a specific reason (risk, cost, or priority)
- Scope discipline is the difference between launching and not launching

## Review

This freeze holds until MVP ships and initial user feedback is collected. Scope changes require explicit decision record (new DEC-00x).
