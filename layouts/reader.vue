<template>
    <header class="fixed left-8 top-8">
        <UPopover>
            <UButton icon="i-heroicons-bars-3" size="xl" color="white" />
            <template #panel>
                <UCard class="w-64">
                    <div class="mb-4">
                        <label class="mb-1 flex items-center gap-1">
                            <UIcon name="i-heroicons-arrows-right-left" />
                            Width
                        </label>
                        <URange v-model="reader.width" :min="25" :max="100" />
                    </div>
                    <div class="mb-4">
                        <label class="mb-1 flex items-center gap-1">
                            <UIcon name="i-heroicons-chevron-up-down" />
                            Gap
                        </label>
                        <URange v-model="reader.gap" :min="0" :max="64" />
                    </div>
                    <div class="flex gap-2">
                        <UButton
                            label="Home"
                            to="/"
                            color="white"
                        />
                        <UButton label="Chapters" to="./" />
                    </div>
                </UCard>
            </template>
        </UPopover>
    </header>
    <div>
        <slot />
    </div>
</template>

<script lang="ts" setup>
const reader = useReader();
</script>
