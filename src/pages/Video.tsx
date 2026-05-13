export default function Video() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-dark-bg">Latest Videos</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">Tutorials, vlogs, and behind-the-scenes content on my YouTube channel.</p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition">
            <div className="aspect-video bg-gray-200 relative group-hover:bg-primary/10 transition flex items-center justify-center">
               <span className="text-primary font-bold">Video Thumbnail</span>
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"></div>
            </div>
            <div className="p-6">
               <h3 className="text-lg font-bold group-hover:text-primary transition-colors">How to build a SaaS in a weekend</h3>
               <p className="text-sm text-gray-500 mt-2">10K views &bull; 2 days ago</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
