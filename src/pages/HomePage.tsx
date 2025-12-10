import { getAllNotes } from '../lib/notes';
import { NoteCard } from '../components/NoteCard';

export function HomePage() {
  const notes = getAllNotes();

  return (
    <div className="space-y-20 md:space-y-32">
      <section className="text-center space-y-8 max-w-5xl mx-auto py-12 md:py-20 bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12 rotate-[-1deg] hover:rotate-0 transition-transform duration-300">
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-black leading-[0.85] uppercase italic">
          Welcome to <br/>
          <span className="text-pink-500 block mt-2 text-stroke-3 underline decoration-4 underline-offset-8">徐子笔记</span>
        </h1>
        <p className="text-2xl md:text-3xl font-bold text-black w-full max-w-3xl mx-auto leading-tight bg-yellow-400 inline-block px-4 py-2 rotate-[1deg] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          精选的科技与设计思考、教程及深度探讨合集。
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
          {notes.map((note) => (
            <NoteCard key={note.slug} note={note} />
          ))}
        </div>
      </section>
    </div>
  );
}

