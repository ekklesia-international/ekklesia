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
  { id: 'N8L66nqnoR0', title: 'നിനക്ക് വേണ്ടി ദൈവം പുതുമയോടെ പ്രവർത്തിക്കുന്നു 🥰 | GOD is doing something brand new', type: 'video', creator: 'Ekklesia Worship Center' },
  { id: 'rMmMUN8DLds', title: 'സ്വർഗ്ഗീയ മണ്ഡലങ്ങളിൽ നിന്റെ സാഹചര്യം നോർമൽ ആണോ ? 🧎🧎‍♀️🧎‍♂️', type: 'video', creator: 'Ekklesia Worship Center' }
]);

  import ogImage from '~/assets/frontPage.jpg'
  const pageTitle = 'Youtube Messages - EKKLESIA WORSHIP CENTER'
  const pageDescription = "Collection of youtube Messages"

  useSeoMeta({
      title: pageTitle,
      description: pageDescription,
      ogImage: ogImage,
      ogTitle: pageTitle,
      ogDescription: pageDescription
  })
</script>