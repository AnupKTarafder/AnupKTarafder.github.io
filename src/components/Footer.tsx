import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      className="text-center text-slate-500 dark:text-slate-400 text-sm pb-12 border-t border-slate-200 dark:border-slate-800 pt-12"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <p>
        © 2026 Anup K. Tarafder. Built with <span className="text-red-500">❤️</span> using React, Vite, Tailwind CSS & Lucide.
      </p>
    </motion.footer>
  )
}
