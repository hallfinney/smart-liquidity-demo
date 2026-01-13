type Props = {
  symbol: string
  name: string
  inflow: number
  outflow: number
  netflow: number
  trend: "Accumulation" | "Distribution"
}

export default function WhaleFlowCard({
  symbol,
  name,
  inflow,
  outflow,
  netflow,
  trend,
}: Props) {
  const positive = netflow > 0

  return (
    <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6">
      <div className="flex justify-between items-center mb-3">
        <div>
          <h3 className="text-xl font-bold">{symbol}</h3>
          <p className="text-zinc-400 text-sm">{name}</p>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            trend === "Accumulation"
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {trend}
        </span>
      </div>

      <div className="text-sm text-zinc-300 space-y-1">
        <p>Inflow: <span className="text-green-400">{inflow}M</span></p>
        <p>Outflow: <span className="text-red-400">{outflow}M</span></p>
        <p>
          Netflow:{" "}
          <span className={positive ? "text-green-400" : "text-red-400"}>
            {netflow > 0 ? "+" : ""}
            {netflow}M
          </span>
        </p>
      </div>
    </div>
  )
}
