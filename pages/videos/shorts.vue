<template>
  <UContainer as="main"
        class="mx-auto text-justify w-full max-w-9/10 shadow-md pt-25 shadow-primary/20 font-[Lora] min-h-screen">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          <VideoCard v-for="video in videos" :key="video.id" :video="video" />
        </div>
  </UContainer>
</template>

<script setup>
import { ref } from 'vue';

// Sample data for videos and shorts
// In a real application, you would fetch this from an API.
const videos = ref([
  { id: 'EwBfpWcFGR8', title: 'Number 12 #christianity #bible #life #relationships #numerology #numbers #twelve #bibleverse', type: 'short', creator: 'Ekklesia Worship Center' },
  { id: '_i10R2lofRA', title: 'Heavenly Realms #christianity #relationships  #jesus #travel #dream #love #destiny #lifeinjesus', type: 'short', creator: 'Ekklesia Worship Center' },
  { id: 'GlyjWU_1DJE', title: 'Heavenly provision #christianity #heaven #bibleverse #relationships #jesus #love #dailybibleverse', type: 'short', creator: 'Ekklesia Worship Center' },
  { id: 'I_rGzKiYBH8', title: 'Heavenly weapons #spiritual #weapons #are #heavenly #designed #heavenly #made', type: 'short', creator: 'Ekklesia Worship Center' },
  { id: 'dtCcK2JSQVk', title: 'Heavenly fullness 👑 | #shorts #heaven #christian #christianity', type: 'short', creator: 'Ekklesia Worship Center' },
  { id: '4uraVB1A2Z4', title: 'Be fruitfulness | #shorts #fruitfulness #heavenlyrealms #christianity', type: 'short', creator: 'Ekklesia Worship Center' },
  { id: 'Hn_J85ElVPY', title: 'GOD’S Plan 🪴 #christianity #motivation #motivational #heavenlybeings #heavenlyrealms #heavenonearth', type: 'short', creator: 'Ekklesia Worship Center' },
  { id: 'GuDDiTmlGOI', title: 'God’s Pleasure #ekklesia #heavenlybeings #heavenlyrealms #bible #bibleverse #heavenonearth', type: 'short', creator: 'Ekklesia Worship Center' },
  { id: 'k8LWZebb4ZM', title: 'What is your most priority? Is it #eternal #heavenlyrealms or #god #cursed #earth ???', type: 'short', creator: 'Ekklesia Worship Center' },
  { id: 'hMglI0X-v5c', title: 'Brand New 🥰 #ekklesia #love #heavenlybeings #bibleverseoftheday #shorts', type: 'short', creator: 'Ekklesia Worship Center' },
]);

    import ogImage from '~/assets/frontPage.jpg'
    const pageTitle = 'Youtube Shorts - EKKLESIA WORSHIP CENTER'
    const pageDescription = "Collection of youtube shorts"

    useSeoMeta({
        title: pageTitle,
        description: pageDescription,
        ogImage: ogImage,
        ogTitle: pageTitle,
        ogDescription: pageDescription
    })
</script>
