import HeatmapGrid from "./components/HeatmapGrid"
import WhaleSignalCard from "./components/WhaleSignalCard"
import { demoSignals } from "./data/demoSignals"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-8 space-y-12">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold mb-2">
          Smart Liquidity Radar
        </h1>
        <p className="text-zinc-400">
          Tracking whale accumulation & smart money behavior
        </p>
      </div>

      {/* HEATMAP */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Market Heatmap</h2>
        <HeatmapGrid />
      </section>

      {/* WHALE SIGNALS */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Whale Signals</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {demoSignals.map((coin) => (
            <WhaleSignalCard
              key={coin.symbol}
              symbol={coin.symbol}
              name={coin.name}
              signal={coin.signal}
              liquidityScore={coin.liquidityScore}
              confidence={coin.confidence}
              timeframe={coin.timeframe}
            />
          ))}
        </div>
      </section>

    </main>
  )
}
