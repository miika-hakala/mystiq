# roadmap — mystiq

## phase 0 — foundation

- [x] repo bootstrap
- [x] product documentation
- [x] työnjohtaja protocol
- [x] frontend scaffold
- [x] design system tokens
- [ ] ai gateway skeleton (health + failover wiring)

## phase 1 — mvp (pwa)

- [ ] text puzzle analyzer
- [ ] cipher / encoding detector
- [ ] hint brainstormer
- [ ] coordinate sanity checker
- [ ] field quick mode
- [ ] freemium limits
- [ ] pricing screen
- [ ] gateway enforces assistant boundary + basic caching

## phase 2 — stabilization

- [ ] usability refinement
- [ ] performance optimization
- [ ] analytics basics
- [ ] onboarding polish

## phase 3 — expansion (post-traction)

- [ ] native wrapper
- [ ] lightweight image helper
- [ ] workspace / history upgrades

---

## mvp lock (non-negotiable)

The following are NOT included in MVP. No exceptions without a new DEC record.

- automatic solving or coordinate generation
- geocaching.com api integration
- auto logging or cache interaction
- social features
- heavy image ai / advanced ocr
- multi-language support
- user accounts or cloud sync
- native app store builds

Reference: [DEC-003](decisions/dec-003-mvp-feature-freeze.md)

## assistant boundary (non-negotiable)

MystiQ assists, analyzes, and brainstorms. It does not auto-solve or output coordinates.

- no "solve" button — only "analyze," "decode," "brainstorm"
- no coordinate output as a result
- hint-first responses only
- user completes the final step

Reference: [DEC-002](decisions/dec-002-assistant-not-solver.md)

## success criteria

MVP is PASS when:

- all phase 1 items are shipped and functional
- pwa installs and launches on mobile (ios + android)
- field quick mode works with ≤3 taps from launch to analysis
- freemium gate enforces limits correctly
- no auto-solve path exists in any flow
- community-facing copy reviewed against positioning guardrails

## non-goals

- replace the puzzle-solving experience
- become a "press button, get coordinates" tool
- compete with generic cipher/decoder websites
- build a social platform
- integrate with geocaching.com apis (tos risk)

## risks tracked

- community backlash if perceived as cheat tool
- tos / api risk with geocaching platforms
- scope creep beyond mvp lock
- pwa limitations on ios (push notifications, offline quirks)

See [risks-and-ethics.md](risks-and-ethics.md) for full analysis.

## decision linkage

All architectural and strategic decisions are tracked in [docs/decisions/](decisions/README.md).

- [DEC-001: platform strategy](decisions/dec-001-platform-strategy.md)
- [DEC-002: assistant, not solver](decisions/dec-002-assistant-not-solver.md)
- [DEC-003: mvp feature freeze](decisions/dec-003-mvp-feature-freeze.md)
- [DEC-004: frontend stack](decisions/dec-004-frontend-stack.md)
- [DEC-005: ai deployment architecture](decisions/dec-005-ai-deployment-architecture.md)
- [DEC-006: brand and visual identity](decisions/dec-006-brand-and-visual-identity.md)
- [DEC-007: ux principles](decisions/dec-007-ux-principles.md)
- [DEC-008: coding and repo structure standards](decisions/dec-008-coding-and-repo-structure-standards.md)
