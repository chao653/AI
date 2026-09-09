import { test } from "node:test";
import assert from "node:assert/strict";
import { Eliza, reflect, normalise } from "../src/eliza.js";

test("reflect swaps first/second person pronouns", () => {
  assert.equal(reflect("i am my own person"), "you are your own person");
  assert.equal(reflect("you are wrong"), "I am wrong");
});

test("normalise lowercases and collapses whitespace", () => {
  assert.equal(normalise("  Hello   WORLD  "), "hello world");
  assert.equal(normalise(null), "");
});

test("empty input asks the user to say something", () => {
  const eliza = new Eliza();
  assert.match(eliza.respond("   "), /say something/i);
});

test("'i need X' is reflected back into the reply", () => {
  const eliza = new Eliza();
  const reply = eliza.respond("I need a vacation");
  assert.match(reply, /a vacation/);
});

test("'i am X' reflects the captured phrase", () => {
  const eliza = new Eliza();
  const reply = eliza.respond("I am feeling sad today");
  assert.match(reply, /feeling sad today/);
});

test("mentioning a computer triggers the computer keyword rule", () => {
  const eliza = new Eliza();
  const reply = eliza.respond("Do computers ever think?");
  assert.match(reply, /computer|machine/i);
});

test("unmatched input falls back to a generic prompt", () => {
  const eliza = new Eliza();
  const reply = eliza.respond("the sky is a nice shade of teal");
  assert.ok(reply.length > 0);
});

test("repeated identical input rotates through varied responses", () => {
  const eliza = new Eliza();
  const first = eliza.respond("why");
  const second = eliza.respond("why");
  assert.notEqual(first, second);
});
