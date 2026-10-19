import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";

describe("About screen content", () => {
  const htmlPath = path.resolve(process.cwd(), "index.html");
  const html = fs.readFileSync(htmlPath, "utf8");

  it("includes an About section", () => {
    expect(html).toContain('id="about"');
    expect(html).toContain("About this screen");
  });

  it("keeps the original gallery content", () => {
    expect(html).toContain("Multi-image showcase");
    expect(html).toContain("Workspace Mood");
    expect(html).toContain("Product Shot");
  });

  it("uses the existing visual theme structure", () => {
    expect(html).toContain("--accent: #7c5cff");
    expect(html).toContain("font-family: \"Inter\", sans-serif");
  });
});