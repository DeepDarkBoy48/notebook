import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
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
        return (
            <img
                {...props}
                className="w-full h-auto rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 my-8"
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
    pre: ({ children }: any) => <>{children}</>
  };

  if (!note) {
    return <div>Note not found</div>;
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
      <article className="xl:col-start-2 xl:col-span-8 max-w-none mx-auto w-full space-y-8">
        <header className="text-center space-y-4 border-b border-gray-200 dark:border-gray-800 pb-8">
          <div className="space-x-2">
            <span className="text-sm font-medium text-green-600 dark:text-green-400">
              {note.category}
            </span>
            <span className="text-gray-300 dark:text-gray-600">•</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {note.date}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
            {note.title}
          </h1>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none prose-green prose-headings:font-bold prose-headings:tracking-tight prose-a:text-green-600 hover:prose-a:text-green-500 transition-colors">
          <ReactMarkdown components={MarkdownComponents}>
            {note.content}
          </ReactMarkdown>
        </div>
      </article>

      <aside className="hidden xl:block xl:col-span-3">
        <div className="sticky top-24">
          <TableOfContents headings={headings} />
        </div>
      </aside>
    </div>
  );
}
