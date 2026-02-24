# DEC-008 — coding and repo structure standards

**status:** accepted
**date:** 2026-02-24

## context

MystiQ is a web-first, native-ready product with:

- SvelteKit frontend ([DEC-004](dec-004-frontend-stack.md))
- AI Gateway backend calling LAN inference ([DEC-005](dec-005-ai-deployment-architecture.md))
- strict SSOT governance and documentation-driven execution

Before implementation starts, MystiQ must lock:

- repository layout
- naming conventions
- configuration patterns
- coding standards and quality gates

This prevents long-term maintenance issues and feature creep via ad-hoc structure.

## decision

MystiQ adopts the following standards.

### 1. repository layout (locked)

Top-level layout:

- `apps/` — application code
  - `apps/web/` — SvelteKit PWA frontend
  - `apps/api/` — MystiQ AI Gateway (HTTP API)
- `packages/` — shared libraries (optional; only when justified)
- `docs/` — SSOT documentation (decisions, roadmap, ops)
- `scripts/` — repo-level utility scripts (setup, checks)
- `.github/` — workflows

Rules:

- keep MVP simple: avoid `packages/` until a real shared need exists
- no random top-level folders

### 2. naming conventions (non-negotiable)

- all filenames and directories: **lowercase**
- use hyphens for multiword names: `field-mode`, `ai-gateway`
- no camelCase or PascalCase in filenames
- code identifiers follow language norms (camelCase in JS/TS), but files remain lowercase

### 3. configuration standards

- one `.env.example` per app:
  - `apps/web/.env.example`
  - `apps/api/.env.example`
- no secrets committed
- config keys documented in `docs/ops/env.md` (create later if missing; do not block MVP)

### 4. api contract discipline

- frontend never calls Ollama directly
- frontend only calls MystiQ API (gateway)
- gateway is the policy enforcement point (assistant boundary, rate limits, caching)

Minimal v1 endpoints (see [ai-architecture.md](../ai-architecture.md)):

- `POST /api/analyze/text`
- `GET /api/health`

### 5. quality gates (mvp-level)

For every code change:

- formatting/linting must pass (framework defaults)
- build must succeed
- no unused/dead files added

UI changes require:

- user visual confirmation in browser before final PASS

### 6. scope discipline in code

- no Geocaching.com API integration in MVP
- no auto-solve workflows
- no heavy image AI in MVP
- new major capability requires a DEC

## rationale

These standards:

- keep the repo understandable for agents and future contributors
- reduce regressions and "project entropy"
- enforce the assistant-not-solver boundary via architecture
- accelerate delivery by minimizing structural debate

## consequences

Positive:

- predictable structure and conventions
- less maintenance debt
- easier delegation to agents
- fewer accidental scope expansions

Tradeoffs:

- slightly slower to add new patterns (must follow standards)
- decisions may need superseding DEC if requirements change

This decision locks repo and coding standards unless superseded by a future DEC.
