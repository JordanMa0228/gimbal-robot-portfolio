const included = [
  'High-level system architecture and ROS 2 node graph',
  'Public algorithm concepts (PID control, mode arbitration, safety filtering)',
  'Topic names, message types, and data-flow descriptions',
  'Operational instructions for building and running the simulation',
  'General project goals, scope, and timeline milestones',
];

const excluded = [
  'Links to private or internal repositories',
  'Proprietary detection or tracking algorithms or source code',
  'Internal design documents, performance logs, or proprietary specs',
  'Employer/client name, internal team info, or unreleased product details',
  'Raw sensor data, calibration files, or hardware schematics',
];

export default function NdaGuardrails() {
  return (
    <section id="nda-guardrails" className="bg-slate-900/50 border-y border-slate-800">
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="badge bg-amber-950 text-amber-400 border border-amber-800 mb-4">NDA Safe</span>
          <h2 className="section-title">NDA Guardrails</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            This portfolio is intentionally scoped to publicly shareable information.
            The following guidelines explain what is and is not included.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Included */}
          <div className="card border-green-900/50">
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
              What Is Included
            </h3>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                  <svg className="w-4 h-4 text-green-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Excluded */}
          <div className="card border-red-900/50">
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400 inline-block" />
              What Is Excluded
            </h3>
            <ul className="space-y-3">
              {excluded.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-500">
                  <svg className="w-4 h-4 text-red-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 p-5 bg-amber-950/20 border border-amber-900/50 rounded-xl">
          <p className="text-amber-300 text-sm leading-relaxed">
            ⚠️ <strong>Internship project notice:</strong> This project was completed as part of an internship.
            All content on this page has been reviewed and is shared at a high-level architectural overview
            to avoid disclosure of proprietary or confidential information.
            If you have questions about what can be shared, please reach out before redistributing.
          </p>
        </div>
      </div>
    </section>
  );
}
