import { useState, useEffect } from 'react';

export function useTypewriter(
  strings: string[],
  typingSpeed: number = 80,
  erasingSpeed: number = 40,
  pauseDuration: number = 2000
) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [stringIndex, setStringIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentString = strings[stringIndex];

    if (isTyping) {
      if (displayText.length < currentString.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentString.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentString.slice(0, displayText.length - 1));
        }, erasingSpeed);
      } else {
        setIsTyping(true);
        setStringIndex((prev) => (prev + 1) % strings.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, stringIndex, strings, typingSpeed, erasingSpeed, pauseDuration]);

  return { displayText, isTyping };
}
