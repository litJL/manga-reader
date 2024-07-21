<template>
    <UContainer>
        <div
            v-if="status === 'pending'"
            class="flex h-screen items-center justify-center"
        >
            <div
                class="border-primary-500 size-16 animate-ping rounded-lg border"
            ></div>
            <div
                class="border-primary-800 size-16 animate-ping rounded-lg border"
                style="animation-delay: 0.25s"
            ></div>
        </div>
        <div v-else-if="manga" class="mt-8">
            <div class="flex gap-8">
                <img
                    :src="getCoverUrl(manga)"
                    alt="Cover image"
                    class="w-96 shrink-0 grow-0 rounded-lg"
                />
                <div>
                    <h1 class="mb-4 text-4xl font-bold">
                        {{
                            manga.attributes.title.en
                                ? manga.attributes.title.en
                                : manga.attributes.title.ja
                        }}
                    </h1>
                    <p class="max-w-[50ch] text-xl text-gray-400">
                        {{ manga.attributes.description.en }}
                    </p>
                    <div class="mt-8 rounded-lg bg-gray-800 p-4"></div>
                </div>
            </div>
            <UPagination
                v-model="page"
                :total="totalChapters"
                :page-count="limit"
                :max="7"
                class="my-4"
            />
            <ol class="grid grid-cols-4">
                <li v-for="(chapter, i) in chapters" :key="chapter.id">
                    <UButton
                        variant="link"
                        :label="`Chapter ${chapter.attributes.chapter}`"
                        :to="`/manga/${$route.params.id}/${(page-1) * limit + i}`"
                    />
                </li>
            </ol>
        </div>
    </UContainer>
</template>

<script setup lang="ts">
import type {
    Chapter,
    ChapterFeedResponse,
} from "~/types/chapter-feed-response";
import type { Manga } from "~/types/manga-response";

const route = useRoute();
const page = ref(1);
const limit = 50;

const { data: manga, status } = await useLazyFetch<Manga>(
    `/api/manga/${route.params.id}`,
    {
        params: {
            "includes[]": "cover_art",
        },
        transform: (_data: any) => {
            return _data.data as Manga;
        },
    },
);

const totalChapters = ref<number>(0);
const chapters = ref<Chapter[]>([]);

async function fetchChapters() {
    const data = await $fetch<ChapterFeedResponse>(
        `/api/manga/${route.params.id}/feed`,
        {
            params: {
                limit: limit,
                offset: (page.value - 1) * limit,
                "translatedLanguage[]": "en",
                "order[chapter]": "asc",
            },
        },
    );
    if (!data) return;

    chapters.value = data.data;
    totalChapters.value = data.total;
}

function getCoverUrl(manga: Manga): string {
    const coverArt = manga.relationships.find((r) => r.type === "cover_art");

    if (!coverArt) return "";

    return `https://uploads.mangadex.org/covers/${manga.id}/${coverArt.attributes.fileName}`;
}

onMounted(() => {
    fetchChapters();
});

watch(page, () => {
    fetchChapters();
});
</script>
