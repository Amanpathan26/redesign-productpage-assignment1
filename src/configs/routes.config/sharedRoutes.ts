import { lazy } from 'react'
import type { Routes } from '@/@types/routes'

const sharedRoutes: Routes= [
    {
        key: 'homePage',
        path: `/`,
        component: lazy(() => import('@/views/Home')),
        authority: []
    },
    {
        key: 'themes',
        path: `/themes`,
        component: lazy(() => import('@/views/Home/themes')),
        authority: []
    },
]

export default sharedRoutes
