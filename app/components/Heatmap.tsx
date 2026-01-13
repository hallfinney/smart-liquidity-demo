import Link from "next/link"
import { HeatmapItem } from "@/app/data/heatmapData"

type Props = {
  data: HeatmapItem[]
}

export default function Heatmap({ data }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
      {data.map((coin) => {
        const positive = coin.netflow > 0

        return (
          <Link
            key={coin.symbol}
            href={`/coin/${coin.symbol}`}
            className={`rounded-xl p-4 text-center border transition
              ${
                positive
                  ? "bg-green-500/20 border-green-500/30 hover:bg-green-500/30"
                  : "bg-red-500/20 border-red-500/30 hover:bg-red-500/30"
              }`}
          >
            <div className="text-lg font-bold text-white">
              {coin.symbol}
            </div>

            <div className="text-xs text-zinc-400">
              {coin.name}
            </div>

            <div
              className={`mt-2 text-sm font-semibold ${
                positive ? "text-green-400" : "text-red-400"
              }`}
            >
              {positive ? "+" : ""}
              {coin.netflow}M
            </div>
          </Link>
        )
      })}
    </div>
  )
}
