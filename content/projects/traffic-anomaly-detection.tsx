const h2 = "mt-10 text-lg font-semibold text-gray-950 dark:text-white";
const p = "mt-3 leading-relaxed text-gray-700 dark:text-white/70";
const li = "mt-2 leading-relaxed text-gray-700 dark:text-white/70";

function MlopsPipelineDiagram() {
  const boxes = [
    { x: 10, w: 140, label: "Sensor Data" },
    { x: 180, w: 170, label: "Training (MLflow + DVC)" },
    { x: 380, w: 170, label: "Serving (FastAPI + Docker)" },
    { x: 580, w: 170, label: "Prometheus / Grafana" },
  ];

  return (
    <svg
      viewBox="0 0 770 140"
      className="h-auto w-full"
      role="img"
      aria-label="Traffic anomaly pipeline: sensor data feeds an MLflow and DVC tracked training step, the resulting model is served with FastAPI and Docker, and Prometheus and Grafana monitor it in production."
    >
      <defs>
        <marker
          id="ta-arrow"
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
            y={40}
            width={box.w}
            height={56}
            rx={12}
            className="fill-white stroke-gray-300 dark:fill-white/10 dark:stroke-white/20"
            strokeWidth={1.5}
          />
          <text
            x={box.x + box.w / 2}
            y={72}
            textAnchor="middle"
            className="fill-gray-800 text-[11.5px] font-medium dark:fill-white"
          >
            {box.label}
          </text>
          {i < boxes.length - 1 && (
            <line
              x1={box.x + box.w}
              y1={68}
              x2={boxes[i + 1].x}
              y2={68}
              className="stroke-gray-400 dark:stroke-white/40"
              strokeWidth={1.5}
              markerEnd="url(#ta-arrow)"
            />
          )}
        </g>
      ))}
    </svg>
  );
}

export default function TrafficAnomalyDetectionContent() {
  return (
    <div>
      <h2 className={h2}>The infrastructure around the model</h2>
      <p className={p}>
        The focus here is what surrounds the anomaly-detection model: reproducible training,
        containerized serving, and production observability, wired together end to end.
      </p>

      <MlopsPipelineDiagram />

      <h2 className={h2}>Tracking and reproducibility</h2>
      <ul className="list-disc pl-5">
        <li className={li}>MLflow tracks experiments, parameters, and metrics across training runs.</li>
        <li className={li}>DVC versions the traffic sensor datasets and model artifacts so a run can be reproduced from the exact data it was trained on.</li>
      </ul>

      <h2 className={h2}>Serving and observability</h2>
      <ul className="list-disc pl-5">
        <li className={li}>The trained model is containerized and served through FastAPI and Docker.</li>
        <li className={li}>Prometheus scrapes serving metrics and Grafana dashboards them for real-time observability and performance tracking in production.</li>
      </ul>
    </div>
  );
}
