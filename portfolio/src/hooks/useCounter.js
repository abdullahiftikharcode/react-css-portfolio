import { useState, useEffect } from 'react';

/**
 * Custom hook for animating a counter from 0 to a target value
 * @param {Object} options - Configuration options for the counter
 * @param {number} options.end - The target value to count to
 * @param {number} options.start - The starting value (default: 0)
 * @param {number} options.duration - Duration of the animation in milliseconds (default: 2000)
 * @param {boolean} options.enabled - Whether the counter should start (default: false)
 * @returns {number} - The current count value
 */
const useCounter = (options = {}) => {
  const { 
    end = 100, 
    start = 0, 
    duration = 2000,
    enabled = false
  } = options;
  
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!enabled) {
      return;
    }
    
    // Reset count to start value when triggered
    setCount(start);
    
    // Only animate if there's a difference to animate
    if (end === start) {
      return;
    }
    
    let startTimestamp;
    let animationFrameId;
    
    // Animation function
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Use easeOutQuad for smoother animation near the end
      const easeProgress = 1 - (1 - progress) * (1 - progress);
      
      const nextCount = Math.floor(start + easeProgress * (end - start));
      setCount(nextCount);
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(end); // Ensure we end exactly at the target
      }
    };
    
    animationFrameId = requestAnimationFrame(step);
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [start, end, duration, enabled]);

  return count;
};

export default useCounter; 