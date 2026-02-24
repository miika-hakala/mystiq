# DEC-002 — assistant, not solver

**status:** accepted
**date:** 2025-02-24

## context

The geocaching community values the challenge of solving mystery caches. A tool perceived as a "cheat engine" would face backlash, harm the community, and risk the product's reputation. At the same time, solvers genuinely benefit from pattern recognition, cipher detection, and structured brainstorming.

## decision

MystiQ assists, analyzes, and brainstorms. It does not auto-solve puzzles or output ready-to-use coordinates.

UX constraints (enforced, not optional):

- no "solve" button — primary actions are "analyze," "decode," and "brainstorm"
- no coordinate output — the system never presents a final coordinate string as a result
- hint-first responses — all AI output is framed as observations, patterns, or suggested approaches
- user completes the last step — the solver always bridges the gap from hint to answer
- no bulk processing — one puzzle at a time; no batch solving workflows

## rationale

- protects community goodwill — the most important long-term asset
- keeps the product fun (solving is the point; removing it removes the value)
- reduces legal/ethical risk around geocaching ToS
- differentiates from generic cipher tools that just decode without context
- creates a sustainable position: helper tools are welcomed, cheat tools are fought

## consequences

- AI prompts must be carefully designed to avoid leaking direct solutions
- UX copy must be reviewed against messaging guardrails (see positioning.md)
- feature requests for "just give me the answer" must be consistently declined
- marketing must never imply auto-solving capability
