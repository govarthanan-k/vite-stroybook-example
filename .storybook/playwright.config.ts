import { defineConfig } from "@playwright/test";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  testDir: path.join(dirname, "../src"),
  webServer: [
    {
      name: "storybook",
      command: "yarn storybook",
      port: 6006,
      reuseExistingServer: !process.env.CI,
    },
    {
      name: "vite-app",
      command: "yarn dev",
      port: 5173,
      reuseExistingServer: !process.env.CI,
    },
  ],

  projects: [
    {
      name: "visual",
      testMatch: "**/*.visual.test.ts",
      use: {
        baseURL: "http://localhost:6006",
        screenshot: "only-on-failure",
      },
    },
    {
      name: "e2e",
      testMatch: "**/*.e2e.test.ts",
      use: {
        baseURL: "http://localhost:5173",
        trace: "on-first-retry",
        screenshot: "only-on-failure",
        video: "retain-on-failure",
      },
    },
  ],
});
