import React, { useState, useEffect } from 'react';

interface TerminalTextProps {
  text: string;
  typingSpeed?: number;
  className?: string;
}

const TerminalText: React.FC<TerminalTextProps> = ({ 
  text, 
  typingSpeed = 50,
  className = ''
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length && isTyping) {
      const timeout = setTimeout(() => {
        setDisplayedText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else if (currentIndex >= text.length) {
      setIsTyping(false);
    }
  }, [currentIndex, text, typingSpeed, isTyping]);

  return (
    <div className={`${className} ${isTyping ? 'terminal-text' : ''}`} style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
      {displayedText}
    </div>
  );
};

export default TerminalText;