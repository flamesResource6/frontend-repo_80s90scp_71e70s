import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden">
      {/* 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient and noise overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/70 to-slate-950" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 md:pt-32">
        <p className="text-blue-300/90 text-sm md:text-base tracking-widest uppercase mb-4">Portfolio · Full‑Stack · Mobile</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
          Hey, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">Arakaze Shimo B Arnaud</span> — but you can call me <span className="italic">Shimo</span>.
        </h1>
        <p className="max-w-3xl text-lg md:text-xl text-blue-100/90 leading-relaxed">
          A full‑stack craftsperson, weaving web magic from front to back, shaping mobile dreams into reality,
          and tuning servers like cosmic engines humming in the night. I build experiences that hit different —
          clean, bold, intuitive. From sleek UIs to rock‑solid APIs. From pixel‑perfect screens to scalable backends ready to fly.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#work" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/20 transition">
            Explore the work <ArrowRight size={18} />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur border border-white/20 transition">
            Let’s build together
          </a>
        </div>

        <p className="mt-8 text-blue-200/90">Slide in and vibe with the work. Let’s build the future, one fire project at a time. 🚀✨</p>
      </div>
    </section>
  )
}
