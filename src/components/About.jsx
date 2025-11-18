export default function About() {
  return (
    <section id="about" className="relative bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.15),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-28">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">About</h2>
        <p className="text-blue-100/90 text-lg md:text-xl leading-relaxed max-w-4xl">
          I’m a full‑stack web designer, web developer, and mobile app developer repping creativity and precision in every line of code.
          My world is a mix of artistry and engineering — UI/UX that feels alive, backends that breathe stability, and systems that speak fluently with data.
        </p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Full‑Stack Development',
              desc: 'Crafting smooth frontends + reliable backends.'
            },
            {
              title: 'Mobile App Development',
              desc: 'Apps that move with the user, not against them.'
            },
            {
              title: 'UI/UX Design',
              desc: 'Experiences that whisper ease and confidence.'
            },
            {
              title: 'Server & System Management',
              desc: 'Keeping the engine warm, secure, and blazing fast.'
            },
            {
              title: 'Quality Assurance',
              desc: 'Because only polished work gets my stamp.'
            },
            {
              title: 'Data Analysis & Management',
              desc: 'Turning numbers into narratives that guide decisions.'
            }
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-700/50 hover:border-blue-500/40 transition shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-blue-100/80">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-blue-100/80 max-w-4xl">
          Always learning. Always building. Always pushing the boundary a lil’ further.
          This craft ain’t just work — it’s the vibe, the journey, the legacy.
        </p>
      </div>
    </section>
  )
}
