const h2 = "mt-10 text-lg font-semibold text-gray-950 dark:text-white";
const p = "mt-3 leading-relaxed text-gray-700 dark:text-white/70";

function RuleLoopDiagram() {
  const nodes = [
    { x: 20, y: 20, w: 180, label: "Student Performance" },
    { x: 290, y: 20, w: 180, label: "Rule Engine (Thresholds)" },
    { x: 290, y: 130, w: 180, label: "Difficulty Adjustment" },
    { x: 20, y: 130, w: 180, label: "Next Scenario" },
  ];

  return (
    <svg
      viewBox="0 0 500 210"
      className="h-auto w-full"
      role="img"
      aria-label="RAFT loop: student performance feeds a rule engine of fixed thresholds, which adjusts scenario difficulty, which produces the next scenario, which produces new performance data."
    >
      <defs>
        <marker
          id="raft-arrow"
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
            height={56}
            rx={12}
            className="fill-white stroke-gray-300 dark:fill-white/10 dark:stroke-white/20"
            strokeWidth={1.5}
          />
          <text
            x={n.x + n.w / 2}
            y={n.y + 33}
            textAnchor="middle"
            className="fill-gray-800 text-[11.5px] font-medium dark:fill-white"
          >
            {n.label}
          </text>
        </g>
      ))}

      <line x1={200} y1={48} x2={290} y2={48} className="stroke-gray-400 dark:stroke-white/40" strokeWidth={1.5} markerEnd="url(#raft-arrow)" />
      <line x1={380} y1={76} x2={380} y2={130} className="stroke-gray-400 dark:stroke-white/40" strokeWidth={1.5} markerEnd="url(#raft-arrow)" />
      <line x1={290} y1={158} x2={200} y2={158} className="stroke-gray-400 dark:stroke-white/40" strokeWidth={1.5} markerEnd="url(#raft-arrow)" />
      <line x1={110} y1={130} x2={110} y2={76} className="stroke-gray-400 dark:stroke-white/40" strokeWidth={1.5} markerEnd="url(#raft-arrow)" />
    </svg>
  );
}

export default function RaftContent() {
  return (
    <div>
      <h2 className={h2}>A fixed-rule difficulty loop</h2>
      <p className={p}>
        RAFT adjusts scenario difficulty in maritime navigation training using fixed thresholds on
        student performance, a deterministic rule engine rather than a learned policy. It is the
        first generation in the adaptive-training line: RAFT (rule-based difficulty control) →{" "}
        <strong>NAT</strong> (multi-dimensional weakness adaptation) →{" "}
        <strong>NAT-LLM</strong> (expert-aligned LLM feedback).
      </p>

      <RuleLoopDiagram />

      <h2 className={h2}>Why it came first</h2>
      <p className={p}>
        Fixed thresholds are easy to reason about and validate, which made RAFT a useful baseline
        before committing to a learned, multi-parameter policy. The evaluation methodology and the
        Unity-based naval simulator built for RAFT carried forward unchanged into NAT and NAT-LLM.
        Only the difficulty-selection logic changed between generations.
      </p>
    </div>
  );
}
