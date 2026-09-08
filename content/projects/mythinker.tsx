const h2 = "mt-10 text-lg font-semibold text-gray-950 dark:text-white";
const p = "mt-3 leading-relaxed text-gray-700 dark:text-white/70";
const li = "mt-2 leading-relaxed text-gray-700 dark:text-white/70";

function PreconditionFlowDiagram() {
  const stages = [
    { x: 10, label: "Frame (North Star)" },
    { x: 210, label: "Explore" },
    { x: 410, label: "Converge (Proposals)" },
  ];

  return (
    <svg
      viewBox="0 0 700 220"
      className="h-auto w-full"
      role="img"
      aria-label="MyThinker flow: frame a North Star, explore, converge on proposals, pass a precondition gate for authorization, then commit and plan."
    >
      <defs>
        <marker
          id="mt-arrow"
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

      {stages.map((s, i) => (
        <g key={s.label}>
          <rect
            x={s.x}
            y={30}
            width={180}
            height={56}
            rx={12}
            className="fill-white stroke-gray-300 dark:fill-white/10 dark:stroke-white/20"
            strokeWidth={1.5}
          />
          <text
            x={s.x + 90}
            y={63}
            textAnchor="middle"
            className="fill-gray-800 text-[12px] font-medium dark:fill-white"
          >
            {s.label}
          </text>
          {i < stages.length - 1 && (
            <line
              x1={s.x + 180}
              y1={58}
              x2={stages[i + 1].x}
              y2={58}
              className="stroke-gray-400 dark:stroke-white/40"
              strokeWidth={1.5}
              markerEnd="url(#mt-arrow)"
            />
          )}
        </g>
      ))}

      {/* arrow down from Converge to gate */}
      <line x1={500} y1={86} x2={500} y2={130} className="stroke-gray-400 dark:stroke-white/40" strokeWidth={1.5} markerEnd="url(#mt-arrow)" />

      {/* precondition gate: diamond */}
      <polygon
        points="500,130 570,160 500,190 430,160"
        className="fill-gray-900 stroke-gray-900 dark:fill-white dark:stroke-white"
      />
      <text
        x={500}
        y={155}
        textAnchor="middle"
        className="fill-white text-[10px] font-medium dark:fill-gray-900"
      >
        Precondition
      </text>
      <text
        x={500}
        y={168}
        textAnchor="middle"
        className="fill-white text-[10px] font-medium dark:fill-gray-900"
      >
        gate: authorize
      </text>

      {/* gate -> commit */}
      <line x1={430} y1={160} x2={280} y2={160} className="stroke-gray-400 dark:stroke-white/40" strokeWidth={1.5} markerEnd="url(#mt-arrow)" />
      <rect x={100} y={132} width={180} height={56} rx={12} className="fill-white stroke-gray-300 dark:fill-white/10 dark:stroke-white/20" strokeWidth={1.5} />
      <text x={190} y={165} textAnchor="middle" className="fill-gray-800 text-[12px] font-medium dark:fill-white">
        Commit → Plan
      </text>
    </svg>
  );
}

export default function MyThinkerContent() {
  return (
    <div>
      <h2 className={h2}>A single agent, no orchestration graph</h2>
      <p className={p}>
        MyThinker is a stateful AI thinking partner built on one design bet: a single
        conversational agent with a small, narrowly scoped toolkit, where the agent&apos;s own
        tool-call choice is the router. There is no separate intent classifier and no workflow
        graph.
      </p>

      <h2 className={h2}>Precondition gating</h2>
      <p className={p}>
        Correctness-critical behavior lives in deterministic code, not model judgment. Before any
        board-mutating action, the system checks prerequisites: a North Star must exist before
        exploration can begin, and convergence produces proposals, not commitments, until an
        explicit authorization step lets the agent commit.
      </p>

      <PreconditionFlowDiagram />

      <h2 className={h2}>What it supports</h2>
      <ul className="list-disc pl-5">
        <li className={li}>Framing a project with a North Star, then exploring and converging on directions.</li>
        <li className={li}>Agentic research. The model decides on its own whether to use web search or document retrieval.</li>
        <li className={li}>Persistent projects and conversation state, entirely local in SQLite, no cloud storage required.</li>
        <li className={li}>A streaming HTTP API (standard requests and Server-Sent Events) behind a Next.js frontend.</li>
      </ul>

      <h2 className={h2}>Built for offline testing</h2>
      <p className={p}>
        Specialized structured-output engines handle the thinking operations (framing, exploration,
        convergence) invoked from within tools, and the codebase leans on offline fixtures so
        model-dependent behavior doesn&apos;t require live API calls during development.
      </p>
    </div>
  );
}
