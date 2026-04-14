import { useState, useEffect } from 'react';

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#architecture', label: 'Architecture' },
  { href: '#how-to-run', label: 'How to Run' },
  { href: '#troubleshooting', label: 'Troubleshooting' },
  { href: '#media', label: 'Media' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/95 backdrop-blur border-b border-slate-800 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="text-cyan-400 text-xl font-bold tracking-tight group-hover:text-cyan-300 transition-colors">
              GimbalBot
            </span>
            <span className="hidden sm:block text-slate-500 text-sm">Sim</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            className="md:hidden text-slate-400 hover:text-white transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-4 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link text-base" onClick={handleLink}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
