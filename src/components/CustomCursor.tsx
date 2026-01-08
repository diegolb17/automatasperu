import { useEffect, useRef } from "react";

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const isPointerRef = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const updatePosition = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursor.style.opacity = "1";
      
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]');
      
      if (isClickable !== isPointerRef.current) {
        isPointerRef.current = !!isClickable;
        const inner = cursor.firstChild as HTMLElement;
        if (inner) {
          if (isClickable) {
            inner.style.width = '40px';
            inner.style.height = '40px';
            inner.style.background = 'transparent';
            inner.style.border = '2px solid hsl(345 100% 65%)';
          } else {
            inner.style.width = '12px';
            inner.style.height = '12px';
            inner.style.background = 'hsl(345 100% 65%)';
            inner.style.border = 'none';
          }
        }
      }
    };

    const handleMouseLeave = () => { cursor.style.opacity = "0"; };
    const handleMouseEnter = () => { cursor.style.opacity = "1"; };

    document.addEventListener("mousemove", updatePosition, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999]"
      style={{ transform: "translate(-50%, -50%)", opacity: 0 }}
    >
      <div 
        className="rounded-full transition-[width,height,background,border] duration-100"
        style={{
          width: 12,
          height: 12,
          background: 'hsl(345 100% 65%)',
          boxShadow: '0 0 15px hsl(345 100% 65% / 0.8), 0 0 30px hsl(345 100% 65% / 0.4)',
        }}
      />
    </div>
  );
};
