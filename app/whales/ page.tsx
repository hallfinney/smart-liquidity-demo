import WhaleFlowCard from "@/app/components/WhaleFlowCard"
import { whaleFlows } from "@/app/data/whaleFlows"

export default function WhaleWalletsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-10">
      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-2">
          Whale Wallets Flow
        </h1>
        <p className="text-zinc-400">
          Tracking large wallet inflows & accumulation behavior
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {whaleFlows.map((coin) => (
          <WhaleFlowCard
            key={coin.symbol}
            symbol={coin.symbol}
            name={coin.name}
            inflow={coin.inflow}
            outflow={coin.outflow}
            netflow={coin.netflow}
            trend={coin.trend}
          />
        ))}
      </section>

      <footer className="mt-12">
        <a href="/" className="text-zinc-400 hover:text-white">
          ← Back to Dashboard
        </a>
      </footer>
    </main>
  )
}
