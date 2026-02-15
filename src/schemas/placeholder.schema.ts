import z from "zod";

export const placeholderSchema = z.object({
    experiences: z.object({
        label: z.string(),
    }),
    education: z.object({
        label: z.string(),
    }),
    languages: z.object({
        label: z.string(),
    }),
    skills: z.object({
        label: z.string(),
    }),
    softSkills: z.object({
        label: z.string(),
    }),
    duration: z.object({
        from: z.string(),
        to: z.string(),
    }),
    printButton: z.object({
        label: z.string(),
    }),
    sideBarTrigger: z.object({
        label: z.string(),
    })
});

export type PlaceholderSchema = z.infer<typeof placeholderSchema>;