import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import useInView from '../../hooks/useInView';
import styles from './AnimatedElement.module.css';

/**
 * AnimatedElement component that adds animations to elements when they enter the viewport
 * @param {Object} props Component props
 * @param {React.ReactNode} props.children The content to be animated
 * @param {string} props.animation Animation type: 'fade', 'slide-up', 'slide-down', 'slide-left', 'slide-right', 'zoom', 'none'
 * @param {number} props.delay Delay before animation starts in milliseconds
 * @param {number} props.duration Animation duration in milliseconds
 * @param {number} props.threshold Intersection observer threshold (0 to 1)
 * @param {string} props.className Additional CSS class names
 * @param {Object} props.sx Additional MUI styling
 */
const AnimatedElement = ({
  children,
  animation = 'fade',
  delay = 0,
  duration = 800,
  threshold = 0.1,
  className = '',
  sx = {},
  ...props
}) => {
  // Use the useInView hook to detect when element enters viewport
  const [ref, inView, animationClass] = useInView({
    threshold,
    triggerOnce: true,
    delay
  });

  // Determine which animation class to use
  const getAnimationClass = () => {
    if (!animation || animation === 'none') return '';
    
    switch (animation) {
      case 'slide-up':
        return styles.slideUp;
      case 'slide-down':
        return styles.slideDown;
      case 'slide-left':
        return styles.slideLeft;
      case 'slide-right':
        return styles.slideRight;
      case 'zoom':
        return styles.zoom;
      case 'fade':
      default:
        return styles.fade;
    }
  };

  return (
    <Box
      ref={ref}
      className={`${styles.animatedElement} ${getAnimationClass()} ${animationClass ? styles.animate : ''} ${className}`}
      sx={{
        ...sx,
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
        opacity: animation === 'none' ? 1 : 0
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

AnimatedElement.propTypes = {
  children: PropTypes.node.isRequired,
  animation: PropTypes.oneOf([
    'fade',
    'slide-up', 
    'slide-down', 
    'slide-left', 
    'slide-right',
    'zoom',
    'none'
  ]),
  delay: PropTypes.number,
  duration: PropTypes.number,
  threshold: PropTypes.number,
  className: PropTypes.string,
  sx: PropTypes.object
};

export default AnimatedElement; 