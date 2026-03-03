// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://demos.hereditary-project.eu",
  base: "/",
  integrations: [
    starlight({
      title: "HEREDITARY",
      favicon: "/favicon.ico",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/hereditary-eu/demos",
        },
      ],
      sidebar: [],
    }),
  ],
});
