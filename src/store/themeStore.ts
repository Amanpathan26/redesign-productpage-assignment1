import { themeConfig } from '@/configs/theme.config'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Theme, LayoutType, Direction } from '@/@types/theme'

import { colors as defaultColors } from '@/views/Home/themes/base/colors'
import { typography as defaultTypography } from '@/views/Home/themes/base/typography'

import { colors as organColors } from '@/views/Home/themes/theme1/colors'
import { typography as organTypography } from '@/views/Home/themes/theme1/typography'

import { colors as cosmeticColors } from '@/views/Home/themes/theme2/colors'
import { typography as cosmeticTypography } from '@/views/Home/themes/theme2/typography'

const themeMap = {
    default: {
        colors: defaultColors,
        typography: defaultTypography,
    },
    theme1: {
        colors: organColors,
        typography: organTypography,
    },
    theme2: {
        colors: cosmeticColors,
        typography: cosmeticTypography,
    },
}

type ThemeState = Theme & {
    specialty: keyof typeof themeMap
    colors: typeof defaultColors
    typography: typeof defaultTypography
}

type ThemeAction = {
    setSchema: (payload: string) => void
    setMode: (payload: ThemeState['mode']) => void
    setSideNavCollapse: (payload: boolean) => void
    setDirection: (payload: Direction) => void
    setPanelExpand: (payload: boolean) => void
    setLayout: (payload: LayoutType) => void
    setPreviousLayout: (payload: LayoutType | '') => void
    setSpecialty: (payload: keyof typeof themeMap) => void
}

const initialThemeState: ThemeState = {
    ...themeConfig,
    specialty: 'default',
    colors: defaultColors,
    typography: defaultTypography,
}

export const useThemeStore = create<ThemeState & ThemeAction>()(
    persist(
        (set) => ({
            ...initialThemeState,

            setSchema: (payload) => set(() => ({ themeSchema: payload })),
            setMode: (payload) => set(() => ({ mode: payload })),
            setSideNavCollapse: (payload) =>
                set((state) => ({
                    layout: { ...state.layout, sideNavCollapse: payload },
                })),
            setDirection: (payload) => set(() => ({ direction: payload })),
            setPanelExpand: (payload) => set(() => ({ panelExpand: payload })),
            setLayout: (payload) =>
                set((state) => ({
                    layout: { ...state.layout, type: payload },
                })),
            setPreviousLayout: (payload) =>
                set((state) => ({
                    layout: { ...state.layout, previousType: payload },
                })),

            setSpecialty: (payload) => {
                const selected = themeMap[payload]
                Object.entries(selected.colors).forEach(([key, val]) =>
                    document.documentElement.style.setProperty(`--${key}`, val),
                )
                Object.entries(selected.typography.fontFamily).forEach(([key, val]) =>
                    document.documentElement.style.setProperty(`--font-${key}`, val),
                )
                set({
                    specialty: payload,
                    colors: selected.colors,
                    typography: selected.typography,
                })
            },
        }),
        {
            name: 'theme',
        },
    ),
)
