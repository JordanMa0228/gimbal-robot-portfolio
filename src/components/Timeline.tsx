const milestones = [
  {
    date: 'Feb 2026',
    phase: 'Kickoff',
    color: 'cyan',
    items: [
      'Project scoping: simulation-first, hardware TBD',
      'Reviewed concept spec (3-axis gimbal, differential drive, AI tracking)',
      'Selected ROS 2 Humble + Gazebo Classic as simulation platform',
    ],
  },
  {
    date: 'Feb 2026',
    phase: 'Robot Modelling',
    color: 'blue',
    items: [
      'Authored URDF/Xacro robot description (base + 3-axis gimbal)',
      'Configured ros2_control hardware interfaces for simulation',
      'Validated differential drive kinematics in Gazebo',
    ],
  },
  {
    date: 'Feb–Mar 2026',
    phase: 'Control Architecture',
    color: 'purple',
    items: [
      'Implemented diff_drive_controller + JointTrajectoryController setup',
      'Built cmd_vel_mux for AUTO / MANUAL mode arbitration',
      'Built cmd_safe_vel safety filter (LiDAR-based limits & obstacle avoidance)',
      'Verified mux → safety → controller pipeline end-to-end',
    ],
  },
  {
    date: 'Mar 2026',
    phase: 'Tracking Controller',
    color: 'green',
    items: [
      'Implemented gimbal_tracking_controller (camera → PID → cmd_vel_auto + joint_trajectory)',
      'Tuned heading PID (angular velocity) and follow-distance PI (linear velocity)',
      'Added custom Gazebo plugin (red-box orbit) for repeatable tracking tests',
    ],
  },
  {
    date: 'Mar–Apr 2026',
    phase: 'Integration & Testing',
    color: 'yellow',
    items: [
      'Integrated all nodes via sim.launch.py with correct startup sequencing',
      'Manual takeover keyboard node validated against safety pipeline',
      'End-to-end tracking loop verified in simulation',
    ],
  },
  {
    date: 'Apr 2026',
    phase: 'Portfolio & Handoff',
    color: 'slate',
    items: [
      'Documentation and architecture write-up',
      'NDA-safe portfolio site (this page)',
      'Handoff notes for future hardware integration phase',
    ],
  },
];

type ColorKey = 'cyan' | 'blue' | 'purple' | 'green' | 'yellow' | 'slate';

const colorMap: Record<ColorKey, { border: string; bg: string; text: string }> = {
  cyan:   { border: 'border-cyan-700',   bg: 'bg-cyan-950/30',   text: 'text-cyan-300'   },
  blue:   { border: 'border-blue-700',   bg: 'bg-blue-950/30',   text: 'text-blue-300'   },
  purple: { border: 'border-purple-700', bg: 'bg-purple-950/30', text: 'text-purple-300' },
  green:  { border: 'border-green-700',  bg: 'bg-green-950/30',  text: 'text-green-300'  },
  yellow: { border: 'border-yellow-700', bg: 'bg-yellow-950/30', text: 'text-yellow-300' },
  slate:  { border: 'border-slate-600',  bg: 'bg-slate-800/40',  text: 'text-slate-300'  },
};

const dotMap: Record<string, string> = {
  cyan:   'bg-cyan-500',
  blue:   'bg-blue-500',
  purple: 'bg-purple-500',
  green:  'bg-green-500',
  yellow: 'bg-yellow-500',
  slate:  'bg-slate-500',
};

export default function Timeline() {
  return (
    <section id="timeline" className="bg-slate-900/50 border-y border-slate-800">
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="badge bg-cyan-950 text-cyan-400 border border-cyan-800 mb-4">Timeline</span>
          <h2 className="section-title">Project Timeline</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Key milestones from project kickoff through simulation integration — simulation phase only.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-800 hidden sm:block" />

          <div className="space-y-8">
            {milestones.map((m) => {
              const style = colorMap[m.color as ColorKey] ?? colorMap.slate;
              const dot   = dotMap[m.color]   ?? dotMap.slate;
              return (
                <div key={m.phase} className="flex gap-6 sm:gap-8">
                  {/* Dot */}
                  <div className="hidden sm:flex flex-col items-center shrink-0 w-10">
                    <div className={`w-4 h-4 rounded-full ${dot} ring-4 ring-slate-950 mt-1 z-10`} />
                  </div>

                  {/* Card */}
                  <div className={`flex-1 rounded-xl border p-5 ${style.border} ${style.bg}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                      <span className={`text-xs font-mono font-semibold ${style.text}`}>
                        {m.date}
                      </span>
                      <span className="hidden sm:inline text-slate-600">·</span>
                      <h3 className="text-white font-semibold">{m.phase}</h3>
                    </div>
                    <ul className="space-y-1.5">
                      {m.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                          <svg className="w-4 h-4 text-slate-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 p-4 bg-blue-950/20 border border-blue-900/40 rounded-xl text-center">
          <p className="text-blue-300 text-sm">
            🔮 <strong>Next phase (hardware):</strong> motor driver integration, IMU stabilization, real camera pipeline,
            and full calibration. Timeline TBD pending hardware availability.
          </p>
        </div>
      </div>
    </section>
  );
}
