export default function Home() {
  return (
    <div className="flex-1 flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full bg-dark-bg text-white overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/80 mix-blend-multiply pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Crafting <span className="text-accent">Digital</span> Experiences.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
              I'm a full-stack developer, occasional podcaster, and avid creator sharing my journey in tech and personal branding.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#featured" className="px-8 py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold transition-all hover:-translate-y-1 shadow-lg shadow-primary/25">
                Explore Content
              </a>
              <a href="/contact" className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold transition-all backdrop-blur-sm border border-white/10">
                Get in Touch
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md aspect-square rounded-full overflow-hidden border-8 border-white/5 shadow-2xl">
            {/* Placeholder for Hero Image */}
            <div className="w-full h-full bg-gradient-to-tr from-secondary to-primary/80 flex items-center justify-center">
               <span className="text-6xl text-white/50 animate-pulse font-bold">@creator</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Area */}
      <section id="featured" className="py-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-12">Latest Adventures</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'The Future of Next.js 14', type: 'Article', color: 'bg-primary' },
            { title: 'Building Supabase Architectures', type: 'Podcast', color: 'bg-secondary' },
            { title: 'Tailwind CSS Mastery in 10 Mins', type: 'Video', color: 'bg-accent text-dark-bg' }
          ].map((item, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all p-6 flex flex-col justify-between h-64 bg-white">
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${item.color} ${item.color === 'bg-accent text-dark-bg' ? '' : 'text-white'}`}>
                  {item.type}
                </span>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-500 font-medium">Read more &rarr;</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
