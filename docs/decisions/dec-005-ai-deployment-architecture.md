# DEC-005 — ai deployment architecture

**status:** accepted
**date:** 2026-02-24

## context

MystiQ needs:

- low-latency field mode responses
- predictable costs (self-hosted inference, no per-token cloud billing)
- native-ready API boundary (frontend never talks directly to inference)
- fallback if primary GPU node is down
- centralized policy enforcement for assistant boundary

Available infrastructure: LAN cluster at 192.168.0.0/24 with two GPU nodes running Ollama.

## decision

MystiQ AI is deployed on the LAN cluster:

- **ai-1** (192.168.0.208) — PRIMARY inference, Ollama on port 11434, RTX 3060
- **ai-2** (192.168.0.194) — STANDBY fallback, Ollama on port 11434, GTX 1660

MystiQ backend provides an **AI Gateway** HTTP API:

- frontend (SvelteKit/PWA) calls MystiQ API only
- MystiQ API routes to Ollama on ai-1, falls back to ai-2 on failure
- gateway enforces: assistant boundary, rate limits, caching, observability hooks

Optional (not MVP requirement):

- RAG via ChromaDB on ai-1 (192.168.0.208:8000) — documented as future-ready for phase 3

## rationale

- isolates ToS/community-risky behavior behind centralized policy controls
- stable API contract for current PWA and future native wrappers
- failover improves reliability for field use
- keeps model weights, secrets, and prompt engineering off the client
- enables response caching to reduce GPU load and improve field-mode speed
- self-hosted = zero per-request cost after hardware investment

## consequences

Positive:

- native-ready: API contract remains constant regardless of client platform
- reliability via automatic failover (ai-1 → ai-2)
- cost control (LAN inference, no cloud API bills)
- policy enforcement centralizes "assistant-not-solver" in one place
- caching layer reduces repeated inference for common patterns

Tradeoffs:

- requires building and maintaining the gateway service
- LAN-only by default; remote access requires tunnel on gateway (not on Ollama directly)
- ai-2 (GTX 1660) has lower throughput than ai-1 (RTX 3060) — acceptable as fallback
