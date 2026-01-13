import Heatmap from "@/app/components/Heatmap"
import WhaleTable from "@/app/components/WhaleTable"
import { heatmapData } from "@/app/data/heatmapData"
import { whaleFlows } from "@/app/data/whaleFlows"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-8 space-y-12">
      
      {/* Header */}
      <section>
        <h1 className="text-3xl font-bold mb-2">
          Smart Liquidity Radar
        </h1>
        <p className="text-zinc-400">
          Whale accumulation & smart money tracking
        </p>
      </section>

      {/* Heatmap */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Whale Accumulation Heatmap
        </h2>
        <Heatmap data={heatmapData} />
      </section>

      {/* Whale Table */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Whale Flow Table
        </h2>
        <WhaleTable data={whaleFlows} />
      </section>

    </main>
  )
}
