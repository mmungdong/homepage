'use client';

import { useEffect } from 'react'
import { useThemeStore } from '../store/theme-store'

export default function ThemeProvider({ children }) {
  const setTheme = useThemeStore((state) => state.setTheme)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const theme = saved || (prefersDark ? 'dark' : 'light')
    setTheme(theme)
  }, [setTheme])

  return children
}
