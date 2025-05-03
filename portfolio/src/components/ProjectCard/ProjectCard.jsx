import React from 'react';
import { Card, CardContent, Button, Box, Typography } from '@mui/material';
import AnimatedElement from '../../components/AnimatedElement/AnimatedElement';
import styles from './ProjectCard.module.css';

/**
 * ProjectCard - A component that displays a project with background image and hover effect
 * 
 * @param {Object} props 
 * @param {string} props.imageUrl - URL of the background image for the card
 * @param {string} props.projectUrl - URL to the project repository or live demo
 * @param {string} props.title - Project title
 * @param {number} props.delay - Animation delay in ms
 */
const ProjectCard = ({ imageUrl, projectUrl, title, delay = 0 }) => {
  return (
    <AnimatedElement animation="zoomIn" delay={delay}>
      <Card 
        className={styles.projectCard}
        sx={{ 
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <Box className={styles.overlay}>
          <CardContent className={styles.cardContent}>
            {title && (
              <Typography 
                variant="h6" 
                className={styles.projectTitle}
                gutterBottom
              >
                {title}
              </Typography>
            )}
            
            <Button
              variant="outlined"
              color="inherit"
              size="small"
              className={styles.viewButton}
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              VIEW PROJECT
            </Button>
          </CardContent>
        </Box>
      </Card>
    </AnimatedElement>
  );
};

export default ProjectCard; 