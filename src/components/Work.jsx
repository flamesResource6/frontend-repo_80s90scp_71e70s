export default function Work() {
  const projects = [
    {
      title: 'Sleek SaaS Dashboard',
      desc: 'Responsive UI with role‑based auth, charts, and real‑time data sync.',
      tags: ['React', 'FastAPI', 'Tailwind']
    },
    {
      title: 'Mobile Finance App',
      desc: 'Clean flows, biometrics auth, and offline‑first sync.',
      tags: ['React Native', 'TypeScript']
    },
    {
      title: 'E‑commerce Platform',
      desc: 'Scalable backend, blazing product search, and secure checkout.',
      tags: ['Next.js', 'MongoDB', 'Stripe']
    }
  ]

  return (
    <section id="work" className="relative bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(14,165,233,0.12),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-28">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Selected Work</h2>
        <p className="text-blue-100/90 max-w-3xl mb-10">A taste of builds across web, mobile, and backend engineering.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group p-6 rounded-2xl bg-slate-900/60 border border-slate-700/50 hover:border-blue-500/40 transition shadow-lg">
              <div className="h-36 rounded-xl mb-4 bg-gradient-to-br from-slate-700 to-slate-800 group-hover:from-slate-600 group-hover:to-slate-800 transition" />
              <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
              <p className="text-blue-100/80 mb-3">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="px-2 py-1 rounded-md text-xs bg-white/10 border border-white/10">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
