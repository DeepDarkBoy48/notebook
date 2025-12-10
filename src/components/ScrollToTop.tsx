import { useEffect, useState } from 'react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const toggleVisibility = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY;
      
      // Show if we have scrolled past 300px AND we are scrolling UP
      if (currentScrollY > 300 && isScrollingUp) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-[100] p-3 
                 bg-white text-black 
                 border-2 border-black 
                 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                 hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] 
                 transition-all duration-200 
                 flex items-center justify-center
                 group"
      aria-label="Scroll to top"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="square" 
        strokeLinejoin="miter"
      >
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
