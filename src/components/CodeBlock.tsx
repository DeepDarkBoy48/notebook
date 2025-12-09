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
      <code className={`${className} bg-gray-100 text-gray-800 rounded px-1 py-0.5 font-mono text-sm`} {...props}>
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
    <div className="relative my-6 group rounded-xl overflow-hidden shadow-sm border border-gray-100">
      {/* Header / Actions Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-100">
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
          {language || 'text'}
        </span>
        <div className="flex items-center space-x-2">
          {/* Wrap Toggle Button */}
          <button
            onClick={() => setIsWrapped(!isWrapped)}
            className={`p-1.5 rounded-md transition-colors ${
              isWrapped 
                ? 'bg-green-100 text-green-700' 
                : 'text-gray-500 hover:bg-gray-200'
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
            className="p-1.5 rounded-md text-gray-500 hover:bg-gray-200 transition-colors"
            title="Copy Code"
          >
            {copied ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
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
      <div className={`bg-gray-50/50 p-4 overflow-x-auto ${isWrapped ? 'whitespace-pre-wrap' : 'whitespace-pre'}`}>
        <code className={`block font-mono text-sm text-gray-800 before:content-none after:content-none ${className}`} {...props}>
          {children}
        </code>
      </div>
    </div>
  );
}
