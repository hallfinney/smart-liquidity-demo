import WhaleSignalCard from "@/app/components/WhaleSignalCard"
import { demoSignals } from "@/app/data/demoSignals"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-2">
        Smart Liquidity Radar
      </h1>

      <p className="text-zinc-400 mb-8">
        Tracking whale accumulation & smart money behavior
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {demoSignals.map((coin) => (
          <WhaleSignalCard
            key={coin.symbol}
            symbol={coin.symbol}
            name={coin.name}
            accumulation={coin.accumulation}
            liquidity={coin.liquidity}
            exchangeFlow={coin.exchangeFlow}
            priceBehavior={coin.priceBehavior}
            timeframe={coin.timeframe}
          />
        ))}
      </div>
    </main>
  )
}
