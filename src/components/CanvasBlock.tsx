import { useEffect, useRef, useState } from 'react';

interface CanvasBlockProps {
  code: string;
}

export function CanvasBlock({ code }: CanvasBlockProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      setError('Could not get 2D context');
      return;
    }

    let animationId: number | null = null;
    let isMounted = true;

    // Proxy requestAnimationFrame to track the ID for cleanup
    const originalRAF = window.requestAnimationFrame;
    const trackedRAF = (callback: FrameRequestCallback) => {
      const id = originalRAF((time) => {
        if (isMounted) callback(time);
      });
      animationId = id;
      return id;
    };

    try {
      // Clear canvas before each render
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Inject ctx, canvas, and a tracked version of requestAnimationFrame
      const renderFn = new Function('ctx', 'canvas', 'requestAnimationFrame', `"use strict"; ${code}`);
      renderFn(ctx, canvas, trackedRAF);
      setError(null);
    } catch (err: any) {
      console.error('Canvas render error:', err);
      setError(`Render Error: ${err.message}`);
    }

    return () => {
      isMounted = false;
      if (animationId !== null) {
        window.cancelAnimationFrame(animationId);
      }
    };
  }, [code]);

  return (
    <div className="relative my-8 group border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] not-prose">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-emerald-400 border-b-4 border-black">
        <span className="text-xs font-black text-black uppercase tracking-widest font-sans">
          Custom Canvas
        </span>
        <button 
          onClick={() => {
             const canvas = canvasRef.current;
             if (canvas) {
               const link = document.createElement('a');
               link.download = 'canvas-export.png';
               link.href = canvas.toDataURL();
               link.click();
             }
          }}
          className="text-[10px] font-black underline hover:text-white transition-colors"
        >
          EXPORT PNG
        </button>
      </div>

      {/* Content */}
      <div className="p-8 bg-[#fdfdfd] flex flex-col items-center justify-center min-h-[200px]">
        <canvas
          ref={canvasRef}
          width={600}
          height={300}
          className="max-w-full h-auto bg-white border-2 border-black/10"
        />
        {error && (
          <div className="mt-4 p-2 bg-red-100 border-2 border-red-500 text-red-600 text-xs font-mono font-bold w-full">
            {error}
          </div>
        )}
      </div>
      
      <div className="px-4 py-1 text-[10px] text-gray-400 font-mono border-t-2 border-dashed border-black/10">
        Available variables: ctx, canvas
      </div>
    </div>
  );
}
