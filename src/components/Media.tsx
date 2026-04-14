const mediaItems = [
  {
    id: 'sim-overview',
    type: 'video',
    caption: 'Simulation Overview — Gazebo Classic with robot and red-box tracking target',
    label: 'GIF / Screen Recording',
    aspect: 'aspect-video',
  },
  {
    id: 'tracking-demo',
    type: 'gif',
    caption: 'Autonomous tracking demo — robot following red box orbit with gimbal lock-on',
    label: 'GIF Demo',
    aspect: 'aspect-video',
  },
  {
    id: 'architecture-diagram',
    type: 'image',
    caption: 'Full ROS 2 node graph — exported from ros2_node_graph or rqt_graph',
    label: 'Screenshot',
    aspect: 'aspect-video',
  },
  {
    id: 'manual-takeover',
    type: 'gif',
    caption: 'Manual takeover in action — keyboard node switching to MANUAL mode mid-run',
    label: 'GIF Demo',
    aspect: 'aspect-video',
  },
  {
    id: 'rviz-gimbal',
    type: 'image',
    caption: 'RViz visualization — gimbal joint states and camera frustum overlay',
    label: 'Screenshot',
    aspect: 'aspect-video',
  },
  {
    id: 'safety-stop',
    type: 'gif',
    caption: 'Safety filter behavior — cmd_safe_vel slowing and stopping near a simulated obstacle',
    label: 'GIF Demo',
    aspect: 'aspect-video',
  },
];

const typeIcon: Record<string, string> = {
  video: '🎬',
  gif: '🎞️',
  image: '🖼️',
};

export default function Media() {
  return (
    <section id="media" className="bg-slate-900/50 border-y border-slate-800">
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="badge bg-cyan-950 text-cyan-400 border border-cyan-800 mb-4">Media</span>
          <h2 className="section-title">Screenshots &amp; Demos</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Visual demonstrations of the simulation, tracking behavior, and control pipeline.
            Media assets will be added as the project matures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {mediaItems.map((item) => (
            <div key={item.id} className="card group hover:border-slate-600 transition-colors flex flex-col">
              {/* Placeholder box */}
              <div
                className={`w-full ${item.aspect} bg-slate-800/60 rounded-lg border border-slate-700 border-dashed flex flex-col items-center justify-center mb-4 group-hover:border-slate-500 transition-colors`}
              >
                <span className="text-4xl mb-2">{typeIcon[item.type]}</span>
                <span className="text-xs text-slate-500 font-mono">{item.label}</span>
                <span className="text-xs text-slate-600 mt-1">— coming soon —</span>
              </div>
              {/* Caption */}
              <p className="text-slate-400 text-sm leading-relaxed flex-1">{item.caption}</p>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm">
            To add media: place GIF/video/image files in{' '}
            <code>public/media/</code> and update the <code>src</code> attribute in{' '}
            <code>src/components/Media.tsx</code>.
          </p>
        </div>
      </div>
    </section>
  );
}
