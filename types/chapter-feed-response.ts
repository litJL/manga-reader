import z from 'zod';

export const ChapterSchema = z.object({
    id: z.string(),
    type: z.string(),
    attributes: z.object({
        volume: z.string(),
        chapter: z.string(),
        title: z.string(),
        externalUrl: z.string().nullable(),
        publishAt: z.string(),
        pages: z.number(),
    }),
});


export const ChapterFeedResponseSchema = z.object({
    result: z.string(),
    response: z.string(),
    data: z.array(ChapterSchema),
    limit: z.number(),
    offset: z.number(),
    total: z.number(),
})

export type ChapterFeedResponse = z.infer<typeof ChapterFeedResponseSchema>;
export type Chapter = z.infer<typeof ChapterSchema>;