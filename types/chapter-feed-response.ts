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
/*
{
  "result": "ok",
  "response": "collection",
  "data": [
    {
      "id": "ece1e80c-5dfc-4797-9b19-a6f9071ef8c0",
      "type": "chapter",
      "attributes": {
        "volume": "1",
        "chapter": "1",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-21T21:56:47+00:00",
        "readableAt": "2018-01-21T21:56:47+00:00",
        "createdAt": "2018-01-21T21:56:47+00:00",
        "updatedAt": "2018-01-21T21:56:47+00:00",
        "pages": 30,
        "version": 1
      },
      "relationships": [
        {
          "id": "3e18770b-44ba-4e83-8161-df27a8b8e792",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "1d400b7f-3481-4921-9419-5f3f57d79cd4",
      "type": "chapter",
      "attributes": {
        "volume": "1",
        "chapter": "2",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-21T22:02:47+00:00",
        "readableAt": "2018-01-21T22:02:47+00:00",
        "createdAt": "2018-01-21T22:02:47+00:00",
        "updatedAt": "2018-01-21T22:02:47+00:00",
        "pages": 19,
        "version": 1
      },
      "relationships": [
        {
          "id": "3e18770b-44ba-4e83-8161-df27a8b8e792",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "ea96a671-d5a8-4d51-a86e-7e3be613792d",
      "type": "chapter",
      "attributes": {
        "volume": "1",
        "chapter": "3",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-21T22:03:11+00:00",
        "readableAt": "2018-01-21T22:03:11+00:00",
        "createdAt": "2018-01-21T22:03:11+00:00",
        "updatedAt": "2018-01-21T22:03:11+00:00",
        "pages": 24,
        "version": 1
      },
      "relationships": [
        {
          "id": "3e18770b-44ba-4e83-8161-df27a8b8e792",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "77d13cb7-8221-46e9-9347-5faa51359c28",
      "type": "chapter",
      "attributes": {
        "volume": "1",
        "chapter": "4",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-22T08:45:33+00:00",
        "readableAt": "2018-01-22T08:45:33+00:00",
        "createdAt": "2018-01-22T08:45:33+00:00",
        "updatedAt": "2018-01-22T08:45:33+00:00",
        "pages": 17,
        "version": 1
      },
      "relationships": [
        {
          "id": "3e18770b-44ba-4e83-8161-df27a8b8e792",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "4ad76b6e-0ccb-475b-93c4-911937069455",
      "type": "chapter",
      "attributes": {
        "volume": "1",
        "chapter": "5",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-22T08:46:46+00:00",
        "readableAt": "2018-01-22T08:46:46+00:00",
        "createdAt": "2018-01-22T08:46:46+00:00",
        "updatedAt": "2018-01-22T08:46:46+00:00",
        "pages": 17,
        "version": 1
      },
      "relationships": [
        {
          "id": "3e18770b-44ba-4e83-8161-df27a8b8e792",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "10a311a0-1b97-417e-a013-a84596a0d73d",
      "type": "chapter",
      "attributes": {
        "volume": "1",
        "chapter": "6",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-22T08:47:24+00:00",
        "readableAt": "2018-01-22T08:47:24+00:00",
        "createdAt": "2018-01-22T08:47:24+00:00",
        "updatedAt": "2018-01-22T08:47:24+00:00",
        "pages": 17,
        "version": 1
      },
      "relationships": [
        {
          "id": "3e18770b-44ba-4e83-8161-df27a8b8e792",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "31d21bf4-d25d-45c7-a665-86a45c48db22",
      "type": "chapter",
      "attributes": {
        "volume": "1",
        "chapter": "7",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-22T08:47:58+00:00",
        "readableAt": "2018-01-22T08:47:58+00:00",
        "createdAt": "2018-01-22T08:47:58+00:00",
        "updatedAt": "2018-01-22T08:47:58+00:00",
        "pages": 19,
        "version": 1
      },
      "relationships": [
        {
          "id": "3e18770b-44ba-4e83-8161-df27a8b8e792",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "b9d3d739-97c2-47c6-9fc9-07ddf70a36d2",
      "type": "chapter",
      "attributes": {
        "volume": "1",
        "chapter": "8",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-22T08:49:08+00:00",
        "readableAt": "2018-01-22T08:49:08+00:00",
        "createdAt": "2018-01-22T08:49:08+00:00",
        "updatedAt": "2018-01-22T08:49:08+00:00",
        "pages": 17,
        "version": 1
      },
      "relationships": [
        {
          "id": "3e18770b-44ba-4e83-8161-df27a8b8e792",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "bd02cea4-f41c-4752-8c8f-b6ceeeecdbeb",
      "type": "chapter",
      "attributes": {
        "volume": "1",
        "chapter": "9",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-22T08:49:39+00:00",
        "readableAt": "2018-01-22T08:49:39+00:00",
        "createdAt": "2018-01-22T08:49:39+00:00",
        "updatedAt": "2018-01-22T08:49:39+00:00",
        "pages": 19,
        "version": 1
      },
      "relationships": [
        {
          "id": "3e18770b-44ba-4e83-8161-df27a8b8e792",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "84182362-f601-4a83-b17d-b87aeb443b41",
      "type": "chapter",
      "attributes": {
        "volume": "1",
        "chapter": "10",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-22T08:50:44+00:00",
        "readableAt": "2018-01-22T08:50:44+00:00",
        "createdAt": "2018-01-22T08:50:44+00:00",
        "updatedAt": "2018-01-22T08:50:44+00:00",
        "pages": 18,
        "version": 1
      },
      "relationships": [
        {
          "id": "3e18770b-44ba-4e83-8161-df27a8b8e792",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "b89cd311-2505-4e1f-95e5-9f6c60a9b2c5",
      "type": "chapter",
      "attributes": {
        "volume": "1",
        "chapter": "11",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-22T08:51:12+00:00",
        "readableAt": "2018-01-22T08:51:12+00:00",
        "createdAt": "2018-01-22T08:51:12+00:00",
        "updatedAt": "2018-01-22T08:51:12+00:00",
        "pages": 17,
        "version": 1
      },
      "relationships": [
        {
          "id": "3e18770b-44ba-4e83-8161-df27a8b8e792",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "14a87456-01a2-4c16-8529-316be2ec24dd",
      "type": "chapter",
      "attributes": {
        "volume": "1",
        "chapter": "12",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-22T08:51:45+00:00",
        "readableAt": "2018-01-22T08:51:45+00:00",
        "createdAt": "2018-01-22T08:51:45+00:00",
        "updatedAt": "2018-01-22T08:51:45+00:00",
        "pages": 18,
        "version": 1
      },
      "relationships": [
        {
          "id": "3e18770b-44ba-4e83-8161-df27a8b8e792",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "d1ff87f0-b796-4ab4-ac4a-4985bf02fe8a",
      "type": "chapter",
      "attributes": {
        "volume": "2",
        "chapter": "13",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-22T19:33:06+00:00",
        "readableAt": "2018-01-22T19:33:06+00:00",
        "createdAt": "2018-01-22T19:33:06+00:00",
        "updatedAt": "2018-01-22T19:33:06+00:00",
        "pages": 24,
        "version": 1
      },
      "relationships": [
        {
          "id": "3e18770b-44ba-4e83-8161-df27a8b8e792",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "e1f13b66-fc6b-4077-9d9a-d00732d9e8d2",
      "type": "chapter",
      "attributes": {
        "volume": "2",
        "chapter": "14",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-22T19:34:02+00:00",
        "readableAt": "2018-01-22T19:34:02+00:00",
        "createdAt": "2018-01-22T19:34:02+00:00",
        "updatedAt": "2018-01-22T19:34:02+00:00",
        "pages": 19,
        "version": 1
      },
      "relationships": [
        {
          "id": "3e18770b-44ba-4e83-8161-df27a8b8e792",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "eec23353-e264-47d6-b914-934fdc0604a0",
      "type": "chapter",
      "attributes": {
        "volume": "2",
        "chapter": "15",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-22T19:34:43+00:00",
        "readableAt": "2018-01-22T19:34:43+00:00",
        "createdAt": "2018-01-22T19:34:43+00:00",
        "updatedAt": "2018-01-22T19:34:43+00:00",
        "pages": 17,
        "version": 1
      },
      "relationships": [
        {
          "id": "3e18770b-44ba-4e83-8161-df27a8b8e792",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "7005064d-8308-4bf8-84bc-3e76f1cc821a",
      "type": "chapter",
      "attributes": {
        "volume": "2",
        "chapter": "16",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-22T19:35:29+00:00",
        "readableAt": "2018-01-22T19:35:29+00:00",
        "createdAt": "2018-01-22T19:35:29+00:00",
        "updatedAt": "2018-01-22T19:35:29+00:00",
        "pages": 19,
        "version": 1
      },
      "relationships": [
        {
          "id": "3e18770b-44ba-4e83-8161-df27a8b8e792",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "0dcf1e0c-91cc-49b2-846b-dcd2ca713627",
      "type": "chapter",
      "attributes": {
        "volume": "2",
        "chapter": "17",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-22T19:44:27+00:00",
        "readableAt": "2018-01-22T19:44:27+00:00",
        "createdAt": "2018-01-22T19:44:27+00:00",
        "updatedAt": "2018-01-22T19:44:27+00:00",
        "pages": 18,
        "version": 1
      },
      "relationships": [
        {
          "id": "3e18770b-44ba-4e83-8161-df27a8b8e792",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "b0ec6aac-cb4f-4173-ba1c-6da2c0ce5656",
      "type": "chapter",
      "attributes": {
        "volume": "2",
        "chapter": "18",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-23T01:59:31+00:00",
        "readableAt": "2018-01-23T01:59:31+00:00",
        "createdAt": "2018-01-23T01:59:31+00:00",
        "updatedAt": "2018-01-23T01:59:31+00:00",
        "pages": 19,
        "version": 1
      },
      "relationships": [
        {
          "id": "3e18770b-44ba-4e83-8161-df27a8b8e792",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "3a4dd273-3500-42b7-9e94-ad2b4ada56e5",
      "type": "chapter",
      "attributes": {
        "volume": "2",
        "chapter": "19",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-23T02:00:52+00:00",
        "readableAt": "2018-01-23T02:00:52+00:00",
        "createdAt": "2018-01-23T02:00:52+00:00",
        "updatedAt": "2018-01-23T02:00:52+00:00",
        "pages": 17,
        "version": 1
      },
      "relationships": [
        {
          "id": "3e18770b-44ba-4e83-8161-df27a8b8e792",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "7998e13a-5207-4f03-9ad6-9c152e1b5147",
      "type": "chapter",
      "attributes": {
        "volume": "2",
        "chapter": "20",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-23T02:01:22+00:00",
        "readableAt": "2018-01-23T02:01:22+00:00",
        "createdAt": "2018-01-23T02:01:22+00:00",
        "updatedAt": "2018-01-23T02:01:22+00:00",
        "pages": 18,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "95d8842f-62c9-4123-9232-99b93aea31ec",
      "type": "chapter",
      "attributes": {
        "volume": "2",
        "chapter": "21",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-23T02:01:59+00:00",
        "readableAt": "2018-01-23T02:01:59+00:00",
        "createdAt": "2018-01-23T02:01:59+00:00",
        "updatedAt": "2018-01-23T02:01:59+00:00",
        "pages": 18,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "60fb5ba8-0e8e-44c9-9ef4-3045e894d8d8",
      "type": "chapter",
      "attributes": {
        "volume": "2",
        "chapter": "22",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-23T02:02:27+00:00",
        "readableAt": "2018-01-23T02:02:27+00:00",
        "createdAt": "2018-01-23T02:02:27+00:00",
        "updatedAt": "2018-01-23T02:02:27+00:00",
        "pages": 21,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "80a988e5-dd8d-40b9-93c3-42ad92d157d5",
      "type": "chapter",
      "attributes": {
        "volume": "2",
        "chapter": "23",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-23T02:02:56+00:00",
        "readableAt": "2018-01-23T02:02:56+00:00",
        "createdAt": "2018-01-23T02:02:56+00:00",
        "updatedAt": "2018-01-23T02:02:56+00:00",
        "pages": 17,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "8b37eb90-afeb-4738-bb62-d7c375a2850c",
      "type": "chapter",
      "attributes": {
        "volume": "3",
        "chapter": "24",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-24T01:16:01+00:00",
        "readableAt": "2018-01-24T01:16:01+00:00",
        "createdAt": "2018-01-24T01:16:01+00:00",
        "updatedAt": "2018-01-24T01:16:01+00:00",
        "pages": 19,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "2db7c72c-1488-43fd-bea7-845b1cefcb8a",
      "type": "chapter",
      "attributes": {
        "volume": "3",
        "chapter": "25",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-24T01:18:18+00:00",
        "readableAt": "2018-01-24T01:18:18+00:00",
        "createdAt": "2018-01-24T01:18:18+00:00",
        "updatedAt": "2018-01-24T01:18:18+00:00",
        "pages": 16,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "522b3013-c899-4071-922b-ab5b12452a5c",
      "type": "chapter",
      "attributes": {
        "volume": "3",
        "chapter": "26",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-24T08:41:50+00:00",
        "readableAt": "2018-01-24T08:41:50+00:00",
        "createdAt": "2018-01-24T08:41:50+00:00",
        "updatedAt": "2018-01-24T08:41:50+00:00",
        "pages": 15,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "6cf371ad-31a5-424c-9a1f-36bf6167b892",
      "type": "chapter",
      "attributes": {
        "volume": "3",
        "chapter": "27",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-24T08:42:18+00:00",
        "readableAt": "2018-01-24T08:42:18+00:00",
        "createdAt": "2018-01-24T08:42:18+00:00",
        "updatedAt": "2018-01-24T08:42:18+00:00",
        "pages": 19,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "ecdda02b-8545-4d9f-8223-df52f50bf0b0",
      "type": "chapter",
      "attributes": {
        "volume": "3",
        "chapter": "28",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-24T08:42:57+00:00",
        "readableAt": "2018-01-24T08:42:57+00:00",
        "createdAt": "2018-01-24T08:42:57+00:00",
        "updatedAt": "2018-01-24T08:42:57+00:00",
        "pages": 16,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "d39fbd54-372f-4eea-8815-25b2edfba46e",
      "type": "chapter",
      "attributes": {
        "volume": "3",
        "chapter": "29",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-24T08:43:29+00:00",
        "readableAt": "2018-01-24T08:43:29+00:00",
        "createdAt": "2018-01-24T08:43:29+00:00",
        "updatedAt": "2018-01-24T08:43:29+00:00",
        "pages": 17,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "0aa03c3d-720e-4e76-97cf-c284de915e76",
      "type": "chapter",
      "attributes": {
        "volume": "3",
        "chapter": "30",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-24T08:43:57+00:00",
        "readableAt": "2018-01-24T08:43:57+00:00",
        "createdAt": "2018-01-24T08:43:57+00:00",
        "updatedAt": "2018-01-24T08:43:57+00:00",
        "pages": 20,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "b53a34e3-a266-4258-bbd3-4c08b2cceef0",
      "type": "chapter",
      "attributes": {
        "volume": "3",
        "chapter": "31",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-27T07:50:41+00:00",
        "readableAt": "2018-01-27T07:50:41+00:00",
        "createdAt": "2018-01-27T07:50:41+00:00",
        "updatedAt": "2018-01-27T07:50:41+00:00",
        "pages": 16,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "974bec57-d983-4075-a9ae-11223db97c90",
      "type": "chapter",
      "attributes": {
        "volume": "3",
        "chapter": "32",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-27T07:51:42+00:00",
        "readableAt": "2018-01-27T07:51:42+00:00",
        "createdAt": "2018-01-27T07:51:42+00:00",
        "updatedAt": "2018-01-27T07:51:42+00:00",
        "pages": 18,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "8c091edb-a545-4073-a9ac-263974986fd6",
      "type": "chapter",
      "attributes": {
        "volume": "3",
        "chapter": "33",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-27T07:52:31+00:00",
        "readableAt": "2018-01-27T07:52:31+00:00",
        "createdAt": "2018-01-27T07:52:31+00:00",
        "updatedAt": "2018-01-27T07:52:31+00:00",
        "pages": 19,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "0cb491d0-4dda-4bee-9ad5-30dcd8c07d62",
      "type": "chapter",
      "attributes": {
        "volume": "3",
        "chapter": "34",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-27T07:53:11+00:00",
        "readableAt": "2018-01-27T07:53:11+00:00",
        "createdAt": "2018-01-27T07:53:11+00:00",
        "updatedAt": "2018-01-27T07:53:11+00:00",
        "pages": 21,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "149ae901-5920-4483-aef2-4d7faa951bab",
      "type": "chapter",
      "attributes": {
        "volume": "4",
        "chapter": "35",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-27T07:53:38+00:00",
        "readableAt": "2018-01-27T07:53:38+00:00",
        "createdAt": "2018-01-27T07:53:38+00:00",
        "updatedAt": "2018-01-27T07:53:38+00:00",
        "pages": 19,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "34edc3b7-7189-4d3d-b0cc-8cd13d2147a3",
      "type": "chapter",
      "attributes": {
        "volume": "4",
        "chapter": "36",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-27T07:54:15+00:00",
        "readableAt": "2018-01-27T07:54:15+00:00",
        "createdAt": "2018-01-27T07:54:15+00:00",
        "updatedAt": "2018-01-27T07:54:15+00:00",
        "pages": 19,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "f6103a9a-5c88-4640-8fcb-c2e00797210c",
      "type": "chapter",
      "attributes": {
        "volume": "4",
        "chapter": "37",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-27T07:54:57+00:00",
        "readableAt": "2018-01-27T07:54:57+00:00",
        "createdAt": "2018-01-27T07:54:57+00:00",
        "updatedAt": "2018-01-27T07:54:57+00:00",
        "pages": 16,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "ae02f87e-9af5-428b-a5d8-f63754a5c5b6",
      "type": "chapter",
      "attributes": {
        "volume": "4",
        "chapter": "38",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-27T07:55:26+00:00",
        "readableAt": "2018-01-27T07:55:26+00:00",
        "createdAt": "2018-01-27T07:55:26+00:00",
        "updatedAt": "2018-01-27T07:55:26+00:00",
        "pages": 18,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "eed35d7f-b309-4792-a8ff-de984b58ab45",
      "type": "chapter",
      "attributes": {
        "volume": "4",
        "chapter": "39",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-27T07:56:05+00:00",
        "readableAt": "2018-01-27T07:56:05+00:00",
        "createdAt": "2018-01-27T07:56:05+00:00",
        "updatedAt": "2018-01-27T07:56:05+00:00",
        "pages": 16,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "a5d1027f-5e41-4a9d-9700-5fbf47af5db2",
      "type": "chapter",
      "attributes": {
        "volume": "4",
        "chapter": "40",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-27T07:56:50+00:00",
        "readableAt": "2018-01-27T07:56:50+00:00",
        "createdAt": "2018-01-27T07:56:50+00:00",
        "updatedAt": "2018-01-27T07:56:50+00:00",
        "pages": 18,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "b952b7c6-44c0-43aa-9371-c6664f60ed50",
      "type": "chapter",
      "attributes": {
        "volume": "4",
        "chapter": "41",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-27T20:53:55+00:00",
        "readableAt": "2018-01-27T20:53:55+00:00",
        "createdAt": "2018-01-27T20:53:55+00:00",
        "updatedAt": "2018-01-27T20:53:55+00:00",
        "pages": 25,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "42008dde-7aa2-4da1-97da-7cd8da61330b",
      "type": "chapter",
      "attributes": {
        "volume": "4",
        "chapter": "42",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-27T20:54:29+00:00",
        "readableAt": "2018-01-27T20:54:29+00:00",
        "createdAt": "2018-01-27T20:54:29+00:00",
        "updatedAt": "2018-01-27T20:54:29+00:00",
        "pages": 18,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "5053acaf-c281-4f0d-aca8-88ee5e508dfc",
      "type": "chapter",
      "attributes": {
        "volume": "4",
        "chapter": "43",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-27T20:55:04+00:00",
        "readableAt": "2018-01-27T20:55:04+00:00",
        "createdAt": "2018-01-27T20:55:04+00:00",
        "updatedAt": "2018-01-27T20:55:04+00:00",
        "pages": 19,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "fb7e9678-f798-468f-aeb8-5ad4b6335715",
      "type": "chapter",
      "attributes": {
        "volume": "4",
        "chapter": "44",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-27T20:56:02+00:00",
        "readableAt": "2018-01-27T20:56:02+00:00",
        "createdAt": "2018-01-27T20:56:02+00:00",
        "updatedAt": "2018-01-27T20:56:02+00:00",
        "pages": 19,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "70ff903f-87d1-49f1-a96b-3acaa0eb9eff",
      "type": "chapter",
      "attributes": {
        "volume": "4",
        "chapter": "45",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-27T20:56:28+00:00",
        "readableAt": "2018-01-27T20:56:28+00:00",
        "createdAt": "2018-01-27T20:56:28+00:00",
        "updatedAt": "2018-01-27T20:56:28+00:00",
        "pages": 21,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "c3f0269e-9dee-4877-a810-141f1e6ea7b4",
      "type": "chapter",
      "attributes": {
        "volume": "4",
        "chapter": "46",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-27T20:57:03+00:00",
        "readableAt": "2018-01-27T20:57:03+00:00",
        "createdAt": "2018-01-27T20:57:03+00:00",
        "updatedAt": "2018-01-27T20:57:03+00:00",
        "pages": 7,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "3d61b4a3-c803-4a1d-b5bd-6e7284114b6f",
      "type": "chapter",
      "attributes": {
        "volume": "5",
        "chapter": "47",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-27T20:57:39+00:00",
        "readableAt": "2018-01-27T20:57:39+00:00",
        "createdAt": "2018-01-27T20:57:39+00:00",
        "updatedAt": "2018-01-27T20:57:39+00:00",
        "pages": 17,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "fa3d30e0-6d7c-484e-ada7-53f5a0d4c151",
      "type": "chapter",
      "attributes": {
        "volume": "5",
        "chapter": "48",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-27T20:58:07+00:00",
        "readableAt": "2018-01-27T20:58:07+00:00",
        "createdAt": "2018-01-27T20:58:07+00:00",
        "updatedAt": "2018-01-27T20:58:07+00:00",
        "pages": 20,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "07959035-157e-44a5-8066-033866c286ea",
      "type": "chapter",
      "attributes": {
        "volume": "5",
        "chapter": "49",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-27T20:58:39+00:00",
        "readableAt": "2018-01-27T20:58:39+00:00",
        "createdAt": "2018-01-27T20:58:39+00:00",
        "updatedAt": "2018-01-27T20:58:39+00:00",
        "pages": 34,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "16dc0e0c-615b-4fb2-9cf3-22775d13c48b",
      "type": "chapter",
      "attributes": {
        "volume": "5",
        "chapter": "50",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-27T20:59:07+00:00",
        "readableAt": "2018-01-27T20:59:07+00:00",
        "createdAt": "2018-01-27T20:59:07+00:00",
        "updatedAt": "2018-01-27T20:59:07+00:00",
        "pages": 21,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "52b2b3e4-c4dd-4b87-a85c-f291956e433f",
      "type": "chapter",
      "attributes": {
        "volume": "5",
        "chapter": "51",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-29T06:48:41+00:00",
        "readableAt": "2018-01-29T06:48:41+00:00",
        "createdAt": "2018-01-29T06:48:41+00:00",
        "updatedAt": "2018-01-29T06:48:41+00:00",
        "pages": 18,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "c9f3eb85-5585-41b7-8288-bc377dd44c8c",
      "type": "chapter",
      "attributes": {
        "volume": "5",
        "chapter": "52",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-29T06:49:09+00:00",
        "readableAt": "2018-01-29T06:49:09+00:00",
        "createdAt": "2018-01-29T06:49:09+00:00",
        "updatedAt": "2018-01-29T06:49:09+00:00",
        "pages": 20,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "7d9d38c4-6065-4939-ac1b-f2456dd8c210",
      "type": "chapter",
      "attributes": {
        "volume": "5",
        "chapter": "53",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-29T06:49:38+00:00",
        "readableAt": "2018-01-29T06:49:38+00:00",
        "createdAt": "2018-01-29T06:49:38+00:00",
        "updatedAt": "2018-01-29T06:49:38+00:00",
        "pages": 20,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "7d1777c3-8b67-41ef-a26f-97b4eaaaaae4",
      "type": "chapter",
      "attributes": {
        "volume": "5",
        "chapter": "54",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-29T06:50:27+00:00",
        "readableAt": "2018-01-29T06:50:27+00:00",
        "createdAt": "2018-01-29T06:50:27+00:00",
        "updatedAt": "2018-01-29T06:50:27+00:00",
        "pages": 20,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "551dc584-cbe3-4779-9e7a-e96430ae649b",
      "type": "chapter",
      "attributes": {
        "volume": "5",
        "chapter": "55",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-29T06:50:50+00:00",
        "readableAt": "2018-01-29T06:50:50+00:00",
        "createdAt": "2018-01-29T06:50:50+00:00",
        "updatedAt": "2018-01-29T06:50:50+00:00",
        "pages": 19,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "19adedf4-d8cb-41db-9890-baf152a37425",
      "type": "chapter",
      "attributes": {
        "volume": "5",
        "chapter": "56",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-29T06:51:22+00:00",
        "readableAt": "2018-01-29T06:51:22+00:00",
        "createdAt": "2018-01-29T06:51:22+00:00",
        "updatedAt": "2018-01-29T06:51:22+00:00",
        "pages": 23,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "fb4a3072-db91-4bfd-8af4-d1f05a40d63e",
      "type": "chapter",
      "attributes": {
        "volume": "6",
        "chapter": "57",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-29T06:51:52+00:00",
        "readableAt": "2018-01-29T06:51:52+00:00",
        "createdAt": "2018-01-29T06:51:52+00:00",
        "updatedAt": "2018-01-29T06:51:52+00:00",
        "pages": 21,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "14c2f02f-e09d-41dd-934f-c8f4ec740edd",
      "type": "chapter",
      "attributes": {
        "volume": "6",
        "chapter": "58",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-29T06:52:34+00:00",
        "readableAt": "2018-01-29T06:52:34+00:00",
        "createdAt": "2018-01-29T06:52:34+00:00",
        "updatedAt": "2018-01-29T06:52:34+00:00",
        "pages": 20,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "6de8fc75-a3eb-4738-8f7b-bd1e080498e2",
      "type": "chapter",
      "attributes": {
        "volume": "6",
        "chapter": "59",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-29T06:53:24+00:00",
        "readableAt": "2018-01-29T06:53:24+00:00",
        "createdAt": "2018-01-29T06:53:24+00:00",
        "updatedAt": "2018-01-29T06:53:24+00:00",
        "pages": 18,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "7cd28b83-b1fa-404b-a31f-3f7933838ce6",
      "type": "chapter",
      "attributes": {
        "volume": "6",
        "chapter": "60",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-29T06:53:54+00:00",
        "readableAt": "2018-01-29T06:53:54+00:00",
        "createdAt": "2018-01-29T06:53:54+00:00",
        "updatedAt": "2018-01-29T06:53:54+00:00",
        "pages": 19,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "af118c22-9d52-429d-8f8a-1eb0690a0dda",
      "type": "chapter",
      "attributes": {
        "volume": "6",
        "chapter": "61",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-29T21:54:54+00:00",
        "readableAt": "2018-01-29T21:54:54+00:00",
        "createdAt": "2018-01-29T21:54:54+00:00",
        "updatedAt": "2018-01-29T21:54:54+00:00",
        "pages": 20,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "63cfe0a8-1d44-49c6-830f-c72a90302443",
      "type": "chapter",
      "attributes": {
        "volume": "6",
        "chapter": "62",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-29T21:59:46+00:00",
        "readableAt": "2018-01-29T21:59:46+00:00",
        "createdAt": "2018-01-29T21:59:46+00:00",
        "updatedAt": "2018-01-29T21:59:46+00:00",
        "pages": 17,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "01e8aefa-148a-4514-98f2-8a829fce2320",
      "type": "chapter",
      "attributes": {
        "volume": "6",
        "chapter": "63",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-29T22:00:38+00:00",
        "readableAt": "2018-01-29T22:00:38+00:00",
        "createdAt": "2018-01-29T22:00:38+00:00",
        "updatedAt": "2018-01-29T22:00:38+00:00",
        "pages": 20,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "81547ede-93eb-40b1-89f0-1d43911474a8",
      "type": "chapter",
      "attributes": {
        "volume": "6",
        "chapter": "64",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-29T22:01:09+00:00",
        "readableAt": "2018-01-29T22:01:09+00:00",
        "createdAt": "2018-01-29T22:01:09+00:00",
        "updatedAt": "2018-01-29T22:01:09+00:00",
        "pages": 20,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "c666ff7a-d5f2-46ef-bf2c-2bd40476e936",
      "type": "chapter",
      "attributes": {
        "volume": "6",
        "chapter": "65",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-29T22:01:36+00:00",
        "readableAt": "2018-01-29T22:01:36+00:00",
        "createdAt": "2018-01-29T22:01:36+00:00",
        "updatedAt": "2018-01-29T22:01:36+00:00",
        "pages": 18,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "7e83e2a4-02a0-4e7f-8a94-54a611156981",
      "type": "chapter",
      "attributes": {
        "volume": "6",
        "chapter": "66",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-29T23:49:56+00:00",
        "readableAt": "2018-01-29T23:49:56+00:00",
        "createdAt": "2018-01-29T23:49:56+00:00",
        "updatedAt": "2018-01-29T23:49:56+00:00",
        "pages": 21,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "48bbc01f-7f24-40a4-9d33-be6b5614b07e",
      "type": "chapter",
      "attributes": {
        "volume": "6",
        "chapter": "67",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-29T23:50:27+00:00",
        "readableAt": "2018-01-29T23:50:27+00:00",
        "createdAt": "2018-01-29T23:50:27+00:00",
        "updatedAt": "2018-01-29T23:50:27+00:00",
        "pages": 23,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "300c14e8-60f9-47cf-aee8-06d437e577f2",
      "type": "chapter",
      "attributes": {
        "volume": "7",
        "chapter": "68",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-29T23:51:18+00:00",
        "readableAt": "2018-01-29T23:51:18+00:00",
        "createdAt": "2018-01-29T23:51:18+00:00",
        "updatedAt": "2018-01-29T23:51:18+00:00",
        "pages": 22,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "4565398b-752b-4cba-8d57-14a125c786d5",
      "type": "chapter",
      "attributes": {
        "volume": "7",
        "chapter": "69",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-29T23:51:57+00:00",
        "readableAt": "2018-01-29T23:51:57+00:00",
        "createdAt": "2018-01-29T23:51:57+00:00",
        "updatedAt": "2018-01-29T23:51:57+00:00",
        "pages": 18,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "72b276b3-eaa9-4df8-aa21-dae57358f05b",
      "type": "chapter",
      "attributes": {
        "volume": "7",
        "chapter": "70",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-29T23:52:25+00:00",
        "readableAt": "2018-01-29T23:52:25+00:00",
        "createdAt": "2018-01-29T23:52:25+00:00",
        "updatedAt": "2018-01-29T23:52:25+00:00",
        "pages": 21,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "ef965335-89db-41a1-966c-eb3b99f7f922",
      "type": "chapter",
      "attributes": {
        "volume": "7",
        "chapter": "71",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-30T07:31:12+00:00",
        "readableAt": "2018-01-30T07:31:12+00:00",
        "createdAt": "2018-01-30T07:31:12+00:00",
        "updatedAt": "2018-01-30T07:31:12+00:00",
        "pages": 20,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "dbc0c169-a3bc-40cf-8ad5-2bfb0a132655",
      "type": "chapter",
      "attributes": {
        "volume": "7",
        "chapter": "72",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-31T01:24:01+00:00",
        "readableAt": "2018-01-31T01:24:01+00:00",
        "createdAt": "2018-01-31T01:24:01+00:00",
        "updatedAt": "2018-01-31T01:24:01+00:00",
        "pages": 16,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "7fce55b5-7dde-4e6f-b4c7-d3f89d1255f9",
      "type": "chapter",
      "attributes": {
        "volume": "7",
        "chapter": "73",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-31T01:24:45+00:00",
        "readableAt": "2018-01-31T01:24:45+00:00",
        "createdAt": "2018-01-31T01:24:45+00:00",
        "updatedAt": "2018-01-31T01:24:45+00:00",
        "pages": 18,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "45064061-2ed4-4528-af15-c76cc015d39f",
      "type": "chapter",
      "attributes": {
        "volume": "7",
        "chapter": "74",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-31T01:31:11+00:00",
        "readableAt": "2018-01-31T01:31:11+00:00",
        "createdAt": "2018-01-31T01:31:11+00:00",
        "updatedAt": "2018-01-31T01:31:11+00:00",
        "pages": 19,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "f72b4fb1-d02c-421b-8aef-858e7a50a7db",
      "type": "chapter",
      "attributes": {
        "volume": "7",
        "chapter": "75",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-01-31T01:34:41+00:00",
        "readableAt": "2018-01-31T01:34:41+00:00",
        "createdAt": "2018-01-31T01:34:41+00:00",
        "updatedAt": "2018-01-31T01:34:41+00:00",
        "pages": 19,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "4f1a1f38-8039-45e5-8c99-4b0e64340e85",
      "type": "chapter",
      "attributes": {
        "volume": "7",
        "chapter": "76",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-02-01T05:38:15+00:00",
        "readableAt": "2018-02-01T05:38:15+00:00",
        "createdAt": "2018-02-01T05:38:15+00:00",
        "updatedAt": "2018-02-01T05:38:15+00:00",
        "pages": 22,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "1ed308ae-98a3-4f07-a5cb-478dbb285f0b",
      "type": "chapter",
      "attributes": {
        "volume": "7",
        "chapter": "77",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-02-01T05:42:45+00:00",
        "readableAt": "2018-02-01T05:42:45+00:00",
        "createdAt": "2018-02-01T05:42:45+00:00",
        "updatedAt": "2018-02-01T05:42:45+00:00",
        "pages": 19,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "97c0219f-6eaf-432a-ba60-2a487c317fb2",
      "type": "chapter",
      "attributes": {
        "volume": "7",
        "chapter": "78",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-02-01T05:43:15+00:00",
        "readableAt": "2018-02-01T05:43:15+00:00",
        "createdAt": "2018-02-01T05:43:15+00:00",
        "updatedAt": "2018-02-01T05:43:15+00:00",
        "pages": 20,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "545d17db-fbbe-4f4d-8032-cbcb265cb035",
      "type": "chapter",
      "attributes": {
        "volume": "8",
        "chapter": "79",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-02-02T00:15:48+00:00",
        "readableAt": "2018-02-02T00:15:48+00:00",
        "createdAt": "2018-02-02T00:15:48+00:00",
        "updatedAt": "2018-02-02T00:15:48+00:00",
        "pages": 22,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "94c46daf-a9bc-43b2-9eda-ef7c7ea048f9",
      "type": "chapter",
      "attributes": {
        "volume": "8",
        "chapter": "80",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-02-02T00:16:11+00:00",
        "readableAt": "2018-02-02T00:16:11+00:00",
        "createdAt": "2018-02-02T00:16:11+00:00",
        "updatedAt": "2018-02-02T00:16:11+00:00",
        "pages": 18,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "437350b7-6e94-4d2c-9456-3470a42aad06",
      "type": "chapter",
      "attributes": {
        "volume": "8",
        "chapter": "81",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-02-02T00:16:38+00:00",
        "readableAt": "2018-02-02T00:16:38+00:00",
        "createdAt": "2018-02-02T00:16:38+00:00",
        "updatedAt": "2018-02-02T00:16:38+00:00",
        "pages": 18,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "9eacd508-d8a2-4eed-a22c-965b72738c3e",
      "type": "chapter",
      "attributes": {
        "volume": "8",
        "chapter": "82",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-02-02T00:16:52+00:00",
        "readableAt": "2018-02-02T00:16:52+00:00",
        "createdAt": "2018-02-02T00:16:52+00:00",
        "updatedAt": "2018-02-02T00:16:52+00:00",
        "pages": 20,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "49414f63-5d59-4490-9f2f-2794da1b412f",
      "type": "chapter",
      "attributes": {
        "volume": "8",
        "chapter": "83",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-02-02T03:07:49+00:00",
        "readableAt": "2018-02-02T03:07:49+00:00",
        "createdAt": "2018-02-02T03:07:49+00:00",
        "updatedAt": "2018-02-02T03:07:49+00:00",
        "pages": 18,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "ff8cf65d-1865-4129-b46b-bd186000971b",
      "type": "chapter",
      "attributes": {
        "volume": "8",
        "chapter": "84",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-02-02T03:08:11+00:00",
        "readableAt": "2018-02-02T03:08:11+00:00",
        "createdAt": "2018-02-02T03:08:11+00:00",
        "updatedAt": "2018-02-02T03:08:11+00:00",
        "pages": 20,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "2aa77539-41bb-4462-84b1-0c1d7c57aef9",
      "type": "chapter",
      "attributes": {
        "volume": "8",
        "chapter": "85",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-02-02T03:08:26+00:00",
        "readableAt": "2018-02-02T03:08:26+00:00",
        "createdAt": "2018-02-02T03:08:26+00:00",
        "updatedAt": "2018-02-02T03:08:26+00:00",
        "pages": 18,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "a137cf01-f18c-4b2a-a356-66b7a767d303",
      "type": "chapter",
      "attributes": {
        "volume": "8",
        "chapter": "86",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-02-03T03:11:45+00:00",
        "readableAt": "2018-02-03T03:11:45+00:00",
        "createdAt": "2018-02-03T03:11:45+00:00",
        "updatedAt": "2018-02-03T03:11:45+00:00",
        "pages": 19,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "292a43d5-7795-4f13-ad57-703217c12b9e",
      "type": "chapter",
      "attributes": {
        "volume": "8",
        "chapter": "87",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-02-03T03:12:06+00:00",
        "readableAt": "2018-02-03T03:12:06+00:00",
        "createdAt": "2018-02-03T03:12:06+00:00",
        "updatedAt": "2018-02-03T03:12:06+00:00",
        "pages": 19,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "e3b37c11-a8cc-48a2-9f5f-ffecb318d39c",
      "type": "chapter",
      "attributes": {
        "volume": "8",
        "chapter": "88",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-02-03T03:12:24+00:00",
        "readableAt": "2018-02-03T03:12:24+00:00",
        "createdAt": "2018-02-03T03:12:24+00:00",
        "updatedAt": "2018-02-03T03:12:24+00:00",
        "pages": 21,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "cc5749d5-4ea0-4ac1-a4cf-5ea2631f4b19",
      "type": "chapter",
      "attributes": {
        "volume": "8",
        "chapter": "89",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-02-03T03:13:13+00:00",
        "readableAt": "2018-02-03T03:13:13+00:00",
        "createdAt": "2018-02-03T03:13:13+00:00",
        "updatedAt": "2018-02-03T03:13:13+00:00",
        "pages": 22,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "f40191da-742f-4fb7-90ec-e7952b570dde",
      "type": "chapter",
      "attributes": {
        "volume": "9",
        "chapter": "90",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-02-03T03:13:46+00:00",
        "readableAt": "2018-02-03T03:13:46+00:00",
        "createdAt": "2018-02-03T03:13:46+00:00",
        "updatedAt": "2018-02-03T03:13:46+00:00",
        "pages": 26,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "5b8e3e77-fe37-4351-b5ff-3df8a1e64be0",
      "type": "chapter",
      "attributes": {
        "volume": "9",
        "chapter": "91",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-02-05T08:21:04+00:00",
        "readableAt": "2018-02-05T08:21:04+00:00",
        "createdAt": "2018-02-05T08:21:04+00:00",
        "updatedAt": "2018-02-05T08:21:04+00:00",
        "pages": 20,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "67e6fc82-5f9b-486b-8085-da958a0e178d",
      "type": "chapter",
      "attributes": {
        "volume": "9",
        "chapter": "92",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-02-05T08:21:29+00:00",
        "readableAt": "2018-02-05T08:21:29+00:00",
        "createdAt": "2018-02-05T08:21:29+00:00",
        "updatedAt": "2018-02-05T08:21:29+00:00",
        "pages": 19,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "542c94b4-8ae0-492b-9e3d-516b6a69cd69",
      "type": "chapter",
      "attributes": {
        "volume": "9",
        "chapter": "93",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-02-05T08:21:42+00:00",
        "readableAt": "2018-02-05T08:21:42+00:00",
        "createdAt": "2018-02-05T08:21:42+00:00",
        "updatedAt": "2018-02-05T08:21:42+00:00",
        "pages": 20,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "f007e902-430e-4bcd-bd53-080d6d8287cb",
      "type": "chapter",
      "attributes": {
        "volume": "9",
        "chapter": "94",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-02-05T08:22:01+00:00",
        "readableAt": "2018-02-05T08:22:01+00:00",
        "createdAt": "2018-02-05T08:22:01+00:00",
        "updatedAt": "2018-02-05T08:22:01+00:00",
        "pages": 24,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "cea5b632-4936-4137-9ce4-99ee177eb46a",
      "type": "chapter",
      "attributes": {
        "volume": "9",
        "chapter": "95",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-02-05T08:22:23+00:00",
        "readableAt": "2018-02-05T08:22:23+00:00",
        "createdAt": "2018-02-05T08:22:23+00:00",
        "updatedAt": "2018-02-05T08:22:23+00:00",
        "pages": 23,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "d7d13244-00fa-4ebe-a12e-c1876b14df71",
      "type": "chapter",
      "attributes": {
        "volume": "9",
        "chapter": "96",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-02-06T03:48:33+00:00",
        "readableAt": "2018-02-06T03:48:33+00:00",
        "createdAt": "2018-02-06T03:48:33+00:00",
        "updatedAt": "2018-02-06T03:48:33+00:00",
        "pages": 21,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "b75bce5c-8fec-4c3b-8a0f-3fd4d236f5df",
      "type": "chapter",
      "attributes": {
        "volume": "9",
        "chapter": "97",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-02-06T03:49:03+00:00",
        "readableAt": "2018-02-06T03:49:03+00:00",
        "createdAt": "2018-02-06T03:49:03+00:00",
        "updatedAt": "2018-02-06T03:49:03+00:00",
        "pages": 20,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "76ae587e-db5b-4cb4-a9b3-4013fbc9675b",
      "type": "chapter",
      "attributes": {
        "volume": "9",
        "chapter": "98",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-02-06T03:49:58+00:00",
        "readableAt": "2018-02-06T03:49:58+00:00",
        "createdAt": "2018-02-06T03:49:58+00:00",
        "updatedAt": "2018-02-06T03:49:58+00:00",
        "pages": 19,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "60f29dd7-be77-454f-bff1-cbe6ac6a5fd7",
      "type": "chapter",
      "attributes": {
        "volume": "9",
        "chapter": "99",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-02-06T03:50:12+00:00",
        "readableAt": "2018-02-06T03:50:12+00:00",
        "createdAt": "2018-02-06T03:50:12+00:00",
        "updatedAt": "2018-02-06T03:50:12+00:00",
        "pages": 22,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    },
    {
      "id": "dc8be737-2488-4761-bd12-0dfb0eb00cea",
      "type": "chapter",
      "attributes": {
        "volume": "10",
        "chapter": "100",
        "title": "",
        "translatedLanguage": "en",
        "externalUrl": null,
        "publishAt": "2018-02-06T03:50:30+00:00",
        "readableAt": "2018-02-06T03:50:30+00:00",
        "createdAt": "2018-02-06T03:50:30+00:00",
        "updatedAt": "2018-02-06T03:50:30+00:00",
        "pages": 21,
        "version": 1
      },
      "relationships": [
        {
          "id": "ceaf723b-3313-4a8a-8c21-8eb379302f9c",
          "type": "scanlation_group"
        },
        {
          "id": "4301d363-ee02-43f4-ae24-4cbf29a74830",
          "type": "manga"
        },
        {
          "id": "609443dd-5172-49e0-a9a2-037bcacee139",
          "type": "user"
        }
      ]
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 147
}
*/