import { useRef, useEffect } from 'react';

/**
 * Custom hook for running animations with requestAnimationFrame
 * @param {Function} callback - The animation callback function that receives timestamp and deltaTime
 * @param {boolean} isActive - Whether the animation should be running (default: true)
 * @returns {Object} - Contains methods to control the animation (pause, resume)
 */
const useAnimationFrame = (callback, isActive = true) => {
  const requestRef = useRef(null);
  const previousTimeRef = useRef(null);
  const isActiveRef = useRef(isActive);
  
  // Update the isActiveRef when the isActive prop changes
  useEffect(() => {
    isActiveRef.current = isActive;
  }, [isActive]);

  useEffect(() => {
    const animate = (time) => {
      if (previousTimeRef.current !== undefined) {
        const deltaTime = time - previousTimeRef.current;
        if (isActiveRef.current) {
          callback(time, deltaTime);
        }
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };
    
    requestRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [callback]);

  // Methods to control the animation
  const controls = {
    pause: () => {
      isActiveRef.current = false;
    },
    resume: () => {
      isActiveRef.current = true;
    },
    toggle: () => {
      isActiveRef.current = !isActiveRef.current;
    }
  };

  return controls;
};

export default useAnimationFrame; 