"use client"

type Props = {
  open: boolean
  onClose: () => void
  symbol: string
  explanation: string[]
}

export default function ExplainModal({
  open,
  onClose,
  symbol,
  explanation,
}: Props) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="w-full max-w-md rounded-xl bg-zinc-900 p-6 border border-white/10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">
            Why whales buying {symbol}?
          </h2>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        <ul className="space-y-2 text-sm text-zinc-300">
          {explanation.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
