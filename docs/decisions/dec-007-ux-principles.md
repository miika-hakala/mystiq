# DEC-007 — ux principles (sofa vs field)

**status:** accepted
**date:** 2026-02-24

## context

MystiQ is designed for dual-context usage:

1. **Sofa Mode** — calm, analytical environment; longer sessions; deep reasoning workflows; multi-step exploration
2. **Field Mode** — time-critical interactions; outdoor conditions (sunlight, movement, distraction); minimal cognitive load; fast launch and response

Most puzzle/solver tools optimize for desktop use only. MystiQ's differentiation relies on seamless usability across both contexts.

## decision

MystiQ adopts the following UX design principles:

### 1. dual-mode first-class support

Both Sofa Mode and Field Mode are primary design targets. Neither mode is treated as secondary.

### 2. field mode performance priority

Field Mode requires:

- fast application launch
- minimal taps to first result
- high contrast readability
- large touch targets
- reduced typing requirements

Latency and interaction friction are considered critical UX failures.

### 3. cognitive load minimization

MystiQ must reduce confusion, clarify puzzle structure, and suggest approaches without overwhelming.

Avoid: information overload, dense technical UI, solver-tool complexity.

Prefer: progressive disclosure, clear actions, focused feedback.

### 4. assistant-not-solver interaction model

UX must reinforce MystiQ's identity: assist reasoning, analyze patterns, suggest directions.

Never present MystiQ as an automatic solver or "one-click solution" engine.

Reference: [DEC-002](dec-002-assistant-not-solver.md)

### 5. perceived intelligence over feature count

Priority: smooth flow, clear responses, confidence-building feedback.

Over: maximum tool density, solver feature sprawl.

### 6. error tolerance and recovery

MystiQ must gracefully handle bad inputs, partial clues, ambiguous puzzles, and AI uncertainty. UX should guide rather than fail hard.

## rationale

These principles:

- protect MystiQ's competitive advantage (dual-mode usability)
- align product behavior with positioning (assistant, not solver)
- prevent solver-tool UX drift during development
- ensure usability in real geocaching scenarios (outdoor, one-handed, time-pressured)
- support PWA → native transition (consistent interaction patterns)

## consequences

Positive:

- consistent design decisions across all UI work
- better field usability than any competing tool
- reduced feature creep pressure (principles provide clear "no" criteria)
- stronger product identity through interaction design
- clear evaluation criteria for UI changes

Tradeoffs:

- some "power user" features delayed in favor of simplicity
- requires discipline in UI scope — every element must justify its presence

This decision locks MystiQ UX philosophy unless superseded by a future DEC.
