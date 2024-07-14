<template>
    <UContainer class="flex flex-col gap-8 pb-8">
        <h1 class="mt-8 text-center text-3xl font-bold">Nuxt 3 Starter</h1>
        <UDivider />
        <UCard>
            <template #header>
                <h2 class="flex items-center gap-2 text-xl font-bold">
                    <UIcon name="i-heroicons-moon-solid" class="size-6" />
                    Dark mode works out of the box...
                </h2>
            </template>
            <div class="flex items-center gap-2">
                Try it out
                <DarkModeSwitch />
            </div>
        </UCard>
        <UCard>
            <template #header>
                <h2 class="flex items-center gap-2 text-xl font-bold">
                    <UIcon
                        name="i-heroicons-check-badge-solid"
                        class="size-6"
                    />
                    ...as well as Nuxt UI
                </h2>
            </template>
            <div class="flex items-center gap-2">
                Any component with the 'U' prefix is part of Nuxt UI. Check out
                the
                <UButton
                    to="https://ui.nuxt.com/getting-started"
                    size="lg"
                    target="_blank"
                    trailing
                    variant="outline"
                    icon="i-heroicons-document-solid"
                >
                    documentation
                </UButton>
                for more information.
            </div>
        </UCard>
        <UCard>
            <template #header>
                <h2 class="flex items-center gap-2 text-xl font-bold">
                    <UIcon
                        name="i-heroicons-chat-bubble-left-solid"
                        class="size-6"
                    />
                    Lodash for javascript utilities
                </h2>
            </template>
            <div>
                Useful for things like debouncing, throttling, and more. Try it:
                <div class="flex flex-col gap-2 mt-4">
                    <UButton
                        label="Click Me"
                        class="w-24"
                        block
                        @click="debounceDemonstration"
                    />
                    <span>Clicks: {{ actualCounter }}</span>
                    <span>Debounced Clicks: {{ debounceCounter }}</span>
                </div>
            </div>
        </UCard>
        <UCard>
            <template #header>
                <h2 class="flex items-center gap-2 text-xl font-bold">
                    <UIcon
                        name="i-heroicons-plus-circle-solid"
                        class="size-6"
                    />
                    VueUse for Vue utilities
                </h2>
            </template>
            <div>
                Useful for things like getting the mouse position and many more things Seriously, this provides a lot of utilities. Here's a demo:
                <div>
                    <span>x: {{ x }}</span>
                    <span>y: {{ y }}</span>
                </div>
            </div>
        </UCard>
        <UCard>
            <template #header>
                <h2 class="flex items-center gap-2 text-xl font-bold">
                    <UIcon
                        name="i-heroicons-language-solid"
                        class="size-6"
                    />
                    i18n for internationalization
                </h2>
            </template>
            <div>
                {{ $t('i18n_demonstration') }}
            </div>
        </UCard>
    </UContainer>
</template>

<script lang="ts" setup>
const debounceCounter = ref(0);
const actualCounter = ref(0);
const { x, y } = useMouse();

const debounce = useDebounce(() => {
    debounceCounter.value++;
}, 300)

function debounceDemonstration() {
    actualCounter.value++;
    debounce();
}
</script>
