export default function HeatmapGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {["BTC", "ETH", "SOL", "ZRO", "VRT"].map((coin) => (
        <div
          key={coin}
          className="h-24 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-lg font-bold"
        >
          {coin}
        </div>
      ))}
    </div>
  )
}
