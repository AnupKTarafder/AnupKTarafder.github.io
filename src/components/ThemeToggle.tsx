import { Moon, Sun } from 'lucide-react'
import { useDarkMode } from '../hooks/useDarkMode'

export default function ThemeToggle() {
  const { isDark, toggle } = useDarkMode()

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 hover:scale-110 transition-transform active:scale-95"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-indigo-500" />
      ) : (
        <Moon className="w-5 h-5 text-indigo-500" />
      )}
    </button>
  )
}
