function NodeBox({
  title,
  color,
  pubs,
  subs,
}: {
  title: string;
  color: string;
  pubs?: string[];
  subs?: string[];
}) {
  const colorMap: Record<string, string> = {
    cyan: 'border-cyan-700 bg-cyan-950/40',
    blue: 'border-blue-700 bg-blue-950/40',
    purple: 'border-purple-700 bg-purple-950/40',
    green: 'border-green-700 bg-green-950/40',
    orange: 'border-orange-700 bg-orange-950/40',
    red: 'border-red-700 bg-red-950/40',
    slate: 'border-slate-600 bg-slate-800/60',
  };

  const titleMap: Record<string, string> = {
    cyan: 'text-cyan-300',
    blue: 'text-blue-300',
    purple: 'text-purple-300',
    green: 'text-green-300',
    orange: 'text-orange-300',
    red: 'text-red-300',
    slate: 'text-slate-300',
  };

  return (
    <div className={`rounded-xl border p-4 text-sm ${colorMap[color] ?? colorMap.slate}`}>
      <div className={`font-mono font-semibold mb-3 ${titleMap[color] ?? titleMap.slate}`}>{title}</div>
      {subs && subs.length > 0 && (
        <div className="mb-2">
          <span className="text-xs text-slate-500 uppercase tracking-wider">sub</span>
          <ul className="mt-1 space-y-1">
            {subs.map((s) => (
              <li key={s} className="text-slate-400 font-mono text-xs flex items-center gap-1">
                <span className="text-green-500">↓</span> {s}
              </li>
            ))}
          </ul>
        </div>
      )}
      {pubs && pubs.length > 0 && (
        <div>
          <span className="text-xs text-slate-500 uppercase tracking-wider">pub</span>
          <ul className="mt-1 space-y-1">
            {pubs.map((p) => (
              <li key={p} className="text-slate-400 font-mono text-xs flex items-center gap-1">
                <span className="text-blue-400">↑</span> {p}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Arrow({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-1">
      <svg className="w-5 h-8 text-slate-600" fill="none" viewBox="0 0 20 32">
        <line x1="10" y1="0" x2="10" y2="26" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
        <path d="M5 22 L10 30 L15 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
      {label && <span className="text-xs text-slate-600 font-mono -mt-1">{label}</span>}
    </div>
  );
}

const pipelineSteps = [
  {
    label: 'Camera',
    desc: '/camera/camera/image_raw',
    color: 'slate' as const,
    arrow: '/camera/camera/image_raw (Image)',
  },
  {
    label: 'gimbal_tracking_controller',
    desc: 'Autonomous tracking brain — camera + odom → cmd_vel_auto + joint_trajectory',
    color: 'cyan' as const,
    arrow: '/cmd_vel_auto (Twist) · /gimbal_controller/joint_trajectory',
  },
  {
    label: 'cmd_vel_mux',
    desc: 'Mode arbitration — selects AUTO or MANUAL based on /control_mode',
    color: 'blue' as const,
    arrow: '/cmd_vel_raw (Twist)',
  },
  {
    label: 'cmd_safe_vel',
    desc: 'Safety filter — LiDAR-based limits & obstacle avoidance',
    color: 'orange' as const,
    arrow: '/diff_drive_controller/cmd_vel_unstamped (Twist)',
  },
  {
    label: 'diff_drive_controller',
    desc: 'ros2_control — drives wheel joints, publishes /diff_drive_controller/odom',
    color: 'green' as const,
    arrow: null,
  },
];

export default function Architecture() {
  return (
    <section id="architecture">
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="badge bg-cyan-950 text-cyan-400 border border-cyan-800 mb-4">Architecture</span>
          <h2 className="section-title">ROS 2 Node Pipeline</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            High-level overview of the ROS 2 node graph, topic connections, and control flow.
            Two parallel pipelines: base velocity control and gimbal trajectory control.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {/* Base velocity pipeline */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-cyan-400" />
              Base Velocity Pipeline
            </h3>

            <div className="flex flex-col">
              {pipelineSteps.map((step, i) => (
                <div key={step.label}>
                  <div className={`card ${
                    step.color === 'cyan' ? 'border-cyan-800/60 bg-cyan-950/30' :
                    step.color === 'blue' ? 'border-blue-800/60 bg-blue-950/30' :
                    step.color === 'orange' ? 'border-orange-800/60 bg-orange-950/30' :
                    step.color === 'green' ? 'border-green-800/60 bg-green-950/30' :
                    ''
                  }`}>
                    <div className={`font-mono font-semibold text-sm mb-1 ${
                      step.color === 'cyan' ? 'text-cyan-300' :
                      step.color === 'blue' ? 'text-blue-300' :
                      step.color === 'orange' ? 'text-orange-300' :
                      step.color === 'green' ? 'text-green-300' :
                      'text-slate-300'
                    }`}>
                      {step.label}
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                  {i < pipelineSteps.length - 1 && (
                    <Arrow label={step.arrow ?? undefined} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Gimbal pipeline + Manual takeover */}
          <div className="space-y-8">
            {/* Gimbal pipeline */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-purple-400" />
                Gimbal Control Pipeline
              </h3>
              <div className="flex flex-col">
                <div className="card border-cyan-800/60 bg-cyan-950/30">
                  <div className="font-mono font-semibold text-sm text-cyan-300 mb-1">gimbal_tracking_controller</div>
                  <p className="text-slate-400 text-xs">Computes horizontal/vertical framing error from camera image → PID → JointTrajectory</p>
                </div>
                <Arrow label="/gimbal_controller/joint_trajectory (JointTrajectory)" />
                <div className="card border-purple-800/60 bg-purple-950/30">
                  <div className="font-mono font-semibold text-sm text-purple-300 mb-1">gimbal_controller</div>
                  <p className="text-slate-400 text-xs">JointTrajectoryController — actuates gimbal joints in Gazebo, exposes follow_joint_trajectory action</p>
                </div>
              </div>
            </div>

            {/* Manual takeover */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                Manual Takeover Mode
              </h3>
              <div className="card border-yellow-800/60 bg-yellow-950/20 mb-3">
                <div className="font-mono font-semibold text-sm text-yellow-300 mb-2">keyboard_manual_control</div>
                <div className="space-y-1">
                  <p className="text-slate-400 text-xs"><span className="text-blue-400">pub</span> /cmd_vel_manual (Twist)</p>
                  <p className="text-slate-400 text-xs"><span className="text-blue-400">pub</span> /control_mode (String: "auto" | "manual")</p>
                </div>
              </div>
              <div className="card border-blue-800/60 bg-blue-950/30">
                <div className="font-mono font-semibold text-sm text-blue-300 mb-2">cmd_vel_mux</div>
                <p className="text-xs text-slate-400 mb-2">Selects cmd_vel_auto or cmd_vel_manual based on /control_mode. Safety filter always downstream.</p>
                <div className="mt-2 flex gap-2">
                  <span className="badge bg-green-950 text-green-400 border border-green-900">auto (default)</span>
                  <span className="badge bg-yellow-950 text-yellow-400 border border-yellow-900">manual (takeover)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full topic map */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">Complete Topic Map</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <NodeBox
              title="gimbal_tracking_controller"
              color="cyan"
              subs={[
                '/camera/camera/image_raw (Image)',
                '/diff_drive_controller/odom (Odometry)',
                '/joint_states (JointState)',
              ]}
              pubs={[
                '/cmd_vel_auto (Twist)',
                '/gimbal_controller/joint_trajectory (JointTrajectory)',
              ]}
            />
            <NodeBox
              title="cmd_vel_mux"
              color="blue"
              subs={['/cmd_vel_auto (Twist)', '/cmd_vel_manual (Twist)', '/control_mode (String)']}
              pubs={['/cmd_vel_raw (Twist)']}
            />
            <NodeBox
              title="cmd_safe_vel"
              color="orange"
              subs={['/cmd_vel_raw (Twist)', '/scan (LaserScan)']}
              pubs={['/diff_drive_controller/cmd_vel_unstamped (Twist)']}
            />
            <NodeBox
              title="keyboard_manual_control"
              color="purple"
              pubs={['/cmd_vel_manual (Twist)', '/control_mode (String)']}
            />
            <NodeBox
              title="diff_drive_controller  (ros2_control)"
              color="green"
              subs={['/diff_drive_controller/cmd_vel_unstamped (Twist)']}
              pubs={['/diff_drive_controller/odom (Odometry)']}
            />
            <NodeBox
              title="gimbal_controller  (ros2_control)"
              color="purple"
              subs={['/gimbal_controller/joint_trajectory (JointTrajectory)']}
              pubs={['/gimbal_controller/state (JointTrajectoryControllerState)']}
            />
          </div>
        </div>

        {/* Gazebo plugin note */}
        <div className="mt-8 p-5 bg-red-950/20 border border-red-900/50 rounded-xl">
          <div className="flex items-start gap-3">
            <span className="text-red-400 text-xl mt-0.5">🔴</span>
            <div>
              <h4 className="text-white font-semibold mb-1">Custom Gazebo Plugin — Red Box Orbit</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                <code>libred_box_orbit_plugin.so</code> drives a red box in a circular orbit around the robot.
                Provides a deterministic, repeatable moving target for validating tracking controller behavior
                without requiring real human subjects or randomized inputs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
