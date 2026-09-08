const h2 = "mt-10 text-lg font-semibold text-gray-950 dark:text-white";
const p = "mt-3 leading-relaxed text-gray-700 dark:text-white/70";
const li = "mt-2 leading-relaxed text-gray-700 dark:text-white/70";

function PipelineDiagram() {
  const boxes = [
    { x: 10, label: "Ingest Books" },
    { x: 160, label: "Build Curriculum" },
    { x: 310, label: "Generate Questions" },
    { x: 460, label: "Evaluate & Judge" },
    { x: 610, label: "Adaptive Delivery" },
  ];

  return (
    <svg
      viewBox="0 0 760 200"
      className="h-auto w-full"
      role="img"
      aria-label="UAT pipeline: ingest books, build curriculum, generate questions, evaluate and judge, adaptive delivery, with learned instructions feeding back from evaluation into generation."
    >
      <defs>
        <marker
          id="uat-arrow"
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

      {boxes.map((box, i) => (
        <g key={box.label}>
          <rect
            x={box.x}
            y={80}
            width={140}
            height={60}
            rx={12}
            className="fill-white stroke-gray-300 dark:fill-white/10 dark:stroke-white/20"
            strokeWidth={1.5}
          />
          <text
            x={box.x + 70}
            y={115}
            textAnchor="middle"
            className="fill-gray-800 text-[12px] font-medium dark:fill-white"
          >
            {box.label}
          </text>
          {i < boxes.length - 1 && (
            <line
              x1={box.x + 140}
              y1={110}
              x2={boxes[i + 1].x}
              y2={110}
              className="stroke-gray-400 dark:stroke-white/40"
              strokeWidth={1.5}
              markerEnd="url(#uat-arrow)"
            />
          )}
        </g>
      ))}

      {/* feedback loop: Evaluate & Judge -> Generate Questions */}
      <path
        d="M 530 80 C 530 30, 380 30, 380 78"
        fill="none"
        className="stroke-gray-400 dark:stroke-white/40"
        strokeWidth={1.5}
        strokeDasharray="4 3"
        markerEnd="url(#uat-arrow)"
      />
      <text
        x={455}
        y={25}
        textAnchor="middle"
        className="fill-gray-500 text-[11px] dark:fill-white/50"
      >
        learned instructions (GEPA)
      </text>
    </svg>
  );
}

export default function UniversalAdaptiveTrainerContent() {
  return (
    <div>
      <h2 className={h2}>How it works</h2>
      <p className={p}>
        UAT connects four stages that are usually separate tools: ingestion, retrieval-grounded
        generation, automated evaluation, and adaptive delivery. A book goes in as source material;
        a versioned, evaluated question bank comes out; students train against it through an
        adaptive loop.
      </p>

      <PipelineDiagram />

      <h2 className={h2}>Retrieval-grounded generation</h2>
      <ul className="list-disc pl-5">
        <li className={li}>
          PDF ingestion reads a book&apos;s own outline and page text into structured chapter /
          section / provenance metadata.
        </li>
        <li className={li}>
          Dense-embedding retrieval (<code>text-embedding-3-small</code>, cosine similarity over an
          in-memory matrix; no vector DB needed at this scale) maps each subtopic to its
          supporting sections before generation. The retrieval query representation was tuned on a
          taxonomy benchmark: hit@1 of 0.85 vs. 0.65 for the subtopic name alone. BM25 and a
          reranker were tested; neither beat dense retrieval.
        </li>
        <li className={li}>
          Multiple-choice, Parsons, and code-completion questions are generated against the
          retrieved chunk.
        </li>
      </ul>

      <h2 className={h2}>Evaluation and judge alignment</h2>
      <ul className="list-disc pl-5">
        <li className={li}>
          Deterministic validation: generated code runs sandboxed with a timeout, plus static type
          checks.
        </li>
        <li className={li}>
          Four advisory LLM judges (issues, subtopic fit, difficulty, generatability) run at
          temperature 0, with async batch re-judging of the whole bank at roughly half the token
          cost of judging one at a time.
        </li>
        <li className={li}>
          A read-only calibration step pairs every judge verdict against the professor&apos;s
          review, covering per-metric agreement, difficulty confusion matrices, and quadrant
          analysis. It also documents a negative result: the disagreement signal meant to drive
          judge self-improvement sat within verdict noise.
        </li>
      </ul>

      <h2 className={h2}>Two learning loops</h2>
      <p className={p}>
        Grounded in prompt-optimization practice (GEPA, MIPROv2, OPRO): the generator&apos;s
        instructions for each question type are rewritten from professor reviews, with rules
        accumulating onto the shipped prompt rather than being regenerated each round. Each
        judge&apos;s prompt is rewritten from its disagreements with the professor, behind an
        acceptance gate, with a held-out split excluded so a judge is never scored on its own
        fitting.
      </p>

      <h2 className={h2}>Adaptive delivery</h2>
      <p className={p}>
        Students join a frozen question set with just a name. No account is needed. Bayesian
        Knowledge Tracing topic mastery, subtopic weakness, and question-priority rotation pick
        each next question toward the weakest subtopics, with mastery updating per answer in real
        time.
      </p>
    </div>
  );
}
