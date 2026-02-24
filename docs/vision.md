# Vision

## Problem

Mystery caches are the most intellectually rewarding — and the most frustrating — part of geocaching. Solvers often hit walls: unrecognized cipher types, unfamiliar encoding schemes, or simply not knowing where to start. Existing tools are scattered, generic, and don't understand the geocaching context.

## Audience

- Active geocachers who regularly attempt mystery/puzzle caches
- Solvers ranging from intermediate to advanced who want a smarter workflow
- Field geocachers who need quick analysis on the go

## Why Now

- LLM and pattern-recognition capabilities have matured enough to meaningfully assist puzzle analysis
- PWA technology enables near-native mobile experience without app store friction
- No focused, geocaching-aware puzzle assistant exists in the market

## Product Philosophy

- MystiQ is an AI-powered mystery puzzle assistant — not a generic tool, not a solver
- Designed for BOTH sofa and field usage from day one
- Core mission: reduce frustration, not difficulty — the challenge stays, the dead ends shrink
- The user always does the final thinking; MystiQ expands what they can consider
- Respect for the geocaching community and the spirit of the game is non-negotiable

## Dual-Mode Usage Model

### Sofa Mode

Deep analysis and workspace thinking. The user has time, screen space, and patience for longer reasoning chains. MystiQ provides thorough pattern analysis, cipher detection with explanations, multi-angle brainstorming, and iterative exploration.

### Field Mode

Fast launch, minimal taps, quick insight. The user is standing outdoors, possibly in rain, with one hand on the phone. MystiQ provides immediate analysis — snap/paste → result. No setup, no menus, no friction.

**Why this is a competitive advantage:** No existing tool serves both contexts. Generic cipher websites are desktop-only. Mobile geocaching apps don't analyze puzzles. MystiQ owns the gap between "I'm stuck at home" and "I'm stuck at GZ."

## Product Identity Lock

MystiQ IS:

- AI-powered assistant
- Puzzle / mystery analyzer
- Hint and reasoning companion

MystiQ is NOT:

- Auto-solver
- Cheat engine
- Coordinate generator

This identity is locked. Changes require a new DEC record superseding [DEC-002](decisions/dec-002-assistant-not-solver.md).

## Success Criteria

- Users solve mysteries they previously abandoned
- Measurable reduction in time-to-first-insight on new puzzles
- Positive community sentiment: seen as a helpful tool, not a cheat
- Sustainable recurring revenue via Pro subscriptions

## Non-Goals

- Replace the puzzle-solving experience or remove the challenge
- Become a "press button, get coordinates" tool
- Integrate directly with Geocaching.com APIs (ToS risk)
- Provide social/competitive features in early phases

## Decision Alignment

This document follows decisions defined in [docs/decisions/](decisions/README.md).
