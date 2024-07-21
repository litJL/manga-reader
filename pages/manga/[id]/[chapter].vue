<template>
    <UContainer>
        <UButton v-if="chapter !== 0" label="Previous" :to="`${chapter - 1}`" />
        <UButton label="Next" :to="`${chapter + 1}`" />
        <URange v-model="reader" :min="25" :max="100" class="w-96" />

        <div class="flex flex-col items-center">
            <div v-for="image in images" :style="`width: ${reader}%`" class="min-h-96 bg-gray-700">
                <img :src="image" class="w-full" />
            </div>
        </div>
    </UContainer>
</template>

<script setup lang="ts">
import type {
    Chapter,
    ChapterFeedResponse,
} from "~/types/chapter-feed-response";
import { ChapterMetadata } from "~/types/chapter-metadata";

const route = useRoute();
const chapter: number = parseInt(route.params.chapter as string);
const metadata = ref<ChapterMetadata>();
const images = ref<string[]>([]);
const reader = useReader();
const quality = useQuality();
quality.value = "data-saver";

const { data: chapterInformation, status } =
    await useLazyFetch<ChapterFeedResponse>(
        `/api/manga/${route.params.id}/feed`,
        {
            params: {
                limit: 1,
                offset: chapter,
                "translatedLanguage[]": "en",
                "order[chapter]": "asc",
            },
        },
    );

async function getChapterImageDeliveryMetaData() {
    const data = await $fetch<ChapterMetadata>(
        `/api/at-home/server/${chapterInformation.value!.data[0].id}`,
    );
    if (!data) return;

    metadata.value = data;
}

function getChapterImageUrls() {
    if (!metadata.value) return;

    const baseUrl = metadata.value.baseUrl || "";
    const hash = metadata.value.chapter.hash || "";

    images.value = metadata.value.chapter[
        quality.value == "data" ? "data" : "dataSaver"
    ].map((img) => {
        return `${baseUrl}/${quality.value}/${hash}/${img}`;
    });
}

watch(status, () => {
    if (status.value === "success") {
        getChapterImageDeliveryMetaData();
    }
});

watch(metadata, () => {
    getChapterImageUrls();
});
</script>
