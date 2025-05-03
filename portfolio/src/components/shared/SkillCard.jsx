import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import AnimatedElement from './AnimatedElement';
import styles from './SkillCard.module.css';

/**
 * SkillCard component for displaying skill with icon
 * 
 * @param {Object} props
 * @param {string} props.name - The name of the skill
 * @param {string} props.icon - The path to the skill icon image
 * @param {number} props.delay - Delay before animation starts (default: 0)
 */
const SkillCard = ({ name, icon, delay = 0 }) => {
  return (
    <AnimatedElement animation="zoomIn" delay={delay}>
      <Card className={styles.card}>
        <CardContent className={styles.cardContent}>
          <Box className={styles.iconContainer}>
            <img 
              src={icon}
              alt={name}
              className={styles.icon}
            />
          </Box>
          <Typography variant="subtitle1" className={styles.skillName}>
            {name}
          </Typography>
        </CardContent>
      </Card>
    </AnimatedElement>
  );
};

export default SkillCard; 