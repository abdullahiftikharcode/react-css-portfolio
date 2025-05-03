import React from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Box, 
  useMediaQuery,
  useTheme 
} from '@mui/material';
import ContactForm from '../../components/ContactForm/ContactForm';
import AnimatedElement from '../../components/AnimatedElement/AnimatedElement';
import Scrambler from '../../components/Scrambler/Scrambler';
import styles from './HireMe.module.css';

const HireMe = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container className={styles.hireMeContainer}>
      <Grid container spacing={4}>
        {/* Page Header */}
        <Grid item xs={12}>
          <AnimatedElement animation="fade" delay={100}>
            <Box className={styles.pageHeader}>
              <Typography variant="h6" className={styles.pageSubtitle}>
                GET IN TOUCH
              </Typography>
              <Typography variant="h2" className={styles.pageTitle}>
                <Scrambler 
                  text="Let's Work Together" 
                  delay={300} 
                  speed={3} 
                  active={true}
                />
              </Typography>
              <Typography variant="body1" className={styles.pageDescription}>
                I'm available for freelance work, full-time positions, and collaborative projects. 
                Feel free to reach out with any questions or opportunities.
              </Typography>
            </Box>
          </AnimatedElement>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} md={5}>
          <AnimatedElement animation="slide-right" delay={300}>
            <Box className={styles.contactInfoSection}>
              <Typography variant="h4" className={styles.sectionTitle}>
                Contact Information
              </Typography>
              
              <Box className={styles.contactInfoItem}>
                <Typography variant="h6">Email</Typography>
                <Typography variant="body1">
                  <a href="mailto:abdullahiftikharcode@gmail.com" className={styles.contactLink}>
                    abdullahiftikharcode@gmail.com
                  </a>
                </Typography>
              </Box>
              
              <Box className={styles.contactInfoItem}>
                <Typography variant="h6">Phone</Typography>
                <Typography variant="body1">
                  <a href="tel:+923062888601" className={styles.contactLink}>
                    +92 306 2888601
                  </a>
                </Typography>
              </Box>
              
              <Box className={styles.contactInfoItem}>
                <Typography variant="h6">Location</Typography>
                <Typography variant="body1">
                  Lahore, Punjab, Pakistan
                </Typography>
              </Box>
              
              <Box className={styles.socialLinks}>
                <a href="https://github.com/abdullahiftikharcode" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  GitHub
                </a>
                <a href="https://linkedin.com/in/abdullahiftikharcode" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  LinkedIn
                </a>
                <a href="https://twitter.com/AbdullahCodeDev" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  Twitter
                </a>
              </Box>
            </Box>
          </AnimatedElement>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={7}>
          <AnimatedElement animation="slide-left" delay={400}>
            <Box className={styles.formSection}>
              <Typography variant="h4" className={styles.sectionTitle}>
                Send Me a Message
              </Typography>
              <ContactForm />
            </Box>
          </AnimatedElement>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HireMe; 