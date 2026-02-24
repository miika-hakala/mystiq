# Product Brief

## One-Liner

MystiQ is an AI-powered puzzle assistant that helps geocachers analyze, decode, and brainstorm mystery caches — on the sofa or in the field.

## User Journeys

### Sofa Mode (Deep Analysis)

1. User pastes puzzle text, image description, or cache page notes into MystiQ
2. MystiQ analyzes the input: identifies potential puzzle type (cipher, numeric, coordinate trick, language puzzle, riddle)
3. User explores detected patterns — e.g., "This looks like ROT13 with a coordinate offset"
4. MystiQ suggests approaches and brainstorms angles, without giving direct answers
5. User iterates, applying hints and testing hypotheses at their own pace

### Field Mode (Quick Help)

1. User opens MystiQ on phone (PWA, fast launch)
2. Snaps a photo or pastes text from the field
3. MystiQ provides immediate analysis: encoding detection, coordinate format check, pattern hints
4. Minimal taps — designed for one-handed use, outdoor lighting, quick decisions
5. User gets unstuck and continues the hunt

## Key Differentiators

- **Geocaching-aware context:** Understands coordinate formats, common mystery cache patterns, and puzzle conventions specific to the hobby
- **Dual-mode UX:** Deep analysis for home use + stripped-down quick mode for the field
- **Assistant, not solver:** Provides hints, patterns, and approaches — never dumps raw coordinates
- **PWA-first:** Works on any device, installable, offline-capable for field use

## Decision Alignment

This document follows decisions defined in [docs/decisions/](decisions/README.md).
