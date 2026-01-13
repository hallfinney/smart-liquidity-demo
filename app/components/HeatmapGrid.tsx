"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import HeatmapTooltip from "./HeatmapTooltip"

type HeatmapCoin = {
  symbol: string
  name: string
  liquidityScore: number
  signal: string
  confidence: string
  timeframe: string
  coingeckoId: string
}

type PriceMap = {
  [key: string]: {
    usd: number
    usd_24h_change: number
  }
}

function getHeatColor(score: number) {
  if (score >= 80) return "bg-green-600"
  if (score >= 60) return "bg-green-500"
  if (score >= 40) return "bg-yellow-500"
  if (score >= 20) return "bg-orange-500"
  return "bg-red-600"
}

export default function HeatmapGrid({ data }: { data: HeatmapCoin[] }) {
  const [prices, setPrices] = useState<PriceMap>({})
  const [hovered, setHovered] = useState<string | null>(null)

  useEffect(() => {
    const ids = data.map(c => c.coingeckoId).join(",")
    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`
    )
      .then(res => res.json())
      .then(setPrices)
      .catch(console.error)
  }, [data])

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
      {data.map((coin) => {
        const priceData = prices[coin.coingeckoId]

        return (
          <div
            key={coin.symbol}
            className="relative"
            onMouseEnter={() => setHovered(coin.symbol)}
            onMouseLeave={() => setHovered(null)}
          >
            {hovered === coin.symbol && (
              <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                <HeatmapTooltip
                  signal={coin.signal}
                  liquidityScore={coin.liquidityScore}
                  confidence={coin.confidence}
                />
              </div>
            )}

            <Link
              href={`/coin/${coin.symbol.toLowerCase()}`}
              className={`block rounded-xl p-4 transition hover:scale-105
                ${getHeatColor(coin.liquidityScore)}`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-lg">{coin.symbol}</span>
                <span className="text-xs opacity-80">{coin.timeframe}</span>
              </div>

              <div className="text-sm opacity-90 mb-1">{coin.name}</div>

              {priceData && (
                <div className="text-xs mb-1">
                  💲 {priceData.usd.toFixed(2)}{" "}
                  <span
                    className={
                      priceData.usd_24h_change >= 0
                        ? "text-green-300"
                        : "text-red-300"
                    }
                  >
                    ({priceData.usd_24h_change.toFixed(2)}%)
                  </span>
                </div>
              )}

              <div className="text-xs">
                Liquidity Score:{" "}
                <span className="font-semibold">{coin.liquidityScore}</span>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
