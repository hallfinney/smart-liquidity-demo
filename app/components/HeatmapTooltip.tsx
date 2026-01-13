type TooltipProps = {
  signal: string
  liquidityScore: number
  confidence: string
}

export default function HeatmapTooltip({
  signal,
  liquidityScore,
  confidence,
}: TooltipProps) {
  return (
    <div className="absolute z-50 w-56 p-3 rounded-lg bg-zinc-900 text-white text-xs shadow-xl border border-zinc-700">
      <div className="font-semibold mb-1">Smart Liquidity Insight</div>

      <div className="mb-1">
        📊 Signal: <span className="font-medium">{signal}</span>
      </div>

      <div className="mb-1">
        💧 Liquidity Score:{" "}
        <span className="font-medium">{liquidityScore}</span>
      </div>

      <div>
        🎯 Confidence:{" "}
        <span className="font-medium">{confidence}</span>
      </div>
    </div>
  )
}
