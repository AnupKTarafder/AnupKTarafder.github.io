import { Palette } from 'lucide-react'
import { useColorTheme, type ColorTheme } from '../hooks/useColorTheme'

const themes: { id: ColorTheme; label: string; swatch: string }[] = [
  { id: 'indigo', label: 'Indigo', swatch: '#6366f1' },
  { id: 'emerald', label: 'Emerald', swatch: '#10b981' },
  { id: 'rose', label: 'Rose', swatch: '#f43f5e' },
]

export default function ColorThemeSwitcher() {
  const { theme, setTheme } = useColorTheme()

  return (
    <div className="fixed right-6 top-20 z-50 flex flex-col items-center gap-2 rounded-full border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-700 dark:bg-slate-800">
      <Palette className="h-4 w-4 text-slate-400" />
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          aria-label={`Switch to ${t.label} theme`}
          title={t.label}
          className={`h-5 w-5 rounded-full border-2 transition-transform hover:scale-125 ${
            theme === t.id
              ? 'scale-110 border-slate-900 dark:border-white'
              : 'border-transparent'
          }`}
          style={{ backgroundColor: t.swatch }}
        />
      ))}
    </div>
  )
}
