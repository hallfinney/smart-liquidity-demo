interface WhaleSignalCardProps {
  symbol: string
  name: string
  signal: string
  liquidityScore: number
  confidence: string
  timeframe: string
}

export default function WhaleSignalCard({
  symbol,
  name,
  signal,
  liquidityScore,
  confidence,
  timeframe,
}: WhaleSignalCardProps) {
  return (
    <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-6 space-y-4">

      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">{symbol}</h3>
        <span className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-300">
          {confidence}
        </span>
      </div>

      <p className="text-sm text-zinc-400">{name}</p>

      <p className="text-indigo-400 font-medium">{signal}</p>

      <div>
        <p className="text-xs text-zinc-500 mb-1">Liquidity Score</p>
        <div className="w-full bg-zinc-800 h-2 rounded">
          <div
            className="bg-indigo-500 h-2 rounded"
            style={{ width: `${liquidityScore}%` }}
          />
        </div>
      </div>

      <p className="text-xs text-zinc-500">Timeframe: {timeframe}</p>

    </div>
  )
}
