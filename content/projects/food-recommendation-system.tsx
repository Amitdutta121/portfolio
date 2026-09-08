const h2 = "mt-10 text-lg font-semibold text-gray-950 dark:text-white";
const p = "mt-3 leading-relaxed text-gray-700 dark:text-white/70";
const li = "mt-2 leading-relaxed text-gray-700 dark:text-white/70";

function SimilarityDiagram() {
  return (
    <svg
      viewBox="0 0 640 170"
      className="h-auto w-full"
      role="img"
      aria-label="A target user's preference vector is compared against all other users by similarity, the nearest neighbors are selected, and the items they liked that the target user hasn't tried are returned as recommendations."
    >
      <defs>
        <marker id="fr-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" className="fill-gray-400 dark:fill-white/40" />
        </marker>
      </defs>

      <rect x={10} y={60} width={160} height={50} rx={12} className="fill-white stroke-gray-300 dark:fill-white/10 dark:stroke-white/20" strokeWidth={1.5} />
      <text x={90} y={81} textAnchor="middle" className="fill-gray-800 text-[11.5px] font-medium dark:fill-white">User preferences</text>
      <text x={90} y={96} textAnchor="middle" className="fill-gray-500 text-[10px] dark:fill-white/50">order/rating history</text>

      <rect x={240} y={60} width={160} height={50} rx={12} className="fill-white stroke-gray-300 dark:fill-white/10 dark:stroke-white/20" strokeWidth={1.5} />
      <text x={320} y={81} textAnchor="middle" className="fill-gray-800 text-[11.5px] font-medium dark:fill-white">Nearest neighbors</text>
      <text x={320} y={96} textAnchor="middle" className="fill-gray-500 text-[10px] dark:fill-white/50">similar users</text>

      <rect x={470} y={60} width={160} height={50} rx={12} className="fill-white stroke-gray-300 dark:fill-white/10 dark:stroke-white/20" strokeWidth={1.5} />
      <text x={550} y={81} textAnchor="middle" className="fill-gray-800 text-[11.5px] font-medium dark:fill-white">Recommendations</text>
      <text x={550} y={96} textAnchor="middle" className="fill-gray-500 text-[10px] dark:fill-white/50">unseen items, ranked</text>

      <line x1={170} y1={85} x2={240} y2={85} className="stroke-gray-400 dark:stroke-white/40" strokeWidth={1.5} markerEnd="url(#fr-arrow)" />
      <line x1={400} y1={85} x2={470} y2={85} className="stroke-gray-400 dark:stroke-white/40" strokeWidth={1.5} markerEnd="url(#fr-arrow)" />
    </svg>
  );
}

export default function FoodRecommendationSystemContent() {
  return (
    <div>
      <h2 className={h2}>Preference-based recommendation</h2>
      <p className={p}>
        A compact recommender built for the Pathao Challenge 2019 food-delivery dataset (user,
        item, restaurant, cuisine, and order-time features). Instead of a content model per
        restaurant, it recommends by <strong>proximity in preference space</strong>: encode each
        user&apos;s order history into a feature vector, find the users whose vectors are closest,
        and surface the items they liked that the target user hasn&apos;t ordered yet.
      </p>

      <SimilarityDiagram />

      <h2 className={h2}>Pipeline</h2>
      <ul className="list-disc pl-5">
        <li className={li}>
          Categorical fields (cuisine, category, restaurant) label-encoded into a numeric feature
          space alongside order-time features (day of week, hour of day, item count).
        </li>
        <li className={li}>
          Distance-based neighbor lookup over that feature space to group users with similar
          ordering behavior, then rank candidate items by how often a user&apos;s neighbors ordered
          them.
        </li>
        <li className={li}>
          Deliberately simple. A baseline collaborative-filtering approach rather than a
          learned ranking model, scoped to what a small labeled dataset supports.
        </li>
      </ul>
    </div>
  );
}
