<template>
    <div>
        <header v-if="$route.path !== '/'" class="p-4">
            <UButton label="Back" size="xl" color="white" to="/" />
        </header>
        <slot />
    </div>
</template>

<script lang="ts" setup></script>
