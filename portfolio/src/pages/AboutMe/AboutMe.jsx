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
import ProgressBar from '../../components/shared/ProgressBar';
import SkillCard from '../../components/shared/SkillCard';
import Scrambler from '../../components/Scrambler/Scrambler';
import figmaIcon from '../../assets/images/figma.png';
import unityIcon from '../../assets/images/unity.png';
import androidIcon from '../../assets/images/android.png';
import mysqlIcon from '../../assets/images/mysql.png';
import styles from './AboutMe.module.css';

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
            WHO I AM
          </Typography>
          <Box className={styles.aboutContent}>
            <AnimatedElement animation="slide-up" delay={300}>
              <Typography variant="h3" className={styles.mainHeading}>
                <Scrambler 
                  text="Transforming your vision into a dynamic web experience through meticulously crafted designs, intuitive user interfaces, and robust functionality." 
                  delay={200}
                  speed={2}
                  active={true}
                />
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
      <Box className={styles.skillsSection}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={2}>
            <AnimatedElement animation="slide-right">
              <Typography variant="subtitle1" className={styles.sectionLabel}>
                MY SKILLS
              </Typography>
            </AnimatedElement>
          </Grid>
          <Grid item xs={12} md={10}>
            <Grid container spacing={3}>
              {skillCards.map((skill, index) => (
                <Grid item xs={6} sm={3} key={index}>
                  <AnimatedElement animation="zoom" delay={index * 200}>
                    <SkillCard
                      name={skill.name}
                      icon={skill.icon}
                      delay={index * 200}
                    />
                  </AnimatedElement>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* Coding Skills Section */}
      <Box className={styles.codingSkillsSection}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={2}>
            <AnimatedElement animation="slide-right">
              <Typography variant="subtitle1" className={styles.sectionLabel}>
                CODING SKILLS
              </Typography>
            </AnimatedElement>
          </Grid>
          <Grid item xs={12} md={10}>
            <Grid container spacing={3}>
              {codingSkills.map((skill, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <AnimatedElement animation="slide-left" delay={index * 150}>
                    <ProgressBar
                      skill={skill.skill}
                      value={skill.value}
                      delay={index * 150}
                    />
                  </AnimatedElement>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* Education Section */}
      <Box className={styles.educationSection}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={2}>
            <AnimatedElement animation="slide-right">
              <Typography variant="subtitle1" className={styles.sectionLabel}>
                EDUCATION
              </Typography>
            </AnimatedElement>
          </Grid>
          <Grid item xs={12} md={10}>
            <AnimatedElement animation="fade" delay={300}>
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
                      <TableRow key={index} className={index % 2 === 0 ? styles.evenRow : ''}>
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
    </Container>
  );
};

export default AboutMe; 