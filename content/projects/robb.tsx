const h2 = "mt-10 text-lg font-semibold text-gray-950 dark:text-white";
const p = "mt-3 leading-relaxed text-gray-700 dark:text-white/70";
const li = "mt-2 leading-relaxed text-gray-700 dark:text-white/70";
const th = "px-3 py-2 text-left font-semibold text-gray-700 dark:text-white/80";
const td = "px-3 py-2 text-gray-700 dark:text-white/70";

function AgentEnvLoopDiagram() {
  return (
    <svg
      viewBox="0 0 560 160"
      className="h-auto w-full"
      role="img"
      aria-label="ROBB loop: a recurrent PPO agent observes blockchain state (previous block size, average waiting time, pending transaction count, mempool growth), chooses to hold or create a block, and receives a reward that trades off waiting time against block utilization."
    >
      <defs>
        <marker
          id="robb-arrow"
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

      <rect x={20} y={40} width={190} height={70} rx={12} className="fill-white stroke-gray-300 dark:fill-white/10 dark:stroke-white/20" strokeWidth={1.5} />
      <text x={115} y={70} textAnchor="middle" className="fill-gray-800 text-[12px] font-medium dark:fill-white">Recurrent PPO</text>
      <text x={115} y={86} textAnchor="middle" className="fill-gray-800 text-[12px] font-medium dark:fill-white">Agent</text>

      <rect x={350} y={40} width={190} height={70} rx={12} className="fill-white stroke-gray-300 dark:fill-white/10 dark:stroke-white/20" strokeWidth={1.5} />
      <text x={445} y={70} textAnchor="middle" className="fill-gray-800 text-[12px] font-medium dark:fill-white">Blockchain Block-</text>
      <text x={445} y={86} textAnchor="middle" className="fill-gray-800 text-[12px] font-medium dark:fill-white">Formation Environment</text>

      <path d="M 210 60 L 350 60" fill="none" className="stroke-gray-400 dark:stroke-white/40" strokeWidth={1.5} markerEnd="url(#robb-arrow)" />
      <text x={280} y={48} textAnchor="middle" className="fill-gray-500 text-[10px] dark:fill-white/50">action: hold (0) / create block (1)</text>

      <path d="M 350 95 L 210 95" fill="none" className="stroke-gray-400 dark:stroke-white/40" strokeWidth={1.5} markerEnd="url(#robb-arrow)" />
      <text x={280} y={122} textAnchor="middle" className="fill-gray-500 text-[10px] dark:fill-white/50">reward: waiting time vs. utilization</text>
    </svg>
  );
}

export default function RobbContent() {
  return (
    <div>
      <h2 className={h2}>Balancing waiting time against block utilization</h2>
      <p className={p}>
        Bitcoin&apos;s fixed 1&nbsp;MB block size is a blunt instrument: it keeps waiting time
        bounded but leaves block space unused whenever the mempool doesn&apos;t fill it exactly.
        ROBB reframes block formation as a sequential decision problem. At each timestep, an agent
        chooses to <strong>hold</strong> (wait for more transactions) or <strong>create a block</strong>{" "}
        sized dynamically to whatever is pending, trained to trade off the two costs directly
        instead of fixing one and accepting whatever the other turns out to be.
      </p>

      <AgentEnvLoopDiagram />

      <h2 className={h2}>State, action, reward</h2>
      <ul className="list-disc pl-5">
        <li className={li}>
          <strong>Observation:</strong> previous block size, average waiting time of the last
          block, pending-transaction count in the mempool, and mempool growth rate, enough for
          the agent to judge both current backlog and its trend.
        </li>
        <li className={li}>
          <strong>Action:</strong> a binary choice between hold and create; a created block is
          sized to the mempool at that instant rather than capped at a fixed size.
        </li>
        <li className={li}>
          <strong>Reward:</strong> a weighted combination of pending-transaction utilization and
          waiting-time cost for holding, vs. block-size utilization and waiting-time cost for
          creating. The weights (<code>p_r=0.9</code>, <code>w_h=0.15</code>,{" "}
          <code>b_r=0.7</code>, <code>w_c=0.2</code>) were tuned by grid search to minimize
          waiting time across the sweep in the paper&apos;s ablation.
        </li>
      </ul>

      <h2 className={h2}>Why recurrent PPO</h2>
      <p className={p}>
        Standard PPO trained on single-timestep observations converged to creating blocks too
        often. With no memory of recent transaction history, it couldn&apos;t learn to hold
        productively. Switching to a recurrent policy and value network (RPPO) let the agent
        condition on a trajectory of past mempool state rather than one snapshot, which is what
        made patient, well-utilized block formation learnable at all.
      </p>

      <h2 className={h2}>Results</h2>
      <p className={p}>
        Simulated against a custom OpenAI Gym blockchain environment, RPPO was compared to
        vanilla PPO, DQN, and A2C on the same reward, and to fixed- and random-block-size
        baselines modeled on real Bitcoin and Ethereum block sizes:
      </p>

      <div className="mt-4 overflow-x-auto rounded-xl border border-black/10 dark:border-white/10">
        <table className="w-full min-w-[420px] border-collapse text-sm">
          <thead className="bg-gray-50 dark:bg-white/5">
            <tr>
              <th className={th}>Strategy</th>
              <th className={th}>Waiting time</th>
              <th className={th}>Block utilization</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/5 dark:divide-white/10">
            <tr><td className={td}>Fixed 1 MB (Bitcoin-like)</td><td className={td}>3.7 s</td><td className={td}>90%</td></tr>
            <tr><td className={td}>Fixed 4 MB (Ethereum-like)</td><td className={td}>13.1 s</td><td className={td}>86%</td></tr>
            <tr><td className={td}>Random block size</td><td className={td}>1.3 s</td><td className={td}>~30%</td></tr>
            <tr><td className={td}>PPO / DQN / A2C</td><td className={td}>0.3 – 1.1 s</td><td className={td}>100%*</td></tr>
            <tr className="font-medium text-gray-950 dark:text-white"><td className={td}>RPPO (proposed)</td><td className={td}>1.8 s</td><td className={td}>100%</td></tr>
          </tbody>
        </table>
      </div>
      <p className={`${p} text-sm text-gray-500 dark:text-white/50`}>
        *Non-recurrent baselines hit 100% utilization by creating a block almost every step
        (thousands of tiny blocks) instead of accumulating transactions. RPPO reached the same
        utilization with two orders of magnitude fewer blocks, which is the actual point of
        holding.
      </p>
      <p className={p}>
        Read alone, lowest-waiting-time-wins would favor the random baseline; read alongside
        utilization, it&apos;s the worst strategy in the comparison. RPPO is the only strategy that
        is simultaneously competitive on waiting time and maximal on utilization. That&apos;s the
        tradeoff the reward function was built to force.
      </p>

      <p className={`${p} text-sm text-gray-500 dark:text-white/50`}>
        Grew out of an MSc thesis on recurrent PPO for blockchain block formation, published in{" "}
        <em>IEEE Access</em>, Vol. 11 (2023).
      </p>
    </div>
  );
}
