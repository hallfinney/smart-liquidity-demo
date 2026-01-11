"use client"

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip
)

type Props = {
  prices: number[]
  labels: string[]
  symbol: string
}

export default function PriceChart({ prices, labels, symbol }: Props) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
      <h3 className="mb-3 font-semibold">{symbol} Price (7D)</h3>

      <Line
        data={{
          labels,
          datasets: [
            {
              label: symbol,
              data: prices,
              borderWidth: 2,
              tension: 0.4,
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: { display: false },
          },
          scales: {
            x: { display: false },
            y: { display: true },
          },
        }}
      />
    </div>
  )
}
