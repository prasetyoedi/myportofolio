import React, { useState, useEffect } from 'react';

export const LoadingScreen = ({ isLoaded }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (isLoaded) return;
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 15;
      });
    }, 45);
    return () => clearInterval(interval);
  }, [isLoaded]);

  if (isLoaded) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#06182c] text-white transition-opacity duration-300 font-mono"
    >
      <div className="flex flex-col items-center gap-3">
        {/* Pulsing Dot */}
        <div className="relative flex h-8 w-8 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400 shadow-[0_0_12px_#06b6d4]" />
        </div>

        <div className="text-center mt-2">
          <h2 className="text-xs font-bold tracking-widest text-slate-100">
            PRASETYO EDI PAMUNGKAS
          </h2>
        </div>

        {/* Progress Track */}
        <div className="w-36 h-1 bg-black/40 border border-cyan-500/25 rounded-full overflow-hidden mt-2">
          <div
            className="h-full bg-gradient-to-r from-teal-400 to-cyan-400 transition-all duration-100"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
};
