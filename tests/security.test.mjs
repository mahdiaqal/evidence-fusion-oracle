import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
const source = readFileSync(new URL("../contracts/EvidenceFusionOracle.py", import.meta.url), "utf8");
test("sources are independently fetched by leader and validators", () => {
  assert.match(source, /gl\.nondet\.web\.get\(urls\[index\]\)/);
  assert.match(source, /independent = acquire\(\)/);
});
test("all consequential fields use exact equality", () => {
  for (const field of ["answer", "support_vector", "source_hashes", "authorities"])
    assert.match(source, new RegExp(`leader\\.calldata\\.get\\("${field}"\\) == independent\\["${field}"\\]`));
  assert.doesNotMatch(source, /confidence|tolerance/);
});
test("architecture has versioned snapshots without certificates", () => {
  assert.match(source, /self\.snapshots\[feed_id \+ ":" \+ str\(next_version\)\]/);
  assert.doesNotMatch(source, /certificate|capability|consume|settle/);
});
test("VERIFIED requires deterministic answer-vector directional consistency", () => {
  assert.match(source, /def _snapshot_state\(answer: str, support_vector: list\[str\]\) -> str:/);
  assert.match(source, /answer == "YES" and all\(value == "SUPPORT" for value in support_vector\)/);
  assert.match(source, /answer == "NO" and all\(value == "REFUTE" for value in support_vector\)/);
  assert.match(source, /state = _snapshot_state\(report\["answer"\], report\["support_vector"\]\)/);
  assert.doesNotMatch(source, /report\["answer"\] in \("YES", "NO"\) and all_known/);
});
