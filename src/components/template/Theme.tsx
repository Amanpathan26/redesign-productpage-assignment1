import React, { useEffect } from 'react'
import ConfigProvider from '@/components/ui/ConfigProvider'
import { themeConfig } from '@/configs/theme.config'
import useDarkMode from '@/utils/hooks/useDarkMode'
import useTheme from '@/utils/hooks/useTheme'
import useLocale from '@/utils/hooks/useLocale'
import useDirection from '@/utils/hooks/useDirection'
import type { CommonProps } from '@/@types/common'
import { useThemeStore } from '@/store/themeStore'

const Theme = (props: CommonProps) => {
    useTheme()
    useDarkMode()
    useDirection()

    const { locale } = useLocale()

    const { specialty, colors, typography, setSpecialty } = useThemeStore()

    useEffect(() => {
        Object.entries(colors).forEach(([key, value]) => {
            document.documentElement.style.setProperty(`--${key}`, value)
        })
        Object.entries(typography.fontFamily).forEach(([key, value]) => {
            document.documentElement.style.setProperty(`--font-${key}`, value)
        })
        Object.entries(typography.fontWeight).forEach(([key, value]) => {
            document.documentElement.style.setProperty(`--font-weight-${key}`, value.toString())
        })
        Object.entries(typography.fontSize).forEach(([key, value]) => {
            document.documentElement.style.setProperty(`--font-size-${key}`, value)
        })
        setSpecialty(specialty)
    }, [specialty, colors, typography, setSpecialty])

    return (
        <ConfigProvider
            value={{
                locale: locale,
                ...themeConfig,
            }}
        >
            {props.children}
        </ConfigProvider>
    )
}

export default Theme