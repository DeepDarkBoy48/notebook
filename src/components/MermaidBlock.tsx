import { useEffect, useState } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: true,
  theme: 'default',
  securityLevel: 'loose',
  fontFamily: 'inherit',
});

interface MermaidBlockProps {
  chart: string;
}

export function MermaidBlock({ chart }: MermaidBlockProps) {
  const [svg, setSvg] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const renderChart = async () => {

      try {
        // Generate a unique ID for each chart
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        const { svg } = await mermaid.render(id, chart);
        setSvg(svg);
        setError(null);
      } catch (err) {
        console.error('Mermaid rendering failed:', err);
        setError('Mermaid diagrams failed to render. Please check the syntax.');
      }
    };

    renderChart();
  }, [chart]);

  return (
    <div className="relative my-8 group border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] not-prose">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-yellow-400 border-b-4 border-black">
        <span className="text-xs font-black text-black uppercase tracking-widest font-sans">
          Mermaid Diagram
        </span>
      </div>

      {/* Content */}
      <div className="p-8 overflow-x-auto bg-white flex justify-center items-center min-h-[100px]">
        {error ? (
          <div className="text-red-500 font-bold">{error}</div>
        ) : svg ? (
          <div 
            dangerouslySetInnerHTML={{ __html: svg }} 
            className="mermaid-container w-full flex justify-center"
          />
        ) : (
          <div className="animate-pulse text-gray-400 font-bold">Rendering...</div>
        )}
      </div>
    </div>
  );
}
