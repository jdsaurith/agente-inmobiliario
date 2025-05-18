import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const baseSchema = z.object({
  title: z.string().max(60),
});

const note = defineCollection({
  loader: glob({ base: "./src/content/note", pattern: "**/*.{md,mdx}" }),
  schema: baseSchema.extend({
    description: z.string().optional(),
    publishDate: z
      .string()
      .datetime({ offset: true }) // Ensures ISO 8601 format with offsets allowed (e.g. "2024-01-01T00:00:00Z" and "2024-01-01T00:00:00+02:00")
      .transform((val) => new Date(val)),
  }),
});

// Series
const series = defineCollection({
  loader: glob({ base: "./src/content/series", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    featured: z.boolean().default(false), // Пометка для популярных серий
  }),
});
// End

// Series
export const collections = { note, series };
