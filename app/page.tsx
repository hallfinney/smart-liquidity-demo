export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white">
      
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <h1 className="text-2xl font-bold tracking-wide text-emerald-400">
          Smart Liquidity
        </h1>
        <nav className="space-x-6 text-sm text-zinc-300">
          <a href="#" className="hover:text-white">Dashboard</a>
          <a href="#" className="hover:text-white">Analytics</a>
          <a href="#" className="hover:text-white">Docs</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Smart <span className="text-emerald-400">Liquidity</span><br />
          Detection Platform
        </h2>

        <p className="mt-6 max-w-2xl text-zinc-400 text-lg">
          Track institutional money flow, smart wallets, and hidden
          liquidity movements using AI-powered on-chain analytics.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="px-8 py-3 rounded-xl bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition">
            Launch App
          </button>
          <button className="px-8 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition">
            View Docs
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 pb-24">
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
          <h3 className="text-3xl font-bold text-emerald-400">$2.4B+</h3>
          <p className="mt-2 text-zinc-400 text-sm">
            Tracked Liquidity Volume
          </p>
        </div>

        <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
          <h3 className="text-3xl font-bold text-emerald-400">12,000+</h3>
          <p className="mt-2 text-zinc-400 text-sm">
            Smart Wallets Monitored
          </p>
        </div>

        <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
          <h3 className="text-3xl font-bold text-emerald-400">AI-Driven</h3>
          <p className="mt-2 text-zinc-400 text-sm">
            Predictive Market Signals
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-zinc-500 text-sm">
        © {new Date().getFullYear()} Smart Liquidity. All rights reserved.
      </footer>

    </main>
  );
}
