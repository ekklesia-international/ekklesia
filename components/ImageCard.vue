<template>
    <div class="w-full bg-white border border-gray-200 rounded-lg shadow">
        <NuxtLink :to="props.link">
            <img class="rounded-t-lg w-full h-48 object-cover" :src="props.image" :alt="props.title" />
        </NuxtLink>
        <div class="p-5">
            <NuxtLink :to="props.link">
                <h5 class="mb-2 text-2xl font-bold tracking-tight">{{ props.title }}</h5>
            </NuxtLink>
            <slot></slot>
            <NuxtLink :to="props.link"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary-500 rounded-lg hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">

interface ImageCard {
    title?: any
    link?: any
    image?: any
}

const props = defineProps<ImageCard>()
</script>
