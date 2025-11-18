import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#work', label: 'Work' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-30">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-white font-semibold text-lg">SHIMO</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-blue-100/90">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-white transition">{l.label}</a>
          ))}
        </nav>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-slate-900/90 backdrop-blur border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-blue-100/90">{l.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
