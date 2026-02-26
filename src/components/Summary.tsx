import { User } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Summary() {
  return (
    <motion.section
      className="mb-20"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
        <span className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl flex items-center justify-center">
          <User className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
        </span>
        Professional Summary
      </h2>
      <div className="card bg-gradient-to-br from-indigo-50 to-white dark:from-slate-800 dark:to-slate-900 border-indigo-100 dark:border-indigo-900/20">
        <p className="text-lg lg:text-xl leading-relaxed text-slate-700 dark:text-slate-300">
          Seasoned Full-Stack Software Engineer with <span className="text-indigo-600 dark:text-indigo-400 font-semibold">6+ years of experience</span> building scalable web applications and backend services. Strong background in frontend and backend development, CI/CD automation, container orchestration, and distributed systems. Experienced in leading teams, improving deployment processes, and delivering production-grade applications across enterprise environments.
        </p>
      </div>
    </motion.section>
  )
}
