import { expect, test } from "@jest/globals";
import { existsSync, readFileSync } from "node:fs";

test("template indexes desired state without defining a live target", () => {
  expect(existsSync("desired-state/README.md")).toBe(true);
  expect(readFileSync("desired-state/README.md", "utf8")).toContain("committed declarative inputs");
  expect(readFileSync("README.md", "utf8")).toContain(
    "No live target is configured by this template.",
  );
});
