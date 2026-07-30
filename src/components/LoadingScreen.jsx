import React, { useState, useEffect } from 'react';

export const LoadingScreen = ({ isLoaded }) => {
  const [text, setText] = useState('');
  const fullText = 'Prasetyo Edi Pamungkas';

  useEffect(() => {
    if (isLoaded) return;
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [isLoaded]);

  return (
    <div className={`loading-screen ${isLoaded ? 'hidden' : ''}`}>
      <div className="loading-text">
        {text || '\u00A0'}
        <span className="loading-cursor">|</span>
      </div>
      <div className="loading-bar-track">
        <div className="loading-bar-fill" />
      </div>
    </div>
  );
};