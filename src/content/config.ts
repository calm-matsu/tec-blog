import {defineCollection, reference, z} from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional().nullable(),
    date: z.date(),
    lastModified: z.date().optional().nullable(),
    tags: z.array(z.string()).optional().nullable(),
    category: z.string().default('uncategorized').nullable(),
    sticky: z.number().default(0).nullable(),
    mathjax: z.boolean().default(false).nullable(),
    mermaid: z.boolean().default(false).nullable(),
    draft: z.boolean().default(false).nullable(),
    toc: z.boolean().default(true).nullable(),
    donate: z.boolean().default(true).nullable(),
    comment: z.boolean().default(true).nullable(),
    relatedPosts: z.array(reference('blog')).optional().nullable(),
    footnote: z.array(z.string()).optional().nullable(),
  }),
});

const page = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional().nullable(),
    date: z.date(),
    lastModified: z.date().optional().nullable(),
    mathjax: z.boolean().default(false).nullable(),
    mermaid: z.boolean().default(false).nullable(),
    draft: z.boolean().default(false).nullable(),
    toc: z.boolean().default(true).nullable(),
    donate: z.boolean().default(true).nullable(),
    comment: z.boolean().default(true).nullable(),
    dateDisplay: z.boolean().default(false).nullable(),
  }),
});

const part = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    lastModified: z.date().optional().nullable(),
    draft: z.boolean().default(false).nullable(),
  }),
});

export const collections = { blog, page, part };
