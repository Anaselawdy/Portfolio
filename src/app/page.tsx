export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-[#090a0f] text-[#f0f2f5]">
      <div className="max-w-xl w-full border border-white/10 rounded-2xl p-8 bg-white/[0.02] backdrop-blur-sm shadow-2xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Environment Ready
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Hello World 👋
          </h1>
          <p className="text-lg text-zinc-400">
            Anas Elawdy &mdash; Product Designer
          </p>
        </div>

        <p className="text-sm leading-relaxed text-zinc-300">
          Next.js App Router portfolio initialized, verified, and linked to GitHub.
        </p>

        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-500">
          <span>Next.js 16 • React 19 • Tailwind CSS</span>
          <a
            href="https://github.com/Anaselawdy/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors underline underline-offset-4"
          >
            GitHub Repository &rarr;
          </a>
        </div>
      </div>
    </main>
  );
}
