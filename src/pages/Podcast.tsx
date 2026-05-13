export default function Podcast() {
  return (
    <div className="bg-secondary text-white w-full min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-xl bg-gradient-to-tr from-primary to-accent shadow-2xl flex-shrink-0 flex items-center justify-center border-4 border-white/20">
             <span className="font-bold text-3xl italic">The Cast.</span>
          </div>
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4 text-accent">The Creator Podcast</h1>
            <p className="text-xl text-blue-100 max-w-2xl mb-6">Conversations with founders, artists, and engineers on building the future of the web.</p>
            <button className="bg-white text-secondary px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">Listen on Apple Podcasts</button>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Latest Episodes</h2>
          {[1, 2, 3].map((i) => (
             <div key={i} className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm flex flex-col sm:flex-row gap-6 items-center">
                <button className="h-16 w-16 rounded-full bg-accent text-secondary flex items-center justify-center font-bold flex-shrink-0 hover:scale-105 transition">Play</button>
                <div className="flex-1">
                  <span className="text-accent text-sm font-bold tracking-wider uppercase mb-1 block">Episode {10-i}</span>
                  <h3 className="text-xl font-bold mb-2">Supabase architecture for scale</h3>
                  <p className="text-blue-100/80 text-sm">We sit down to talk about scaling Postgres databases using Supabase...</p>
                </div>
                <span className="text-sm font-medium text-white/60">45:20</span>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
