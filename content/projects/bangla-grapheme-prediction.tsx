const h2 = "mt-10 text-lg font-semibold text-gray-950 dark:text-white";
const p = "mt-3 leading-relaxed text-gray-700 dark:text-white/70";
const li = "mt-2 leading-relaxed text-gray-700 dark:text-white/70";

function MultiHeadDiagram() {
  const heads = [
    { y: 20, label: "Grapheme root", sub: "168 classes" },
    { y: 90, label: "Vowel diacritic", sub: "11 classes" },
    { y: 160, label: "Consonant diacritic", sub: "7 classes" },
  ];

  return (
    <svg
      viewBox="0 0 640 200"
      className="h-auto w-full"
      role="img"
      aria-label="A handwritten grapheme image feeds a shared SEResNeXt50 backbone, which branches into three classification heads: grapheme root with 168 classes, vowel diacritic with 11 classes, and consonant diacritic with 7 classes, combined into one weighted macro-recall score."
    >
      <defs>
        <marker id="bg-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" className="fill-gray-400 dark:fill-white/40" />
        </marker>
      </defs>

      <rect x={10} y={80} width={110} height={50} rx={12} className="fill-white stroke-gray-300 dark:fill-white/10 dark:stroke-white/20" strokeWidth={1.5} />
      <text x={65} y={109} textAnchor="middle" className="fill-gray-800 text-[11.5px] font-medium dark:fill-white">Input image</text>

      <rect x={190} y={80} width={140} height={50} rx={12} className="fill-white stroke-gray-300 dark:fill-white/10 dark:stroke-white/20" strokeWidth={1.5} />
      <text x={260} y={101} textAnchor="middle" className="fill-gray-800 text-[11.5px] font-medium dark:fill-white">SEResNeXt50</text>
      <text x={260} y={116} textAnchor="middle" className="fill-gray-500 text-[10px] dark:fill-white/50">shared backbone</text>

      <line x1={120} y1={105} x2={190} y2={105} className="stroke-gray-400 dark:stroke-white/40" strokeWidth={1.5} markerEnd="url(#bg-arrow)" />

      {heads.map((head) => (
        <g key={head.label}>
          <line x1={330} y1={105} x2={440} y2={head.y + 25} className="stroke-gray-400 dark:stroke-white/40" strokeWidth={1.5} markerEnd="url(#bg-arrow)" />
          <rect x={440} y={head.y} width={190} height={50} rx={12} className="fill-white stroke-gray-300 dark:fill-white/10 dark:stroke-white/20" strokeWidth={1.5} />
          <text x={535} y={head.y + 21} textAnchor="middle" className="fill-gray-800 text-[11.5px] font-medium dark:fill-white">{head.label}</text>
          <text x={535} y={head.y + 36} textAnchor="middle" className="fill-gray-500 text-[10px] dark:fill-white/50">{head.sub}</text>
        </g>
      ))}
    </svg>
  );
}

export default function BanglaGraphemePredictionContent() {
  return (
    <div>
      <h2 className={h2}>Why grapheme recognition is a multi-label problem</h2>
      <p className={p}>
        Bengali handwriting doesn&apos;t reduce to single-character classification: each glyph is
        composed of a grapheme root, an optional vowel diacritic, and an optional consonant
        diacritic, combined into thousands of visually distinct graphemes from only 168 root, 11
        vowel, and 7 consonant components. The Kaggle competition (Bengali.AI Handwritten Grapheme
        Classification) scores all three independently, so the model has to predict three labels
        per image, not one.
      </p>

      <MultiHeadDiagram />

      <h2 className={h2}>Model and pipeline</h2>
      <ul className="list-disc pl-5">
        <li className={li}>
          A shared <strong>SEResNeXt50</strong> (<code>se_resnext50_32x4d</code>) backbone with
          three linear classification heads, one per label, trained jointly.
        </li>
        <li className={li}>
          Data loaded from <strong>feather</strong> files instead of the source Parquet: roughly
          2s per shard vs. ~60s. That&apos;s the difference between iterating on augmentation
          choices in an afternoon vs. a day.
        </li>
        <li className={li}>
          Augmentation stack: affine transforms (rotation, scale, shear, translation) plus
          albumentations (grid distortion, cutout, piecewise affine, brightness/contrast, blur and
          Gaussian noise), needed because the same grapheme is drawn with real variation in stroke
          weight and slant across writers.
        </li>
        <li className={li}>
          Training loop built on <strong>pytorch-ignite</strong> (<code>Engine</code>/
          <code>Events</code>), Adam at lr 1e-3 with <code>ReduceLROnPlateau</code>, over 100
          epochs.
        </li>
        <li className={li}>
          Metric: macro recall per head, combined as a weighted average (root weighted 2x vowel
          and consonant, matching the competition&apos;s own scoring) rather than plain accuracy.
          Root prediction is both the harder problem (168-way) and the one the score cares about
          most.
        </li>
      </ul>

      <p className={`${p} text-sm text-gray-500 dark:text-white/50`}>
        Backbone and training-loop scaffolding adapted from the public SEResNeXt reference kernel
        for this competition; the multi-head classifier, augmentation tuning, and training runs
        are this submission&apos;s work.
      </p>
    </div>
  );
}
