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
  const filteredNotes = useMemo(() => {
    return allNotes.filter(note => {
      const matchSub = !selectedSubcategory || note.subcategory === selectedSubcategory;
      return matchSub;
    });
  }, [allNotes, selectedSubcategory]);

  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    setSelectedSubcategory(null);
  }, [category]);

  useEffect(() => {
    setVisibleCount(9);
  }, [category, selectedSubcategory]);

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
      <header className="border-b-4 border-black pb-8 flex flex-col gap-4 md:gap-6 bg-yellow-400 p-4 md:p-8 border-4 -mx-4 md:-mx-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-[1deg]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs md:text-sm font-black text-black tracking-widest uppercase mb-2 block bg-white inline-block px-2 border-2 border-black">Category</span>
            <h1 className="text-4xl md:text-7xl font-black text-black tracking-tighter uppercase italic">{category}</h1>
          </div>
          <p className="text-black font-bold text-lg md:text-xl bg-white px-3 py-1 md:px-4 md:py-2 border-2 border-black inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] self-start md:self-auto">
            {filteredNotes.length} {filteredNotes.length === 1 ? 'Article' : 'Articles'}
          </p>
        </div>



        {/* Subcategory Filter Buttons */}
        {subcategories.length > 0 && (
          <div className="relative -mx-4 md:mx-0 pt-6 mt-2 border-t-2 border-black/10">
            <div className="flex flex-nowrap overflow-x-auto md:flex-wrap gap-4 pb-4 px-4 md:px-0 pt-1 no-scrollbar">
              <button
                onClick={() => setSelectedSubcategory(null)}
                className={`flex-shrink-0 px-4 py-1.5 md:px-6 md:py-2 border-2 border-black font-black uppercase text-xs md:text-sm tracking-wider transition-all duration-200 hover:-translate-y-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${
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
                  className={`flex-shrink-0 px-4 py-1.5 md:px-6 md:py-2 border-2 border-black font-black uppercase text-xs md:text-sm tracking-wider transition-all duration-200 hover:-translate-y-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${
                    selectedSubcategory === sub 
                      ? 'bg-[#FF6B6B] text-black' 
                      : 'bg-white text-black hover:bg-[#FF6B6B]/20'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
            {/* Scroll Hint Gradient */}
            {/* Scroll Hint Text */}
            {subcategories.length > 3 && (
              <div className="md:hidden flex justify-end mt-2 px-4 pointer-events-none">
                <span className="text-xs font-black text-black bg-white border-2 border-black px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  ← 向左滑动查看更多分类
                </span>
              </div>
            )}
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

