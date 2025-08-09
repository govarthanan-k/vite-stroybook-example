import { defineConfig } from "@playwright/test";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  testDir: path.join(dirname, "../src"),
  testMatch: "**/*.visual.test.ts",
  use: {
    baseURL: "http://localhost:6006",
  },
  webServer: {
    command: "yarn storybook",
    port: 6006,
    reuseExistingServer: !process.env.CI,
  },
});
