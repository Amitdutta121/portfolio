const h2 = "mt-10 text-lg font-semibold text-gray-950 dark:text-white";
const p = "mt-3 leading-relaxed text-gray-700 dark:text-white/70";

function AdaptiveLoopDiagram() {
  const nodes = [
    { x: 40, y: 20, w: 190, label: "Performance & Weakness Tracking" },
    { x: 330, y: 20, w: 190, label: "NAT: Activity Selection" },
    { x: 330, y: 150, w: 190, label: "Training Session (Unity Simulator)" },
    { x: 40, y: 150, w: 190, label: "NAT-LLM: After-Action Feedback" },
  ];

  return (
    <svg
      viewBox="0 0 560 240"
      className="h-auto w-full"
      role="img"
      aria-label="Adaptive training loop: performance and weakness tracking feeds NAT activity selection, which drives a training session, which produces NAT-LLM after-action feedback, which updates performance tracking again."
    >
      <defs>
        <marker
          id="nat-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 z" className="fill-gray-400 dark:fill-white/40" />
        </marker>
      </defs>

      {nodes.map((n) => (
        <g key={n.label}>
          <rect
            x={n.x}
            y={n.y}
            width={n.w}
            height={60}
            rx={12}
            className="fill-white stroke-gray-300 dark:fill-white/10 dark:stroke-white/20"
            strokeWidth={1.5}
          />
          <text
            x={n.x + n.w / 2}
            y={n.y + 34}
            textAnchor="middle"
            className="fill-gray-800 text-[11.5px] font-medium dark:fill-white"
          >
            {n.label}
          </text>
        </g>
      ))}

      {/* tracking -> selection */}
      <line x1={230} y1={50} x2={330} y2={50} className="stroke-gray-400 dark:stroke-white/40" strokeWidth={1.5} markerEnd="url(#nat-arrow)" />
      {/* selection -> session */}
      <line x1={425} y1={80} x2={425} y2={150} className="stroke-gray-400 dark:stroke-white/40" strokeWidth={1.5} markerEnd="url(#nat-arrow)" />
      {/* session -> feedback */}
      <line x1={330} y1={180} x2={230} y2={180} className="stroke-gray-400 dark:stroke-white/40" strokeWidth={1.5} markerEnd="url(#nat-arrow)" />
      {/* feedback -> tracking */}
      <line x1={135} y1={150} x2={135} y2={80} className="stroke-gray-400 dark:stroke-white/40" strokeWidth={1.5} markerEnd="url(#nat-arrow)" />
    </svg>
  );
}

export default function NatNatLlmContent() {
  return (
    <div>
      <h2 className={h2}>The adaptive loop</h2>
      <p className={p}>
        NAT is a domain-agnostic, multi-parameter adaptive training algorithm: it selects each
        learner&apos;s next activity from performance, weaknesses, and cognitive-load factors
        rather than a single difficulty knob. NAT-LLM closes the loop by generating after-action
        feedback from expert-written examples that define the target style and structure of
        feedback. The model reasons, but the shape of good feedback is fixed by example, not left
        to the model to invent.
      </p>

      <AdaptiveLoopDiagram />

      <h2 className={h2}>Generations of the work</h2>
      <p className={p}>
        <strong>RAFT</strong> (rule-based adaptive difficulty control) →{" "}
        <strong>NAT</strong> (multi-dimensional weakness adaptation and activity selection) →{" "}
        <strong>NAT-LLM</strong> (expert-aligned LLM-generated feedback). Each generation kept the
        adaptive loop above and replaced one piece of it: first the difficulty rule, then the
        activity-selection policy, then the feedback generator.
      </p>

      <h2 className={h2}>Applied and evaluated</h2>
      <p className={p}>
        Applied in a Unity-based real-time naval simulator for nautical Rules of the Road training,
        and evaluated through human-subject studies: NAT statistically outperformed non-adaptive
        training, and NAT-LLM&apos;s iteratively refined few-shot feedback reached 98% agreement
        with expert evaluations across multiple feedback dimensions.
      </p>

      <p className={p}>
        This is the basis of first-author papers at HCII 2025 and HCII 2026 (see Publications) on
        weakness adaptation and evaluation methodology for adaptive training systems.
      </p>
    </div>
  );
}
