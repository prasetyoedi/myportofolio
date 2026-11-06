import React, { useEffect, useRef } from 'react';
import { cn } from '../utils/cn';

export const AnimatedSection = ({ children, className, delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    // Fast-path for users with reduced motion preferences
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('opacity-100', 'translate-y-0');
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove('opacity-0', 'translate-y-3');
          el.classList.add('opacity-100', 'translate-y-0');
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0 translate-y-3 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[opacity,transform]',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
