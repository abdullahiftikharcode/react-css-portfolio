import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import AnimatedElement from '../../components/AnimatedElement/AnimatedElement';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import styles from './Works.module.css';

const Works = () => {
  // Project data
  const projects = [
    {
      imageUrl: 'https://opengraph.githubassets.com/fb102e714a8866c4ac621f97db3bf5add483eadbabe2a7a34932b26a8cd86847/abdullahiftikharcode/Titan-Factory',
      projectUrl: 'https://github.com/abdullahiftikharcode/Titan-Factory'
    },
    {
      imageUrl: 'https://opengraph.githubassets.com/50d706637a7fca26164111bb859e1b3334fb52c91c9ac478c7e3f231d639f654/abdullahiftikharcode/Campus-Pulse',
      projectUrl: 'https://github.com/abdullahiftikharcode/Campus-Pulse'
    },
    {
      imageUrl: 'https://opengraph.githubassets.com/c3270c6815beff38b508a4cea4429f91f964fd4c5c161f5f0b25ad7499b79d89/abdullahiftikharcode/Bookstore-Management-System',
      projectUrl: 'https://github.com/abdullahiftikharcode/Bookstore-Management-System'
    },
    {
      imageUrl: 'https://opengraph.githubassets.com/50e5f60f9ac2020b72a6ee173bb68ebf0c7b9ca4c539c611c28c02dbc23e85c2/abdullahiftikharcode/Chess',
      projectUrl: 'https://github.com/abdullahiftikharcode/Chess'
    }
  ];

  return (
    <Box className={styles.pageContent}>
      <Container className={styles.worksContainer}>
        <Grid container spacing={3}>
          {/* Section Title */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" className={styles.sectionTitle}>
              MY REPOSITORIES
            </Typography>
          </Grid>
          
          {/* Projects Grid */}
          <Grid item xs={12} md={10}>
            <Grid container spacing={2}>
              {projects.map((project, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <AnimatedElement 
                    animation="zoom-in" 
                    delay={index * 100}
                  >
                    <ProjectCard
                      imageUrl={project.imageUrl}
                      projectUrl={project.projectUrl}
                    />
                  </AnimatedElement>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Works; 