# DEC-002: Assistant, Not Solver

**Status:** Accepted
**Date:** 2025-02-24

## Decision

MystiQ assists, analyzes, and brainstorms — it does not auto-solve puzzles or output ready-to-use coordinates.

## Context

The geocaching community values the challenge of solving mystery caches. A tool perceived as a "cheat engine" would face backlash, harm the community, and risk the product's reputation. At the same time, solvers genuinely benefit from pattern recognition, cipher detection, and structured brainstorming.

## UX Constraints (Enforced, Not Optional)

- **No "Solve" button:** Primary actions are "Analyze," "Decode," and "Brainstorm"
- **No coordinate output:** The system never presents a final coordinate string as a result
- **Hint-first responses:** All AI output is framed as observations, patterns, or suggested approaches
- **User completes the last step:** The solver always bridges the gap from hint to answer themselves
- **No bulk processing:** One puzzle at a time; no batch solving workflows

## Rationale

- Protects community goodwill — the most important long-term asset
- Keeps the product fun (solving is the point; removing it removes the value)
- Reduces legal/ethical risk around geocaching ToS
- Differentiates from generic cipher tools that just decode without context
- Creates a sustainable position: helper tools are welcomed, cheat tools are fought

## Consequences

- AI prompts must be carefully designed to avoid leaking direct solutions
- UX copy must be reviewed against messaging guardrails (see positioning.md)
- Feature requests for "just give me the answer" must be consistently declined
- Marketing must never imply auto-solving capability
