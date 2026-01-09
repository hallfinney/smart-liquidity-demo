export const dynamic = "force-dynamic"

type Coin = {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  price_change_percentage_24h: number
  total_volume: number
  market_cap: number
}

async function getCoins(): Promise<Coin[]> {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,sui,layerzero&order=market_cap_desc&sparkline=false",
    { cache: "no-store" } // 🔥 Live حقيقي
  )

  if (!res.ok) {
    throw new Error("Failed to fetch crypto data")
  }

  return res.json()
}

export default async function Dashboard() {
  const coins = await getCoins()

  return (
    <main className="min-h-screen bg-black text-white p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold">Smart Liquidity Radar</h1>
          <p className="text-gray-400 mt-1">
            Real-time crypto market & smart money overview
          </p>
        </div>
        <span className="px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm">
          LIVE
        </span>
      </div>

      {/* Coins Table */}
      <div className="overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full">
          <thead className="bg-white/5">
            <tr className="text-left text-gray-400 text-sm">
              <th className="p-4">Asset</th>
              <th className="p-4">Price</th>
              <th className="p-4">24h</th>
              <th className="p-4">Volume</th>
              <th className="p-4">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <tr
                key={coin.id}
                className="border-t border-white/10 hover:bg-white/5 transition"
              >
                <td className="p-4 flex items-center gap-3">
                  <img
                    src={coin.image}
                    alt={coin.name}
                    className="w-7 h-7"
                  />
                  <div>
                    <div className="font-semibold">{coin.symbol.toUpperCase()}</div>
                    <div className="text-xs text-gray-400">{coin.name}</div>
                  </div>
                </td>

                <td className="p-4 font-medium">
                  ${coin.current_price.toLocaleString()}
                </td>

                <td
                  className={`p-4 font-medium ${
                    coin.price_change_percentage_24h >= 0
                      ? "text-emerald-400"
                      : "text-red-400"
                  }`}
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>

                <td className="p-4 text-gray-300">
                  ${coin.total_volume.toLocaleString()}
                </td>

                <td className="p-4 text-gray-300">
                  ${coin.market_cap.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <p className="text-xs text-gray-500 mt-6">
        Data provided by CoinGecko • Updated in real-time
      </p>
    </main>
  )
}
