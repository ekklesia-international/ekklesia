<template>
    <UTable v-model:expanded="expanded" :data="props.data" :columns="columns" :ui="uiTheme"
        class="flex-1 border-1 border-gray-200 text-primary">
        <template #expanded="{ row }">
            <blockquote v-for="bible_verse in row.original"
                  class="bg-ekklesia-yellow-50 border-l-4 border-ekklesia-brown-300 italic p-4 pl-6 mb-6 rounded-md shadow-inner text-gray-700"
                  v-html="bible_verse">
                </blockquote>
            <pre>{{ row.original }}</pre>
        </template>
    </UTable>
</template>

<script setup lang="ts">
import { h, resolveComponent } from 'vue'
import type { TableColumn } from '@nuxt/ui'
import { useWindowSize } from '@vueuse/core'


const { width } = useWindowSize({ initialWidth: 0 });

const UButton = resolveComponent('UButton')

interface TableInfo {
    headers?: any
    data?: any,
    hideColumnsOnResponsive?: any,
    hideBelowWindowSize: any
}

const props = defineProps<TableInfo>()

const hideColumns = ref(width.value < props.hideBelowWindowSize ? props.hideColumnsOnResponsive : {})

const uiTheme = {
    tr: 'data-[expanded=true]:bg-elevated/50',
    td: 'text-primary-800',
    th: 'text-primary'
}

const columns: TableColumn<any>[] = [
    {
        id: 'expand',
        cell: ({ row }) =>
            h(UButton, {
                color: 'neutral',
                variant: 'ghost',
                icon: 'i-lucide-chevron-down',
                square: true,
                'aria-label': 'Expand',
                ui: {
                    leadingIcon: [
                        'transition-transform text-primary',
                        row.getIsExpanded() ? 'duration-200 rotate-180' : ''
                    ]
                },
                onClick: () => row.toggleExpanded()
            })
    },
    ...props.headers
]

const expanded = ref({ 1: true })
</script>

<style>
    @media (width < 64rem) {
        th:nth-child(3) {
            display: none;
        }
        td:nth-child(3) {
            display: none;
        }
        th:nth-child(4) {
            display: none;
        }
        td:nth-child(4) {
            display: none;
        }
    }
</style>