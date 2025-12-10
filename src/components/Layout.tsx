import { Link, Outlet, useLocation } from 'react-router-dom';
import { getAllNotes } from '../lib/notes';
import { useState, useEffect } from 'react';
import { ScrollToTop } from './ScrollToTop';

export function Layout() {
  const notes = getAllNotes();
  const categories = Array.from(new Set(notes.map(n => n.category)));
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-[var(--bg-app)] text-black font-sans selection:bg-pink-200 selection:text-black">
      <header className="relative w-full bg-white border-b-4 border-black transition-all duration-300 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Area */}
            <Link 
              to="/" 
              className="group relative flex items-center gap-2 z-50"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-3xl font-black tracking-tighter text-black uppercase decoration-4 decoration-pink-500 underline-offset-4 group-hover:underline">
                DevNotebook
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4">
              {categories.map(cat => (
                <Link 
                  key={cat} 
                  to={`/category/${cat}`}
                  className="px-6 py-2 border-2 border-black font-bold text-black bg-white hover:bg-pink-400 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 active:translate-y-1 active:shadow-none uppercase text-sm"
                >
                  {cat}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center z-50">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-sm font-black uppercase border-2 border-black px-3 py-1 bg-yellow-400 active:bg-yellow-500 transition-colors"
              >
                {isMenuOpen ? 'Close' : 'Menu'}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white border-b-4 border-black shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] py-4 animate-in slide-in-from-top-2 duration-200">
               <nav className="flex flex-col space-y-2 px-4">
                 {categories.map(cat => (
                   <Link 
                     key={cat} 
                     to={`/category/${cat}`}
                     className="block text-center px-6 py-3 border-2 border-black font-bold text-black bg-white hover:bg-pink-400 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 active:translate-y-1 active:shadow-none uppercase text-lg"
                   >
                     {cat}
                   </Link>
                 ))}
               </nav>
            </div>
        )}
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 animate-fade-in">
        <Outlet />
      </main>
      <ScrollToTop />
    </div>
  );
}

