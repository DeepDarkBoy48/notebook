import { useState, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getNotesByCategory } from '../lib/notes';
import { NoteCard } from '../components/NoteCard';

export function CategoryPage() {
  const { category } = useParams();
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  
  const allNotes = getNotesByCategory(category || '');
  
  // Extract unique subcategories
  const subcategories = useMemo(() => {
    const subs = allNotes
      .map(note => note.subcategory)
      .filter((sub): sub is string => !!sub);
    return Array.from(new Set(subs)).sort();
  }, [allNotes]);

  // Filter notes based on selection
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredNotes = useMemo(() => {
    return allNotes.filter(note => {
      const matchSub = !selectedSubcategory || note.subcategory === selectedSubcategory;
      const matchSearch = !searchQuery || 
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        note.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchSub && matchSearch;
    });
  }, [allNotes, selectedSubcategory, searchQuery]);

  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    setVisibleCount(9);
  }, [category, selectedSubcategory, searchQuery]);

  const visibleNotes = filteredNotes.slice(0, visibleCount);

  if (allNotes.length === 0) {
    return (
      <div className="text-center py-32">
        <h2 className="text-3xl font-bold text-gray-900">Category not found</h2>
        <p className="text-gray-500 mt-4">We couldn't find any notes for this category.</p>
      </div>
    );
  }

  return (
    <div className="space-y-16">
      <header className="border-b-4 border-black pb-8 flex flex-col gap-6 bg-yellow-400 p-8 border-4 -mx-4 md:-mx-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-1">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-sm font-black text-black tracking-widest uppercase mb-2 block bg-white inline-block px-2 border-2 border-black">Category</span>
            <h1 className="text-5xl md:text-7xl font-black text-black tracking-tighter uppercase italic">{category}</h1>
          </div>
          <p className="text-black font-bold text-xl bg-white px-4 py-2 border-2 border-black inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            {filteredNotes.length} {filteredNotes.length === 1 ? 'Article' : 'Articles'}
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-md">
           <div className="relative group">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
               <svg className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
               </svg>
             </div>
             <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border-2 border-black bg-white placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-black font-bold uppercase tracking-wide shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-none transition-all"
                placeholder="Search notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
             />
           </div>
        </div>

        {/* Subcategory Filter Buttons */}
        {subcategories.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-4 border-t-2 border-black/10">
            <button
              onClick={() => setSelectedSubcategory(null)}
              className={`px-6 py-2 border-2 border-black font-black uppercase text-sm tracking-wider transition-all duration-200 hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${
                selectedSubcategory === null 
                  ? 'bg-black text-white' 
                  : 'bg-white text-black hover:bg-gray-50'
              }`}
            >
              All
            </button>
            {subcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubcategory(sub)}
                className={`px-6 py-2 border-2 border-black font-black uppercase text-sm tracking-wider transition-all duration-200 hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${
                  selectedSubcategory === sub 
                    ? 'bg-[#FF6B6B] text-black' 
                    : 'bg-white text-black hover:bg-[#FF6B6B]/20'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {visibleNotes.map((note) => (
          <NoteCard key={note.slug} note={note} />
        ))}
      </div>

      {visibleCount < filteredNotes.length && (
        <div className="flex justify-center pt-8">
          <button
            onClick={() => setVisibleCount(prev => prev + 9)}
            className="group relative inline-flex items-center justify-center px-8 py-4 font-black text-white transition-all duration-200 bg-black border-4 border-black hover:bg-yellow-400 hover:text-black hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <span className="text-xl uppercase tracking-widest">Load More</span>
            <svg 
              className="w-6 h-6 ml-3 transform group-hover:translate-y-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

