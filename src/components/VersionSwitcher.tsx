import { useNavigate, useLocation } from 'react-router-dom'
import { resumeVersions } from '../data/resumeVersions'

export default function VersionSwitcher() {
  const navigate = useNavigate()
  const location = useLocation()

  const currentPath = location.pathname === '' ? '/' : location.pathname

  return (
    <div className="mb-12">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        Resume Version
      </p>
      <div className="flex flex-wrap gap-2">
        {resumeVersions.map((version) => {
          const isActive = currentPath === version.route
          return (
            <button
              key={version.id}
              onClick={() => navigate(version.route)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? 'border-indigo-600 bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-none'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-indigo-700 dark:hover:text-indigo-400'
              }`}
            >
              {version.shortLabel}
            </button>
          )
        })}
      </div>
    </div>
  )
}
