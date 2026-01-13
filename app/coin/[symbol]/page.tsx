import { demoSignals } from "@/app/data/demoSignals"

type Props = {
  params: {
    symbol: string
  }
}

export default function CoinPage({ params }: Props) {
  const coin = demoSignals.find(
    (c) => c.symbol.toLowerCase() === params.symbol.toLowerCase()
  )

  if (!coin) {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        Coin not found
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white p-8 space-y-8">
      <section>
        <h1 className="text-4xl font-bold">
          {coin.name} ({coin.symbol})
        </h1>
        <p className="text-zinc-400 mt-2">
          Smart money & whale activity overview
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <p className="text-zinc-400 text-sm">Whale Signal</p>
          <p className="text-xl font-bold mt-1">{coin.signal}</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <p className="text-zinc-400 text-sm">Liquidity Score</p>
          <p className="text-xl font-bold mt-1">
            {coin.liquidityScore}/100
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <p className="text-zinc-400 text-sm">Confidence</p>
          <p className="text-xl font-bold mt-1">
            {coin.confidence}%
          </p>
        </div>
      </section>
    </main>
  )
}
