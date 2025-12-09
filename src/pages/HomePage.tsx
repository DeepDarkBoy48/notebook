import { Link } from 'react-router-dom';
import { getAllNotes } from '../lib/notes';

export function HomePage() {
  const notes = getAllNotes();

  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
          Welcome to My Notebook
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A collection of thoughts, tutorials, and snippets.
        </p>
      </section>

      <div className="grid gap-8 max-w-4xl mx-auto">
        {notes.map((note) => (
          <Link 
            key={note.slug} 
            to={`/note/${note.category}/${note.slug}`}
            className="group block bg-white rounded-3xl shadow-sm transition-all duration-300 border border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
             {note.image && (
                <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
                  <img 
                    src={note.image} 
                    alt={note.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              <div className={`p-8 flex-1 flex flex-col justify-center ${!note.image ? 'md:w-full' : ''}`}>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                      {note.category}
                    </span>
                    <span className="text-gray-400">
                      {note.date}
                    </span>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-2">
                      {note.title}
                    </h2>
                    <p className="text-gray-500 line-clamp-2 leading-relaxed">
                      {note.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
