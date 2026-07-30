import React, { useEffect, useRef } from 'react';
import { cn } from '../utils/cn';

export const AnimatedSection = ({ children, className, delay = 0 }) => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    el.classList.add('visible');
                }
            },
            { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={cn('reveal', className)}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};