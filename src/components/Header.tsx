import { Linkedin, Mail, MapPin, Phone } from 'lucide-react'

export default function Header() {
  return (
    <header className="mb-16 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-8">
      <div className="flex-1">
        <h1 className="text-4xl lg:text-7xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
          Anup K. <span className="gradient-text">Tarafder</span>
        </h1>
        <p className="text-xl lg:text-3xl text-indigo-600 dark:text-indigo-400 font-semibold tracking-tight">
          Full-Stack Software Engineer
        </p>
        <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
            <MapPin className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-medium">Kuala Lumpur, Malaysia</span>
          </div>
          <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
            <Phone className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-medium">+60103637635</span>
          </div>
          <a
            href="mailto:anup.k.tarafder@gmail.com"
            className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 dark:hover:border-indigo-800 transition-all group"
          >
            <Mail className="w-4 h-4 text-indigo-500 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">anup.k.tarafder@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/anupktarafder/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 dark:hover:border-indigo-800 transition-all group"
          >
            <Linkedin className="w-4 h-4 text-indigo-500 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
        </div>
      </div>
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative w-40 h-40 bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-200 dark:shadow-none lg:rotate-3 group-hover:rotate-0 transition-transform duration-500 border-2 border-white dark:border-slate-700">
          <img
            src="/images/profile.jpg"
            alt="Anup K. Tarafder"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
              target.parentElement!.innerHTML = '<div class="w-full h-full bg-indigo-600 text-white flex items-center justify-center text-4xl font-bold">AT</div>'
            }}
          />
        </div>
      </div>
    </header>
  )
}
