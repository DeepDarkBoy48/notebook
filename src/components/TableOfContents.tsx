import { useEffect, useState, useRef, useCallback } from 'react';

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: TocItem[];
  isMobile?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
}

export function TableOfContents({ headings, isMobile = false, isOpen = false, onClose }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const isClickScrolling = useRef(false);

  useEffect(() => {
    if (headings.length === 0) return;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      // Skip observer updates during click-initiated scrolling
      if (isClickScrolling.current) return;

      // Find all currently intersecting entries
      const visibleEntries = entries.filter(entry => entry.isIntersecting);
      
      if (visibleEntries.length > 0) {
        // Sort by position in viewport (top to bottom)
        // Get the one closest to the top of the viewport
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
    
    // Set active immediately on click
    setActiveId(headingId);
    
    // Disable observer updates during scroll
    isClickScrolling.current = true;
    
    const element = document.getElementById(headingId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${headingId}`);
    }
    
    // Re-enable observer after scroll completes
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000);
    
    // Close mobile drawer after navigation
    if (isMobile && onClose) {
      setTimeout(() => onClose(), 300);
    }
  }, [isMobile, onClose]);

  if (headings.length === 0) {
    return null;
  }

  const tocContent = (
    <nav className={`space-y-4 ${!isMobile ? 'border-l-4 border-gray-200 pl-4 py-2' : ''}`}>
      <p className="font-black text-black uppercase tracking-widest text-sm bg-yellow-400 inline-block px-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
        On this page
      </p>
      <ul className="space-y-3 text-sm font-bold">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ paddingLeft: `${(heading.level - 1) * 0.5}rem` }}
          >
            <a
              href={`#${heading.id}`}
              className={`block transition-all duration-200 border-l-4 pl-3 hover:translate-x-1 ${
                activeId === heading.id
                  ? 'border-pink-500 text-black'
                  : 'border-transparent text-gray-400 hover:text-black hover:border-black'
              }`}
              onClick={(e) => handleClick(e, heading.id)}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );

  // Mobile drawer mode
  if (isMobile) {
    return (
      <>
        {/* Backdrop */}
        <div 
          className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={onClose}
        />
        
        {/* Drawer */}
        <div 
          className={`fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-white z-50 
            border-l-4 border-black shadow-[-8px_0px_0px_0px_rgba(0,0,0,1)]
            transform transition-transform duration-300 ease-out
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}
            overflow-y-auto`}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center
              bg-pink-400 border-2 border-black font-black text-xl
              shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
              hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]
              active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
              transition-all duration-100"
            aria-label="Close table of contents"
          >
            ✕
          </button>
          
          <div className="pt-16 px-6 pb-8">
            {tocContent}
          </div>
        </div>
      </>
    );
  }

  // Desktop sticky sidebar mode
  return tocContent;
}
