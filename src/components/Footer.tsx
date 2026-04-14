export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & tagline */}
          <div className="text-center md:text-left">
            <div className="text-cyan-400 font-bold text-lg mb-1">GimbalBot Sim</div>
            <p className="text-slate-500 text-sm">
              Autonomous Ground Gimbal Robot — ROS 2 Humble + Gazebo Classic
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {[
              { href: '#hero', label: 'Home' },
              { href: '#about', label: 'About' },
              { href: '#architecture', label: 'Architecture' },
              { href: '#timeline', label: 'Timeline' },
              { href: '#outcomes', label: 'Outcomes' },
              { href: '#nda-guardrails', label: 'NDA Safe' },
              { href: '#contact', label: 'Contact' },
            ].map((l) => (
              <a key={l.href} href={l.href} className="text-slate-500 hover:text-cyan-400 transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-600">
          © {year} Jordan Ma · Internship Project ·{' '}
          <a
            href="https://github.com/JordanMa0228/gimbal-robot-portfolio"
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-400 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
