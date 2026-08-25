import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['Nutrition', 'Fitness', 'Style']),
    tags: z.array(z.string()).default([]),
    readTime: z.string().default('4 min read'),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    affiliateProduct: z.object({
      title: z.string(),
      description: z.string(),
      price: z.string(),
      image: z.string(),
      link: z.string().url().or(z.string().startsWith('#'))
    }).optional()
  })
});

export const collections = { posts };
