const outcomes = [
  {
    icon: '✅',
    category: 'Architecture',
    title: 'End-to-end control pipeline validated',
    detail:
      'Camera → tracking controller → mux → safety filter → ros2_control base + gimbal — all nodes wired and verified in simulation.',
  },
  {
    icon: '🎯',
    category: 'Tracking',
    title: 'Autonomous follow behavior demonstrated',
    detail:
      'PID-driven heading control and follow-distance regulation keep the robot locked onto a moving target (red-box orbit) without manual intervention.',
  },
  {
    icon: '🛡️',
    category: 'Safety',
    title: 'Safety pipeline always active',
    detail:
      'cmd_safe_vel enforces speed/turn-rate limits and LiDAR-based obstacle slow/stop for both AUTO and MANUAL modes — no unsafe commands reach the drivetrain.',
  },
  {
    icon: '🕹️',
    category: 'Operability',
    title: 'Mode-based manual takeover',
    detail:
      'Operators can switch to MANUAL mode at any time via keyboard; the safety gate remains active and the system returns to AUTO cleanly.',
  },
  {
    icon: '🔩',
    category: 'Hardware-readiness',
    title: 'Stable topic interfaces for hardware swap',
    detail:
      'All inter-node interfaces (/cmd_vel_auto, /control_mode, /gimbal_controller/joint_trajectory) are decoupled from the simulation layer — swap ros2_control hardware interface only.',
  },
  {
    icon: '📐',
    category: 'Modularity',
    title: 'Reusable, independently testable nodes',
    detail:
      'Each node (tracker, mux, safety, controllers) has clearly scoped inputs/outputs, enabling individual testing and future replacement without full-stack rewrites.',
  },
];

const metrics = [
  { label: 'ROS 2 Nodes', value: '6+', sub: 'in simulation graph' },
  { label: 'Gimbal DOF', value: '3', sub: 'roll · pitch · yaw' },
  { label: 'Safety Gate', value: '100%', sub: 'AUTO + MANUAL' },
  { label: 'Target Speed', value: '0–2.5 m/s', sub: 'primary use case' },
];

export default function Outcomes() {
  return (
    <section id="outcomes">
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="badge bg-cyan-950 text-cyan-400 border border-cyan-800 mb-4">Outcomes</span>
          <h2 className="section-title">What Was Achieved</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Key results from the simulation phase — validated control architecture,
            tracking behavior, and safety guarantees.
          </p>
        </div>

        {/* Metrics bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {metrics.map((m) => (
            <div key={m.label} className="card text-center">
              <div className="text-3xl font-extrabold text-cyan-400 mb-1">{m.value}</div>
              <div className="text-white text-sm font-medium">{m.label}</div>
              <div className="text-slate-500 text-xs mt-0.5">{m.sub}</div>
            </div>
          ))}
        </div>

        {/* Outcome cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {outcomes.map((o) => (
            <div key={o.title} className="card hover:border-slate-700 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">{o.icon}</span>
                <div>
                  <span className="badge bg-slate-800 text-slate-500 border border-slate-700 mb-1.5">
                    {o.category}
                  </span>
                  <h3 className="text-white font-semibold text-sm leading-snug">{o.title}</h3>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{o.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
