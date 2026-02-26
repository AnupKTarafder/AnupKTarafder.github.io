import ThemeToggle from './components/ThemeToggle'
import Header from './components/Header'
import Summary from './components/Summary'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Competencies from './components/Competencies'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <ThemeToggle />
      <div className="max-w-5xl mx-auto px-4 py-12 lg:py-20">
        <Header />
        <Summary />
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
