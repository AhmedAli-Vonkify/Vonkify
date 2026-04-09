import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    companyUrl: z.string().url().optional(),
    period: z.string(),
    role: z.string(),
    summary: z.string(),
    tech: z.array(z.string()),
    featured: z.boolean().default(false),
    featuredOrder: z.number().optional(),
    category: z.enum(['AI & ML', 'Backend', 'Full-Stack', 'Cloud', 'Blockchain', 'Healthcare']),
    order: z.number().default(99),
    achievements: z.array(z.string()).optional(),
  }),
});

export const collections = { projects };
