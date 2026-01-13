import Link from "next/link"
import HeatmapGrid from "../components/HeatmapGrid"
import { demoSignals } from "../data/demoSignals"

export default function HeatmapPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-1">
            Smart Liquidity Heatmap
          </h1>
          <p className="text-zinc-400">
            Visual overview of whale accumulation & distribution
          </p>
        </div>

        <Link
          href="/"
          className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition"
        >
          ← Back to Dashboard
        </Link>
      </div>

      {/* Heatmap */}
      <HeatmapGrid data={demoSignals} />
    </main>
  )
}
