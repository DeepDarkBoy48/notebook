import { useState, useMemo } from 'react';
import { getAllNotes } from '../lib/notes';
import { NoteCard } from '../components/NoteCard';

export function HomePage() {
  const notes = getAllNotes();

  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredNotes = useMemo(() => {
    return notes.filter(note => {
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      return (
        note.title.toLowerCase().includes(q) ||
        note.description.toLowerCase().includes(q)
      );
    });
  }, [notes, searchQuery]);

  const visibleNotes = filteredNotes.slice(0, visibleCount);

  return (
    <div className="space-y-20 md:space-y-32">
      <section className="text-center space-y-4 max-w-5xl mx-auto py-6 md:py-10 bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-4 md:p-6 rotate-[-1deg] hover:rotate-0 transition-transform duration-300">
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-black leading-[0.85] uppercase italic">
          Welcome to <br/>
          <span className="text-pink-500 block mt-2 text-stroke-3 underline decoration-4 underline-offset-8">徐子笔记</span>
        </h1>
        <p className="text-2xl md:text-3xl font-bold text-black w-full max-w-3xl mx-auto leading-tight bg-yellow-400 inline-block px-4 py-2 rotate-[1deg] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          精选的科技与设计思考、教程及深度探讨合集。
        </p>
      </section>



      <section className="space-y-12">
        <div className="px-4 flex justify-center">
            {/* Search Bar */}
            <div className="w-full max-w-xl">
               <div className="relative group">
                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                   <svg className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                   </svg>
                 </div>
                 <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-4 border-4 border-black bg-white placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-black font-bold uppercase tracking-wide text-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[4px] focus:translate-y-[4px] focus:shadow-none transition-all"
                    placeholder="Search all notes..."
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setVisibleCount(9); // Reset visible count on search
                    }}
                 />
               </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
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
      </section>
    </div>
  );
}

