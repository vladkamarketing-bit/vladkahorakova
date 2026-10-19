import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const sluzby = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/sluzby' }),
  schema: z.object({
    title: z.string(),
    order: z.number().default(10),
    main: z.boolean().default(false),
    kicker: z.string(),
    short: z.string(),
    lead: z.string(),
    price: z.string().optional(),
    forWho: z.array(z.string()).default([]),
    deliverables: z.array(z.string()).default([]),
    steps: z.array(z.object({ title: z.string(), text: z.string() })).default([]),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

const kurzy = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/kurzy' }),
  schema: z.object({
    title: z.string(),
    audience: z.enum(['firmy', 'jednotlivci']),
    order: z.number().default(10),
    active: z.boolean().default(true),
    short: z.string(),
    format: z.string(),
    length: z.string(),
    price: z.string(),
    capacity: z.string().optional(),
    dates: z.array(z.string()).default([]),
    outcomes: z.array(z.string()).default([]),
    program: z.array(z.string()).default([]),
  }),
});

export const collections = { sluzby, kurzy };
