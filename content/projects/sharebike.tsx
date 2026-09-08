const h2 = "mt-10 text-lg font-semibold text-gray-950 dark:text-white";
const p = "mt-3 leading-relaxed text-gray-700 dark:text-white/70";
const li = "mt-2 leading-relaxed text-gray-700 dark:text-white/70";

function SystemDiagram() {
  return (
    <svg
      viewBox="0 0 700 180"
      className="h-auto w-full"
      role="img"
      aria-label="Sharebike system: the React Native mobile app talks to Spring Boot fleet-management microservices, which ingest real-time bike telemetry through Google Cloud Pub/Sub across regions."
    >
      <defs>
        <marker
          id="sb-arrow"
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

      <rect x={10} y={60} width={160} height={60} rx={12} className="fill-white stroke-gray-300 dark:fill-white/10 dark:stroke-white/20" strokeWidth={1.5} />
      <text x={90} y={86} textAnchor="middle" className="fill-gray-800 text-[11.5px] font-medium dark:fill-white">Mobile App</text>
      <text x={90} y={101} textAnchor="middle" className="fill-gray-500 text-[10px] dark:fill-white/50">React Native</text>

      <rect x={270} y={60} width={190} height={60} rx={12} className="fill-white stroke-gray-300 dark:fill-white/10 dark:stroke-white/20" strokeWidth={1.5} />
      <text x={365} y={86} textAnchor="middle" className="fill-gray-800 text-[11.5px] font-medium dark:fill-white">Fleet Microservices</text>
      <text x={365} y={101} textAnchor="middle" className="fill-gray-500 text-[10px] dark:fill-white/50">Spring Boot</text>

      <rect x={550} y={60} width={140} height={60} rx={12} className="fill-white stroke-gray-300 dark:fill-white/10 dark:stroke-white/20" strokeWidth={1.5} />
      <text x={620} y={86} textAnchor="middle" className="fill-gray-800 text-[11.5px] font-medium dark:fill-white">Pub/Sub</text>
      <text x={620} y={101} textAnchor="middle" className="fill-gray-500 text-[10px] dark:fill-white/50">bike telemetry</text>

      <line x1={170} y1={90} x2={270} y2={90} className="stroke-gray-400 dark:stroke-white/40" strokeWidth={1.5} markerEnd="url(#sb-arrow)" />
      <text x={220} y={78} textAnchor="middle" className="fill-gray-500 text-[10px] dark:fill-white/50">rides, payments</text>

      <line x1={550} y1={90} x2={460} y2={90} className="stroke-gray-400 dark:stroke-white/40" strokeWidth={1.5} markerEnd="url(#sb-arrow)" />
      <text x={505} y={78} textAnchor="middle" className="fill-gray-500 text-[10px] dark:fill-white/50">events</text>

      <text x={365} y={30} textAnchor="middle" className="fill-gray-500 text-[10px] dark:fill-white/50">
        multi-region, real-time device data
      </text>
    </svg>
  );
}

export default function SharebikeContent() {
  return (
    <div>
      <h2 className={h2}>Two systems, one product</h2>
      <p className={p}>
        Sharebike is a white-label bike-sharing platform: a React Native mobile app on the rider
        side, and Spring Boot fleet-management microservices on the operations side, connected by
        event-driven ingestion of real-time bike telemetry.
      </p>

      <SystemDiagram />

      <h2 className={h2}>Mobile</h2>
      <ul className="list-disc pl-5">
        <li className={li}>Firebase Authentication and Stripe payments for the rider flow.</li>
        <li className={li}>CircleCI automated deployments with CodePush over-the-air updates.</li>
        <li className={li}>A reusable component library and release workflow shared across app variants for different white-label deployments.</li>
      </ul>

      <h2 className={h2}>Backend</h2>
      <ul className="list-disc pl-5">
        <li className={li}>Spring Boot microservices for multi-region fleet operations.</li>
        <li className={li}>Google Cloud Pub/Sub event-driven ingestion for real-time device-data processing across the fleet: bike location, lock state, and battery telemetry arrive as a continuous event stream rather than polled reads.</li>
      </ul>
    </div>
  );
}
