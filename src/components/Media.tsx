export default function Media() {
  const releaseTagUrl = 'https://github.com/JordanMa0228/gimbal-robot-portfolio/releases/tag/demo_v0.1.0';
  const demoVideoUrl = 'https://github.com/JordanMa0228/gimbal-robot-portfolio/releases/download/demo_v0.1.0/Final.Demo.Video.mp4';

  return (
    <section id="media" className="bg-slate-900/50 border-y border-slate-800">
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="badge bg-cyan-950 text-cyan-400 border border-cyan-800 mb-4">Demo</span>
          <h2 className="section-title">Demo Video &amp; Screenshots</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Watch the autonomous tracking simulation in action, and explore screenshots of the
            ROS 2 node graph, Gazebo environment, and gimbal control pipeline.
          </p>
        </div>

        {/* Demo video embed */}
        <div className="mb-12">
          <h3 className="text-white text-lg font-semibold mb-3 text-center">Simulation Demo</h3>
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-slate-700 bg-slate-800/60 shadow-lg">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              controls
              preload="metadata"
              src={demoVideoUrl}
            >
              Your browser does not support embedded video.{' '}
              <a href={demoVideoUrl} className="text-cyan-400 underline">
                Open the demo video.
              </a>
            </video>
          </div>
          <p className="mt-3 text-slate-400 text-sm text-center">
            Autonomous tracking demo — gimbal robot following a moving target in Gazebo Classic simulation.
          </p>
          <p className="mt-1 text-slate-500 text-xs text-center">
            If playback is blocked, use the{' '}
            <a href={demoVideoUrl} className="text-cyan-400 hover:text-cyan-300 underline">
              direct video link
            </a>
            .
          </p>
        </div>

        {/* Screenshot gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Screenshot 1 */}
          <figure className="card flex flex-col gap-3">
            <img
              src="https://github.com/JordanMa0228/gimbal-robot-portfolio/releases/download/demo_v0.1.0/Stationary.Tracking.png"
              alt="Stationary colored object tracking in Gazebo with the gimbal robot locked on target"
              className="w-full aspect-video object-cover rounded-lg border border-slate-700"
              loading="lazy"
            />
            <figcaption className="text-slate-400 text-sm leading-relaxed">
              <strong className="text-slate-300">Stationary tracking</strong> — gimbal robot maintaining lock on
              a stationary colored target in Gazebo Classic.
            </figcaption>
          </figure>

          {/* Screenshot 2 */}
          <figure className="card flex flex-col gap-3">
            <img
              src="https://github.com/JordanMa0228/gimbal-robot-portfolio/releases/download/demo_v0.1.0/Circulating.Tracking.png"
              alt="Circulating target tracking demo showing gimbal stabilization while target moves through the scene"
              className="w-full aspect-video object-cover rounded-lg border border-slate-700"
              loading="lazy"
            />
            <figcaption className="text-slate-400 text-sm leading-relaxed">
              <strong className="text-slate-300">Circulating tracking</strong> — autonomous tracking stays stable
              while the target circulates and disturbances are introduced.
            </figcaption>
          </figure>

          {/* Screenshot 3 */}
          <figure className="card flex flex-col gap-3">
            <img
              src="https://github.com/JordanMa0228/gimbal-robot-portfolio/releases/download/demo_v0.1.0/Manual.Keyboard.Base.Control.png"
              alt="Manual keyboard base control mode while maintaining camera tracking behavior"
              className="w-full aspect-video object-cover rounded-lg border border-slate-700"
              loading="lazy"
            />
            <figcaption className="text-slate-400 text-sm leading-relaxed">
              <strong className="text-slate-300">Manual base control</strong> — operator keyboard control of
              the robot base with tracking behavior preserved.
            </figcaption>
          </figure>

          {/* Screenshot 4 */}
          <figure className="card flex flex-col gap-3">
            <img
              src="https://github.com/JordanMa0228/gimbal-robot-portfolio/releases/download/demo_v0.1.0/Obstacle.Avoidance.png"
              alt="Obstacle avoidance engaged during active target tracking in the simulation"
              className="w-full aspect-video object-cover rounded-lg border border-slate-700"
              loading="lazy"
            />
            <figcaption className="text-slate-400 text-sm leading-relaxed">
              <strong className="text-slate-300">Obstacle avoidance</strong> — robot safely avoids obstacles while
              continuing target tracking in simulation.
            </figcaption>
          </figure>
        </div>

        <p className="mt-10 text-center text-slate-500 text-sm">
          Media is sourced from the{' '}
          <a href={releaseTagUrl} className="text-cyan-400 hover:text-cyan-300 underline">
            demo_v0.1.0 GitHub Release
          </a>
          .
        </p>
      </div>
    </section>
  );
}
