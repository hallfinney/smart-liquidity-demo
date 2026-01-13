import HeatmapGrid from "../components/HeatmapGrid"

export default function HeatmapPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-2xl font-bold mb-6">Market Heatmap</h1>
      <HeatmapGrid />
    </main>
  )
}
