import { motion, useScroll, useSpring } from 'framer-motion'
import {
  Briefcase,
  Calendar,
  Check,
  ChevronRight,
  Code,
  Folder,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  User,
  Award,
  Shield,
  Target,
  Globe,
  Monitor,
  Server,
  Database,
  Terminal,
  Users,
  Cloud,
  Activity,
  Workflow,
  Container,
} from 'lucide-react'
import type { ResumeVersion } from '../data/resumeVersions'
import { sharedEducation } from '../data/resumeVersions'
import ThemeToggle from '../components/ThemeToggle'
import VersionSwitcher from '../components/VersionSwitcher'

// Icon map for dynamic skill icons
const iconMap: Record<string, React.ReactNode> = {
  Monitor: (
    <Monitor className="h-5 w-5 text-indigo-500 transition-transform group-hover:rotate-12" />
  ),
  Server: (
    <Server className="h-5 w-5 text-indigo-500 transition-transform group-hover:rotate-12" />
  ),
  Database: (
    <Database className="h-5 w-5 text-indigo-500 transition-transform group-hover:rotate-12" />
  ),
  Terminal: (
    <Terminal className="h-5 w-5 text-indigo-500 transition-transform group-hover:rotate-12" />
  ),
  Users: (
    <Users className="h-5 w-5 text-indigo-500 transition-transform group-hover:rotate-12" />
  ),
  Cloud: (
    <Cloud className="h-5 w-5 text-indigo-500 transition-transform group-hover:rotate-12" />
  ),
  Activity: (
    <Activity className="h-5 w-5 text-indigo-500 transition-transform group-hover:rotate-12" />
  ),
  Workflow: (
    <Workflow className="h-5 w-5 text-indigo-500 transition-transform group-hover:rotate-12" />
  ),
  Container: (
    <Container className="h-5 w-5 text-indigo-500 transition-transform group-hover:rotate-12" />
  ),
  Shield: (
    <Shield className="h-5 w-5 text-indigo-500 transition-transform group-hover:rotate-12" />
  ),
}

const yearsOfExperience = new Date().getFullYear() - 2019

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-1 font-bold text-indigo-500 dark:text-indigo-400">
        <ChevronRight className="h-4 w-4" />
      </span>
      <span className="text-slate-600 dark:text-slate-400">{children}</span>
    </li>
  )
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="cursor-default rounded-lg border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-sm font-semibold text-indigo-700 transition-colors hover:bg-indigo-600 hover:text-white dark:border-indigo-900/50 dark:bg-indigo-950/50 dark:text-indigo-300">
      {children}
    </span>
  )
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:border-indigo-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-indigo-700">
      {children}
    </span>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
}

const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const gridItemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

interface Props {
  data: ResumeVersion
}

export default function ResumePage({ data }: Props) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const summary = data.summary.replace('{years}', String(yearsOfExperience))

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[40%] w-[40%] animate-pulse rounded-full bg-indigo-500/10 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] h-[40%] w-[40%] animate-pulse rounded-full bg-violet-500/10 blur-[120px] delay-700"></div>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-indigo-600 to-violet-600"
        style={{ scaleX }}
      />

      <ThemeToggle />

      <div className="mx-auto max-w-5xl px-4 py-12 lg:py-20">
        {/* Version Switcher */}
        <VersionSwitcher />

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left"
        >
          <div className="flex-1">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white lg:text-7xl">
              Anup K. <span className="gradient-text">Tarafder</span>
            </h1>
            <p className="text-xl font-semibold tracking-tight text-indigo-600 dark:text-indigo-400 lg:text-3xl">
              {data.title}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-slate-600 dark:text-slate-400 lg:justify-start">
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                <MapPin className="h-4 w-4 text-indigo-500" />
                <span className="text-sm font-medium">
                  Kuala Lumpur, Malaysia
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                <Phone className="h-4 w-4 text-indigo-500" />
                <span className="text-sm font-medium">+60103637635</span>
              </div>
              <a
                href="mailto:anup.k.tarafder@gmail.com"
                className="group flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm transition-all hover:border-indigo-200 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-indigo-800 dark:hover:text-indigo-400"
              >
                <Mail className="h-4 w-4 text-indigo-500 transition-transform group-hover:scale-110" />
                <span className="text-sm font-medium">
                  anup.k.tarafder@gmail.com
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/anupktarafder/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm transition-all hover:border-indigo-200 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-indigo-800 dark:hover:text-indigo-400"
              >
                <Linkedin className="h-4 w-4 text-indigo-500 transition-transform group-hover:scale-110" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="group relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 opacity-25 blur transition duration-1000 group-hover:opacity-50 group-hover:duration-200"></div>
            <div className="relative h-40 w-40 overflow-hidden rounded-2xl border-2 border-white bg-white shadow-2xl shadow-indigo-200 transition-transform duration-500 group-hover:rotate-0 dark:border-slate-700 dark:bg-slate-800 dark:shadow-none lg:rotate-3">
              <img
                src="/images/profile.jpg"
                alt="Anup K. Tarafder"
                className="h-full w-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  target.parentElement!.innerHTML =
                    '<div class="w-full h-full bg-indigo-600 text-white flex items-center justify-center text-4xl font-bold">AT</div>'
                }}
              />
            </div>
          </div>
        </motion.header>

        {/* Positioning Statement / Summary */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900/50">
              <User className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            </span>
            Professional Summary
          </h2>
          <div className="card border-indigo-100 bg-gradient-to-br from-indigo-50 to-white dark:border-indigo-900/20 dark:from-slate-800 dark:to-slate-900">
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 lg:text-xl">
              {summary}
            </p>
          </div>
        </motion.section>

        {/* Target Roles */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900/50">
              <Target className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            </span>
            Target Roles
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {data.targetRoles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 dark:border-indigo-900/50 dark:bg-indigo-950/50 dark:text-indigo-300"
              >
                {role}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Featured Projects */}
        <section className="mb-20">
          <h2 className="mb-10 flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900/50">
              <Folder className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            </span>
            Featured Projects
          </h2>
          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {data.projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={gridItemVariants}
                className="card group flex h-full flex-col"
              >
                <div className="flex-1">
                  <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                    {project.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-indigo-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Work Experience */}
        <section className="mb-20">
          <h2 className="mb-10 flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900/50">
              <Briefcase className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            </span>
            Work Experience
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-12"
          >
            {data.experience.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group flex gap-4 md:gap-8"
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full shadow-lg ${
                      exp.isCurrent
                        ? 'bg-indigo-600 text-white shadow-indigo-200 dark:shadow-none'
                        : 'bg-slate-200 text-slate-500 transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white dark:bg-slate-800 dark:text-slate-400'
                    }`}
                  >
                    {exp.isCurrent ? (
                      <Check className="h-6 w-6" />
                    ) : (
                      <Briefcase className="h-6 w-6" />
                    )}
                  </div>
                  {idx < data.experience.length - 1 && (
                    <div className="mt-2 h-full w-0.5 bg-slate-200 dark:bg-slate-800" />
                  )}
                </div>
                <div className="card relative -mt-1 flex-1 overflow-hidden">
                  <div className="absolute right-0 top-0 -mr-16 -mt-16 h-32 w-32 rounded-full bg-indigo-500/5" />
                  <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {exp.jobTitle}
                      </h3>
                      <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                        {exp.company}
                      </p>
                    </div>
                    <time
                      className={`w-fit rounded-full px-4 py-1.5 text-sm font-bold ${
                        exp.isCurrent
                          ? 'border border-indigo-100 bg-indigo-50 text-indigo-600 dark:border-indigo-900 dark:bg-indigo-950 dark:text-indigo-400'
                          : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'
                      }`}
                    >
                      {exp.period}
                    </time>
                  </div>
                  {exp.bullets.length > 0 && (
                    <ul className="list-none space-y-3">
                      {exp.bullets.map((bullet, bIdx) => (
                        <Bullet key={bIdx}>{bullet}</Bullet>
                      ))}
                    </ul>
                  )}
                  {exp.subRoles && (
                    <div className="space-y-6">
                      {exp.subRoles.map((role, rIdx) => (
                        <div
                          key={rIdx}
                          className="group/item border-l-4 border-slate-100 pl-4 dark:border-slate-800"
                        >
                          <h4 className="text-lg font-bold text-slate-800 transition-colors group-hover/item:text-indigo-600 dark:text-slate-200 dark:group-hover/item:text-indigo-400">
                            {role.title}
                          </h4>
                          <p className="mt-2 leading-relaxed text-slate-600 dark:text-slate-400">
                            {role.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Technical Skills */}
        <section className="mb-20">
          <h2 className="mb-10 flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900/50">
              <Code className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            </span>
            Technical Skills
          </h2>
          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {data.skills.map((skill, idx) => (
              <motion.div key={idx} variants={gridItemVariants}>
                <div className="card group">
                  <h3 className="mb-6 flex items-center gap-3 text-lg font-bold text-slate-900 dark:text-white">
                    {iconMap[skill.icon] || (
                      <Code className="h-5 w-5 text-indigo-500 transition-transform group-hover:rotate-12" />
                    )}
                    {skill.title}
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {skill.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Education + Competencies row */}
        <div className="mb-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Education */}
          <motion.section
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900/50">
                <GraduationCap className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              </span>
              Education
            </h2>
            <div className="card relative overflow-hidden">
              <div className="absolute right-0 top-0 -mr-12 -mt-12 h-24 w-24 rounded-full bg-indigo-500/5" />
              <h3 className="mb-2 text-xl font-bold leading-tight text-slate-900 dark:text-white">
                {sharedEducation.degree}
              </h3>
              <p className="mb-4 font-semibold text-indigo-600 dark:text-indigo-400">
                {sharedEducation.institution}
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                <Calendar className="h-4 w-4" />
                <span>
                  {sharedEducation.period} | {sharedEducation.location}
                </span>
              </div>
            </div>
          </motion.section>

          {/* Core Competencies */}
          <motion.section
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900/50">
                <Award className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              </span>
              Core Competencies
            </h2>
            <div className="card">
              <div className="flex flex-wrap gap-2.5">
                {data.competencies.map((comp) => (
                  <Pill key={comp}>{comp}</Pill>
                ))}
              </div>
            </div>
          </motion.section>
        </div>

        {/* Certifications — gated by VITE_SHOW_CERTIFICATIONS */}
        {import.meta.env.VITE_SHOW_CERTIFICATIONS === 'true' && (
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900/50">
                <Shield className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              </span>
              Certifications
            </h2>
            <div className="card">
              <ul className="list-none space-y-3">
                {data.certifications.map((cert) => (
                  <Bullet key={cert}>{cert}</Bullet>
                ))}
              </ul>
            </div>
          </motion.section>
        )}

        {/* Migration Readiness */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900/50">
              <Globe className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            </span>
            Relocation Readiness
          </h2>
          <div className="card">
            <ul className="list-none space-y-3">
              {data.migrationReadiness.map((item) => (
                <Bullet key={item}>{item}</Bullet>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          className="border-t border-slate-200 pb-12 pt-12 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p>
            © 2026 Anup K. Tarafder. Built with{' '}
            <span className="text-red-500">&#10084;&#65039;</span> using React,
            Vite, Tailwind CSS & Lucide.
          </p>
        </motion.footer>
      </div>
    </div>
  )
}
