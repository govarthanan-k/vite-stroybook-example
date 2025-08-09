import { defineConfig, defaultExclude } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    include: ["**/*.snapshot.test.tsx"],
    exclude: [...defaultExclude],
  },
});
