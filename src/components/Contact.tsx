export default function Contact() {
  return (
    <section id="contact">
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="badge bg-cyan-950 text-cyan-400 border border-cyan-800 mb-4">Contact</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Have questions about the gimbal robot simulation project, the control architecture,
            or potential collaboration? Reach out below.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="card border-slate-700 text-center">
            {/* Avatar placeholder */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center text-3xl font-bold text-white mx-auto mb-5">
              YM
            </div>

            <h3 className="text-white text-xl font-semibold mb-1">Yangyang Ma</h3>
            <p className="text-slate-400 text-sm mb-6">
              Student at Northwestern University · Robotics Intern · ROS 2 Simulation &amp; Control
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Email */}
              <a
                href="mailto:jordanma2028@u.northwestern.edu"
                className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg border border-slate-700 transition-colors text-sm"
              >
                <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                jordanma2028@u.northwestern.edu
              </a>

              {/* Phone */}
              <a
                href="tel:+14474460185"
                className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg border border-slate-700 transition-colors text-sm"
              >
                <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a2 2 0 011.94 1.515l.7 2.8a2 2 0 01-.515 1.9l-1.27 1.27a16 16 0 006.596 6.596l1.27-1.27a2 2 0 011.9-.515l2.8.7A2 2 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 (447) 446-0185
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/JordanMa0228/gimbal-robot-portfolio"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg border border-slate-700 transition-colors text-sm"
              >
                <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.468-2.381 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.12 3.176.77.84 1.232 1.91 1.232 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub Repository
              </a>
            </div>

            {/* Project info */}
            <div className="mt-8 pt-6 border-t border-slate-800">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Platform</div>
                  <div className="text-white text-sm font-medium">ROS 2 Humble</div>
                </div>
                <div>
                  <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Simulator</div>
                  <div className="text-white text-sm font-medium">Gazebo Classic</div>
                </div>
                <div>
                  <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Phase</div>
                  <div className="text-white text-sm font-medium">Simulation-first</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
