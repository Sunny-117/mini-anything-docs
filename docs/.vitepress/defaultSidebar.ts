import { DefaultTheme } from "vitepress";

export const defaultSidebar: DefaultTheme.Sidebar = [
    {
        text: 'Introduction',
        collapsible: true,
        items: [
            {
                text: 'Getting Started',
                link: '/getting-started',
            },
        ],
    },
    {
        text: 'vue3',
        collapsible: true,
        items: [
            {
                text: 'vuejs-core',
                link: '/vue3/index'
            },
            {
                text: 'reactivity',
                link: '/vue3/reactivity'
            },
        ],
    },
    {
        text: 'React',
        items: [
            {
                text: 'React',
                link: '/react/',
            },
        ],
    },
]