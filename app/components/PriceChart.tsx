interface Props {
  symbol: string
}

export default function PriceChart({ symbol }: Props) {
  return (
    <div className="h-64 flex items-center justify-center text-zinc-500">
      Price chart for {symbol} (placeholder)
    </div>
  )
}
