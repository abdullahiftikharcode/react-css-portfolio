import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import useInView from '../../hooks/useInView';
import styles from './ProgressBar.module.css';

/**
 * ProgressBar component that animates when it comes into view
 * 
 * @param {Object} props
 * @param {string} props.skill - The name of the skill
 * @param {number} props.value - The skill level (0-100)
 * @param {number} props.delay - Delay before animation starts in ms (default: 0)
 */
const ProgressBar = ({ skill, value, delay = 0 }) => {
  const [width, setWidth] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  // Animate the progress bar when in view
  useEffect(() => {
    let timeoutId;
    if (inView) {
      timeoutId = setTimeout(() => {
        setWidth(value);
      }, delay);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [inView, value, delay]);

  return (
    <Box ref={ref} className={styles.skillContainer}>
      <Typography variant="subtitle1" className={styles.skillName}>
        {skill}
      </Typography>
      <Box className={styles.progressContainer}>
        <Box 
          className={styles.progressBar}
          sx={{ width: `${width}%` }}
        >
          <Typography variant="caption" className={styles.progressLabel}>
            {value}%
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProgressBar; 