import { useEffect, useState } from 'react'

export type ColorTheme = 'indigo' | 'emerald' | 'rose'

const THEME_KEY = 'color-theme'
const VALID_THEMES: ColorTheme[] = ['indigo', 'emerald', 'rose']

function getInitialTheme(): ColorTheme {
  if (typeof window === 'undefined') return 'indigo'
  const stored = localStorage.getItem(THEME_KEY)
  if (stored && VALID_THEMES.includes(stored as ColorTheme)) {
    return stored as ColorTheme
  }
  return 'indigo'
}

export function useColorTheme() {
  const [theme, setTheme] = useState<ColorTheme>(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement

    // Remove all theme classes
    VALID_THEMES.forEach((t) => root.classList.remove(`theme-${t}`))

    // Add current theme class
    root.classList.add(`theme-${theme}`)

    // Persist
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  return { theme, setTheme }
}
