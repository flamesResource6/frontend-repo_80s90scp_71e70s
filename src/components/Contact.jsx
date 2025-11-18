import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_50%_0%,rgba(99,102,241,0.12),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-28">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Contact</h2>
        <p className="text-blue-100/90 max-w-3xl">
          Let’s link up and make something wild, clean, and unforgettable.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <a href="mailto:your-email-here" className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-700/50 hover:border-blue-500/40 transition group">
              <Mail className="text-blue-300 group-hover:text-blue-400" size={20} />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-blue-100/70">your-email-here</p>
              </div>
            </a>
            <a href="tel:your-number-here" className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-700/50 hover:border-blue-500/40 transition group">
              <Phone className="text-blue-300 group-hover:text-blue-400" size={20} />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-blue-100/70">your-number-here</p>
              </div>
            </a>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-700/50">
              <MapPin className="text-blue-300" size={20} />
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-blue-100/70">Kigali, Rwanda</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-700/50">
            <p className="font-semibold mb-4">Socials</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <a href="#" className="flex items-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition">
                <Github size={18} /> <span>GitHub</span>
              </a>
              <a href="#" className="flex items-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition">
                <Linkedin size={18} /> <span>LinkedIn</span>
              </a>
              <a href="#" className="flex items-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition">
                <Twitter size={18} /> <span>X</span>
              </a>
              <a href="#" className="flex items-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition">
                <Instagram size={18} /> <span>Instagram</span>
              </a>
            </div>
            <p className="text-sm text-blue-200/70 mt-6">Whether you’re dreaming big, planning the next big launch, or just wanna collab — I’m one message away. Hit me up anytime. 🌟🔥</p>
          </div>
        </div>
      </div>
    </section>
  )
}
