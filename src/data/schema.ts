import { z } from "zod";

const blockSchema = z.object({
  label: z.string(),
  items: z.array(z.string()),
});

function blockSchemaGeneric<T>(schema: z.ZodType<T>) {
  return z.object({
    label: z.string(),
    items: z.array(schema),
  });
}

const experienceItemSchema = z.object({
  title: z.string(),
  company: z.string(),
  location: z.string(),
  context: z.string(),
  objective: blockSchema.optional(),
  achievement: blockSchema.optional(),
  highlight: blockSchema.optional(),
  stack: blockSchema.optional(),
  duration: z.object({
    start: z.object({ month: z.number(), year: z.number() }),
    end: z.object({ month: z.number(), year: z.number() }).optional(),
  }),
});

const educationItemSchema = z.object({
  degree: z.string(),
  institution: z.string(),
  year: z.number(),
});

const languageItemSchema = z.object({
  label: z.string(),
  proficiency: z.string().optional(),
});

export const schema = z.object({
  name: z.string(),
  contact: z.object({
    phone: z.string(),
    email: z.string(),
    location: z.string(),
  }),
  socials: z.object({
    linkedin: z.object({ label: z.string(), url: z.string() }).optional(),
    youtube: z.object({ label: z.string(), url: z.string() }).optional(),
    github: z.object({ label: z.string(), url: z.string() }).optional(),
    twitter: z.object({ label: z.string(), url: z.string() }).optional(),
    facebook: z.object({ label: z.string(), url: z.string() }).optional(),
    medium: z.object({ label: z.string(), url: z.string() }).optional(),
    gitlab: z.object({ label: z.string(), url: z.string() }).optional(),
    website: z.object({ label: z.string(), url: z.string() }).optional(),
    x: z.object({ label: z.string(), url: z.string() }).optional(),
  }),
  languages: blockSchemaGeneric(languageItemSchema),
  softSkills: blockSchema,
  title: z.string(),
  positioning: z.string(),
  summary: z.string(),
  visibility: z.string().optional(),
  skills: blockSchemaGeneric(blockSchema),
  education: blockSchemaGeneric(educationItemSchema),
  experiences: blockSchemaGeneric(experienceItemSchema),
});

export type ResumeSchema = z.infer<typeof schema>;
