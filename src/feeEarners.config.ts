import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders'; // Not available with legacy API

const feeEarners = defineCollection({
  // `loader` can accept an array of multiple patterns as well as string patterns
  // Load all markdown files in the space-probes directory, except for those that start with "voyager-"
  loader: file("src/data/feeEarners.json"),
  schema: z.object({
    id: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    role: z.string(),
    email: z.string(),
    phone: z.string(),
    profileURL: z.string(),
    imageURL: z.string(),
    department: z.string(),
  }),
});

export const collections = { feeEarners };