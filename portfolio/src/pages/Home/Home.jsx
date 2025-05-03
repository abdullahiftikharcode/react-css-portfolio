import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Grid, 
  Container,
  useMediaQuery,
  useTheme
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';
import AnimatedElement from '../../components/AnimatedElement/AnimatedElement';
import AnimatedCounter from '../../components/shared/AnimatedCounter';
import ProfileImageAnimation from '../../components/ProfileImage/ProfileImageAnimation';
import Scrambler from '../../components/Scrambler/Scrambler';
import profileImage from '../../assets/images/imgme.jpg';
import styles from './Home.module.css';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDownloadCV = () => {
    window.open('/assets/AbdullahIftikharResume.pdf', '_blank');
  };

  // Counter statistics data
  const counters = [
    { value: 840, label: 'Work Hours' },
    { value: 23, label: 'Projects' },
    { value: 15, label: 'Clients' },
    { value: 8, label: 'Certifications' }
  ];

  return (
    <Container>
      {/* Hero Section */}
      <Grid container spacing={4} className={styles.heroSection}>
        {/* Left Column - Text Content */}
        <Grid item xs={12} md={7} className={styles.heroContent}>
          <AnimatedElement animation="fade" delay={100}>
            <Typography variant="h6" className={styles.greeting}>
              Hello I'm
            </Typography>
          </AnimatedElement>
          
          <AnimatedElement animation="fade" delay={300}>
            <Typography variant="h1" className={styles.name}>
              <Scrambler 
                text="Abdullah Iftikhar" 
                delay={200} 
                speed={3} 
                active={true}
              />
            </Typography>
          </AnimatedElement>
          
          <AnimatedElement animation="fade" delay={500}>
            <Typography variant="h4" className={styles.title}>
              CS Student & Developer
            </Typography>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-up" delay={700}>
            <Typography variant="body1" className={styles.description}>
              Welcome to my portfolio! I'm passionate about creating interactive
              and responsive web applications. Currently pursuing a CS degree
              and building projects that solve real-world problems.
            </Typography>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-up" delay={900}>
            <Box className={styles.buttonGroup}>
              <Button
                variant="contained"
                color="primary"
                className={styles.primaryButton}
                endIcon={<KeyboardArrowRightIcon />}
                component={Link}
                to="/aboutme"
              >
                Learn More
              </Button>
              
              <Button
                variant="outlined"
                startIcon={<DownloadIcon />}
                className={styles.secondaryButton}
                onClick={handleDownloadCV}
              >
                Download Resume
              </Button>
            </Box>
          </AnimatedElement>
        </Grid>
        
        {/* Right Column - Profile Image */}
        <Grid item xs={12} md={5} className={styles.imageContainer}>
          <AnimatedElement animation="zoom" delay={200}>
            <ProfileImageAnimation 
              src={profileImage} 
              alt="Abdullah Iftikhar" 
              size={isMobile ? 250 : 300}
              active={true}
            />
          </AnimatedElement>
        </Grid>
      </Grid>
      
      {/* Counter Statistics Section */}
      <AnimatedElement animation="fade" delay={500}>
        <Box className={styles.statsSection}>
          <Grid container spacing={3}>
            {counters.map((counter, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <AnimatedCounter 
                  end={counter.value} 
                  label={counter.label}
                  duration={2000 + (index * 200)}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </AnimatedElement>
    </Container>
  );
};

export default Home; 