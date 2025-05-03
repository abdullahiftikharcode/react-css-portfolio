import React from 'react';
import { Box, Typography } from '@mui/material';
import useCounter from '../../hooks/useCounter';
import useInView from '../../hooks/useInView';
import styles from './AnimatedCounter.module.css';

/**
 * AnimatedCounter - A component that animates counting from 0 to a target value when it comes into view
 * 
 * @param {Object} props
 * @param {number} props.end - The target value to count to
 * @param {string} props.label - The text label below the number
 * @param {string} props.prefix - Optional text/symbol to show before the number
 * @param {string} props.suffix - Optional text/symbol to show after the number
 * @param {number} props.duration - Animation duration in ms (default: 2000)
 * @param {Object} props.sx - MUI style overrides
 */
const AnimatedCounter = ({ 
  end, 
  label, 
  prefix = '', 
  suffix = '', 
  duration = 2000,
  sx = {} 
}) => {
  // Set up the intersection observer to detect when the counter is in view
  const [ref, inView, animationClass] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  // Set up the counter animation, enabled when the element is in view
  const count = useCounter({
    end,
    duration,
    enabled: inView
  });

  return (
    <Box 
      ref={ref}
      className={`${styles.counterContainer} ${styles[animationClass]}`}
      sx={sx}
    >
      <Typography variant="h3" className={styles.counterValue}>
        {prefix}{count}{suffix}
      </Typography>
      <Typography variant="body1" className={styles.counterLabel}>
        {label}
      </Typography>
    </Box>
  );
};

export default AnimatedCounter; 