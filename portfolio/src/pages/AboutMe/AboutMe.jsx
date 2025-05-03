import React from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useMediaQuery,
  useTheme
} from '@mui/material';
import AnimatedElement from '../../components/AnimatedElement/AnimatedElement';
import Scrambler from '../../components/Scrambler/Scrambler';
import figmaIcon from '../../assets/images/figma.png';
import unityIcon from '../../assets/images/unity.png';
import androidIcon from '../../assets/images/android.png';
import mysqlIcon from '../../assets/images/mysql.png';
import styles from './AboutMe.module.css';

// Progress Bar component with animation
const ProgressBar = ({ skill, value, delay = 0 }) => {
  return (
    <AnimatedElement animation="slide-right" delay={delay}>
      <Box className={styles.progressBarContainer}>
        <Box className={styles.progressBarHeader}>
          <Typography variant="body1">{skill}</Typography>
          <Typography variant="body2">{value}%</Typography>
        </Box>
        <Box className={styles.progressBarWrapper}>
          <Box 
            className={styles.progressBarFill} 
            sx={{ width: `${value}%` }}
          />
        </Box>
      </Box>
    </AnimatedElement>
  );
};

// Skill Card component with animation
const SkillCard = ({ name, icon, delay = 0 }) => {
  return (
    <AnimatedElement animation="zoom" delay={delay}>
      <Box className={styles.skillCard}>
        <img src={icon} alt={name} className={styles.skillIcon} />
        <Typography variant="body2" className={styles.skillName}>
          {name}
        </Typography>
      </Box>
    </AnimatedElement>
  );
};

const AboutMe = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Skill cards data
  const skillCards = [
    { name: 'FIGMA', icon: figmaIcon },
    { name: 'UNITY', icon: unityIcon },
    { name: 'APP DEVELOPMENT', icon: androidIcon },
    { name: 'Database Administration', icon: mysqlIcon }
  ];

  // Coding skills data
  const codingSkills = [
    { skill: 'HTML', value: 80 },
    { skill: 'CSS', value: 60 },
    { skill: 'JavaScript', value: 55 },
    { skill: 'React', value: 25 },
    { skill: 'C++', value: 95 },
    { skill: 'Python', value: 85 },
    { skill: 'Java', value: 70 },
    { skill: 'SQL', value: 97 }
  ];

  // Education data
  const educationData = [
    { 
      institution: 'INFORMATION TECHNOLOGY UNIVERSITY', 
      qualification: 'BS-Computer Science', 
      year: '2027 - Present', 
      score: 'CGPA: 3.81' 
    },
    { 
      institution: 'PUNJAB GROUP OF COLLEGES', 
      qualification: 'Pre-Engineering', 
      year: '2023', 
      score: 'Marks: 975/1100' 
    },
    { 
      institution: 'UNIQUE GROUP OF INSTITUTIONS', 
      qualification: 'MATRIC-BIO', 
      year: '2021', 
      score: '92.36%' 
    }
  ];

  return (
    <Container className={styles.aboutContainer}>
      {/* About Me Section */}
      <AnimatedElement animation="fade">
        <Box className={styles.aboutSection}>
          <Typography variant="subtitle1" className={styles.sectionLabel}>
            <Scrambler text="WHO I AM" delay={100} speed={3} />
          </Typography>
          <Box className={styles.aboutContent}>
            <AnimatedElement animation="slide-up" delay={300}>
              <Typography variant="h3" className={styles.mainHeading}>
                Transforming your vision into a dynamic web experience through meticulously crafted designs, intuitive user interfaces, and robust functionality.
              </Typography>
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" delay={500}>
              <Box className={styles.aboutText}>
                <Typography variant="body1">
                  Hi there! I'm Abdullah, a web and application designer with a passion for creating exceptional digital experiences.
                  With over 2 years of experience, I have skills in designing websites and applications that are not only visually appealing but also
                  functional and user-friendly.
                </Typography>
                <Typography variant="body1">
                  I specialize in crafting bespoke websites and applications using the latest technologies and design trends,
                  including HTML5, CSS3, JavaScript, React Native, Flutter and popular content management systems like WordPress, Joomla, and Shopify.
                </Typography>
              </Box>
            </AnimatedElement>
          </Box>
        </Box>
      </AnimatedElement>

      {/* Skills Section */}
      <AnimatedElement animation="fade" delay={200}>
        <Box className={styles.skillsSection}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={2}>
              <Typography variant="subtitle1" className={styles.sectionLabel}>
                <Scrambler text="MY SKILLS" delay={300} speed={3} />
              </Typography>
            </Grid>
            <Grid item xs={12} md={10}>
              <Grid container spacing={3}>
                {skillCards.map((skill, index) => (
                  <Grid item xs={6} sm={3} key={index}>
                    <SkillCard
                      name={skill.name}
                      icon={skill.icon}
                      delay={index * 200}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </AnimatedElement>

      {/* Coding Skills Section */}
      <AnimatedElement animation="fade" delay={400}>
        <Box className={styles.codingSkillsSection}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={2}>
              <Typography variant="subtitle1" className={styles.sectionLabel}>
                <Scrambler text="CODING SKILLS" delay={500} speed={3} />
              </Typography>
            </Grid>
            <Grid item xs={12} md={10}>
              <Grid container spacing={3}>
                {codingSkills.map((skill, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <ProgressBar
                      skill={skill.skill}
                      value={skill.value}
                      delay={600 + (index * 150)}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </AnimatedElement>

      {/* Education Section */}
      <AnimatedElement animation="fade" delay={800}>
        <Box className={styles.educationSection}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={2}>
              <Typography variant="subtitle1" className={styles.sectionLabel}>
                <Scrambler text="EDUCATION" delay={900} speed={3} />
              </Typography>
            </Grid>
            <Grid item xs={12} md={10}>
              <AnimatedElement animation="slide-up" delay={1000}>
                <TableContainer component={Paper} className={styles.tableContainer}>
                  <Table className={styles.table}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Institution</TableCell>
                        <TableCell>Qualification</TableCell>
                        <TableCell>Passing Year</TableCell>
                        <TableCell>Score</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {educationData.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell>{row.institution}</TableCell>
                          <TableCell>{row.qualification}</TableCell>
                          <TableCell>{row.year}</TableCell>
                          <TableCell>{row.score}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </AnimatedElement>
            </Grid>
          </Grid>
        </Box>
      </AnimatedElement>
    </Container>
  );
};

export default AboutMe; 