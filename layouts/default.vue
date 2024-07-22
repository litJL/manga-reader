<template>
    <div>
        <header v-if="$route.path !== '/'" class="p-4">
            <UContainer>
                <UButton label="Back" size="xl" color="white" to="/" />
            </UContainer>
        </header>
        <slot />
    </div>
</template>

<script lang="ts" setup></script>
