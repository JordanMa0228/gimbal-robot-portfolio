type CodeBlockProps = { children: string; language?: string };

function CodeBlock({ children }: CodeBlockProps) {
  return (
    <pre className="code-block whitespace-pre-wrap leading-relaxed">
      <code>{children.trim()}</code>
    </pre>
  );
}

const steps = [
  {
    id: 'prerequisites',
    step: '0',
    title: 'Prerequisites',
    color: 'text-slate-400',
    dot: 'bg-slate-500',
    content: (
      <div className="space-y-3">
        <p className="text-slate-400 text-sm">Ensure you have the following installed on Ubuntu 22.04:</p>
        <ul className="space-y-2 text-sm text-slate-400">
          <li className="flex items-center gap-2">
            <span className="text-green-400">✓</span> ROS 2 Humble (desktop install)
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-400">✓</span> Gazebo Classic (Gazebo 11)
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-400">✓</span> ros2_control, ros2_controllers
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-400">✓</span> colcon build tools
          </li>
        </ul>
        <CodeBlock>{`sudo apt install ros-humble-gazebo-ros-pkgs ros-humble-ros2-control ros-humble-ros2-controllers`}</CodeBlock>
      </div>
    ),
  },
  {
    id: 'clone',
    step: '1',
    title: 'Clone & Set Up Workspace',
    color: 'text-cyan-400',
    dot: 'bg-cyan-500',
    content: (
      <div className="space-y-3">
        <p className="text-slate-400 text-sm">Clone the repository into your ROS 2 workspace:</p>
        <CodeBlock>{`mkdir -p ~/ros2_ws/src
cd ~/ros2_ws
git clone <repo-url> src/gimbal-robot`}</CodeBlock>
        <p className="text-slate-400 text-sm">Set up environment variables and ROS dependencies:</p>
        <CodeBlock>{`cd ~/ros2_ws
source ./scripts/setup_env.sh`}</CodeBlock>
      </div>
    ),
  },
  {
    id: 'build',
    step: '2',
    title: 'Build the Workspace',
    color: 'text-cyan-400',
    dot: 'bg-cyan-500',
    content: (
      <div className="space-y-3">
        <CodeBlock>{`cd ~/ros2_ws
./scripts/build.sh`}</CodeBlock>
        <p className="text-slate-400 text-sm">
          The build script runs <code>colcon build --symlink-install</code> and sources the install setup.
          On success you should see <span className="text-green-400 font-mono text-xs">Summary: X packages finished</span> with no errors.
        </p>
      </div>
    ),
  },
  {
    id: 'run-sim',
    step: '3',
    title: 'Launch the Simulation',
    color: 'text-cyan-400',
    dot: 'bg-cyan-500',
    content: (
      <div className="space-y-3">
        <p className="text-slate-400 text-sm">Start Gazebo + all ROS 2 nodes in one command:</p>
        <CodeBlock>{`cd ~/ros2_ws
./scripts/run_sim.sh`}</CodeBlock>
        <p className="text-slate-400 text-sm">Or launch manually:</p>
        <CodeBlock>{`source /opt/ros/humble/setup.bash
source ~/ros2_ws/install/setup.bash
export GAZEBO_PLUGIN_PATH=~/ros2_ws/install/my_gazebo_plugins/lib:$GAZEBO_PLUGIN_PATH
ros2 launch my_robot_sim sim.launch.py`}</CodeBlock>
        <div className="p-3 bg-blue-950/30 border border-blue-900/50 rounded-lg">
          <p className="text-blue-300 text-xs">
            💡 The launch file starts Gazebo, spawns the robot, activates ros2_control controllers
            (<code>diff_drive_controller</code>, <code>gimbal_controller</code>, <code>joint_state_broadcaster</code>),
            and launches application nodes with appropriate delays.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'manual',
    step: '4',
    title: 'Manual Takeover (Optional)',
    color: 'text-yellow-400',
    dot: 'bg-yellow-500',
    content: (
      <div className="space-y-4">
        <p className="text-slate-400 text-sm">
          In a <strong className="text-white">second terminal</strong> (keep it focused while driving):
        </p>
        <CodeBlock>{`cd ~/ros2_ws
source ./scripts/setup_env.sh
ros2 run my_robot_sim keyboard_manual_control`}</CodeBlock>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4">
          {[
            { key: 'm', desc: 'Switch to MANUAL mode' },
            { key: 'a', desc: 'Return to AUTO mode' },
            { key: 'i', desc: 'Drive forward' },
            { key: ',', desc: 'Drive backward' },
            { key: 'j', desc: 'Turn left' },
            { key: 'l', desc: 'Turn right' },
            { key: 'k', desc: 'Stop (zero vel)' },
            { key: 'q', desc: 'Quit keyboard node' },
          ].map(({ key, desc }) => (
            <div key={key} className="flex items-center gap-2 text-sm">
              <kbd className="inline-flex items-center justify-center w-8 h-8 rounded bg-slate-700 border border-slate-600 font-mono text-white font-semibold text-sm">
                {key}
              </kbd>
              <span className="text-slate-400 text-xs">{desc}</span>
            </div>
          ))}
        </div>
        <div className="p-3 bg-yellow-950/30 border border-yellow-900/50 rounded-lg">
          <p className="text-yellow-300 text-xs">
            ⚠️ <strong>Safety note:</strong> Manual commands still pass through <code>cmd_safe_vel</code>.
            Speed and turn-rate limits are enforced even during manual override.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'verify',
    step: '5',
    title: 'Verify Everything is Running',
    color: 'text-green-400',
    dot: 'bg-green-500',
    content: (
      <div className="space-y-3">
        <p className="text-slate-400 text-sm">Quick verification commands:</p>
        <CodeBlock>{`# Check all expected nodes are up
ros2 node list

# Confirm mux wiring
ros2 topic info /cmd_vel_raw -v | head -30

# Check gimbal trajectory traffic
ros2 topic hz /gimbal_controller/joint_trajectory

# Monitor control mode
ros2 topic echo /control_mode --once

# Check odometry
ros2 topic echo /diff_drive_controller/odom --once`}</CodeBlock>
      </div>
    ),
  },
];

export default function HowToRun() {
  return (
    <section id="how-to-run" className="bg-slate-900/50 border-y border-slate-800">
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="badge bg-cyan-950 text-cyan-400 border border-cyan-800 mb-4">How to Run</span>
          <h2 className="section-title">Build &amp; Run Guide</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Step-by-step instructions to build the workspace, launch the simulation,
            and operate the robot in both autonomous and manual modes.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((s) => (
            <div key={s.id} id={`step-${s.id}`} className="flex gap-5">
              {/* Step number */}
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full ${s.dot} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {s.step}
                </div>
                <div className="flex-1 w-px bg-slate-800 mt-2" />
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <h3 className={`text-lg font-semibold mb-4 ${s.color}`}>{s.title}</h3>
                {s.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
