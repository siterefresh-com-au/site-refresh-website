import test from "node:test";
import assert from "node:assert/strict";

import {
  calculateHostingAmounts,
  calculateProjectAmounts,
  nextBrisbaneFirstUnix,
} from "../functions/_shared/commercial.js";

test("calculates the standard 30/70 project split including GST", () => {
  assert.deepEqual(calculateProjectAmounts(), {
    projectExGstCents: 195000,
    projectGstCents: 19500,
    projectIncGstCents: 214500,
    depositExGstCents: 58500,
    depositGstCents: 5850,
    depositIncGstCents: 64350,
    balanceExGstCents: 136500,
    balanceGstCents: 13650,
    balanceIncGstCents: 150150,
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

