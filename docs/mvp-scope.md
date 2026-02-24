# MVP Scope (Phase 1)

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
- Geocaching.com API integration (ToS risk; revisit later)
- Automated logging or cache interaction
- Social features (sharing, leaderboards, collaborative solving)
- Heavy image AI / OCR (beyond basic text extraction if trivial to add)
- Multi-language puzzle support (English-first)
- User accounts or cloud sync (local-first MVP)
