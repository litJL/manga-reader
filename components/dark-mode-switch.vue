<template>
    <ClientOnly>
        <UToggle
            v-model="isDark"
            on-icon="i-heroicons-moon-solid"
            off-icon="i-heroicons-sun-solid"
        />
    </ClientOnly>
</template>

<script lang="ts" setup>
const colorMode = useColorMode();
const isDark = computed({
    get() {
        return colorMode.value === "dark";
    },
    set(value: boolean) {
        colorMode.value = value ? "dark" : "light";
        colorMode.preference = colorMode.value;
    },
});
</script>
