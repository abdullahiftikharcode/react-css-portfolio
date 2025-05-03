// src/components/Footer/Footer.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Button, 
  useMediaQuery, 
  useTheme 
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import styles from './Footer.module.css';

// Scrambler component for text effect
const Scrambler = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  
  const scramble = () => {
    if (isScrambling) return;
    
    setIsScrambling(true);
    let iterations = 0;
    const maxIterations = 10;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iterations / 2) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      
      if (iterations >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        setIsScrambling(false);
      }
      
      iterations += 1;
    }, 50);
  };
  
  // Trigger scramble on hover
  const handleMouseEnter = () => {
    scramble();
  };
  
  return (
    <span className={styles.scramblerText} onMouseEnter={handleMouseEnter}>
      {displayText}
    </span>
  );
};

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
    <Box component="footer" className={styles.footer}>
      <Container>
        <Grid 
          container 
          direction={isMobile ? "column" : "row"} 
          justifyContent="space-between"
          alignItems="center"
          spacing={isMobile ? 2 : 0}
          className={styles.footerContent}
        >
          <Grid item>
            <Box className={styles.socialLinks}>
              {/* Instagram Link */}
              <a 
                href="https://instagram.com/abdulllahiftikhar" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <InstagramIcon fontSize="large" />
              </a>
              
              {/* LinkedIn Link */}
              <a 
                href="https://linkedin.com/in/abdullahi-iftikhar" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <LinkedInIcon fontSize="large" />
              </a>
              
              {/* Email Display */}
              <Box className={styles.emailContainer}>
                <EmailIcon fontSize="large" />
                <Typography variant="body1" className={styles.emailText}>
                  ai868419@gmail.com
                </Typography>
              </Box>
            </Box>
          </Grid>
          
          <Grid item>
            {/* Call-to-Action Button */}
            <Button 
              component={Link} 
              to="/hire-me"
              variant="outlined" 
              size="large"
              className={styles.ctaButton}
              data-text="Let's Talk"
            >
              <Scrambler text="Let's Talk" />
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;