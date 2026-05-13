import { Outlet, Link } from 'react-router-dom';
import { Menu, X, Mic, Youtube, FileText, User, Mail, Shield } from 'lucide-react';
import { useState } from 'react';

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/', icon: <User size={18} /> },
    { name: 'Articles', path: '/blog', icon: <FileText size={18} /> },
    { name: 'Podcast', path: '/podcast', icon: <Mic size={18} /> },
    { name: 'Videos', path: '/video', icon: <Youtube size={18} /> },
    { name: 'Contact', path: '/contact', icon: <Mail size={18} /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg dark:bg-dark-bg text-dark-bg dark:text-brand-bg transition-colors duration-200">
      <header className="bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flexjustify-between h-16 flex items-center justify-between">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Creator.
              </Link>
            </div>
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors duration-200"
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="ml-4 px-4 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition shadow-sm font-medium">
                Hire Me
              </Link>
            </nav>
            {/* Mobile Nav Toggle */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-500 hover:text-gray-900 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-dark-bg border-b border-gray-200 dark:border-gray-800 absolute w-full">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-md font-medium text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>

      <footer className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-white">Creator.</span>
            <p className="text-secondary-100 mt-2 text-sm max-w-sm">Building digital products and telling stories through code, audio, and video.</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent transition">Twitter</a>
            <a href="#" className="hover:text-accent transition">LinkedIn</a>
            <a href="#" className="hover:text-accent transition">YouTube</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-secondary-100/20 text-sm text-center opacity-70">
          © {new Date().getFullYear()} Creator. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
