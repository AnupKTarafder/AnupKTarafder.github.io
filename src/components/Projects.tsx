import { ExternalLink, Github, Folder } from 'lucide-react'
import { motion } from 'framer-motion'

interface Project {
  title: string
  description: string
  tags: string[]
  github?: string
  demo?: string
  image?: string
}

const projects: Project[] = [
  {
    title: 'Enterprise Auditing System',
    description: 'A comprehensive auditing platform built with Angular and .NET Core, featuring dynamic forms and complex report generation.',
    tags: ['Angular', '.NET Core', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'Pixel Streaming Integration',
    description: 'Real-time Unreal Engine streaming in React apps using Epic Games Pixel Streaming library.',
    tags: ['React', 'Unreal Engine', 'WebRTC', 'Node.js'],
  },
  {
    title: 'Web3 NFT Marketplace',
    description: 'A decentralized application for minting and trading NFTs, integrated with smart contracts and Alchemy APIs.',
    tags: ['Next.js', 'Solidity', 'Web3.js', 'Tailwind CSS'],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Projects() {
  return (
    <section className="mb-20">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-3">
        <span className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl flex items-center justify-center">
          <Folder className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
        </span>
        Featured Projects
      </h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, idx) => (
          <motion.div key={idx} variants={item} className="card group flex flex-col h-full">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-wider font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
              {project.github && (
                <a href={project.github} className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              )}
              {project.demo && (
                <a href={project.demo} className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
