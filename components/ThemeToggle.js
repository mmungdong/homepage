'use client'
import { useThemeStore } from '@/store/theme-store'

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useThemeStore((state) => state)
  return (
    <button onClick={toggleTheme} className="p-2">
      {theme === 'dark' ? '🌙 暗黑模式' : '☀️ 亮色模式'}
    </button>
  )
}