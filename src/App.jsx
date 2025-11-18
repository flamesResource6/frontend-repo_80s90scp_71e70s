import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Nav />
      <Hero />
      <About />
      <Work />
      <Contact />
      <footer className="border-t border-white/10 text-center text-blue-200/70 py-6">
        © {new Date().getFullYear()} Shimo · Built with vibes
      </footer>
    </div>
  )
}

export default App
