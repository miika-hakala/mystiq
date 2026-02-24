# MVP Scope (Phase 1)

## MVP Lock (Non-Negotiable)

This scope is frozen per [DEC-003](decisions/dec-003-mvp-feature-freeze.md). No additions without a new DEC record.

## Must Have

- **Text puzzle analyzer:** Accept text input, identify puzzle type (cipher, numeric, coordinate trick, language puzzle, riddle)
- **Cipher/encoding detector:** Detect and suggest decodings for ROT/Caesar, Base64, Morse, Binary, Hex, Atbash, and other common schemes
- **Hint brainstormer:** Suggest solving approaches, patterns, and angles — not direct solutions
- **Coordinate sanity checker:** Validate coordinate formats, flag missing digits, catch obvious errors
- **Field Quick Mode UX:** Snap/paste → analyze flow, minimal taps, fast PWA launch, outdoor-friendly UI

## Should Have

- Basic history of recent analyses (local storage)
- Dark mode (aligned with brand)
- Installable PWA with offline fallback for basic tools

## Won't Have (Explicit MVP Exclusions)

- Full auto-solve or "give me the coordinates" functionality
- Geocaching.com API integration
- Automated logging or cache interaction
- Social features (sharing, leaderboards, collaborative solving)
- Heavy image AI / OCR (beyond basic text extraction if trivial to add)
- Multi-language puzzle support (English-first)
- User accounts or cloud sync (local-first MVP)

## Exclusions Rationale

### No auto-solving

MystiQ's identity is "assistant, not solver" ([DEC-002](decisions/dec-002-assistant-not-solver.md)). Auto-solving would destroy the product's community standing and eliminate the core value proposition. The challenge IS the product — removing it removes the reason to exist.

### No Geocaching.com API integration

Direct API integration carries significant ToS risk. Geocaching HQ has historically restricted third-party tools that automate interactions with their platform. MystiQ avoids this entirely: users manually paste content, and MystiQ never touches the geocaching platform. This protects both MystiQ and its users.

### No social features

Social features (sharing solutions, leaderboards, collaborative solving) would blur the line between "assistant" and "cheating platform." They also add significant scope, moderation burden, and community risk. Not worth the complexity for MVP. Revisit only if community explicitly requests it post-launch.
