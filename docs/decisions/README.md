# decisions — mystiq

## purpose

Architectural and strategic SSOT for the mystiq project.

## rules

- every major architectural or strategic change requires a DEC file
- decisions override chat history, memory, or prior sessions
- roadmap follows decisions — not the other way around
- format: `dec-NNN-short-name.md`

## format

Every DEC file follows this structure:

```
# DEC-NNN — title

**status:** accepted | superseded | rejected
**date:** YYYY-MM-DD

## context
## decision
## rationale
## consequences
```

## active decisions

- [DEC-001: platform strategy](dec-001-platform-strategy.md) — web-first PWA, native-ready
- [DEC-002: assistant, not solver](dec-002-assistant-not-solver.md) — assist/analyze/brainstorm only
- [DEC-003: mvp feature freeze](dec-003-mvp-feature-freeze.md) — locked scope, no creep
- [DEC-004: frontend stack](dec-004-frontend-stack.md) — SvelteKit + PWA-first
- [DEC-005: ai deployment architecture](dec-005-ai-deployment-architecture.md) — LAN cluster, gateway, failover
- [DEC-006: brand and visual identity](dec-006-brand-and-visual-identity.md) — Orbital Q, dark + neon, premium tech
- [DEC-007: ux principles](dec-007-ux-principles.md) — sofa vs field design laws
- [DEC-008: coding and repo structure standards](dec-008-coding-and-repo-structure-standards.md) — layout, naming, quality gates

## superseded decisions

(none)
