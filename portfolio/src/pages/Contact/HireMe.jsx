import React from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Box, 
  useMediaQuery,
  useTheme,
  Paper 
} from '@mui/material';
import ContactForm from '../../components/ContactForm/ContactForm';
import AnimatedElement from '../../components/AnimatedElement/AnimatedElement';
import styles from './HireMe.module.css';

const HireMe = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box className="page-content">
      <Container className={styles.hireMeContainer} style={{ width: isMobile ? '100%' : '70%' }}>
        <AnimatedElement animation="fade" delay={100}>
          <Typography variant="body1" className={styles.introText}>
            Whether you have a question, a suggestion, or just want to say hello, this is the place to do it.
            Please fill out the form below with your details and message, and I'll get back to you as soon as possible.
          </Typography>
          
          <Typography variant="h2" className={styles.contactHeading}>
            Contact Me
          </Typography>
        </AnimatedElement>
        
        <AnimatedElement animation="fade" delay={300}>
          <Paper elevation={0} className={styles.formContainer}>
            <ContactForm />
          </Paper>
        </AnimatedElement>
      </Container>
    </Box>
  );
};

export default HireMe; 