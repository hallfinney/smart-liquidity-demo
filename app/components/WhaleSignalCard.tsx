import { detectMarketPhase } from "@/app/lib/marketPhase"

type Props = {
  symbol: string
  name: string
  accumulation: number
  liquidity: number
  exchangeFlow: number
  priceBehavior: number
  timeframe: string
}

function calculateWhaleScore(
  accumulation: number,
  liquidity: number,
  exchangeFlow: number,
  priceBehavior: number
) {
  return Math.round(
    accumulation * 0.35 +
      liquidity * 0.25 +
      exchangeFlow * 0.25 +
      priceBehavior * 0.15
  )
}

export default function WhaleSignalCard({
  symbol,
  name,
  accumulation,
  liquidity,
  exchangeFlow,
  priceBehavior,
  timeframe,
}: Props) {
  const whaleScore = calculateWhaleScore(
    accumulation,
    liquidity,
    exchangeFlow,
    priceBehavior
  )

  const market = detectMarketPhase(
    accumulation,
    exchangeFlow,
    priceBehavior
  )

  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold">{symbol}</h3>
          <p className="text-sm text-zinc-400">{name}</p>
        </div>
        <span className="text-2xl font-bold text-emerald-400">
          {whaleScore}
        </span>
      </div>

      <p className="mt-1 text-xs text-zinc-400">Whale Score</p>

      <p className={`mt-2 text-sm font-semibold ${market.color}`}>
        {market.phase}
      </p>

      <div className="mt-4 space-y-1 text-xs text-zinc-300">
        <div>Accumulation: {accumulation}</div>
        <div>Liquidity: {liquidity}</div>
        <div>Exchange Flow: {exchangeFlow}</div>
        <div>Price Behavior: {priceBehavior}</div>
      </div>

      <p className="mt-4 text-xs text-zinc-500">
        Timeframe: {timeframe}
      </p>
    </div>
  )
}
