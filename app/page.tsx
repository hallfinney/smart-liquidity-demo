type Coin = {
  id: string
  symbol: string
  name: string
  current_price: number
  price_change_percentage_24h: number
}

async function getCoins(): Promise<Coin[]> {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false",
    { next: { revalidate: 60 } } // تحديث كل دقيقة
  )

  return res.json()
}

export default async function Dashboard() {
  const coins = await getCoins()

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white">

      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <h1 className="text-2xl font-bold text-emerald-400">
          Smart Liquidity Dashboard
        </h1>
        <span className="text-sm text-zinc-400">
          Live Crypto Data
        </span>
      </header>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 px-8 py-8">
        <Stat title="Tracked Assets" value={coins.length.toString()} />
        <Stat title="Market" value="Crypto" />
        <Stat title="Data Source" value="CoinGecko" />
        <Stat title="Refresh" value="60s" />
      </section>

      {/* Chart + Table */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-8 pb-16">

        {/* Chart */}
        <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-white/10 bg-black">
          <iframe
            src="https://s.tradingview.com/embed-widget/advanced-chart/?symbol=BINANCE:BTCUSDT&theme=dark&autosize=true"
            className="w-full h-[420px]"
            allowFullScreen
          />
        </div>

        {/* Live Coins */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-semibold mb-4 text-emerald-400">
            Live Market
          </h2>

          <table className="w-full text-sm">
            <thead className="text-zinc-400 border-b border-white/10">
              <tr>
                <th className="text-left py-2">Coin</th>
                <th className="text-right">Price</th>
                <th className="text-right">24h</th>
              </tr>
            </thead>
            <tbody>
              {coins.map((coin) => (
                <tr key={coin.id} className="border-b border-white/5">
                  <td className="py-3 font-medium uppercase">
                    {coin.symbol}
                  </td>
                  <td className="text-right">
                    ${coin.current_price.toLocaleString()}
                  </td>
                  <td
                    className={`text-right font-semibold ${
                      coin.price_change_percentage_24h >= 0
                        ? "text-emerald-400"
                        : "text-red-400"
                    }`}
                  >
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </section>

      <footer className="border-t border-white/10 py-6 text-center text-zinc-500 text-sm">
        © {new Date().getFullYear()} Smart Liquidity • Live Market Data
      </footer>
    </main>
  )
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
      <p className="text-sm text-zinc-400">{title}</p>
      <h3 className="text-3xl font-bold mt-2 text-emerald-400">
        {value}
      </h3>
    </div>
  )
}
