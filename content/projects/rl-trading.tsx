const h2 = "mt-10 text-lg font-semibold text-gray-950 dark:text-white";
const p = "mt-3 leading-relaxed text-gray-700 dark:text-white/70";
const li = "mt-2 leading-relaxed text-gray-700 dark:text-white/70";
const th = "px-3 py-2 text-left font-semibold text-gray-700 dark:text-white/80";
const td = "px-3 py-2 text-gray-700 dark:text-white/70";

function WorkingProcessDiagram() {
  return (
    <svg
      viewBox="0 0 640 190"
      className="h-auto w-full"
      role="img"
      aria-label="Stock market data feeds a simulated OpenAI Gym trading environment, split into training and testing, both driving an RNN-LSTM policy network updated by Proximal Policy Optimization, which outputs buy, sell, or hold decisions and resulting profit."
    >
      <defs>
        <marker id="rt-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" className="fill-gray-400 dark:fill-white/40" />
        </marker>
      </defs>

      <rect x={10} y={70} width={130} height={50} rx={12} className="fill-white stroke-gray-300 dark:fill-white/10 dark:stroke-white/20" strokeWidth={1.5} />
      <text x={75} y={100} textAnchor="middle" className="fill-gray-800 text-[11px] font-medium dark:fill-white">Stock data</text>

      <rect x={200} y={70} width={150} height={50} rx={12} className="fill-white stroke-gray-300 dark:fill-white/10 dark:stroke-white/20" strokeWidth={1.5} />
      <text x={275} y={91} textAnchor="middle" className="fill-gray-800 text-[11px] font-medium dark:fill-white">Gym environment</text>
      <text x={275} y={106} textAnchor="middle" className="fill-gray-500 text-[10px] dark:fill-white/50">OHLCV + indicators</text>

      <rect x={410} y={70} width={150} height={50} rx={12} className="fill-white stroke-gray-300 dark:fill-white/10 dark:stroke-white/20" strokeWidth={1.5} />
      <text x={485} y={91} textAnchor="middle" className="fill-gray-800 text-[11px] font-medium dark:fill-white">RNN-LSTM policy</text>
      <text x={485} y={106} textAnchor="middle" className="fill-gray-500 text-[10px] dark:fill-white/50">trained with PPO</text>

      <rect x={200} y={150} width={360} height={34} rx={10} className="fill-white stroke-gray-300 dark:fill-white/10 dark:stroke-white/20" strokeWidth={1.5} />
      <text x={380} y={172} textAnchor="middle" className="fill-gray-800 text-[11px] font-medium dark:fill-white">Buy / Sell / Hold → profit</text>

      <line x1={140} y1={95} x2={200} y2={95} className="stroke-gray-400 dark:stroke-white/40" strokeWidth={1.5} markerEnd="url(#rt-arrow)" />
      <line x1={350} y1={95} x2={410} y2={95} className="stroke-gray-400 dark:stroke-white/40" strokeWidth={1.5} markerEnd="url(#rt-arrow)" />
      <line x1={485} y1={120} x2={430} y2={150} className="stroke-gray-400 dark:stroke-white/40" strokeWidth={1.5} markerEnd="url(#rt-arrow)" />
    </svg>
  );
}

export default function RlTradingContent() {
  return (
    <div>
      <h2 className={h2}>Trading as sequential decision-making</h2>
      <p className={p}>
        Rather than forecasting next-day price (which supervised models are bad at, given how
        volatile the market is), this frames trading as sequential decision-making: an agent
        observes recent price history and account state, chooses to buy, sell, or hold, and is
        rewarded for the profit that choice compounds into. Training data is real historical
        OHLCV pulled from Yahoo Finance (Apple, Microsoft, IBM), inside a custom OpenAI Gym
        environment.
      </p>

      <WorkingProcessDiagram />

      <ul className="list-disc pl-5">
        <li className={li}>
          <strong>State:</strong> the last 5 days of price data (scaled 0–1), plus account balance,
          shares held, total shares sold, and total sales value, plus whichever technical
          indicators that phase was testing.
        </li>
        <li className={li}>
          <strong>Action:</strong> number of shares to buy, sell, or hold at the current step.
        </li>
        <li className={li}>
          <strong>Reward:</strong> current balance scaled by a delay modifier
          (<code>timestep / max_timesteps</code>), which biases the agent toward compounding
          long-run profit over grabbing an early gain and sitting out.
        </li>
      </ul>

      <h2 className={h2}>Three phases to a stable agent</h2>
      <ul className="list-disc pl-5">
        <li className={li}>
          <strong>Preliminary:</strong> A2C first, dropped for inconsistent results; switched to an
          RNN-LSTM policy, which profited in 8/10 runs but still wasn&apos;t reliable. Optuna
          hyperparameter tuning on top of it didn&apos;t fix that.
        </li>
        <li className={li}>
          <strong>Secondary (indicator search):</strong> swept 50 random sets of technical
          indicators (RSI, MACD, Bollinger Bands, money-flow and volatility families, etc.),
          10 runs per set, to find which combination gives stable output across companies. Best
          set (<code>volatility_dcl</code>, <code>volatility_bbm</code>, <code>trend_ema_fast</code>,{" "}
          <code>volume_fi</code>, <code>volatility_dchi</code>, <code>volatility_bbh</code>,
          alongside the five base OHLCV features) returned $1,760.56 simulated profit, well
          ahead of the next-best set.
        </li>
        <li className={li}>
          <strong>Final:</strong> Optuna-tuned PPO hyperparameters (16 epochs, minibatch 128, γ=0.91,
          GAE λ=0.94, learning rate 0.0021 vs. Stable-Baselines defaults) with the RNN-LSTM policy,
          plus 8 manually chosen indicator sets. Each was benchmarked against a human trader working
          the same indicators on TradingView.
        </li>
      </ul>

      <h2 className={h2}>Beating the manual benchmark</h2>
      <p className={p}>
        Across all 8 indicator sets in the final phase, the trained agent outperformed manual
        trading on the identical indicators. In the best case, it nearly doubled the human
        trader&apos;s profit ($968 manual vs. $1,958.40 agent).
      </p>

      <div className="mt-4 overflow-x-auto rounded-xl border border-black/10 dark:border-white/10">
        <table className="w-full min-w-[380px] border-collapse text-sm">
          <thead className="bg-gray-50 dark:bg-white/5">
            <tr>
              <th className={th}>Algorithm</th>
              <th className={th}>Policy network</th>
              <th className={th}>Profit</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/5 dark:divide-white/10">
            <tr className="font-medium text-gray-950 dark:text-white"><td className={td}>PPO (proposed)</td><td className={td}>RNN-LSTM</td><td className={td}>$2,037.00</td></tr>
            <tr><td className={td}>PPO</td><td className={td}>DNN</td><td className={td}>$1,854.34</td></tr>
            <tr><td className={td}>PPO</td><td className={td}>RNN</td><td className={td}>$1,421.33</td></tr>
            <tr><td className={td}>A2C</td><td className={td}>DNN</td><td className={td}>$1,254.72</td></tr>
            <tr><td className={td}>A2C</td><td className={td}>RNN-LSTM</td><td className={td}>$854.14</td></tr>
            <tr><td className={td}>TRPO</td><td className={td}>DNN</td><td className={td}>$712.29</td></tr>
          </tbody>
        </table>
      </div>

      <p className={`${p} text-sm text-gray-500 dark:text-white/50`}>
        BSc thesis, BRAC University (2020), with Md Sultan Parvez and Partho Talukdar, supervised
        by Mahbubul Alam Majumdar, PhD.
      </p>
    </div>
  );
}
