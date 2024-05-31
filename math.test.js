import { test } from "node:test";
import assert from "node:assert";
import add from "./add.js";

test("adds 1 + 2 to equal 3", () => {
  assert.equal(add(1, 2), 3);
});
