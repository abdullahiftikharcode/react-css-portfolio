import React from 'react';
import { Container, Grid, Typography, Box, useMediaQuery, useTheme } from '@mui/material';
import AnimatedElement from '../../components/AnimatedElement/AnimatedElement';
import Scrambler from '../../components/Scrambler/Scrambler';
import ContactForm from '../../components/ContactForm/ContactForm';
import styles from './Contact.module.css';

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Contact info data
  const contactInfo = [
    { label: 'Email', value: 'abdullahdevelopersite@gmail.com' },
    { label: 'Phone', value: '+92 345 123 4567' },
    { label: 'Location', value: 'Lahore, Pakistan' }
  ];

  return (
    <Container className={styles.contactContainer}>
      <Grid container spacing={4}>
        {/* Left Column - Contact Info */}
        <Grid item xs={12} md={4}>
          <AnimatedElement animation="slide-right" delay={100}>
            <Typography variant="subtitle1" className={styles.sectionTitle}>
              <Scrambler text="CONTACT ME" delay={100} speed={3} />
            </Typography>
            
            <Box className={styles.contactInfoBox}>
              <AnimatedElement animation="fade" delay={300}>
                <Typography variant="h3" className={styles.contactHeading}>
                  Let's work together on your next project
                </Typography>
              </AnimatedElement>
              
              <AnimatedElement animation="slide-up" delay={500}>
                <Typography variant="body1" className={styles.contactText}>
                  I'm currently available for freelance work. If you have a project that you want to get started, think you need my help with something or just fancy saying hello, then get in touch.
                </Typography>
              </AnimatedElement>
              
              <Box className={styles.contactDetailsList}>
                {contactInfo.map((info, index) => (
                  <AnimatedElement 
                    key={index} 
                    animation="slide-up" 
                    delay={700 + (index * 150)}
                  >
                    <Box className={styles.contactDetailItem}>
                      <Typography variant="subtitle2" className={styles.contactLabel}>
                        {info.label}:
                      </Typography>
                      <Typography variant="body1" className={styles.contactValue}>
                        {info.value}
                      </Typography>
                    </Box>
                  </AnimatedElement>
                ))}
              </Box>
            </Box>
          </AnimatedElement>
        </Grid>
        
        {/* Right Column - Contact Form */}
        <Grid item xs={12} md={8}>
          <AnimatedElement animation="slide-left" delay={400}>
            <Box className={styles.formWrapper}>
              <ContactForm />
            </Box>
          </AnimatedElement>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact; 