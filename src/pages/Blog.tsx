export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Writings</h1>
        <p className="mt-4 text-xl text-gray-500">Deep dives into full-stack development, design, and creator economy.</p>
      </div>
      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        {[1, 2, 3, 4].map((i) => (
          <article key={i} className="group flex flex-col justify-between bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition">
             <div className="flex items-center gap-2 mb-4">
               <span className="text-sm font-medium text-primary">Development</span>
               <span className="text-sm text-gray-400">&bull; 5 min read</span>
             </div>
             <h2 className="text-2xl font-bold group-hover:text-primary transition-colors mb-3">Understanding React Server Components</h2>
             <p className="text-gray-600 mb-6 flex-1">A deep aesthetic and technical dive into how React Server Components change the mental model of building the modern web...</p>
             <div className="flex items-center font-medium">
               <span className="h-8 w-8 rounded-full bg-secondary text-white flex items-center justify-center text-xs mr-3">CR</span>
               <span>Creator</span>
             </div>
          </article>
        ))}
      </div>
    </div>
  );
}
