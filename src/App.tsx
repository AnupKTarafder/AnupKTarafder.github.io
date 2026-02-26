import { motion, useScroll, useSpring } from 'framer-motion'
import ThemeToggle from './components/ThemeToggle'
import Header from './components/Header'
import Summary from './components/Summary'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Competencies from './components/Competencies'
import Footer from './components/Footer'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-violet-500/10 blur-[120px] animate-pulse delay-700"></div>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-violet-600 origin-left z-50"
        style={{ scaleX }}
      />

      <ThemeToggle />
      <div className="max-w-5xl mx-auto px-4 py-12 lg:py-20">
        <Header />
        <Summary />
        <Projects />
        <Experience />
        <Skills />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <Education />
          <Competencies />
        </div>
        <Footer />
      </div>
    </div>
  )
}
