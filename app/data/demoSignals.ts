export type DemoSignal = {
  symbol: string
  name: string
  signal: string
  liquidityScore: number
  confidence: number
  timeframe: string
}

export const demoSignals: DemoSignal[] = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    signal: "Strong Accumulation",
    liquidityScore: 92,
    confidence: 88,
    timeframe: "7D",
  },
  {
    symbol: "SOL",
    name: "Solana",
    signal: "Accumulation",
    liquidityScore: 81,
    confidence: 74,
    timeframe: "7D",
  },
  {
    symbol: "ZRO",
    name: "LayerZero",
    signal: "Early Accumulation",
    liquidityScore: 77,
    confidence: 69,
    timeframe: "14D",
  },
]
