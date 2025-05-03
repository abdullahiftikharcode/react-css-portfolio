import { useState, useEffect } from 'react';
import { useInView as useIntersectionObserver } from 'react-intersection-observer';

/**
 * Custom hook for triggering animations when elements come into view
 * @param {Object} options - Configuration options for the intersection observer
 * @param {number} options.threshold - Value between 0 and 1 indicating the percentage of the element that needs to be visible
 * @param {number} options.triggerOnce - Whether to trigger the animation only once
 * @param {number} options.delay - Delay in ms before applying the animation class
 * @returns {Array} - [ref, inView, animationClass] - ref to attach to the element, inView boolean, and animation class string
 */
const useInView = (options = {}) => {
  const { 
    threshold = 0.1, 
    triggerOnce = true, 
    delay = 0,
    rootMargin = '0px'
  } = options;
  
  const [animationClass, setAnimationClass] = useState('');
  const { ref, inView } = useIntersectionObserver({
    threshold,
    triggerOnce,
    rootMargin
  });

  useEffect(() => {
    let timer;
    if (inView) {
      timer = setTimeout(() => {
        setAnimationClass('animate');
      }, delay);
    } else if (!triggerOnce) {
      setAnimationClass('');
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [inView, delay, triggerOnce]);

  return [ref, inView, animationClass];
};

export default useInView; 