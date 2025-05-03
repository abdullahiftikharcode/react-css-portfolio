import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './ProjectCard.module.css';

/**
 * ProjectCard - A component that displays a project with background image and hover effect
 * 
 * @param {Object} props 
 * @param {string} props.imageUrl - URL of the background image for the card
 * @param {string} props.projectUrl - URL to the project repository or live demo
 */
const ProjectCard = ({ imageUrl, projectUrl }) => {
  return (
    <Box 
      className={styles.repoCard}
      onClick={() => window.open(projectUrl, '_blank')}
    >
      <Box className={styles.cardImageContainer}>
        <img 
          src={imageUrl} 
          alt="Repository Preview" 
          className={styles.cardImage}
        />
      </Box>
      <Box className={styles.cardContent}>
        <Typography variant="h6" className={styles.cardTitle}>
          GitHub Repository
        </Typography>
        <Typography variant="body2" className={styles.cardSubtitle}>
          Click to view on GitHub
        </Typography>
      </Box>
    </Box>
  );
};

export default ProjectCard; 