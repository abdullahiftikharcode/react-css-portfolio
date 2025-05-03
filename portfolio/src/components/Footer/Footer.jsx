import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Button, 
  Container, 
  Typography, 
  useMediaQuery,
  useTheme
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import styles from './Footer.module.css';

const Footer = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Scrambler effect function for the "Let's Talk" button
  // This is a simplified version of the effect from the original site
  const handleScramblerEffect = (e) => {
    const target = e.target;
    const originalText = target.innerText;
    const scrambleText = target.getAttribute('data-text') || originalText;
    
    let iteration = 0;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    const interval = setInterval(() => {
      target.innerText = originalText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return scrambleText[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
      
      if (iteration >= scrambleText.length) {
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 30);
  };

  return (
    <Box 
      component="footer" 
      className={styles.footer}
    >
      <Container>
        <Box className={styles.contentContainer}>
          {/* Social Media Links */}
          <Box className={styles.socialLinks}>
            <a 
              href="https://instagram.com/abdulllahiftikhar" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <InstagramIcon fontSize="large" />
            </a>
            <a 
              href="https://linkedin.com/in/abdullahi-iftikhar" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <LinkedInIcon fontSize="large" />
            </a>
            <Box className={styles.emailContainer}>
              <EmailIcon fontSize="large" />
              <Typography variant="body1" className={styles.emailText}>
                ai868419@gmail.com
              </Typography>
            </Box>
          </Box>

          {/* Let's Talk Button */}
          <Button
            variant="outlined"
            color="inherit"
            className={styles.talkButton}
            onClick={() => navigate('/hire-me')}
            onMouseOver={handleScramblerEffect}
            data-text="Let's Talk"
          >
            Let's Talk
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 