export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-zinc-50">
      <main className="flex w-full max-w-3xl flex-col items-center gap-6 px-6 py-12 text-center sm:px-8 sm:py-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/70 px-3 py-1 text-[11px] text-zinc-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Vox · Habit & Second Brain Dashboard
        </div>

        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Welcome home, BAJI.
        </h1>
        <p className="max-w-xl text-sm text-zinc-400 sm:text-base">
          This dashboard will become our mission control: habits, tasks, and your
          second brain in one place. For now, jump straight into the second brain
          to start capturing ideas.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/second-brain"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-emerald-400 px-4 py-2 text-sm font-semibold text-zinc-950 shadow-lg shadow-purple-500/30 transition hover:brightness-110"
          >
            Enter Second Brain
          </a>
          <span className="text-xs text-zinc-500">
            Habits & tasks pages will plug in here next.
          </span>
        </div>
      </main>
    </div>
  );
}
