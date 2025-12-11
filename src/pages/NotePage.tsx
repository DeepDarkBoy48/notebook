import React, { useMemo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { getNote } from '../lib/notes';
import { TableOfContents, type TocItem } from '../components/TableOfContents';
import { slugify } from '../lib/slugify';
import { CodeBlock } from '../components/CodeBlock';

export function NotePage() {
  const { category, slug } = useParams();
  const note = getNote(category || '', slug || '');

  const headings = useMemo(() => {
    if (!note?.content) return [];
    
    const lines = note.content.split('\n');
    const result: TocItem[] = [];
    let inCodeBlock = false;

    lines.forEach(line => {
      // Toggle code block state
      if (line.trim().startsWith('```')) {
        inCodeBlock = !inCodeBlock;
      }
      if (inCodeBlock) return;

      const match = line.match(/^(#{1,6})\s+(.+)$/);
      if (match) {
        const level = match[1].length;
        const text = match[2].trim();
        const id = slugify(text);
        result.push({ id, text, level });
      }
    });

    return result;
  }, [note?.content]);

  useEffect(() => {
    // Scroll to top when navigating to a new note
    window.scrollTo(0, 0);
  }, [category, slug]);

  useEffect(() => {
    // Function to reload widgets
    const reloadWidgets = () => {
      if ((window as any).twttr?.widgets) {
        (window as any).twttr.widgets.load();
      }
    };

    const scriptSrc = "https://platform.twitter.com/widgets.js";
    const scriptId = 'twitter-widgets-script';
    
    // Check if we need to inject the script
    // We check if window.twttr is available or if our script is already injected
    if (!(window as any).twttr && !document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = scriptSrc;
      script.async = true;
      script.onload = reloadWidgets;
      document.body.appendChild(script);
    } else {
      // Already present or loaded, just trigger reload
      reloadWidgets();
    }
  }, [note?.content]);

  // Helper to get text content from React children
  const getTextFromChildren = (children: React.ReactNode): string => {
    let text = '';
    React.Children.toArray(children).forEach(child => {
      if (typeof child === 'string') {
        text += child;
      } else if (typeof child === 'number') {
        text += child.toString();
      } else if (React.isValidElement(child)) {
        // cast to any to access props safely in this context
        const props = child.props as { children?: React.ReactNode };
        if (props.children) {
          text += getTextFromChildren(props.children);
        }
      }
    });
    return text;
  };

  const MarkdownComponents = {
    h1: ({ children, ...props }: any) => {
      const text = getTextFromChildren(children);
      const id = slugify(text);
      return <h1 id={id} {...props}>{children}</h1>;
    },
    h2: ({ children, ...props }: any) => {
      const text = getTextFromChildren(children);
      const id = slugify(text);
      return <h2 id={id} {...props}>{children}</h2>;
    },
    h3: ({ children, ...props }: any) => {
      const text = getTextFromChildren(children);
      const id = slugify(text);
      return <h3 id={id} {...props}>{children}</h3>;
    },
    h4: ({ children, ...props }: any) => {
      const text = getTextFromChildren(children);
      const id = slugify(text);
      return <h4 id={id} {...props}>{children}</h4>;
    },
    h5: ({ children, ...props }: any) => {
      const text = getTextFromChildren(children);
      const id = slugify(text);
      return <h5 id={id} {...props}>{children}</h5>;
    },
    h6: ({ children, ...props }: any) => {
      const text = getTextFromChildren(children);
      const id = slugify(text);
      return <h6 id={id} {...props}>{children}</h6>;
    },
    img: ({ node, ...props }: any) => {
        // Handle style attribute that comes as a string from raw HTML
        let style = props.style;
        if (typeof style === 'string') {
            style = style.split(';').reduce((acc: any, rule: string) => {
                const [key, value] = rule.split(':');
                if (key && value) {
                    // Convert kebab-case to camelCase
                    const camelKey = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                    acc[camelKey] = value.trim();
                }
                return acc;
            }, {});
        }

        return (
            <img
                {...props}
                style={style}
                loading="lazy"
                className="max-w-full h-auto block mx-auto rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 my-8"
            />
        );
    },
    code: ({ node, className, children, ...props }: any) => {
      const match = /language-(\w+)/.exec(className || '');
      const isInline = !match && !String(children).includes('\n');
      return (
        <CodeBlock
          inline={isInline}
          className={className}
          {...props}
        >
          {children}
        </CodeBlock>
      );
    },
    pre: ({ children }: any) => <>{children}</>,
    table: ({ children, ...props }: any) => (
      <div className="overflow-x-auto max-w-full my-8 border-4 border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white">
        <table className="min-w-full text-left text-sm border-collapse !m-0 !p-0" {...props}>
          {children}
        </table>
      </div>
    ),
    thead: ({ children, ...props }: any) => (
      <thead className="bg-yellow-400 border-b-4 border-black" {...props}>
        {children}
      </thead>
    ),
    tbody: ({ children, ...props }: any) => (
      <tbody className="divide-y-2 divide-black bg-[#FFFDF5]" {...props}>
        {children}
      </tbody>
    ),
    tr: ({ children, ...props }: any) => (
      <tr className="group hover:bg-pink-100 transition-colors duration-200" {...props}>
        {children}
      </tr>
    ),
    th: ({ children, ...props }: any) => (
      <th 
        className="px-6 py-4 font-black text-black uppercase tracking-wider border-r-2 border-black last:border-r-0" 
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }: any) => (
      <td 
        className="px-6 py-4 font-bold text-black border-r-2 border-black last:border-r-0" 
        {...props}
      >
        {children}
      </td>
    )
  };

  // Mobile TOC drawer state
  const [isTocOpen, setIsTocOpen] = useState(false);

  if (!note) {
    return <div>Note not found</div>;
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
      <article className="xl:col-start-2 xl:col-span-8 max-w-none mx-auto w-full space-y-12">
        <header className="text-center space-y-6 border-b-4 border-black pb-12">
          <div className="space-x-4 flex justify-center items-center">
            <span className="text-sm font-black text-black bg-yellow-400 px-3 py-1 border-2 border-black uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {note.category}
            </span>
            <span className="text-black font-black text-xl">•</span>
            <span className="text-sm font-bold text-black uppercase tracking-wider">
              {note.date}
            </span>
          </div>
          <h1 
            className="text-3xl md:text-6xl font-black text-black tracking-tight uppercase leading-tight"
            dangerouslySetInnerHTML={{ __html: note.title.replace(/\n/g, '<br />') }}
          />
        </header>

        <div className="prose prose-lg md:prose-xl prose-gray max-w-none 
          prose-headings:font-black prose-headings:text-black prose-headings:uppercase prose-headings:tracking-tight
          prose-h1:text-3xl md:prose-h1:text-5xl 
          prose-h2:text-2xl md:prose-h2:text-4xl prose-h2:decoration-pink-500 prose-h2:underline prose-h2:decoration-4 prose-h2:underline-offset-4
          prose-p:text-lg md:prose-p:text-xl prose-p:leading-relaxed
          prose-a:text-black prose-a:bg-yellow-200 prose-a:px-1 prose-a:font-bold prose-a:no-underline hover:prose-a:bg-yellow-400 prose-a:border-b-2 prose-a:border-black
          prose-strong:font-black prose-strong:text-black
          prose-img:rounded-none prose-img:border-4 prose-img:border-black prose-img:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
          prose-blockquote:border-l-4 prose-blockquote:border-black prose-blockquote:bg-gray-50 prose-blockquote:p-6 prose-blockquote:not-italic prose-blockquote:font-bold
          transition-colors">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={MarkdownComponents}>
            {note.content}
          </ReactMarkdown>
        </div>
      </article>

      {/* Desktop TOC sidebar */}
      <aside className="hidden xl:block xl:col-span-3">
        <div className="sticky top-6">
          <TableOfContents headings={headings} />
        </div>
      </aside>

      {/* Mobile TOC button */}
      {headings.length > 0 && (
        <button
          onClick={() => setIsTocOpen(true)}
          className="fixed bottom-4 right-4 xl:hidden z-30
            w-10 h-10 flex items-center justify-center
            bg-white border-2 border-black rounded-lg
            shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
            hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]
            active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
            transition-all duration-100"
          aria-label="Open table of contents"
        >
          <div className="flex flex-col space-y-1 w-4">
            <span className="block h-0.5 w-full bg-black"></span>
            <span className="block h-0.5 w-full bg-black"></span>
            <span className="block h-0.5 w-full bg-black"></span>
          </div>
        </button>
      )}

      {/* Mobile TOC drawer */}
      <TableOfContents
        headings={headings}
        isMobile={true}
        isOpen={isTocOpen}
        onClose={() => setIsTocOpen(false)}
      />
    </div>
  );
}
