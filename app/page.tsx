export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white">

      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <h1 className="text-2xl font-bold text-emerald-400">
          Smart Liquidity Dashboard
        </h1>
        <span className="text-sm text-zinc-400">
          Live Crypto Intelligence
        </span>
      </header>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 px-8 py-8">
        {[
          ["BTC Dominance", "52.4%"],
          ["Market Cap", "$1.78T"],
          ["24h Volume", "$86B"],
          ["Smart Wallets", "12,483"],
        ].map(([title, value]) => (
          <div
            key={title}
            className="rounded-2xl bg-white/5 border border-white/10 p-6"
          >
            <p className="text-sm text-zinc-400">{title}</p>
            <h3 className="text-3xl font-bold mt-2 text-emerald-400">
              {value}
            </h3>
          </div>
        ))}
      </section>

      {/* Chart + Table */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-8 pb-16">

        {/* TradingView Chart */}
        <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-white/10 bg-black">
          <iframe
            src="https://s.tradingview.com/embed-widget/advanced-chart/?symbol=BINANCE:BTCUSDT&theme=dark&style=1&locale=en&autosize=true"
            className="w-full h-[420px]"
            allowFullScreen
          />
        </div>

        {/* Top Coins */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-semibold mb-4 text-emerald-400">
            Top Assets
          </h2>

          <table className="w-full text-sm">
            <thead className="text-zinc-400 border-b border-white/10">
              <tr>
                <th className="text-left py-2">Asset</th>
                <th className="text-right">Price</th>
                <th className="text-right">24h</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["BTC", "$43,250", "+2.4%"],
                ["ETH", "$2,320", "+1.8%"],
                ["SOL", "$98.12", "+5.1%"],
                ["SUI", "$1.42", "+3.9%"],
                ["ZRO", "$3.87", "+4.6%"],
              ].map(([coin, price, change]) => (
                <tr key={coin} className="border-b border-white/5">
                  <td className="py-3 font-medium">{coin}</td>
                  <td className="text-right">{price}</td>
                  <td className="text-right text-emerald-400">{change}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-zinc-500 text-sm">
        © {new Date().getFullYear()} Smart Liquidity • Investor Grade Analytics
      </footer>

    </main>
  );
}

