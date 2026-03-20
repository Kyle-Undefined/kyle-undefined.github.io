import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({
        pattern: ['**/*.{md,mdx}', '!**/_*/**', '!**/_*.{md,mdx}'],
        base: "./src/content/blog"
    }),
    schema: () => z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
    }),
});

const projects = defineCollection({
    loader: glob({
        pattern: ['**/*.{md,mdx}', '!**/_*/**', '!**/_*.{md,mdx}'],
        base: "./src/content/projects"
    }),
    schema: () => z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        tags: z.array(z.string()).optional(),
        link: z.string().url().optional(),
        repo: z.string().url().optional(),
    }),
});

export const collections = { blog, projects };
