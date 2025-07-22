<script setup lang="ts">
import { link } from '#build/ui';
import type { NavigationMenuItem } from '@nuxt/ui'
import IconHome from '~/assets/logo.svg'

import headerImage from '~/assets/frontPage.png'

const openMobileMenu = ref(false)
const route = useRoute()
const activeMenu = ref(route.path)

const uiTheme = {
    link: 'hover:bg-amber-200 hover:text-primary hover:rounded data-[state=open]:text-primary',
    linkLeadingIcon: 'group-hover:text-primary group-data-[state=open]:text-primary',
    childLink: 'hover:bg-amber-200 hover:text-primary hover:rounded text-primary-700',
    childLinkDescription: 'group-hover:text-primary-700',
    childLinkIcon: 'group-hover:text-primary'
}

const items = ref<NavigationMenuItem[]>([
    {
        label: 'Home',
        icon: 'i-lucide-home',
        to: '/'
    },
    {
        label: 'Biblical Significane',
        icon: 'i-lucide-book-open',
        to: '/biblical-significane',
        children: [
            {
                label: 'Number 12',
                icon: 'i-lucide-database',
                description: '',
                to: '/biblical-significane/number-12'
            },
            {
                label: 'Number 40',
                icon: 'i-lucide-database',
                description: '',
                to: '/biblical-significane/number-40'
            }
        ]
    },
    {
        label: 'Videos',
        icon: 'i-lucide-film',
        to: '#',
        children: [
            {
                label: 'Shorts',
                icon: 'i-lucide-film',
                description: '',
                to: '/videos/shorts'
            },
            {
                label: 'Messages',
                icon: 'i-lucide-film',
                description: '',
                to: '/videos/messages'
            }
        ]
    },
])
</script>

<template>
    <div class="shadow-lg shadow-primary/20 top-0 fixed w-full bg-white z-50">
        <UContainer as="header" class="justify-between flex gap-5 lg:max-w-9/10  z-10">
            <div class="lg:flex-1 flex items-center gap-1.5 min-w-0 shrink md:shrink-0"><!----><!--[--><a
                    aria-current="page" href="/"
                    class="router-link-active router-link-exact-active flex items-end gap-2 mt-2 font-bold text-xl text-highlighted min-w-0 focus-visible:outline-primary lg:shrink-0 md:shrink"
                    aria-label="EKKLESIA WORSHIP CENTER">
                    <img src="../assets/logo1.png" alt="Logo" class="max-h-15 lg:max-h-20">
                    <IconHome class="lg:w-90 lg:h-15 text-primary w-100 h-15" :fontControlled="false" />
                    <img src="../assets/logof.png" alt="Logo" class="max-h-15 lg:max-h-20">
                </a>
            </div>
            <div class="w-full flex hidden lg:flex  max-w-1/2">
                <UNavigationMenu :items="items" :v-model="activeMenu" class="w-full justify-center" highlight
                    highlight-color="primary" :ui="uiTheme" />
            </div>
            <!-- </div> -->
            <div class="flex lg:hidden p-4 pr-2">
                <button type="button" @click="openMobileMenu = !openMobileMenu" aria-label="Open menu"
                    class="rounded-md font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 transition-colors text-sm gap-1.5 text-default hover:bg-elevated active:bg-elevated focus:outline-none focus-visible:bg-elevated hover:disabled:bg-transparent dark:hover:disabled:bg-transparent hover:aria-disabled:bg-transparent dark:hover:aria-disabled:bg-transparent p-1.5 lg:hidden -me-1.5">
                    <UIcon name="i-lucide:menu" class="size-5" />
                </button>
            </div>
        </UContainer>
        <div class="w-full bg-opacity-25 bg-cover fixed top-16 bg-white min-h-4/10 lg:hidden" v-if="openMobileMenu"
        :style="`background-image:linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 230, 200, 0.9)), url(${headerImage})`">
            <UNavigationMenu :items="items" @change="openMobileMenu = !openMobileMenu" orientation="vertical" :v-model="activeMenu"
                class="w-full justify-center mt-5" highlight highlight-color="primary" :ui="uiTheme" />
        </div>

    </div>
</template>
