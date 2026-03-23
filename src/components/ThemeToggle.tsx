import { Moon, Sun } from 'lucide-react'
import { useDarkMode } from '../hooks/useDarkMode'

export default function ThemeToggle() {
  const { isDark, toggle } = useDarkMode()

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="fixed right-6 top-6 z-50 rounded-full border border-slate-200 bg-white p-3 shadow-lg transition-transform hover:scale-110 active:scale-95 dark:border-slate-700 dark:bg-slate-800"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-primary-500" />
      ) : (
        <Moon className="h-5 w-5 text-primary-500" />
      )}
    </button>
  )
}
