// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://demos.hereditary-project.eu",
  base: "/",
  integrations: [
    starlight({
      title: "Demos",
      logo: {
        src: "./src/assets/logos/hereditary-logo-transparent.png",
        alt: "HEREDITARY",
        // replacesTitle: true,
      },
      favicon: "/favicon.ico",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/hereditary-eu/",
        },
        {
          icon: "linkedin",
          label: "LinkedIn",
          href: "https://www.linkedin.com/company/hereditary-eu",
        },
      ],
      customCss: ["./src/main.scss"],
    }),
  ],
});
