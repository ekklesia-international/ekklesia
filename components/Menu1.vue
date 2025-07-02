<template>
    <header class="bg-white shadow-md sticky top-0 z-50">
      <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          
          <!-- Logo / Site Brand -->
          <div class="flex-shrink-0">
            <NuxtLink to="/" class="text-2xl font-bold text-gray-800 hover:text-indigo-600 transition-colors">
              Logo
            </NuxtLink>
          </div>

          <!-- Desktop Menu -->
          <div class="hidden md:flex md:items-center md:space-x-1">
            <div 
              v-for="item in menuItems" 
              :key="item.name"
              class="relative"
              @mouseenter="item.children && (openDropdown = item.name)"
              @mouseleave="item.children && (openDropdown = null)"
            >
              <!-- Top-level menu item -->
              <NuxtLink
                v-if="!item.children"
                :to="item.path"
                class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-all"
                active-class="text-indigo-600 bg-indigo-50"
              >
                {{ item.name }}
              </NuxtLink>
              <button
                v-else
                class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-all flex items-center"
                :class="{ 'text-indigo-600 bg-indigo-50': openDropdown === item.name }"
              >
                {{ item.name }}
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>

              <!-- 3-Column Dropdown Menu -->
              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <div v-if="item.children && openDropdown === item.name" class="absolute left-0 mt-2 w-[40rem] origin-top-left rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div class="p-6 grid grid-cols-3 gap-x-8 gap-y-4">
                    <NuxtLink
                      v-for="child in item.children"
                      :key="child.name"
                      :to="child.path"
                      @click="openDropdown = null"
                      class="block p-2 rounded-md text-sm text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
                      active-class="font-semibold text-indigo-600"
                    >
                      {{ child.name }}
                    </NuxtLink>
                  </div>
                </div>
              </transition>
            </div>
          </div>

          <!-- Mobile Menu Button (Hamburger) -->
          <div class="md:hidden flex items-center">
            <button @click="toggleMobileMenu" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span class="sr-only">Open main menu</span>
              <svg v-if="!isMobileMenuOpen" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              <svg v-else class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>
      </nav>

      <!-- Mobile Menu (Dropdown) -->
      <transition name="slide-fade">
        <div v-if="isMobileMenuOpen" class="md:hidden bg-white border-t border-gray-200">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div v-for="item in menuItems" :key="item.name">
              <NuxtLink v-if="!item.children" :to="item.path" @click="closeMobileMenu" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50" active-class="text-indigo-600 bg-indigo-50">{{ item.name }}</NuxtLink>
              <div v-else>
                <button @click="toggleMobileSubmenu(item.name)" class="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
                  <span>{{ item.name }}</span>
                  <svg class="w-5 h-5 transition-transform" :class="{'rotate-180': openMobileSubmenu === item.name}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div v-if="openMobileSubmenu === item.name" class="mt-2 pl-4 border-l-2 border-gray-200">
                  <NuxtLink v-for="child in item.children" :key="child.name" :to="child.path" @click="closeMobileMenu" class="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50" active-class="text-indigo-600 bg-indigo-50">{{ child.name }}</NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </header>
</template>


<script setup>
import { ref } from 'vue';

// State for main mobile menu
const isMobileMenuOpen = ref(false);
// State for desktop dropdown menu (hover)
const openDropdown = ref(null);
// State for mobile submenu (accordion)
const openMobileSubmenu = ref(null);

// Updated menu items data structure with children
const menuItems = ref([
  { name: 'Home', path: '/' },
  { 
    name: 'Services', 
    children: [
      { name: 'Web Development', path: '/services/web-dev' },
      { name: 'Mobile App Dev', path: '/services/mobile-dev' },
      { name: 'UI/UX Design', path: '/services/ui-ux' },
      { name: 'Digital Marketing', path: '/services/marketing' },
      { name: 'SEO Optimization', path: '/services/seo' },
      { name: 'Cloud Solutions', path: '/services/cloud' },
      { name: 'IT Consulting', path: '/services/consulting' },
      { name: 'Data Analytics', path: '/services/data' },
      { name: 'Cybersecurity', path: '/services/security' },
    ] 
  },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]);

// --- Mobile Menu Functions ---
function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  if (!isMobileMenuOpen.value) {
    // Also close any open submenu when closing the main menu
    openMobileSubmenu.value = null;
  }
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false;
  openMobileSubmenu.value = null;
}

function toggleMobileSubmenu(name) {
  if (openMobileSubmenu.value === name) {
    openMobileSubmenu.value = null; // Close if already open
  } else {
    openMobileSubmenu.value = name; // Open the new one
  }
}
</script>

<style>
/* Using Tailwind CSS utility classes, so custom CSS is minimal. */
body {
  font-family: 'Inter', sans-serif;
}

/* Transition for mobile menu slide-down */
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>