/// <reference types="vitest/config" />
import { defineProject } from "vitest/config";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineProject({
  plugins: [
    storybookTest({
      configDir: path.join(dirname),
    }),
  ],
  test: {
    name: "storybook",
    browser: {
      enabled: true,
      headless: true,
      provider: "playwright",
      instances: [
        {
          browser: "chromium",
        },
      ],
    },
    setupFiles: [path.join(dirname, "vitest.setup.ts")],
  },
  optimizeDeps: {
    include: ["react/jsx-dev-runtime"],
  },
});
