import React from 'react';
import useInView from '../../hooks/useInView';
import styles from './AnimatedElement.module.css';

/**
 * AnimatedElement - A wrapper component that adds animations when elements come into view
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to be animated
 * @param {string} props.animation - The animation type ('fadeIn', 'fadeInUp', 'fadeInLeft', 'fadeInRight', 'zoomIn')
 * @param {number} props.delay - Delay in ms before the animation starts
 * @param {number} props.threshold - Threshold for intersection observer (0-1)
 * @param {boolean} props.triggerOnce - Whether to trigger the animation only once
 * @param {string} props.className - Additional CSS class names
 */
const AnimatedElement = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
  className = '',
  ...props
}) => {
  const [ref, inView, animationClass] = useInView({
    threshold,
    triggerOnce,
    delay
  });

  const animationStyles = animation ? styles[animation] : '';
  
  return (
    <div
      ref={ref}
      className={`
        ${styles.animatedElement} 
        ${animationStyles}
        ${styles[animationClass]} 
        ${className}
      `}
      style={{ 
        '--animation-delay': `${delay}ms`,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedElement; 