# Risks & Ethics

## Community Backlash Risk

**Risk:** The geocaching community may perceive MystiQ as a cheating tool, leading to negative sentiment, forum backlash, or social pressure against users.

**Mitigation:**
- Position consistently as assistant/analyzer, never as solver
- UX enforces hints and approaches, never dumps coordinates
- Engage community early: transparent about what it does and doesn't do
- Actively participate in geocaching forums with honest framing
- Feature community-suggested guardrails

## ToS / API Risk

**Risk:** Direct integration with Geocaching.com APIs could violate their Terms of Service, leading to legal action or platform bans for users.

**Mitigation:**
- No Geocaching.com API integration in MVP or near-term roadmap
- Users manually paste/type puzzle content (no scraping)
- No automated logging, cache interaction, or data extraction from the platform
- Revisit API integration only if officially sanctioned or community norms shift

## Built-In Constraints

These are product-level constraints, not just guidelines:

- **No direct solutions:** The system never outputs final coordinates or complete puzzle answers
- **No coordinate dump:** Even if the AI "knows" the answer, the UX prevents presenting it as a ready-to-use coordinate
- **Approach-first output:** All responses are framed as approaches, patterns, or hints
- **User agency:** The user must always take the final solving step themselves

## Disclaimer Text (Draft)

> MystiQ is an independent educational tool designed to help puzzle enthusiasts analyze and learn about cipher types, encoding schemes, and puzzle-solving approaches. MystiQ is not affiliated with, endorsed by, or connected to Geocaching HQ or Groundspeak, Inc.
>
> Users are responsible for their own use of this tool and for respecting the rules, guidelines, and spirit of any activities they participate in. MystiQ provides analysis and hints — it does not solve puzzles for you.
>
> Use responsibly. The challenge is the point.

## Data & Privacy Considerations

- MVP is local-first: no puzzle content stored on servers beyond processing
- No user tracking beyond basic analytics
- Clear privacy policy before launch
- No collection of cache-specific data (GC codes, coordinates, etc.) for aggregation
