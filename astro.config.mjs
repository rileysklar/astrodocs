import { defineConfig } from "astro/config";
// import netlify from "@astrojs/netlify/functions";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  //   output: "server",
  //   adapter: netlify(),
  integrations: [
    starlight({
      title: "My Docs",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      customCss: [
        // Path to your Tailwind base styles:
        "./src/tailwind.css",
      ],
      sidebar: [
        {
          label: "Guides",
          //   items: [
          //     // Each item here is one entry in the navigation menu.
          //     { label: "Example Guide", link: "/guides/example/" },
          autogenerate: {
            directory: "guides",
          },
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
          },
        },
        {
          label: "Operations",
          autogenerate: {
            directory: "operations",
          },
        },
        {
          label: "Clients",
          autogenerate: {
            directory: "clients",
          },
        },
      ],
    }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
  ],
});
