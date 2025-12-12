import { useEffect, useState, useRef, useCallback } from 'react';

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: TocItem[];
  isOpen?: boolean;
  onClose?: () => void;
  isPinned?: boolean;
  onTogglePin?: () => void;
}

export function TableOfContents({ headings, isOpen = false, onClose, isPinned = false, onTogglePin }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const isClickScrolling = useRef(false);

  useEffect(() => {
    if (headings.length === 0) return;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (isClickScrolling.current) return;

      const visibleEntries = entries.filter(entry => entry.isIntersecting);
      
      if (visibleEntries.length > 0) {
        const topMostEntry = visibleEntries.reduce((top, entry) => {
          const topRect = top.boundingClientRect.top;
          const entryRect = entry.boundingClientRect.top;
          return entryRect < topRect ? entry : top;
        });
        
        setActiveId(topMostEntry.target.id);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '-80px 0px -70%',
      threshold: 0
    });

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headings]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, headingId: string) => {
    e.preventDefault();
    setActiveId(headingId);
    isClickScrolling.current = true;
    
    const element = document.getElementById(headingId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000);
    
    // Optional: Close drawer on click for mobile-like feel, or keep open for desktop reference
    // user requirement implies "expand/collapse", so maybe keep it open until explicit close?
    // Let's close it on small screens only? For now, let's keep it open to allow browsing multiple items.
  }, []);

  if (headings.length === 0) {
    return null;
  }

  const tocContent = (
    <nav className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <p className="font-black text-black uppercase tracking-widest text-sm bg-yellow-400 inline-block px-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          Directory
        </p>
        <div className="flex items-center gap-2">
          {onTogglePin && (
            <button
              onClick={onTogglePin}
              className={`hidden md:block p-1 border-2 rounded transition-all duration-200 ${
                isPinned 
                  ? 'bg-black text-white border-black' 
                  : 'bg-transparent text-gray-400 border-transparent hover:border-black hover:text-black hover:bg-pink-100'
              }`}
              title={isPinned ? "Unpin sidebar" : "Pin sidebar"}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="17" x2="12" y2="22"></line>
                <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"></path>
              </svg>
            </button>
          )}
          {onClose && (
            <button
              onClick={onClose}
              className="p-1 hover:bg-pink-100 border-2 border-transparent hover:border-black rounded transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
              </svg>
            </button>
          )}
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto no-scrollbar pr-2">
        <ul className="space-y-3 text-sm font-bold">
          {headings.map((heading) => {
            const getHeadingColor = () => {
               if (activeId === heading.id) return 'text-black';
               switch (heading.level) {
                 case 1: return 'text-black';
                 case 2: return 'text-pink-600'; 
                 case 3: return 'text-gray-500';
                 default: return 'text-gray-500';
               }
            };

            return (
            <li
              key={heading.id}
              id={`toc-${heading.id}`}
              style={{ paddingLeft: `${(heading.level - 1) * 0.5}rem` }}
            >
              <a
                href={`#${heading.id}`}
                className={`block transition-all duration-200 border-l-4 pl-3 hover:translate-x-1 ${
                  activeId === heading.id
                    ? 'border-pink-500'
                    : 'border-transparent hover:text-black hover:border-black'
                } ${getHeadingColor()}`}
                onClick={(e) => handleClick(e, heading.id)}
              >
                {heading.text}
              </a>
            </li>
          )})}
        </ul>
      </div>

      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="hidden md:block w-full mt-6 py-2 px-4 bg-gray-100 border-2 border-black font-bold text-sm uppercase hover:bg-yellow-400 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
      >
        Back to Top
      </button>
    </nav>
  );

  return (
    <>
      {/* Backdrop - Hidden when pinned, NO BLUR as requested */}
      {!isPinned && (
        <div 
          className={`fixed inset-0 bg-black/0 z-40 transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={onClose}
        />
      )}
      
      {/* Drawer */}
      <div 
        className={`fixed right-0 top-0 h-full w-80 bg-white border-l-4 border-black z-50 
          transform transition-transform duration-300 ease-in-out shadow-[-8px_0px_0px_0px_rgba(0,0,0,0.1)]
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          p-6`}
      >
        {tocContent}
      </div>
    </>
  );
}
