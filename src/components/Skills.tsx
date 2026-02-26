import { Code, Database, Monitor, Server, Terminal, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 px-3 py-1.5 rounded-lg text-sm font-semibold border border-indigo-100 dark:border-indigo-900/50 hover:bg-indigo-600 hover:text-white transition-colors cursor-default">
      {children}
    </span>
  )
}

function Card({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="card group">
      <h3 className="font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3 text-lg">
        {icon}
        {title}
      </h3>
      <div className="flex flex-wrap gap-2.5">{children}</div>
    </div>
  )
}

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

export default function Skills() {
  return (
    <section className="mb-20">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-3">
        <span className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl flex items-center justify-center">
          <Code className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
        </span>
        Technical Skills
      </h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <motion.div variants={item}>
          <Card
            title="Frontend"
            icon={<Monitor className="w-5 h-5 text-indigo-500 group-hover:rotate-12 transition-transform" />}
          >
            <Tag>Angular 2+</Tag>
            <Tag>React / NextJS</Tag>
            <Tag>TypeScript</Tag>
            <Tag>SCSS / CSS3</Tag>
          </Card>
        </motion.div>
        <motion.div variants={item}>
          <Card
            title="Backend"
            icon={<Server className="w-5 h-5 text-indigo-500 group-hover:rotate-12 transition-transform" />}
          >
            <Tag>NodeJS / NestJS</Tag>
            <Tag>C# / .NET Core</Tag>
            <Tag>REST / GraphQL</Tag>
            <Tag>Microservices</Tag>
          </Card>
        </motion.div>
        <motion.div variants={item}>
          <Card
            title="DB & Messaging"
            icon={<Database className="w-5 h-5 text-indigo-500 group-hover:rotate-12 transition-transform" />}
          >
            <Tag>PostgreSQL</Tag>
            <Tag>MongoDB</Tag>
            <Tag>Redis</Tag>
            <Tag>RabbitMQ</Tag>
          </Card>
        </motion.div>
        <motion.div variants={item}>
          <Card
            title="DevOps & Tools"
            icon={<Terminal className="w-5 h-5 text-indigo-500 group-hover:rotate-12 transition-transform" />}
          >
            <Tag>Docker / Kubernetes</Tag>
            <Tag>OpenShift</Tag>
            <Tag>GitHub Actions</Tag>
            <Tag>Git / TFS</Tag>
          </Card>
        </motion.div>
        <motion.div variants={item}>
          <Card
            title="Specialized"
            icon={<Zap className="w-5 h-5 text-indigo-500 group-hover:rotate-12 transition-transform" />}
          >
            <Tag>Pixel Streaming</Tag>
            <Tag>Web3 / Alchemy</Tag>
            <Tag>Smart Contracts</Tag>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}
