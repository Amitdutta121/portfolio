const h2 = "mt-10 text-lg font-semibold text-gray-950 dark:text-white";
const p = "mt-3 leading-relaxed text-gray-700 dark:text-white/70";
const li = "mt-2 leading-relaxed text-gray-700 dark:text-white/70";

function DistillationDiagram() {
  const strategies = [
    { x: 10, label: "Logit" },
    { x: 190, label: "Attention" },
    { x: 370, label: "Hidden-State" },
    { x: 550, label: "Hybrid" },
  ];

  return (
    <svg
      viewBox="0 0 750 220"
      className="h-auto w-full"
      role="img"
      aria-label="A ViLT teacher model is distilled into a smaller ViLT student via four strategies: logit, attention, hidden-state, and hybrid distillation, each training a separate student checkpoint."
    >
      <defs>
        <marker
          id="kd-arrow"
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

      <rect x={280} y={10} width={190} height={50} rx={12} className="fill-gray-900 stroke-gray-900 dark:fill-white dark:stroke-white" strokeWidth={1.5} />
      <text x={375} y={33} textAnchor="middle" className="fill-white text-[12px] font-medium dark:fill-gray-900">Teacher</text>
      <text x={375} y={48} textAnchor="middle" className="fill-white text-[10px] dark:fill-gray-900">ViLT, 12L / 768d</text>

      {strategies.map((s) => (
        <g key={s.label}>
          <line x1={375} y1={60} x2={s.x + 80} y2={100} className="stroke-gray-400 dark:stroke-white/40" strokeWidth={1.5} markerEnd="url(#kd-arrow)" />
          <rect x={s.x} y={100} width={160} height={50} rx={12} className="fill-white stroke-gray-300 dark:fill-white/10 dark:stroke-white/20" strokeWidth={1.5} />
          <text x={s.x + 80} y={130} textAnchor="middle" className="fill-gray-800 text-[12px] font-medium dark:fill-white">{s.label}</text>
          <line x1={s.x + 80} y1={150} x2={375} y2={190} className="stroke-gray-400 dark:stroke-white/40" strokeWidth={1.5} markerEnd="url(#kd-arrow)" />
        </g>
      ))}

      <rect x={260} y={190} width={230} height={26} rx={13} className="fill-gray-100 stroke-gray-300 dark:fill-white/10 dark:stroke-white/20" strokeWidth={1.5} />
      <text x={375} y={207} textAnchor="middle" className="fill-gray-800 text-[11px] font-medium dark:fill-white">Student, 6L / 384d (×4 checkpoints)</text>
    </svg>
  );
}

export default function MultimodalKdVqaContent() {
  return (
    <div>
      <h2 className={h2}>Shrinking ViLT four different ways</h2>
      <p className={p}>
        The teacher is <strong>ViLT</strong> (<code>vilt-b32-finetuned-vqa</code>), a single-stream
        vision-language transformer, fine-tuned for VQA as a 3,129-way multi-label classifier
        (an image can have several correct answers, weighted by how many annotators gave each
        one). The student is the same architecture at roughly half size: 6 transformer layers
        and a hidden size of 384, versus the teacher&apos;s 12 layers and 768. It trains from
        scratch under four different distillation losses on VQA v1 (MSCOCO train2014/val2014
        images, 10% subsample for compute).
      </p>

      <DistillationDiagram />

      <h2 className={h2}>The four losses</h2>
      <ul className="list-disc pl-5">
        <li className={li}><strong>Logit distillation.</strong> KL-divergence between student and teacher output distributions, softened at temperature 3.0.</li>
        <li className={li}><strong>Hidden-state distillation.</strong> MSE between the student&apos;s first hidden layer and the teacher&apos;s, after a learned linear projector maps the teacher&apos;s 768-dim states down to the student&apos;s 384.</li>
        <li className={li}><strong>Attention distillation.</strong> MSE between student and teacher attention maps, with the teacher&apos;s 12 layers reduced to the student&apos;s 6 either by taking the first 6 directly or by averaging teacher layers in pairs.</li>
        <li className={li}><strong>Hybrid distillation.</strong> All three losses summed into one, each still added to the student&apos;s own task loss at a tunable interpolation weight.</li>
      </ul>
      <p className={p}>
        Each strategy trains its own student checkpoint under a shared harness (same teacher,
        data, optimizer, and top-1/top-5 accuracy tracking), so the four are directly comparable
        once training runs to completion. That comparison is the open next step. What&apos;s here
        is the four working loss implementations and the shared evaluation harness they run
        under.
      </p>
    </div>
  );
}
