import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGitHubPages = process.env.DEPLOY_TARGET === "github";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoSubfolderIndex: true,
      failOnError: true,
    },
  },
  vite: {
    base: isGitHubPages ? "/vedora_website/" : "/",
  },
});
