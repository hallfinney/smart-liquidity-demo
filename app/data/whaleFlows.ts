export type WhaleFlow = {
  symbol: string
  name: string
  inflow: number
  outflow: number
  netflow: number
  trend: "Accumulation" | "Distribution"
}

export const whaleFlows: WhaleFlow[] = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    inflow: 320,
    outflow: 180,
    netflow: 140,
    trend: "Accumulation",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    inflow: 210,
    outflow: 260,
    netflow: -50,
    trend: "Distribution",
  },
  {
    symbol: "SOL",
    name: "Solana",
    inflow: 420,
    outflow: 150,
    netflow: 270,
    trend: "Accumulation",
  },
  {
    symbol: "ZRO",
    name: "LayerZero",
    inflow: 190,
    outflow: 70,
    netflow: 120,
    trend: "Accumulation",
  },
]
