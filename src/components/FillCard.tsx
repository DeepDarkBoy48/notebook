import React, { useState, useMemo, useEffect } from 'react';

interface FillCardProps {
  children?: React.ReactNode;
  text?: string;
  quote?: string;
}

export function FillCard({ children, text, quote }: FillCardProps) {
  const [copied, setCopied] = useState(false);
  const [templateCopied, setTemplateCopied] = useState(false);

  // Helper to get text content from React children
  const getTextFromChildren = (children: React.ReactNode): string => {
    let text = '';
    React.Children.toArray(children).forEach(child => {
      if (typeof child === 'string') {
        text += child;
      } else if (typeof child === 'number') {
        text += child.toString();
      } else if (React.isValidElement(child)) {
        const props = child.props as { children?: React.ReactNode };
        if (props.children) {
          text += getTextFromChildren(props.children);
        }
      }
    });
    return text;
  };

  // Determine the content to process
  let rawContent = text || quote || '';
  if (!rawContent && children) {
    rawContent = getTextFromChildren(children);
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

  const handleCopyTemplate = () => {
    navigator.clipboard.writeText(rawContent);
    setTemplateCopied(true);
    setTimeout(() => setTemplateCopied(false), 2000);
  };

  if (!rawContent) return null;

  return (
    <div className="relative my-6 group border-[3px] border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden rounded-xl">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#FF4B4B] border-b-[3px] border-black">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-white border-2 border-black"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-white/50 border-2 border-black"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-white/20 border-2 border-black"></div>
          </div>
          <span className="ml-2 text-xs font-black text-white uppercase tracking-[0.2em] font-sans drop-shadow-[1px_1px_0px_rgba(0,0,0,0.5)]">
            Fill Card
          </span>
        </div>
        <div className="flex items-center gap-1 opacity-50">
          <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
          <div className="w-10 h-1 bg-white/20 rounded-full"></div>
        </div>
      </div>

      <div className="p-5 md:p-6 font-sans relative bg-[#FFFDF9]">
        {/* Decorative Watermark - Reduced size */}
        <div className="absolute top-2 right-4 text-[60px] text-red-500/[0.03] pointer-events-none select-none font-black italic leading-none">
          FILL
        </div>

        {/* Content Container */}
        <div className="relative z-10">
          <div className="text-base md:text-lg leading-[1.6] text-gray-900 font-bold font-mono whitespace-pre-wrap break-words decoration-skip-ink space-y-3">
            {segments.map((segment, index) => {
              if (segment.type === 'blank') {
                const placeholder = segment.content;
                const val = values[index] || '';
                
                return (
                  <span key={index} className="inline-grid align-baseline mx-0.5 relative group/input translate-y-[2px]">
                    <span className="col-start-1 row-start-1 invisible whitespace-pre px-2.5 py-0 border-b-2 border-transparent font-bold min-w-[3em]" aria-hidden="true">
                      {val || placeholder}
                    </span>
                    
                    <input
                      type="text"
                      className="col-start-1 row-start-1 w-full bg-[#FFEE93] border-b-2 border-black/10 focus:border-[#FF4B4B] focus:outline-none focus:bg-[#FFF7D1] px-2.5 py-0 text-center font-bold text-black placeholder-black/30 transition-all rounded shadow-[1px_1px_0px_0px_rgba(0,0,0,0.1)] focus:shadow-[2px_2px_0px_0px_rgba(255,75,75,0.2)]"
                      placeholder={placeholder}
                      value={val}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </span>
                );
              }
              return (
                <span key={index} className="text-[#2D3436] tracking-tight hover:text-black transition-colors">
                  {segment.content}
                </span>
              );
            })}
          </div>
        </div>

        {/* Footer actions - More compact */}
        <div className="mt-6 pt-4 border-t-2 border-black/5 flex flex-wrap gap-3 items-center justify-between">
          <div className="text-[10px] font-black text-black/30 uppercase tracking-widest hidden sm:block">
            Prompt Template
          </div>
          
          <div className="flex gap-3 w-full sm:w-auto">
            {/* Copy Original Button */}
            <button
              onClick={handleCopyTemplate}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 text-xs font-black border-[2px] border-black rounded-lg transition-all 
                duration-200 active:scale-90 select-none
                ${templateCopied 
                  ? 'bg-yellow-400 text-black shadow-none border-dashed animate-none' 
                  : 'bg-white text-black hover:bg-yellow-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none'
                }`}
            >
              <div className={`flex items-center gap-2 transition-transform duration-300 ${templateCopied ? 'scale-110' : 'scale-100'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                <span>{templateCopied ? '已锁定原文' : '复制原文'}</span>
              </div>
            </button>

            {/* Main Copy Button */}
            <button
               onClick={handleCopy}
               className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2 text-xs font-black border-[2px] border-black rounded-lg transition-all 
                 duration-200 active:scale-90 select-none overflow-hidden relative group/btn
                 ${copied 
                   ? 'bg-[#10B981] text-white shadow-none border-dashed' 
                   : 'bg-[#FF4B4B] text-white hover:bg-[#FF6B6B] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none'
                 }`}
            >
              {/* Shimmer effect on hover */}
              {!copied && (
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover/btn:animate-[shimmer_1.5s_infinite] transition-none pointer-events-none" />
              )}
              
              <div className={`flex items-center gap-2 transition-all duration-300 ${copied ? 'scale-110' : 'scale-100'}`}>
                {copied ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span className="tracking-wider">成功复制！</span>
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    <span>复制填词结果</span>
                  </>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Add shimmer animation if not defined in global CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
}
