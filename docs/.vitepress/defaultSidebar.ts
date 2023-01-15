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
            {
                text: '文档进度',
                link: '/doc-process',
            },
        ],
    },

    {
        text: 'NodeJS 工具',
        items: [
            {
                text: '自动重启node应用的工具 nodemon',
                link: '/nodemon/',
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