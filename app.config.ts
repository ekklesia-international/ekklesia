export default defineAppConfig({
    ui: {
        navigationMenu: {
            slots: {
                link: 'hover:bg-amber-200 hover:text-primary hover:rounded data-[state=open]:text-primary',
                linkLeadingIcon: 'group-hover:text-primary group-data-[state=open]:text-primary',
                childLink: 'hover:bg-amber-200 hover:text-primary hover:rounded text-primary-700',
                childLinkDescription: 'group-hover:text-primary text-primary-500'
            },
            variants: {
                active: {
                    true: {
                        childLink: 'before:bg-elevated text-highlighted',
                        childLinkIcon: 'text-primary'
                    },
                    false: {
                        link: 'text-primary-600',
                        linkLeadingIcon: 'text-primary-600',
                        childLink: [
                            'hover:before:bg-elevated/50 text-default hover:text-highlighted',
                            'transition-colors before:transition-colors'
                        ],
                        childLinkIcon: [
                            'text-primary-600 group-hover:text-default',
                            'transition-colors'
                        ]
                    }
                }
            }
        },
        table: {
            slots: {
              root: 'relative overflow-auto',
              base: 'min-w-full overflow-clip',
              caption: 'sr-only',
              thead: 'relative',
              tbody: 'divide-y divide-default [&>tr]:data-[selectable=true]:hover:bg-elevated/50 [&>tr]:data-[selectable=true]:focus-visible:outline-primary',
              tfoot: 'relative',
              tr: 'data-[selected=true]:bg-elevated/50',
              th: 'px-4 py-3.5 text-sm text-highlighted text-left rtl:text-right font-semibold [&:has([role=checkbox])]:pe-0',
              td: 'text-wrap',
              separator: 'absolute z-[1] left-0 w-full h-px bg-(--ui-border-accented)',
              empty: 'py-6 text-center text-sm text-muted',
              loading: 'py-6 text-center'
            }
          }
    }
})
