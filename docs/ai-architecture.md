# ai architecture — mystiq

## overview

```
┌─────────────┐     HTTPS      ┌──────────────┐     HTTP/11434    ┌─────────────┐
│  SvelteKit  │ ──────────────▶│  MystiQ API  │ ────────────────▶│   ai-1      │
│  PWA        │                │  (gateway)   │                  │   PRIMARY   │
│  (client)   │                │              │    failover      │   RTX 3060  │
└─────────────┘                │              │ ──────────────▶  └─────────────┘
                               │              │                  ┌─────────────┐
                               │              │                  │   ai-2      │
                               │              │                  │   STANDBY   │
                               │              │                  │   GTX 1660  │
                               └──────────────┘                  └─────────────┘
                                     │
                                     │ optional (phase 3)
                                     ▼
                               ┌──────────────┐
                               │  ChromaDB    │
                               │  ai-1:8000   │
                               │  (RAG)       │
                               └──────────────┘
```

## components

| Component | Role | Location |
|---|---|---|
| SvelteKit/PWA | Client application | User's browser/device |
| MystiQ API | AI gateway service | LAN (TBD host) |
| Ollama (ai-1) | Primary inference | 192.168.0.208:11434 |
| Ollama (ai-2) | Standby inference | 192.168.0.194:11434 |
| ChromaDB | RAG vector store (optional) | 192.168.0.208:8000 |

## endpoints (contract-level)

| Method | Path | Purpose | Phase |
|---|---|---|---|
| POST | /api/analyze/text | Text puzzle analysis, cipher detection, hint brainstorming | 1 (MVP) |
| POST | /api/analyze/image | Image-based puzzle analysis | 3 (expansion) |
| GET | /api/health | Gateway + upstream Ollama status | 0 (foundation) |
| GET | /api/models | Available models list (admin/debug only) | 0 (foundation) |

## routing / failover policy

- **primary:** ai-1 (192.168.0.208:11434)
- **fallback:** ai-2 (192.168.0.194:11434) on timeout or connection error
- **connect timeout:** 2s
- **total timeout:** 15s (field mode must stay responsive)
- **retry policy:** 1 retry max on primary failure, then fallback — no retry on fallback (avoid long hangs)
- **health check:** gateway periodically pings both nodes; marks unhealthy after 3 consecutive failures

## guardrails (assistant boundary)

Enforced at the gateway level — the client cannot bypass these:

- **no coordinate-dump mode:** gateway never returns a response formatted as final coordinates
- **approach-first output:** all responses are framed as analysis, patterns, approaches, or suggestions
- **safe refusal:** if the underlying model returns a direct solution, the gateway intercepts and reframes as hints
- **prompt engineering:** system prompts enforce assistant persona; user input is sandboxed
- **no bulk processing:** one analysis per request; no batch endpoints

Reference: [DEC-002](decisions/dec-002-assistant-not-solver.md)

## caching

Simple request-level caching (build when needed, architecture documented now):

- **key:** hash(model + request body)
- **storage:** in-memory or Redis (TBD)
- **TTL:** 1 hour (configurable)
- **goal:** speed up repeated field-mode queries + reduce GPU load
- **invalidation:** TTL-based only; no manual purge needed for MVP

## observability

- log: request ID, latency, upstream used (ai-1 or ai-2), response status
- log: failover events (when ai-2 is used instead of ai-1)
- **no raw user content stored by default** (privacy-first)
- optional: opt-in debug mode that logs request/response for troubleshooting (disabled in production)
- metrics: request count, latency percentiles, cache hit rate, failover rate

## security

- **LAN-only by default:** Ollama ports (11434) restricted to 192.168.0.0/24
- **no direct Ollama access from client:** all requests go through gateway
- **remote access (future):** tunnel on gateway service only, never expose Ollama directly
- **ChromaDB:** LAN-only, no auth needed on trusted network (revisit if exposed)
- **API keys:** gateway may require API key from client (enforces freemium limits)
