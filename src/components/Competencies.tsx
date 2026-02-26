import { Award } from 'lucide-react'
import { motion } from 'framer-motion'

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors">
      {children}
    </span>
  )
}

export default function Competencies() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
        <span className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl flex items-center justify-center">
          <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
        </span>
        Core Competencies
      </h2>
      <div className="card">
        <div className="flex flex-wrap gap-2.5">
          <Pill>Agile Development</Pill>
          <Pill>Software Architecture</Pill>
          <Pill>Team Leadership</Pill>
          <Pill>Code Reviews</Pill>
          <Pill>Mentoring</Pill>
        </div>
      </div>
    </motion.section>
  )
}
