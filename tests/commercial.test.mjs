import test from "node:test";
import assert from "node:assert/strict";

import {
  calculateHostingAmounts,
  calculateProjectAmounts,
  nextBrisbaneFirstUnix,
} from "../functions/_shared/commercial.js";

test("calculates the standard 30/70 project split including GST", () => {
  assert.deepEqual(calculateProjectAmounts(), {
    projectExGstCents: 395000,
    projectGstCents: 39500,
    projectIncGstCents: 434500,
    depositExGstCents: 118500,
    depositGstCents: 11850,
    depositIncGstCents: 130350,
    balanceExGstCents: 276500,
    balanceGstCents: 27650,
    balanceIncGstCents: 304150,
  });
});

test("calculates monthly hosting including GST", () => {
  assert.deepEqual(calculateHostingAmounts(), {
    hostingExGstCents: 8900,
    hostingGstCents: 890,
    hostingIncGstCents: 9790,
  });
});

test("anchors hosting to the next first in Brisbane without proration", () => {
  const anchor = nextBrisbaneFirstUnix(new Date("2026-07-22T02:00:00.000Z"));
  assert.equal(
    new Date(anchor * 1000).toISOString(),
    "2026-07-31T14:05:00.000Z",
  );
});

