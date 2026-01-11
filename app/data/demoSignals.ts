export type WhaleSignal = {
  symbol: string
  name: string
  signal: string
  liquidityScore: number
  confidence: "High" | "Medium" | "Low"
  timeframe: string
  explanation: {
    title: string
    points: string[]
  }
}

export const demoSignals: WhaleSignal[] = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    signal: "Whale Accumulation",
    liquidityScore: 87,
    confidence: "High",
    timeframe: "Last 24h",
    explanation: {
      title: "Why Bitcoin Accumulation?",
      points: [
        "5 large wallets accumulated > $120M BTC",
        "Funds moved from exchanges to cold storage",
        "Pattern matches historical accumulation phases",
        "Similar behavior observed before previous +15% move",
      ],
    },
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    signal: "Smart Money Inflow",
    liquidityScore: 72,
    confidence: "Medium",
    timeframe: "Last 48h",
    explanation: {
      title: "Why Ethereum Inflow?",
      points: [
        "Institution-linked wallets increased exposure",
        "ETH withdrawn from major CEXs",
        "Rising on-chain activity without price breakout",
        "Early positioning ahead of expected volatility",
      ],
    },
  },
  {
    symbol: "SOL",
    name: "Solana",
    signal: "Liquidity Rotation",
    liquidityScore: 84,
    confidence: "High",
    timeframe: "Last 24h",
    explanation: {
      title: "Why Solana Liquidity Rotation?",
      points: [
        "Capital rotated from ETH L2s into SOL ecosystem",
        "DEX volume on Solana increased significantly",
        "Whales opening medium-term positions",
        "Pattern often precedes ecosystem-wide rallies",
      ],
    },
  },
  {
    symbol: "ZRO",
    name: "LayerZero",
    signal: "Stealth Accumulation",
    liquidityScore: 90,
    confidence: "High",
    timeframe: "Last 12h",
    explanation: {
      title: "Why ZRO Stealth Accumulation?",
      points: [
        "Multiple new wallets accumulated ZRO silently",
        "Tokens locked, not sent to exchanges",
        "Low social hype but high on-chain conviction",
        "Typical pre-expansion smart money behavior",
      ],
    },
  },
  {
    symbol: "VRT",
    name: "VORTEX",
    signal: "Speculative Smart Entry",
    liquidityScore: 68,
    confidence: "Medium",
    timeframe: "Last 72h",
    explanation: {
      title: "Why VRT Speculative Entry?",
      points: [
        "Early wallets building small but consistent positions",
        "High risk / high reward accumulation pattern",
        "Liquidity increasing before visibility",
        "Often seen before micro-cap volatility spikes",
      ],
    },
  },
]
