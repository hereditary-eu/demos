import { defineCollection } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { z } from 'astro/zod';
import { glob } from "astro/loaders";

const systemsCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    image: image().optional(),
    image_url: z.string().optional(),
    link: z.string().optional(),
    code: z.string().optional(),
    video: z.string().optional(),
    contact: z.string().optional(),
    description: z.string().optional(),
    paper: z.string().optional(),
    documentation: z.string().optional(),
    paper_title: z.string().optional(),

  }),
  loader: glob({ base: './src/content/systems', pattern: '**/*.{md,mdx}' }),
});

export const collections = {
  // docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  systems: systemsCollection,
};
