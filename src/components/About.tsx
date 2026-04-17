const inScope = [
  'Gazebo Classic simulation environment and robot model',
  'Differential-drive base motion via diff_drive_controller',
  'Odometry output and state feedback',
  'Gimbal trajectory control via JointTrajectoryController',
  'Autonomous tracking controller (camera + odom → cmd_vel_auto + joint_trajectory)',
  'Manual takeover mode with keyboard controller and mode mux',
  'Safety velocity filter (cmd_safe_vel) using LiDAR scan',
  'Convenience scripts: build.sh, setup_env.sh, run_sim.sh',
  'Custom Gazebo plugin: moving red-box target for repeatable tests',
];

const outOfScope = [
  'Hardware motor drivers (CAN/PWM)',
  'IMU-based gimbal stabilization on real hardware',
  'Real-world sensor calibration and latency tuning',
  'Full SLAM + global planning navigation stack',
  'Real camera hardware integration',
];

const keyFeatures = [
  {
    icon: '🎯',
    title: 'Autonomous Tracking',
    desc: 'Camera-based human tracking drives both base following velocity and gimbal aiming using PID control loops.',
  },
  {
    icon: '🛡️',
    title: 'Safety Pipeline',
    desc: 'cmd_safe_vel always sits between high-level commands and the drivetrain — both AUTO and MANUAL modes pass through the same safety gate.',
  },
  {
    icon: '🕹️',
    title: 'Manual Takeover',
    desc: 'Explicit mode-based arbitration lets operators override autonomous control at any time via keyboard, without fighting the autonomy node.',
  },
  {
    icon: '⚙️',
    title: 'ros2_control Integration',
    desc: 'Production-grade ros2_control stack: diff_drive_controller for the base + JointTrajectoryController for the 3-axis gimbal.',
  },
  {
    icon: '🔴',
    title: 'Custom Gazebo Plugin',
    desc: 'A custom red-box orbit plugin provides a deterministic, moving target for repeatable tracking experiments in Gazebo.',
  },
  {
    icon: '🚀',
    title: 'Hardware-Ready Interfaces',
    desc: 'Topic interfaces (/cmd_vel_auto, /control_mode, /gimbal_controller/joint_trajectory) are designed to survive the swap from simulated to real hardware controllers.',
  },
];

export default function About() {
  return (
    <section id="about" className="bg-slate-900/50 border-y border-slate-800">
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="badge bg-cyan-950 text-cyan-400 border border-cyan-800 mb-4">About</span>
          <h2 id="project-overview" className="section-title">Project Overview</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            An AI-powered autonomous robot cameraman — simulated in Gazebo Classic with ROS 2 Humble.
            The simulation-first approach establishes a complete control architecture before hardware integration.
          </p>
        </div>

        {/* Key features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {keyFeatures.map((f) => (
            <div key={f.title} className="card hover:border-slate-700 transition-colors">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Scope table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* In scope */}
          <div className="card border-green-900/50">
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
              In Scope — Simulation &amp; Control
            </h3>
            <ul className="space-y-2">
              {inScope.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                  <svg className="w-4 h-4 text-green-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Out of scope */}
          <div className="card border-slate-700/50">
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-500 inline-block" />
              Future Work — Hardware Phase
            </h3>
            <ul className="space-y-2">
              {outOfScope.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-500">
                  <svg className="w-4 h-4 text-slate-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 p-3 bg-slate-800/50 rounded-lg border border-slate-700">
              <p className="text-xs text-slate-500 leading-relaxed">
                💡 <strong className="text-slate-400">Design goal:</strong> topic interfaces are intentionally
                kept stable so hardware swap requires only controller-layer changes, not application-layer rewrites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
