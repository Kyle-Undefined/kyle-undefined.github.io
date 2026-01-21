import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: () => z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
    }),
});

const projects = defineCollection({
    type: 'content',
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
