import React, { useState, useMemo, useEffect } from 'react';

interface FillCardProps {
  children?: React.ReactNode;
  text?: string;
  quote?: string;
}

export function FillCard({ children, text, quote }: FillCardProps) {
  const [copied, setCopied] = useState(false);

  // Determine the content to process
  let rawContent = text || quote || '';
  if (!rawContent && typeof children === 'string') {
    rawContent = children;
  }

  // Parse content into static text and blank segments
  const segments = useMemo(() => {
    if (!rawContent) return [];
    
    // Split by brackets, capturing the brackets
    const parts = rawContent.split(/(\[.*?\])/g);
    
    return parts.map(part => {
      const match = part.match(/^\[(.*?)\]$/);
      if (match) {
        return { type: 'blank' as const, content: match[1], original: part };
      }
      return { type: 'text' as const, content: part, original: part };
    });
  }, [rawContent]);

  // State to track values of blanks
  const [values, setValues] = useState<Record<number, string>>({});

  useEffect(() => {
    setValues({});
  }, [segments]);

  const handleInputChange = (index: number, value: string) => {
    setValues(prev => ({
      ...prev,
      [index]: value
    }));
  };

  const handleCopy = () => {
    const fullText = segments.map((segment, index) => {
      if (segment.type === 'blank') {
        const val = values[index];
        return (val !== undefined && val !== '') ? val : segment.content;
      }
      return segment.content;
    }).join('');

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!rawContent) return null;

  return (
    <div className="relative my-8 group border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-yellow-400 border-b-4 border-black">
        <span className="text-xs font-black text-black uppercase tracking-widest font-sans">
          FILL CARD
        </span>
        {/* Optional: Add header controls if needed, but keeping it clean to match CodeBlock mostly */}
      </div>

      <div className="p-8 font-serif relative">
        {/* Quote Icon - Watermark (kept subtle) */}
        <div className="absolute top-4 left-4 text-6xl text-black/[0.03] pointer-events-none select-none font-serif leading-none font-black">
          “
        </div>

        {/* Content */}
        <div className="relative z-10 text-xl leading-relaxed text-gray-900">
          {segments.map((segment, index) => {
            if (segment.type === 'blank') {
              const placeholder = segment.content;
              const val = values[index] || '';
              
              // Grid trick for auto-sizing input to fit content
              return (
                <span key={index} className="inline-grid align-baseline mx-1.5 relative group/input">
                  {/* Invisible span to force width */}
                  <span className="col-start-1 row-start-1 invisible whitespace-pre px-3 py-1 border-b-[3px] border-transparent font-medium min-w-[3em]" aria-hidden="true">
                    {val || placeholder}
                  </span>
                  
                  {/* Actual input */}
                  <input
                    type="text"
                    className="col-start-1 row-start-1 w-full bg-[#FFF9DB] border-b-[3px] border-black/20 focus:border-black focus:outline-none focus:bg-[#FFF3BF] px-3 py-1 text-center font-medium text-gray-900 placeholder-gray-400/70 transition-colors rounded-t-sm"
                    placeholder={placeholder}
                    value={val}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                  />
                  
                  {/* Hover visual cue */}
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-black scale-x-0 group-focus-within/input:scale-x-100 transition-transform duration-300 origin-left"></span>
                </span>
              );
            }
            return <span key={index} className="text-gray-800">{segment.content}</span>;
          })}
        </div>

        {/* Footer actions */}
        <div className="mt-8 flex justify-end">
          <button
             onClick={handleCopy}
             className={`flex items-center gap-2 px-4 py-2 text-sm font-bold border-2 border-black rounded-lg transition-all 
               ${copied 
                 ? 'bg-[#E6FFFA] text-black shadow-[2px_2px_0px_0px_#000]' 
                 : 'bg-white text-black hover:bg-black hover:text-white shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px]'
               }`}
          >
            {copied ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span className="font-black">COPIED!</span>
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                COPY TEXT
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
