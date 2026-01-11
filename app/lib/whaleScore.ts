export function calculateWhaleScore(
  accumulation: number,
  liquidity: number,
  exchangeFlow: number,
  priceBehavior: number
) {
  return Math.round(
    accumulation * 0.4 +
    liquidity * 0.25 +
    exchangeFlow * 0.2 +
    priceBehavior * 0.15
  )
}
