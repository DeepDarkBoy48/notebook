import { useParams } from 'react-router-dom';
import { getNotesByCategory } from '../lib/notes';
import { NoteCard } from '../components/NoteCard';

export function CategoryPage() {
  const { category } = useParams();
  const notes = getNotesByCategory(category || '');

  if (notes.length === 0) {
    return (
      <div className="text-center py-32">
        <h2 className="text-3xl font-bold text-gray-900">Category not found</h2>
        <p className="text-gray-500 mt-4">We couldn't find any notes for this category.</p>
      </div>
    );
  }

  return (
    <div className="space-y-16">
      <header className="border-b-4 border-black pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 bg-yellow-400 p-8 border-4 -mx-4 md:-mx-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-1">
        <div>
          <span className="text-sm font-black text-black tracking-widest uppercase mb-2 block bg-white inline-block px-2 border-2 border-black">Category</span>
          <h1 className="text-5xl md:text-7xl font-black text-black tracking-tighter uppercase italic">{category}</h1>
        </div>
        <p className="text-black font-bold text-xl bg-white px-4 py-2 border-2 border-black inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          {notes.length} {notes.length === 1 ? 'Article' : 'Articles'}
        </p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {notes.map((note) => (
          <NoteCard key={note.slug} note={note} />
        ))}
      </div>
    </div>
  );
}

