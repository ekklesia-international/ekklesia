<template>
    <UContainer as="main" class="mt-10 mx-auto text-center">
        <NuxtLink to="/">
            <UButton icon="i-lucide-home" size="xl" color="secondary" variant="solid">Back to Homepage</UButton>
        </NuxtLink>
        <Icon404 class="text-primary mt-50 lg:mt-5" :fontControlled="false" />
    </UContainer>
</template>

<script setup lang="ts">
import Icon404 from '~/assets/_404.svg'
</script>