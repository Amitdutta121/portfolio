const h2 = "mt-10 text-lg font-semibold text-gray-950 dark:text-white";
const p = "mt-3 leading-relaxed text-gray-700 dark:text-white/70";
const li = "mt-2 leading-relaxed text-gray-700 dark:text-white/70";

function AudioPipelineDiagram() {
  const main = [
    { x: 10, label: "Hotkey Press" },
    { x: 150, label: "Mic Capture" },
    { x: 290, label: "Silero VAD" },
    { x: 430, label: "Local ASR" },
    { x: 570, label: "Insert into App" },
  ];

  return (
    <svg
      viewBox="0 0 730 220"
      className="h-auto w-full"
      role="img"
      aria-label="Flowr pipeline: hotkey press, mic capture, Silero VAD endpointing, local ASR, then either directly or via optional local LLM cleanup, insert into the focused app."
    >
      <defs>
        <marker
          id="fl-arrow"
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

      {main.map((box, i) => (
        <g key={box.label}>
          <rect
            x={box.x}
            y={30}
            width={120}
            height={56}
            rx={12}
            className="fill-white stroke-gray-300 dark:fill-white/10 dark:stroke-white/20"
            strokeWidth={1.5}
          />
          <text
            x={box.x + 60}
            y={63}
            textAnchor="middle"
            className="fill-gray-800 text-[11.5px] font-medium dark:fill-white"
          >
            {box.label}
          </text>
          {i < main.length - 1 && (
            <line
              x1={box.x + 120}
              y1={58}
              x2={main[i + 1].x}
              y2={58}
              className="stroke-gray-400 dark:stroke-white/40"
              strokeWidth={1.5}
              markerEnd="url(#fl-arrow)"
            />
          )}
        </g>
      ))}

      {/* optional branch: Local ASR -> LLM cleanup -> merge before Insert */}
      <line x1={490} y1={86} x2={490} y2={130} className="stroke-gray-400 dark:stroke-white/40" strokeWidth={1.5} strokeDasharray="4 3" markerEnd="url(#fl-arrow)" />
      <rect x={430} y={130} width={120} height={56} rx={12} className="fill-white stroke-gray-300 dark:fill-white/10 dark:stroke-white/20" strokeWidth={1.5} strokeDasharray="4 3" />
      <text x={490} y={155} textAnchor="middle" className="fill-gray-800 text-[10.5px] font-medium dark:fill-white">
        Local LLM
      </text>
      <text x={490} y={169} textAnchor="middle" className="fill-gray-800 text-[10.5px] font-medium dark:fill-white">
        cleanup (Ollama)
      </text>
      <path
        d="M 550 158 C 650 158, 650 90, 630 86"
        fill="none"
        className="stroke-gray-400 dark:stroke-white/40"
        strokeWidth={1.5}
        strokeDasharray="4 3"
        markerEnd="url(#fl-arrow)"
      />
      <text x={600} y={205} textAnchor="middle" className="fill-gray-500 text-[10px] dark:fill-white/50">
        optional, per-app style
      </text>
    </svg>
  );
}

export default function FlowrContent() {
  return (
    <div>
      <h2 className={h2}>The pipeline</h2>
      <p className={p}>
        Hold a hotkey, speak, release. The transcription lands in whatever app has focus, entirely
        on-device, with no account, no cloud, and no telemetry.
      </p>

      <AudioPipelineDiagram />

      <h2 className={h2}>Local speech and language processing</h2>
      <ul className="list-disc pl-5">
        <li className={li}>
          Local speech-to-text via Whisper (GGUF) and Parakeet / Moonshine (ONNX) families, with
          Silero VAD endpointing and per-device mic selection.
        </li>
        <li className={li}>
          An optional local-LLM pass through Ollama removes fillers and fixes grammar before
          insertion, at a None / Light / Medium level, with per-app <strong>Style</strong> context.
        </li>
        <li className={li}>
          A dictionary handles term replacement and cleanup-prompt biasing; snippets let spoken
          triggers expand to literal text or an LLM-generated block mid-dictation; transforms rewrite
          the current selection in any app through a prompt.
        </li>
        <li className={li}>
          A fine-tuned speech-correction model keeps latency low without a round trip to a larger
          cleanup model for common corrections.
        </li>
      </ul>

      <h2 className={h2}>Shipped as a real product</h2>
      <p className={p}>
        Day-grouped transcript history with full-text search (SQLite FTS5), usage insights, global
        hotkeys, tray integration, autostart, and installer packaging (NSIS + MSI), built for daily
        use rather than a demo. Flowr started as a fork of{" "}
        <a
          href="https://github.com/cjpais/Handy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          Handy
        </a>
        , rebranded and relicensed to Apache-2.0, extended toward feature parity with commercial
        dictation tools.
      </p>
    </div>
  );
}
