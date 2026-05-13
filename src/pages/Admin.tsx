import { useState } from 'react';

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'ear' && password === '273915') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="max-w-md mx-auto mt-20 px-4 w-full">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-dark-bg">Admin Login</h1>
            <p className="text-gray-500 mt-2">Sign in to manage your content.</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm text-center">
                {error}
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Username / Email</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition" 
                placeholder="Enter username" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition" 
                placeholder="Enter password" 
              />
            </div>
            <button type="submit" className="w-full bg-dark-bg hover:bg-black text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-transform active:scale-95">
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex">
      {/* Sidebar Placeholder */}
      <div className="w-64 flex-shrink-0 hidden md:block">
         <div className="bg-white border text-center border-gray-100 rounded-2xl shadow-sm p-6 mb-4 font-bold text-gray-800">
            Admin Panel
         </div>
         <nav className="space-y-2">
            {['Dashboard', 'Posts', 'Podcasts', 'Settings'].map(t => (
               <a key={t} href="#" className="block px-4 py-2 rounded-lg text-gray-600 font-medium hover:bg-gray-50 hover:text-primary transition">{t}</a>
            ))}
         </nav>
      </div>
      
      {/* Content Area Example */}
      <div className="flex-1 md:ml-8">
        <div className="bg-dark-bg text-white rounded-3xl shadow-xl p-8 sm:p-12 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-10 font-bold text-9xl">🔒</div>
           <h1 className="text-3xl font-extrabold mb-4 text-accent">Protected Area</h1>
           <p className="text-gray-300 mb-8 max-w-lg">
             This is a placeholder for the Admin Dashboard. In a real-world application, this area would be protected by Supabase Auth middleware.
           </p>

           <div className="space-y-4">
             <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10 flex justify-between items-center">
                <span>Manage Users (Supabase Auth)</span>
                <span className="bg-accent text-dark-bg text-xs font-bold px-2 py-1 rounded">Pending integration</span>
             </div>
             <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10 flex justify-between items-center">
                <span>Content CMS (PostgreSQL)</span>
               <span className="bg-accent text-dark-bg text-xs font-bold px-2 py-1 rounded">Pending integration</span>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
