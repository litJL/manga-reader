<template>
    <UContainer>
        <div class="mb-8 flex flex-col items-center gap-8">
            <h1 class="mt-8 text-center text-3xl font-bold">
                Super Awesome Manga reader
            </h1>
            <div class="flex w-full justify-center gap-4">
                <UInput
                    type="text"
                    v-model="searchTerm"
                    size="xl"
                    class="w-full max-w-screen-md"
                    placeholder="Search for manga"
                    autofocus
                    @keyup.enter="searchNewManga"
                />
                <UButton
                    label="Search"
                    size="xl"
                    icon="i-heroicons-magnifying-glass-solid"
                    @click="searchNewManga"
                />
            </div>
        </div>
        <div v-if="pending" class="flex justify-center">
            <div
                class="border-primary-500 size-16 animate-ping rounded-lg border"
            ></div>
            <div
                class="border-primary-800 size-16 animate-ping rounded-lg border"
                style="animation-delay: 0.25s"
            ></div>
        </div>
        <div v-else-if="response">
            <div v-if="response.total == 0">No manga found</div>
            <div v-else>
                <UPagination
                    v-model="page"
                    :total="response.total"
                    :page-count="limit"
                    :max="7"
                    class="my-4"
                />
                <div class="grid gap-4 sm:grid-cols-2">
                    <UCard
                        v-for="manga in response.data"
                        class="ring-offset-primary-500 cursor-pointer overflow-hidden transition hover:ring-offset-4"
                        @click="navigateTo(`/manga/${manga.id}`)"
                    >
                        <div class="flex gap-4">
                            <img
                                class="-my-6 -ml-6 h-52 shrink-0 grow-0"
                                :src="getCoverUrl(manga)"
                                alt="Cover Thumbnail"
                            />
                            <div class="flex flex-col gap-2">
                                <h2 class="line-clamp-2 text-xl font-bold">
                                    {{
                                        manga.attributes.title.en
                                            ? manga.attributes.title.en
                                            : manga.attributes.title.ja
                                    }}
                                </h2>
                                <span class="text-gray-400">
                                    {{ manga.attributes.year }}
                                </span>
                            </div>
                        </div>
                    </UCard>
                </div>
            </div>
        </div>
    </UContainer>
</template>

<script lang="ts" setup>
import {
    type MangaResponse,
    type Manga,
    MangaResponseSchema,
} from "~/types/manga-response";

const searchTerm = ref("");
const response = ref<MangaResponse>();
const pending = ref(false);
const limit = 10;
const page = ref(1);

async function queryManga() {
    if (!searchTerm.value) return;

    pending.value = true;
    const res = await $fetch<MangaResponse>("/api/manga", {
        params: {
            title: searchTerm.value,
            limit,
            offset: (page.value - 1) * limit,
            "includes[]": "cover_art",
        },
    });

    const validation = MangaResponseSchema.safeParse(res);
    if (!validation.success) {
        console.error(validation.error, validation);
        response.value = undefined;
    }

    response.value = validation.data;
    pending.value = false;
}

async function searchNewManga() {
    if (!searchTerm.value) return;

    page.value = 1;
    queryManga();
}

function getCoverUrl(manga: Manga): string {
    const coverArt = manga.relationships.find((r) => r.type === "cover_art");
    if (!coverArt) return "";

    return `https://uploads.mangadex.org/covers/${manga.id}/${coverArt.attributes.fileName}.256.jpg`;
}

watch(page, queryManga);
</script>
