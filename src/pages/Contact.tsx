export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12">
        <h1 className="text-3xl font-extrabold mb-2 text-dark-bg">Let's talk.</h1>
        <p className="text-gray-500 mb-8">Fill out the form below to get in touch for collaborations and opportunities.</p>
        
        <form className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input type="text" id="name" className="w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" id="email" className="w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition" placeholder="john@example.com" />
            </div>
          </div>
          <div>
            <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">Topic</label>
            <select id="topic" className="w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition">
              <option>General Inquiry</option>
              <option>Sponsorship</option>
              <option>Freelance Work</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea id="message" rows={5} className="w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition" placeholder="Tell me about your project..."></textarea>
          </div>
          <button type="button" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-transform active:scale-95">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
