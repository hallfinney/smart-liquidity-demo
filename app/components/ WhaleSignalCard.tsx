type Props = {
  symbol: string
  name: string
  signal: string
  liquidityScore: number
  confidence: "High" | "Medium" | "Low"
  timeframe: string
}

const confidenceColor = {
  High: "bg-green-500/20 text-green-400 border-green-500/30",
  Medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Low: "bg-red-500/20 text-red-400 border-red-500/30",
}

export default function WhaleSignalCard({
  symbol,
  name,
  signal,
  liquidityScore,
  confidence,
  timeframe,
}: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-6 shadow-xl hover:scale-[1.02] transition">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold">{symbol}</h3>
          <p className="text-sm text-zinc-400">{name}</p>
        </div>
        <span
          className={`px-3 py-1 text-xs rounded-full border ${confidenceColor[confidence]}`}
        >
          {confidence}
        </span>
      </div>

      <p className="mt-4 text-sm text-indigo-400 font-semibold">
        {signal}
      </p>

      <div className="mt-4">
        <div className="flex justify-between text-xs text-zinc-400 mb-1">
          <span>Liquidity Score</span>
          <span>{liquidityScore}%</span>
        </div>
        <div className="h-2 rounded bg-zinc-800">
          <div
            className="h-2 rounded bg-indigo-500"
            style={{ width: `${liquidityScore}%` }}
          />
        </div>
      </div>

      <p className="mt-4 text-xs text-zinc-500">
        Timeframe: {timeframe}
      </p>
    </div>
  )
}
