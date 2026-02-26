import { Briefcase, Check, ChevronRight, Layers, Users, Video } from 'lucide-react'
import { motion } from 'framer-motion'

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="text-indigo-500 dark:text-indigo-400 font-bold mt-1">
        <ChevronRight className="w-4 h-4" />
      </span>
      <span className="text-slate-600 dark:text-slate-400">{children}</span>
    </li>
  )
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
}

export default function Experience() {
  return (
    <section className="mb-20">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-3">
        <span className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl flex items-center justify-center">
          <Briefcase className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
        </span>
        Work Experience
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-12"
      >
        {/* Inscale Asia */}
        <motion.div variants={item} className="flex gap-4 md:gap-8 group">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-indigo-200 dark:shadow-none z-10">
              <Check className="w-6 h-6" />
            </div>
            <div className="w-0.5 h-full bg-slate-200 dark:bg-slate-800 mt-2" />
          </div>
          <div className="card flex-1 -mt-1 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 -mr-16 -mt-16 rounded-full" />
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-3">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Full-Stack Developer</h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-lg">Inscale Asia Sdn Bhd (Assigned to SEB)</p>
              </div>
              <time className="text-sm font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-4 py-1.5 rounded-full w-fit border border-indigo-100 dark:border-indigo-900">Sep 2024 – Present</time>
            </div>
            <ul className="space-y-3 list-none">
              <Bullet>Designed and maintained CI/CD pipelines using GitHub Actions, TFS, Kubernetes, and Red Hat OpenShift.</Bullet>
              <Bullet>Led migration of production applications from Kubernetes to OpenShift, ensuring zero-downtime transition.</Bullet>
              <Bullet>Improved deployment speed and release consistency across multiple services.</Bullet>
              <Bullet>Collaborated with cross-functional teams to enhance build automation and environment stability.</Bullet>
            </ul>
          </div>
        </motion.div>

        {/* Eagle 3D */}
        <motion.div variants={item} className="flex gap-4 md:gap-8 group">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 z-10">
              <Video className="w-6 h-6" />
            </div>
            <div className="w-0.5 h-full bg-slate-200 dark:bg-slate-800 mt-2" />
          </div>
          <div className="card flex-1 -mt-1 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-500/5 -mr-16 -mt-16 rounded-full" />
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-3">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Front-End Developer</h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-lg">Eagle 3D Streaming, Texas (Remote)</p>
              </div>
              <time className="text-sm font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-4 py-1.5 rounded-full w-fit">Aug 2023 – Sep 2024</time>
            </div>
            <ul className="space-y-3 list-none">
              <Bullet>Integrated Pixel Streaming library into React applications for real-time Unreal Engine streaming.</Bullet>
              <Bullet>Collaborated with Unreal Engine developers to implement custom streaming features.</Bullet>
              <Bullet>Developed scalable backend APIs using NestJS and ExpressJS.</Bullet>
            </ul>
          </div>
        </motion.div>

        {/* LiquidX */}
        <motion.div variants={item} className="flex gap-4 md:gap-8 group">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 z-10">
              <Layers className="w-6 h-6" />
            </div>
            <div className="w-0.5 h-full bg-slate-200 dark:bg-slate-800 mt-2" />
          </div>
          <div className="card flex-1 -mt-1 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-500/5 -mr-16 -mt-16 rounded-full" />
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-3">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Software Engineer (Full-Stack)</h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-lg">LiquidX Studio, Singapore (Remote)</p>
              </div>
              <time className="text-sm font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-4 py-1.5 rounded-full w-fit">Nov 2022 – Aug 2023</time>
            </div>
            <ul className="space-y-3 list-none">
              <Bullet>Designed and developed scalable backend APIs using NestJS.</Bullet>
              <Bullet>Implemented unit testing with Jest, achieving 95% test coverage.</Bullet>
              <Bullet>Integrated Web3 functionality using Alchemy APIs and smart contracts.</Bullet>
            </ul>
          </div>
        </motion.div>

        {/* SELISE */}
        <motion.div variants={item} className="flex gap-4 md:gap-8 group">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 z-10">
              <Users className="w-6 h-6" />
            </div>
          </div>
          <div className="card flex-1 -mt-1 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-500/5 -mr-16 -mt-16 rounded-full" />
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-3">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Software Engineer → Team Lead</h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-lg">SELISE Digital Platforms, Dhaka</p>
              </div>
              <time className="text-sm font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-4 py-1.5 rounded-full w-fit">Jan 2019 – Nov 2022</time>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-slate-100 dark:border-slate-800 pl-4 group/item">
                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-lg group-hover/item:text-indigo-600 dark:group-hover/item:text-indigo-400 transition-colors">Team Lead (Nov 2021 – Nov 2022)</h4>
                <p className="text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">Led a team of 5 developers. Owned sprint planning, task distribution, and technical architecture decisions.</p>
              </div>
              <div className="border-l-4 border-slate-100 dark:border-slate-800 pl-4 group/item">
                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-lg group-hover/item:text-indigo-600 dark:group-hover/item:text-indigo-400 transition-colors">Full-Stack Developer (Jun 2020 – Nov 2021)</h4>
                <p className="text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">Developed enterprise auditing applications using Angular and .NET Core.</p>
              </div>
              <div className="border-l-4 border-slate-100 dark:border-slate-800 pl-4 group/item">
                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-lg group-hover/item:text-indigo-600 dark:group-hover/item:text-indigo-400 transition-colors">Front-End Developer (Jan 2019 – May 2020)</h4>
                <p className="text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">Built enterprise web applications using Angular 7+, Material, and RxJS.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
