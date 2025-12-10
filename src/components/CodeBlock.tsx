import React, { useState } from 'react';

interface CodeBlockProps {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function CodeBlock({ inline, className, children, ...props }: CodeBlockProps) {
  const [isWrapped, setIsWrapped] = useState(true);
  const [copied, setCopied] = useState(false);

  const match = /language-(\w+)/.exec(className || '');
  const language = match ? match[1] : '';

  if (inline) {
    return (
      <code className={`${className} bg-gray-100 text-gray-800 rounded-md px-1.5 py-0.5 font-mono text-sm border border-gray-200/50`} {...props}>
        {children}
      </code>
    );
  }

  const handleCopy = async () => {
    const text = String(children).replace(/\n$/, '');
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative my-8 group border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      {/* Header / Actions Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-yellow-400 border-b-4 border-black">
        <span className="text-xs font-black text-black uppercase tracking-widest font-sans">
          {language || 'text'}
        </span>
        <div className="flex items-center space-x-2">
          {/* Wrap Toggle Button */}
          <button
            onClick={() => setIsWrapped(!isWrapped)}
            className={`p-1.5 rounded-lg transition-all duration-200 ${
              isWrapped 
                ? 'bg-emerald-50 text-emerald-600' 
                : 'text-gray-400 hover:bg-gray-100 hover:text-gray-600'
            }`}
            title="Toggle Wrap"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 6h18" />
              <path d="M3 12h15a3 3 0 1 1 0 6h-4" />
              <polyline points="16 16 14 18 16 20" />
            </svg>
          </button>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-all duration-200"
            title="Copy Code"
          >
            {copied ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Code Content */}
      <div className={`bg-white p-5 overflow-x-auto ${isWrapped ? 'whitespace-pre-wrap' : 'whitespace-pre'}`}>
        <code className={`block font-mono text-sm text-gray-700 leading-relaxed before:content-none after:content-none ${className}`} {...props}>
          {children}
        </code>
      </div>
    </div>
  );
}

