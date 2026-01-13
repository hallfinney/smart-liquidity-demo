import Link from "next/link"

interface Props {
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
}: Props) {
  return (
    <Link href={`/coin/${symbol.toLowerCase()}`}>
      <div className="cursor-pointer bg-zinc-900 rounded-xl p-6 border border-zinc-800 hover:border-indigo-500 transition">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h3 className="text-xl font-bold">{symbol}</h3>
            <p className="text-zinc-400 text-sm">{name}</p>
          </div>

          <span className="text-xs px-3 py-1 rounded-full bg-zinc-800">
            {confidence}
          </span>
        </div>

        <p className="text-indigo-400 font-medium mb-4">{signal}</p>

        <div className="mb-2">
          <p className="text-sm text-zinc-400 mb-1">Liquidity Score</p>
          <div className="w-full h-2 bg-zinc-800 rounded">
            <div
              className="h-2 bg-indigo-500 rounded"
              style={{ width: `${liquidityScore}%` }}
            />
          </div>
        </div>

        <p className="text-xs text-zinc-500 mt-3">
          Timeframe: {timeframe}
        </p>
      </div>
    </Link>
  )
}
