import z from "zod";

export const ChapterMetadata = z.object({
    baseUrl: z.string(),
    chapter: z.object({
        hash: z.string(),
        data: z.array(z.string()),
        dataSaver: z.array(z.string()),
    }),
});

export type ChapterMetadata = z.infer<typeof ChapterMetadata>;
