import { Link } from 'react-router-dom';

interface NoteCardProps {
  note: {
    title: string;
    description: string;
    date: string;
    category: string;
    slug: string;
    image?: string;
  };
}

export function NoteCard({ note }: NoteCardProps) {
  return (
    <Link 
      to={`/note/${note.category}/${note.slug}`}
      className="group block h-full isolate"
    >
      <div className="h-full bg-white border-4 border-black transition-all duration-200 hover:-translate-y-2 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col relative z-10">
        {note.image && (
          <div className="relative w-full aspect-[16/9] overflow-hidden border-b-4 border-black bg-pink-100">
            <img 
              src={note.image} 
              alt={note.title}
              className="w-full h-full object-cover transition-all duration-300"
            />

            
            {/* Category Tag - Neo-Brutalist Style */}
            <div className="absolute top-0 right-0 bg-yellow-400 border-l-4 border-b-4 border-black px-4 py-1">
              <span className="text-sm font-black text-black uppercase tracking-tight">
                {note.category}
              </span>
            </div>
          </div>
        )}
        
        <div className="p-8 flex flex-col flex-1 bg-white">
          <div className="flex items-center gap-3 text-xs font-bold text-black/70 mb-4 uppercase tracking-widest pb-2 w-full">
            <span>{note.date}</span>
            {!note.image && (
               <>
                <span className="text-black font-black">/ {note.category}</span>
               </>
            )}
          </div>
          
          <h2 className="text-3xl font-black text-black mb-4 leading-tight uppercase group-hover:underline decoration-4 underline-offset-4 decoration-pink-500">
            {note.title}
          </h2>
          
          <p className="text-gray-800 font-medium leading-relaxed line-clamp-3 text-base flex-1">
            {note.description}
          </p>
          
          <div className="mt-8 pt-4 border-t-4 border-black flex items-center justify-between text-base font-black text-black uppercase bg-yellow-50 -mx-8 -mb-8 p-5 group-hover:bg-yellow-400 transition-colors duration-200">
             <span>Read Article</span>
             <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform border-2 border-black rounded-full p-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
             </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
