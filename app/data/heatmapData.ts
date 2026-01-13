export type HeatmapItem = {
  symbol: string
  name: string
  netflow: number
}

export const heatmapData: HeatmapItem[] = [
  { symbol: "BTC", name: "Bitcoin", netflow: 420 },
  { symbol: "ETH", name: "Ethereum", netflow: 310 },
  { symbol: "SOL", name: "Solana", netflow: 180 },
  { symbol: "ZRO", name: "LayerZero", netflow: 95 },
  { symbol: "VRT", name: "Veritaseum", netflow: -60 },
  { symbol: "ARB", name: "Arbitrum", netflow: -120 },
]
