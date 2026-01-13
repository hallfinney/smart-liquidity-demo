type WhaleFlow = {
  symbol: string
  name: string
  inflow: number
  outflow: number
  netflow: number
  trend: "Accumulation" | "Distribution"
}

type Props = {
  data: WhaleFlow[]
}

export default function WhaleTable({ data }: Props) {
  return (
    <div className="overflow-x-auto bg-zinc-900/60 border border-zinc-800 rounded-xl">
      <table className="min-w-full text-sm text-left text-zinc-300">
        <thead className="text-xs uppercase bg-zinc-800/60 text-zinc-400">
          <tr>
            <th className="px-6 py-4">Symbol</th>
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Inflow (M)</th>
            <th className="px-6 py-4">Outflow (M)</th>
            <th className="px-6 py-4">Netflow (M)</th>
            <th className="px-6 py-4">Trend</th>
          </tr>
        </thead>

        <tbody>
          {data.map((coin) => {
            const positive = coin.netflow > 0

            return (
              <tr
                key={coin.symbol}
                className="border-t border-zinc-800 hover:bg-zinc-800/40 transition"
              >
                <td className="px-6 py-4 font-bold text-white">
                  {coin.symbol}
                </td>
                <td className="px-6 py-4">{coin.name}</td>

                <td className="px-6 py-4 text-green-400">
                  {coin.inflow}
                </td>

                <td className="px-6 py-4 text-red-400">
                  {coin.outflow}
                </td>

                <td
                  className={`px-6 py-4 font-semibold ${
                    positive ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {positive ? "+" : ""}
                  {coin.netflow}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      coin.trend === "Accumulation"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {coin.trend}
                  </span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
