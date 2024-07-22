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
            <UCard>
                <div class="flex flex-col gap-8 sm:flex-row">
                    <div class="flex flex-col">
                        <img
                            :src="getCoverUrl(manga)"
                            alt="Cover image"
                            class="w-96 shrink-0 grow-0 rounded-t-lg"
                        />
                        <div
                            class="flex w-96 flex-wrap gap-2 rounded-b-lg bg-gray-950 p-4"
                        >
                            <!-- year, status, tags (att,name,en where group genre) -->
                            <UBadge
                                v-for="tag in manga.attributes.tags"
                                color="white"
                                :key="tag.id"
                            >
                                {{ tag.attributes.name.en }}
                            </UBadge>
                        </div>
                    </div>
                    <div class="flex flex-col gap-4">
                        <h1 class="text-4xl font-bold">
                            {{
                                manga.attributes.title.en
                                    ? manga.attributes.title.en
                                    : manga.attributes.title.ja
                            }}
                        </h1>
                        <p class="max-w-[50ch] text-lg text-gray-400">
                            {{ manga.attributes.description.en }}
                        </p>
                        <UDivider />
                        <div class="flex flex-col gap-2">
                            <div
                                v-if="
                                    manga.attributes.year &&
                                    manga.attributes.status
                                "
                            >
                                <span class="text-gray-400">
                                    This Manga was released in
                                    <UBadge color="white">
                                        {{ manga.attributes.year }}
                                    </UBadge>
                                    and is
                                    <UBadge color="white">
                                        {{ manga.attributes.status }}
                                    </UBadge>
                                    .
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </UCard>
            <UCard class="mt-8 h-[470px] mb-8">
                <template #header>
                    <div class="flex gap-8 items-center">
                        <h2 class="text-2xl font-bold">Chapters</h2>
                        <UPagination
                            v-model="page"
                            :total="totalChapters"
                            :page-count="limit"
                            :max="7"
                            class="my-4"
                        />
                    </div>
                </template>
                <ol class="grid grid-cols-5">
                    <li v-for="(chapter, i) in chapters" :key="chapter.id">
                        <UButton
                            variant="link"
                            :label="`Chapter ${chapter.attributes.chapter}`"
                            :to="`/manga/${$route.params.id}/${(page - 1) * limit + i}`"
                            
                        />
                    </li>
                </ol>
            </UCard>
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
