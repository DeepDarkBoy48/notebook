import { Link, Outlet } from 'react-router-dom';
import { getAllNotes } from '../lib/notes';

export function Layout() {
  const notes = getAllNotes();
  const categories = Array.from(new Set(notes.map(n => n.category)));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-200">
              DevNotebook
            </Link>
            <nav className="flex space-x-6">
              {categories.map(cat => (
                <Link 
                  key={cat} 
                  to={`/category/${cat}`}
                  className="text-sm font-medium text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400 transition-colors"
                >
                  {cat}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Outlet />
      </main>
    </div>
  );
}
