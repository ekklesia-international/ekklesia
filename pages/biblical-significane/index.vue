<template>
    <UContainer as="main"
        class="mx-auto text-justify w-full max-w-9/10 shadow-md pt-30 pb-25 shadow-primary/20 font-[Lora]">
        <div class="p-4 min-h-screen text-primary">
            <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <ImageCard v-bind="number12">
                    <p class="mb-6">The number 12 holds significant symbolic meaning throughout the Bible, often
                        representing <strong> divine order, governmental authority, and God's people.</strong> It
                        appears
                        numerous times in both the Old and New Testaments, consistently reinforcing these themes.</p>
                </ImageCard>
                <ImageCard v-bind="number40">
                    <p class="mb-6">The number 40 holds significant symbolic meaning in the Bible, appearing frequently
                        in both
                        the Old and New Testaments. While it often refers to a literal period of 40 days or 40 years,
                        its
                        recurring use highlights specific themes, primarily <strong>testing, probation, transformation,
                            and a
                            period of preparation or judgment leading to a new beginning.</strong></p>
                </ImageCard>
            </div>
        </div>

    </UContainer>
</template>

<script setup lang="ts">
import number12Image from '~/assets/number12.jpg'
import number40Image from '~/assets/number40.jpg'

import ogImage from '~/assets/numbers.jpg'
const pageTitle = 'The Profound Significance of the Numbersin the Bible'
const pageDescription = "The numbers holds significant symbolic meaning in the Bible, appearing frequently in both the Old and New Testaments."

useSeoMeta({
    title: pageTitle,
    description: pageDescription,
    ogImage: ogImage,
    ogTitle: pageTitle,
    ogDescription: pageDescription
})

const number12 = {
    title: 'Number 12',
    image: number12Image,
    link: '/biblical-significane/number-12'
}
const number40 = {
    title: 'Number 40',
    image: number40Image,
    link: '/biblical-significane/number-40'
}
</script>