import React, { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function CodeBlock({ inline, className, children, ...props }: CodeBlockProps) {
  const [isWrapped, setIsWrapped] = useState(true); // Default to wrap enabled
  const [copied, setCopied] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Handle hydration mismatch by only rendering highlighter on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const match = /language-(\w+)/.exec(className || '');
  const language = match ? match[1] : 'text';

  // Clean up content: remove leading/trailing newlines and potential wrapping backticks
  // We use a regex that handles optional whitespace around the backticks
  // Clean up content: aggressively remove leading/trailing backticks and any surrounding whitespace
  const cleanContent = String(children).replace(/^[\s`]+|[\s`]+$/g, '');

  if (inline) {
    return (
      <code className={`${className} bg-gray-100 text-gray-800 rounded-md px-1.5 py-0.5 font-mono text-sm border border-gray-200/50`} {...props}>
        {children}
      </code>
    );
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cleanContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  // Custom style overrides for the syntax highlighter to fit our aesthetic
  const customStyle = {
    margin: 0,
    padding: 0,
    background: 'transparent',
    fontSize: '1.125rem', // text-lg (18px) - balanced size

    lineHeight: '1.625',   // leading-relaxed
  };

  return (
    <div className="relative my-8 group border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      {/* Header / Actions Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-yellow-400 border-b-4 border-black">
        <span className="text-xs font-black text-black uppercase tracking-widest font-sans">
          {language}
        </span>
        <div className="flex items-center space-x-2">
          {/* Wrap Toggle Button */}
          <button
            onClick={() => setIsWrapped(!isWrapped)}
            className={`p-1.5 border-2 border-black rounded-md transition-all duration-200 ${
              isWrapped 
                ? 'bg-emerald-500 text-white shadow-[2px_2px_0px_0px_#000]' 
                : 'bg-white text-black hover:bg-black hover:text-white shadow-[3px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px]'
            }`}
            title="Toggle Wrap"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 6h18" />
              <path d="M3 12h15a3 3 0 1 1 0 6h-4" />
              <polyline points="16 16 14 18 16 20" />
            </svg>
          </button>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className={`p-1.5 border-2 border-black rounded-md transition-all duration-200 ${
              copied 
                ? 'bg-emerald-500 text-white shadow-[2px_2px_0px_0px_#000]' 
                : 'bg-white text-black hover:bg-black hover:text-white shadow-[3px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px]'
            }`}
            title="Copy Code"
          >
            {copied ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Code Content */}
      <div className={`bg-white p-5 overflow-x-auto ${isWrapped ? 'whitespace-pre-wrap' : 'whitespace-pre'}`}>
        {isMounted ? (
          <SyntaxHighlighter
            style={oneLight}
            language={language}
            PreTag="div"
            customStyle={customStyle}
            codeTagProps={{
              className: `font-mono text-sm`
            }}
            wrapLongLines={isWrapped}
          >
            {cleanContent}
          </SyntaxHighlighter>
        ) : (
           <pre className={`font-mono text-sm text-gray-700 leading-relaxed ${className}`}>
             {cleanContent}
           </pre>
        )}
      </div>
    </div>
  );
}

