<template>
  <div class="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out relative">
    <a :href="`https://www.youtube.com/watch?v=${video.id}`" target="_blank" rel="noopener noreferrer">
      <!-- Thumbnail container with dynamic aspect ratio -->
      <div
        class="w-full bg-black"
        :class="{
          'aspect-video': video.type === 'video', // 16:9 for regular videos
          'aspect-[9/16]': video.type === 'short'  // 9:16 for shorts
        }"
      >
        <img
          :src="`https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`"
          :alt="video.title"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      <!-- Play Icon Overlay -->
      <div class="absolute inset-0 flex items-center justify-center transition-all duration-300">
        <div class="w-16 h-16 bg-red-600/80 rounded-full flex items-center justify-center scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"></path>
          </svg>
        </div>
      </div>

      <!-- Video Information -->
      <div class="p-4">
        <h6  class="text-md font-semibold text-ekklesia-brown mb-3 flex items-center text-left sm:text-center" :title="video.title">
          {{ video.title }}
        </h6>
        <div class="flex items-center justify-between mt-2">
           <p class="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full"
             :class="{
                'bg-red-500 text-white': video.type === 'video',
                'bg-purple-500 text-white': video.type === 'short'
             }"
           >
            {{ video.type }}
          </p>
          <p class="text-ekklesia-brown text-sm">{{ video.creator }}</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
// Define the props that this component accepts
const props = defineProps({
  video: {
    type: Object,
    required: true
  }
});
</script>
