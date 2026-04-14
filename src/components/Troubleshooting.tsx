const issues = [
  {
    id: 'package-not-found',
    icon: '📦',
    title: 'Package Not Found',
    symptoms: ['ros2: command not found', 'Package X not found in ament index'],
    fixes: [
      { label: 'Source ROS 2 environment', cmd: 'source /opt/ros/humble/setup.bash\nsource ~/ros2_ws/install/setup.bash' },
      { label: 'Or use the setup script', cmd: 'source ~/ros2_ws/scripts/setup_env.sh' },
      { label: 'If package is missing after build, rebuild', cmd: 'cd ~/ros2_ws && colcon build --symlink-install\nsource install/setup.bash' },
    ],
  },
  {
    id: 'plugin-path',
    icon: '🔌',
    title: 'Gazebo Plugin Not Found',
    symptoms: [
      '[Err] Failed to load plugin libred_box_orbit_plugin.so',
      'libXXX.so: cannot open shared object file',
    ],
    fixes: [
      { label: 'Set GAZEBO_PLUGIN_PATH before launching', cmd: 'export GAZEBO_PLUGIN_PATH=~/ros2_ws/install/my_gazebo_plugins/lib:$GAZEBO_PLUGIN_PATH' },
      { label: 'Verify plugin was built', cmd: 'ls ~/ros2_ws/install/my_gazebo_plugins/lib/libred_box_orbit_plugin.so' },
      { label: 'Use run_sim.sh which sets this automatically', cmd: './scripts/run_sim.sh' },
    ],
  },
  {
    id: 'controllers-not-running',
    icon: '⚙️',
    title: 'Controllers Not Running / Active',
    symptoms: [
      'diff_drive_controller: inactive',
      'No odometry being published',
      'No response to cmd_vel commands',
    ],
    fixes: [
      { label: 'Check controller state', cmd: 'ros2 control list_controllers' },
      { label: 'Manually activate diff_drive_controller', cmd: 'ros2 control set_controller_state diff_drive_controller active' },
      { label: 'Manually activate gimbal_controller', cmd: 'ros2 control set_controller_state gimbal_controller active' },
      { label: 'Verify robot_description is published', cmd: 'ros2 topic echo /robot_description --once | head -5' },
    ],
  },
  {
    id: 'gzserver-leftover',
    icon: '👻',
    title: 'gzserver / gzclient Leftover Processes',
    symptoms: [
      'Gazebo window does not open',
      'Simulation hangs on startup',
      'Address already in use: 11345',
    ],
    fixes: [
      { label: 'Kill leftover Gazebo processes', cmd: 'pkill -9 gzserver; pkill -9 gzclient; pkill -9 gz' },
      { label: 'Or use killall', cmd: 'killall gzserver gzclient 2>/dev/null; sleep 1' },
      { label: 'Wait ~3 seconds then re-launch', cmd: 'sleep 3 && ./scripts/run_sim.sh' },
    ],
  },
  {
    id: 'daemon-reset',
    icon: '🔄',
    title: 'ROS 2 Daemon Issues',
    symptoms: [
      'ros2 topic list hangs or returns nothing',
      'Node discovery not working',
      'ros2 node list returns empty',
    ],
    fixes: [
      { label: 'Kill and restart the daemon', cmd: 'ros2 daemon stop\nros2 daemon start' },
      { label: 'Or simply kill it (restarts automatically)', cmd: 'pkill -9 ros2_daemon' },
      { label: 'Check domain ID if using multiple machines', cmd: 'export ROS_DOMAIN_ID=0  # must match on all terminals' },
    ],
  },
  {
    id: 'tracking-not-working',
    icon: '👁️',
    title: 'Tracking Controller Not Active',
    symptoms: [
      'Robot not following the red box',
      '/cmd_vel_auto not being published',
      '/gimbal_controller/joint_trajectory silent',
    ],
    fixes: [
      { label: 'Check if gimbal_tracking_controller node is running', cmd: 'ros2 node list | grep gimbal_tracking' },
      { label: 'Check camera topic is publishing', cmd: 'ros2 topic hz /camera/camera/image_raw' },
      { label: 'Manually inspect node topic connections', cmd: 'ros2 node info /gimbal_tracking_controller' },
      { label: 'Ensure control mode is set to auto', cmd: 'ros2 topic echo /control_mode --once' },
    ],
  },
];

export default function Troubleshooting() {
  return (
    <section id="troubleshooting">
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="badge bg-cyan-950 text-cyan-400 border border-cyan-800 mb-4">Troubleshooting</span>
          <h2 className="section-title">Common Issues &amp; Fixes</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A quick reference for the most frequently encountered problems when
            building, launching, or running the simulation.
          </p>
        </div>

        <div className="space-y-6">
          {issues.map((issue) => (
            <div key={issue.id} id={issue.id} className="card hover:border-slate-700 transition-colors">
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <span className="text-2xl mt-0.5">{issue.icon}</span>
                <div>
                  <h3 className="text-white font-semibold text-lg">{issue.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {issue.symptoms.map((s) => (
                      <span key={s} className="badge bg-red-950/50 text-red-400 border border-red-900/60 font-mono text-xs">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Fixes */}
              <div className="space-y-3 ml-9">
                {issue.fixes.map((fix, i) => (
                  <div key={i}>
                    <p className="text-slate-500 text-xs mb-1">{fix.label}</p>
                    <pre className="code-block text-xs whitespace-pre-wrap leading-relaxed">
                      <code>{fix.cmd}</code>
                    </pre>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* General tip */}
        <div className="mt-8 p-5 bg-cyan-950/20 border border-cyan-900/50 rounded-xl">
          <p className="text-cyan-300 text-sm">
            💡 <strong>General rule:</strong> always run <code>source ~/ros2_ws/scripts/setup_env.sh</code> in every
            new terminal before using ROS 2 commands. Most issues are caused by missing environment sourcing.
          </p>
        </div>
      </div>
    </section>
  );
}
