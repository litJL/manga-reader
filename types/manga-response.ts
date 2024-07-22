import z from "zod";

const TagSchema = z.object({
    id: z.string(),
    type: z.string(),
    attributes: z.object({
        name: z.object({ en: z.string() }),
        group: z.string(),
    }),
});

export const MangaAttributes = z.object({
    title: z.any(),
    altTitles: z.any(),
    description: z.any(),
    status: z.string(),
    tags: z.array(TagSchema),
    year: z.number().optional().nullable(),
    state: z.string().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
});

export const MangaSchema = z.object({
    id: z.string(),
    type: z.string(),
    attributes: MangaAttributes,
    relationships: z.array(
        z.object({
            id: z.string(),
            type: z.string(),
            attributes: z.any().optional(),
        }),
    ),
});

export const MangaResponseSchema = z.object({
    result: z.string(),
    response: z.string(),
    data: z.array(MangaSchema),
    limit: z.number(),
    offset: z.number(),
    total: z.number(),
});

export type MangaResponse = z.infer<typeof MangaResponseSchema>;
export type Manga = z.infer<typeof MangaSchema>;
