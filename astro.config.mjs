import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://openquanter.com",
  trailingSlash: "ignore",
  build: { format: "directory" },
});
