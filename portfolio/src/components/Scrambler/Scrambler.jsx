import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import useAnimationFrame from '../../hooks/useAnimationFrame';
import styles from './Scrambler.module.css';

const CHARS = '!<>-_\\/[]{}—=+*^?#________';

/**
 * Scrambler component that creates a text scrambling effect
 * @param {Object} props Component props
 * @param {string} props.text The final text to display after scrambling
 * @param {number} props.delay Delay before starting in milliseconds (default: 0)
 * @param {number} props.speed Scrambling speed (lower is faster, default: 4)
 * @param {boolean} props.active Whether the scrambling effect is active (default: true)
 */
const Scrambler = ({ text = '', delay = 0, speed = 4, active = true }) => {
  const [output, setOutput] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const targetRef = useRef(text);
  const queueRef = useRef([]);
  const frameCountRef = useRef(0);
  const frameRequestRef = useRef(0);
  const completedRef = useRef(false);
  const timeoutRef = useRef(null);

  // Reset when text changes
  useEffect(() => {
    targetRef.current = text;
    queueRef.current = [];
    frameCountRef.current = 0;
    completedRef.current = false;
    setIsComplete(false);
    
    if (active) {
      // Add each character to the queue
      for (let i = 0; i < text.length; i++) {
        queueRef.current.push({
          from: CHARS[Math.floor(Math.random() * CHARS.length)],
          to: text[i],
          start: i * speed + delay,
          end: (i + 1) * speed * 10 + delay
        });
      }
    }
  }, [text, delay, speed, active]);

  // Animation function
  const animate = (_, deltaTime) => {
    if (!active || completedRef.current) return;
    
    frameCountRef.current++;
    
    let newOutput = '';
    let complete = true;
    
    for (let i = 0, n = queueRef.current.length; i < n; i++) {
      const { from, to, start, end } = queueRef.current[i];
      
      if (frameCountRef.current >= end) {
        newOutput += to;
      } else if (frameCountRef.current >= start) {
        complete = false;
        const progress = (frameCountRef.current - start) / (end - start);
        const randomChar = CHARS[Math.floor(Math.random() * CHARS.length)];
        
        // Use the random char with diminishing probability as we approach the end
        if (Math.random() < progress) {
          newOutput += to;
        } else {
          newOutput += randomChar;
        }
      } else {
        complete = false;
        newOutput += from;
      }
    }
    
    setOutput(newOutput);
    
    if (complete && !completedRef.current) {
      completedRef.current = true;
      setIsComplete(true);
    }
  };

  // Use our animation frame hook
  useAnimationFrame(animate, active && !isComplete);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Jump to final state if component becomes inactive
  useEffect(() => {
    if (!active && !isComplete) {
      setOutput(text);
      setIsComplete(true);
    }
  }, [active, text, isComplete]);

  return (
    <Box component="span" className={styles.scrambler}>
      {output || ' '}
    </Box>
  );
};

Scrambler.propTypes = {
  text: PropTypes.string.isRequired,
  delay: PropTypes.number,
  speed: PropTypes.number,
  active: PropTypes.bool
};

export default Scrambler; 