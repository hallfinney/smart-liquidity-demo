import PriceChart from "@/components/PriceChart"

export const dynamic = "force-dynamic"

async function getChartData(id: string) {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`,
    { cache: "no-store" }
  )
  return res.json()
}

export default async function Dashboard() {
  const btc = await getChartData("bitcoin")
  const eth = await getChartData("ethereum")

  const btcPrices = btc.prices.map((p: number[]) => p[1])
  const ethPrices = eth.prices.map((p: number[]) => p[1])

  const labels = btc.prices.map((p: number[]) =>
    new Date(p[0]).toLocaleDateString()
  )

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-8">
        Smart Liquidity Radar – Charts
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <PriceChart
          prices={btcPrices}
          labels={labels}
          symbol="BTC"
        />
        <PriceChart
          prices={ethPrices}
          labels={labels}
          symbol="ETH"
        />
      </div>
    </main>
  )
}
