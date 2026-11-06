import React from 'react';

/**
 * Clean, lightweight SVG Brand Icons for developer tech stacks.
 * Rendered with authentic brand colors and responsive sizing.
 */
export const TechIcon = ({ name, className = 'h-5 w-5' }) => {
  switch (name.toLowerCase()) {
    case 'go (golang)':
    case 'go':
    case 'golang':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={`text-[#00ADD8] ${className}`}>
          <path d="M1.811 10.231c.348 0 .685.043 1.008.125l.441-1.077a4.912 4.912 0 0 0-1.45-.224C.81 9.055 0 9.873 0 10.884c0 1.056.866 1.884 1.933 1.884.97 0 1.764-.693 1.916-1.61h-1.99c-.046.223-.23.38-.456.38-.28 0-.495-.213-.495-.504 0-.301.216-.51.503-.51v-.293zm20.378-.046c-.28 0-.495.21-.495.503 0 .28.216.495.495.495.226 0 .41-.157.457-.38H24c-.152.916-.946 1.609-1.917 1.609-1.066 0-1.932-.828-1.932-1.884 0-1.011.81-1.83 1.81-1.83.522 0 1.02.213 1.451.224l-.441 1.078a2.802 2.802 0 0 0-1.009-.125v.31zm-6.286-3.839l-4.103 9.771h2.155l.896-2.261h3.94l.87 2.261h2.184l-4.086-9.771h-1.856zm-.436 5.867l1.37-3.468 1.353 3.468h-2.723zM7.172 6.346H5.05l-4.086 9.771H3.15l.87-2.261h3.94l.896 2.261h2.155L7.172 6.346zm-2.584 5.867l1.353-3.468 1.37 3.468H4.588z" />
        </svg>
      );

    case 'c# / .net':
    case 'c#':
    case 'asp.net core':
    case 'asp.net core v8':
    case '.net':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={`text-[#512BD4] ${className}`}>
          <path d="M11.99 0C5.37 0 0 5.37 0 12s5.37 12 11.99 12C18.63 24 24 18.63 24 12S18.63 0 11.99 0zm.01 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm-1.5-6h3v-2h-3v2zm0-4h3V6h-3v6z" />
          <text x="6" y="16" fontSize="9" fontWeight="bold" fill="currentColor">C#</text>
        </svg>
      );

    case 'php':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={`text-[#777BB4] ${className}`}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-4.7 13.5H5.8l1.3-6.5h2.1c1.2 0 2.1.8 1.9 2-.2 1.5-1.4 2.5-2.7 2.5H7l-.7 2zm7.6 0h-1.5l1.3-6.5h2.1c1.2 0 2.1.8 1.9 2-.2 1.5-1.4 2.5-2.7 2.5h-1.4l-.7 2zm-2.8-2h-1.6l.4-2.1h1.6c.4 0 .7-.3.8-.7.1-.5-.2-.8-.7-.8h-1.6l.4-2.1h2.2c1.2 0 2 .7 1.8 1.8-.2 1.1-.9 1.9-1.9 2.2.8.2 1.1.9 1 1.7-.2 1.2-1.2 2-2.4 2z" />
        </svg>
      );

    case 'laravel':
    case 'laravel 10':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={`text-[#FF2D20] ${className}`}>
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 8.5L4.5 7 12 3.5 19.5 7 12 10.5zM2 17l10 5 10-5v-5l-10 5-10-5v5z" />
        </svg>
      );

    case 'react.js':
    case 'react':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={`text-[#61DAFB] ${className}`}>
          <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="1.8" />
        </svg>
      );

    case 'next.js':
    case 'nextjs':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={`text-slate-900 dark:text-white ${className}`}>
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.87 13.91l-4.46-5.83v5.83H9.72V8.09h1.72l4.43 5.84V8.09h1.69v7.82h-1.69z" />
        </svg>
      );

    case 'tailwind css':
    case 'tailwind':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={`text-[#38BDF8] ${className}`}>
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      );

    case 'mysql':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={`text-[#00758F] ${className}`}>
          <path d="M12 3C6.5 3 2 6.5 2 11c0 3 2 5.5 5 7l-.5 3 3.5-2c.7.1 1.3.1 2 .1 5.5 0 10-3.5 10-8s-4.5-8-10-8zm-1 12.5c-2.5 0-4.5-1.5-4.5-3.5s2-3.5 4.5-3.5 4.5 1.5 4.5 3.5-2 3.5-4.5 3.5z" />
        </svg>
      );

    case 'microsoft sql server':
    case 'sql server':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={`text-[#CC292B] ${className}`}>
          <path d="M12 2C6.48 2 2 4.02 2 6.5v11C2 19.98 6.48 22 12 22s10-2.02 10-4.5v-11C22 4.02 17.52 2 12 2zm0 2.5c3.86 0 7 1.12 7 2.5s-3.14 2.5-7 2.5-7-1.12-7-2.5 3.14-2.5 7-2.5zm0 14.5c-3.86 0-7-1.12-7-2.5V14c1.8 1.1 4.3 1.5 7 1.5s5.2-.4 7-1.5v2.5c0 1.38-3.14 2.5-7 2.5z" />
        </svg>
      );

    case 'postgresql':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={`text-[#336791] ${className}`}>
          <path d="M12 2a9.98 9.98 0 0 0-7.8 3.8C3.4 7 3 8.4 3 10c0 4.4 2.6 8.2 6.5 9.4-.1-.5-.2-1.2-.2-1.8 0-.4 0-.8.1-1.2-1.3-.1-2.4-.7-2.8-1.7-.1-.3-.1-.7 0-1 .4.2 1 .3 1.6.3-.9-.6-1.5-1.6-1.5-2.8 0-.6.2-1.2.5-1.7 1.4 1.8 3.5 2.9 5.8 3-.1-.2-.1-.5-.1-.8 0-1.9 1.6-3.5 3.5-3.5 1 0 1.9.4 2.5 1.1.8-.2 1.5-.5 2.2-.9-.3.9-.9 1.6-1.7 2 .7-.1 1.4-.3 2.1-.6-.5.7-1.1 1.4-1.8 1.9.1.5.1 1 .1 1.5 0 4.6-3.5 9.7-9.7 9.7A9.9 9.9 0 0 0 22 12c0-5.5-4.5-10-10-10z" />
        </svg>
      );

    case 'git & version control':
    case 'git':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={`text-[#F05032] ${className}`}>
          <path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L8.6 4.8l2.6 2.6c.6-.2 1.3-.1 1.8.4.5.5.6 1.3.4 1.9l2.5 2.5c.6-.2 1.4-.1 1.9.4.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.6-.6-.7-1.4-.4-2.1L12.5 10v4.8c.2.2.4.5.4.8 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.6.4-1.2 1-1.4V9.6c-.6-.2-1-.8-1-1.4 0-.3.1-.6.2-.8L7.5 4.8 2.4 9.9c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.6-8.5c.6-.6.6-1.5 0-2.1z" />
        </svg>
      );

    case 'bpmn 2.0':
    case 'bpmn':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`text-[#06B6D4] ${className}`}>
          <rect x="2" y="5" width="8" height="6" rx="1" />
          <rect x="14" y="13" width="8" height="6" rx="1" />
          <path d="M10 8h2a2 2 0 0 1 2 2v3" />
        </svg>
      );

    case 'uml modeling':
    case 'uml':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`text-[#14B8A6] ${className}`}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`text-cyan-400 ${className}`}>
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
  }
};

