import { useEffect, useState } from 'react';

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: TocItem[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -66%' }
    );

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

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className="space-y-4 border-l-4 border-gray-200 pl-4 py-2 sticky top-24">
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
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.id)?.scrollIntoView({
                  behavior: 'smooth',
                });
                setActiveId(heading.id);
                window.history.pushState(null, '', `#${heading.id}`);
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
