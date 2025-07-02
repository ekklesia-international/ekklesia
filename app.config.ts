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
        }
    }
})
