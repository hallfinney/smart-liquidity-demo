export function detectMarketPhase(
  accumulation: number,
  exchangeFlow: number,
  priceBehavior: number
): {
  phase: "Accumulation" | "Distribution" | "Neutral"
  color: string
} {
  if (accumulation > 70 && exchangeFlow > 65 && priceBehavior < 75) {
    return { phase: "Accumulation", color: "text-emerald-400" }
  }

  if (accumulation < 40 && exchangeFlow < 45 && priceBehavior > 70) {
    return { phase: "Distribution", color: "text-red-400" }
  }

  return { phase: "Neutral", color: "text-zinc-400" }
}
