<template>
    <UContainer class="flex flex-col gap-8">
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
    </UContainer>
</template>

<script lang="ts" setup></script>
