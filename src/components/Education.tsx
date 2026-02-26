import { Calendar, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Education() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
        <span className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl flex items-center justify-center">
          <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
        </span>
        Education
      </h2>
      <div className="card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 -mr-12 -mt-12 rounded-full" />
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">B.Sc. in Computer Science & Engineering</h3>
        <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-4">Rajshahi University of Engineering & Technology</p>
        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
          <Calendar className="w-4 h-4" />
          <span>Apr 2014 – Oct 2018 | Rajshahi, Bangladesh</span>
        </div>
      </div>
    </motion.section>
  )
}
