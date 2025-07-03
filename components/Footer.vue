<template>
  <footer class="border-t border-gray-200 dark:border-gray-800 bottom-0 bg-ekklesia-yellow-30 z-50 w-full relative">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Top Section -->
      <div class="py-8 lg:py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Link Columns -->
          <div v-for="(col, index) in links" :key="index" class="space-y-4">
            <h3 class="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">{{ col.label }}
            </h3>
            <ul class="space-y-3">
              <li v-for="(link, linkIndex) in col.children" :key="linkIndex">
                <a :href="link.to" :target="link.to.startsWith('http') ? '_blank' : '_self'"
                  class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Newsletter Section -->
          <div class="lg:col-span-4">
            <div class="prose dark:prose-invert">
              <span class="text-primary italic">
                <strong>
                  “Blessed are you, Simon son of Jonah, for this was not revealed to you by flesh and blood, but by my
                  Father in heaven. And I tell you that you are Peter,and on this rock I will build my church, and
                  the gates of Hades will not overcome it. 19 I will give you the keys of the kingdom of heaven;
                  whatever you bind on earth will be bound in heaven, and whatever you loose on earth will be loosed
                  in heaven.
                </strong>
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div
        class="py-6 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between">
        <p class="text-primary">
          Copyright © {{ new Date().getFullYear() }} EKKLESIA WORSHIP CENTER
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

// Define your primary color for Tailwind CSS if not already configured
// This is just for the example, you would set this in your tailwind.config.js
// const colors = require('tailwindcss/colors')
// theme: { extend: { colors: { primary: colors.sky } } }

// Reactive state for the email input and loading indicator
const email = ref('');
const loading = ref(false);

// Function to handle form submission
const subscribe = () => {
  if (!email.value) return;
  loading.value = true;
  // Simulate an API call
  setTimeout(() => {
    console.log(`Subscribed with email: ${email.value}`);
    email.value = ''; // Clear the input
    loading.value = false;
    // Here you would typically show a success message to the user
  }, 1500);
};

// Links for the footer columns
const links = [
  // {
  //   label: 'Resources',
  //   children: [
  //     { label: 'Nuxt UI', to: 'https://ui.nuxt.com' },
  //     { label: 'Nuxt Framework', to: 'https://nuxt.com' },
  //     { label: 'Vue.js', to: 'https://vuejs.org' },
  //   ],
  // },
  // {
  //   label: 'Company',
  //   children: [
  //     { label: 'About Us', to: '/about' },
  //     { label: 'Blog', to: '/blog' },
  //     { label: 'Careers', to: '/careers' },
  //   ],
  // },
  // {
  //   label: 'Legal',
  //   children: [
  //     { label: 'Privacy Policy', to: '/privacy' },
  //     { label: 'Terms of Service', to: '/terms' },
  //   ],
  // },
];
</script>

<style scoped>
/* Custom prose styles for the newsletter section if needed */


/* Define primary color styles if not using tailwind config */
.bg-primary-600 {
  background-color: #0284c7;
  /* sky-600 */
}

.bg-primary-600:hover {
  background-color: #0369a1;
  /* sky-700 */
}

.focus\:ring-primary-500:focus {
  --tw-ring-color: #0ea5e9;
  /* sky-500 */
}

.focus\:border-primary-500:focus {
  border-color: #0ea5e9;
  /* sky-500 */
}
</style>
