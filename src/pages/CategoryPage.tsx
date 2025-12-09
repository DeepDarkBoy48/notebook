import { useParams, Link } from 'react-router-dom';
import { getNotesByCategory } from '../lib/notes';

export function CategoryPage() {
  const { category } = useParams();
  const notes = getNotesByCategory(category || '');

  if (notes.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Category not found</h2>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <header className="border-b border-gray-200 dark:border-gray-800 pb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{category}</h1>
      </header>
      
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
