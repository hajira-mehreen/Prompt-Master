import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
}

export const Reveal: React.FC<RevealProps> = ({ children, width = "100%", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const transitionStyle = {
    transitionDuration: '800ms',
    transitionDelay: `${delay}ms`,
    transitionProperty: 'opacity, transform',
    transitionTimingFunction: 'cubic-bezier(0.2, 0.65, 0.3, 0.9)',
  };

  return (
    <div ref={ref} style={{ width, position: 'relative', overflow: 'hidden' }}>
      <div
        style={{
          ...transitionStyle,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        }}
      >
        {children}
      </div>
    </div>
  );
};