<template>
    <div>
        <header
            v-if="$route.path !== '/'"
            class="fixed right-0 top-0 rounded-bl-3xl border-b border-l border-gray-700 bg-gray-900 px-8 py-4"
        >
            <UButton label="Back" size="xl" color="white" to="/" />
        </header>
        <slot />
    </div>
</template>

<script lang="ts" setup></script>
