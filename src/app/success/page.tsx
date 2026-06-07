import Link from 'next/link';

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-navy-800 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-7xl mb-6">⚽</div>
        <h1 className="font-display text-5xl text-pitch-light mb-4">GOAL!</h1>
        <p className="text-slate-300 font-body mb-8">
          Payment confirmed — your goal has been scored for your country. Check the ranking to see it climb!
        </p>
        <Link
          href="/"
          className="inline-block font-display tracking-widest text-lg px-10 py-4 bg-pitch-light text-navy-900 hover:bg-pitch transition-colors"
        >
          SEE THE RANKING
        </Link>
      </div>
    </main>
  );
}
