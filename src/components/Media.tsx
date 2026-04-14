export default function Media() {
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
            {/*
              Replace the src below with your YouTube or Vimeo embed URL, e.g.:
                YouTube:  https://www.youtube.com/embed/<VIDEO_ID>
                Vimeo:    https://player.vimeo.com/video/<VIDEO_ID>
            */}
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="AI-Powered Ground Gimbal Robot — Simulation Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="mt-3 text-slate-400 text-sm text-center">
            Autonomous tracking demo — gimbal robot following a moving target in Gazebo Classic simulation.
          </p>
        </div>

        {/* Screenshot gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Screenshot 1 */}
          <figure className="card flex flex-col gap-3">
            <div className="w-full aspect-video bg-slate-800/60 rounded-lg border border-dashed border-slate-700 flex flex-col items-center justify-center">
              {/* Replace with: <img src="/media/sim-overview.png" alt="Gazebo simulation overview showing the gimbal robot and red tracking target" className="w-full h-full object-cover rounded-lg" /> */}
              <span className="text-3xl mb-2">🖼️</span>
              <span className="text-xs text-slate-500 font-mono">sim-overview.png</span>
              <span className="text-xs text-slate-600 mt-1">— place image in public/media/ —</span>
            </div>
            <figcaption className="text-slate-400 text-sm leading-relaxed">
              <strong className="text-slate-300">Gazebo simulation overview</strong> — gimbal robot and red-box
              tracking target in the Gazebo Classic environment.
            </figcaption>
          </figure>

          {/* Screenshot 2 */}
          <figure className="card flex flex-col gap-3">
            <div className="w-full aspect-video bg-slate-800/60 rounded-lg border border-dashed border-slate-700 flex flex-col items-center justify-center">
              {/* Replace with: <img src="/media/ros2-node-graph.png" alt="ROS 2 node graph showing topic connections between tracking, motion, and safety nodes" className="w-full h-full object-cover rounded-lg" /> */}
              <span className="text-3xl mb-2">🖼️</span>
              <span className="text-xs text-slate-500 font-mono">ros2-node-graph.png</span>
              <span className="text-xs text-slate-600 mt-1">— place image in public/media/ —</span>
            </div>
            <figcaption className="text-slate-400 text-sm leading-relaxed">
              <strong className="text-slate-300">ROS 2 node graph</strong> — topic connections between the
              tracking, motion control, and safety filter nodes.
            </figcaption>
          </figure>

          {/* Screenshot 3 */}
          <figure className="card flex flex-col gap-3">
            <div className="w-full aspect-video bg-slate-800/60 rounded-lg border border-dashed border-slate-700 flex flex-col items-center justify-center">
              {/* Replace with: <img src="/media/manual-handover.png" alt="Manual/Auto mode handover — operator switching control mode mid-run" className="w-full h-full object-cover rounded-lg" /> */}
              <span className="text-3xl mb-2">🖼️</span>
              <span className="text-xs text-slate-500 font-mono">manual-handover.png</span>
              <span className="text-xs text-slate-600 mt-1">— place image in public/media/ —</span>
            </div>
            <figcaption className="text-slate-400 text-sm leading-relaxed">
              <strong className="text-slate-300">Manual / Auto handover</strong> — operator switching control mode
              mid-run while the gimbal maintains target lock.
            </figcaption>
          </figure>

          {/* Screenshot 4 */}
          <figure className="card flex flex-col gap-3">
            <div className="w-full aspect-video bg-slate-800/60 rounded-lg border border-dashed border-slate-700 flex flex-col items-center justify-center">
              {/* Replace with: <img src="/media/safety-filter.png" alt="Safety filter engaged — robot decelerating as it approaches a simulated obstacle" className="w-full h-full object-cover rounded-lg" /> */}
              <span className="text-3xl mb-2">🖼️</span>
              <span className="text-xs text-slate-500 font-mono">safety-filter.png</span>
              <span className="text-xs text-slate-600 mt-1">— place image in public/media/ —</span>
            </div>
            <figcaption className="text-slate-400 text-sm leading-relaxed">
              <strong className="text-slate-300">Safety filter engaged</strong> — robot decelerating as it
              approaches a simulated obstacle; safe velocity commands enforced.
            </figcaption>
          </figure>
        </div>

        {/* Tip for adding real media */}
        <p className="mt-10 text-center text-slate-500 text-sm">
          To add real media, place files in <code className="text-slate-400">public/media/</code> and
          uncomment the <code className="text-slate-400">&lt;img&gt;</code> tags (or update the iframe <code className="text-slate-400">src</code>) in{' '}
          <code className="text-slate-400">src/components/Media.tsx</code>.
        </p>
      </div>
    </section>
  );
}
