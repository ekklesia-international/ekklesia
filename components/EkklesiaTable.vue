<template>
    <UTable v-model:expanded="expanded" :data="props.data" :columns="columns" :ui="uiTheme"
        class="flex border-1 border-gray-200 text-primary">
        <template #expanded="{ row }">
            <blockquote
                class="bg-ekklesia-yellow-50 border-l-4 border-ekklesia-brown-300 italic p-4 pl-6 mb-6 rounded-md shadow-inner text-gray-700"
                v-html="row.original.accordion_info.bible_verse">
            </blockquote>
            <table class="min-w-full divide-y divide-gray-200 mb-5">
                <tbody class="bg-white divide-y divide-gray-200 text-wrap lg:hidden">
                    <tr v-for="(responsive_info, index) in row.original.accordion_info.responsive_info" :class="{'md:hidden': (index == 0)}">
                        <td
                            class="bg-amber-50 px-3 py-3 text-left text-xs font-medium text-amber-700 uppercase tracking-wider border-r border-gray-200 rounded-tl-lg border-t border-b border-l  border-r border-gray-200">
                            {{ responsive_info.title }}</td>
                        <td class="px-3 py-3 text-l border-t border-b border-r border-gray-200 text-left md:text-left"
                            v-html="responsive_info.content">
                        </td>
                    </tr>
                </tbody>
            </table>
        </template>
    </UTable>
</template>

<script setup lang="ts">
import { h, resolveComponent } from 'vue'
import type { TableColumn } from '@nuxt/ui'
import { type TableInfo } from "~/types/TableTypes";

const UButton = resolveComponent('UButton')

const props = defineProps<TableInfo>()

const uiTheme = {
    // tr: 'data-[expanded=true]:bg-elevate d/50',
    root: 'relative overflow-clip max-w-screen',
    base: 'table-fixed text-left',
    td: 'ekklesia-table text-primary-800',
    tr: 'ekklesia-table text-primary  text-wrap',
    th: 'ekklesia-table text-primary  text-wrap'
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

const expanded = ref({ 0: true })
</script>

<style>
@media (width < 48rem) {
    .ekklesia-table th:nth-child(3) {
        display: none;
    }

    .ekklesia-table td:nth-child(3) {
        display: none;
    }

    .ekklesia-table-inside tr:first-child {
        display: none;
    }
}
@media (width < 64rem) {
    .ekklesia-table th:nth-child(4) {
        display: none;
    }

    .ekklesia-table td:nth-child(4) {
        display: none;
    }

    .ekklesia-table th:nth-child(5) {
        display: none;
    }

    .ekklesia-table td:nth-child(5) {
        display: none;
    }
}


td {
    text-wrap: wrap !important;
}
</style>