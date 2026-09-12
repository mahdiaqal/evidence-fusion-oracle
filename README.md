# EvidenceFusion Oracle

A refreshable GenLayer reality-snapshot primitive. It has no certificates, capabilities, consumption, escrow, or settlement.

Each feed freezes a bounded question, an exact evaluation rule, and 2–5 HTTPS sources from distinct authority domains. Every refresh makes the leader and validators independently fetch all sources and reconstruct the exact source hashes, authority vector, source-level support vector, and final `YES`/`NO`/`UNKNOWN` answer.

Consensus compares the entire decision-bearing report exactly. There is no confidence score or tolerance. Mixed support/refutation becomes `CONFLICTED`; missing or ambiguous evidence becomes `UNKNOWN`; only complete, non-conflicting observations become `VERIFIED`.

Every refresh appends a new immutable snapshot version and proof root, allowing autonomous systems to compare how externally observed reality changes over time without trusting agent summaries.

## Flow

`CREATE FEED → ADD DISTINCT SOURCES → ACTIVATE → FETCH + NORMALIZE + CONSENSUS → APPEND SNAPSHOT → REFRESH AGAIN`

## Run

```powershell
genvm-lint check contracts/EvidenceFusionOracle.py
node --test tests/security.test.mjs
genlayer network set studionet
genlayer deploy --contract contracts/EvidenceFusionOracle.py
```

See `LIVE_PROOFS.md` for deployed source and transactions.
