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
